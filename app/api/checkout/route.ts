import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

// Configuração dos planos com valores em centavos (BRL)
const PLANS_CONFIG: Record<
  string,
  {
    name: string;
    description: string;
    monthlyPriceCents: number;
    annualPriceCents: number;
  }
> = {
  essencial: {
    name: "PetNexus - Plano Essencial",
    description: "Para começar a organizar: Painel do Tutor, Agenda Visual, Operação ao Vivo e PDV.",
    monthlyPriceCents: 8990, // R$ 89,90
    annualPriceCents: 86304, // R$ 863,04/ano (R$ 71,92/mês com 20% OFF)
  },
  completo: {
    name: "PetNexus - Plano Completo",
    description: "Para quem quer crescer sem complicação: Tudo liberado, Módulo Veterinário, Automações e WhatsApp Central.",
    monthlyPriceCents: 14990, // R$ 149,90
    annualPriceCents: 143904, // R$ 1.439,04/ano (R$ 119,92/mês com 20% OFF)
  },
  premium: {
    name: "PetNexus - Plano Premium (VIP Presencial)",
    description: "Atendimento VIP: Implantação presencial na região, ajuste de rotina grátis, consultoria mensal e suporte prioritário.",
    monthlyPriceCents: 19990, // R$ 199,90
    annualPriceCents: 191904, // R$ 1.919,04/ano (R$ 159,92/mês com 20% OFF)
  },
  // Aliases para compatibilidade legada
  basico: {
    name: "PetNexus - Plano Essencial",
    description: "Para começar a organizar: Painel do Tutor, Agenda Visual, Operação ao Vivo e PDV.",
    monthlyPriceCents: 8990,
    annualPriceCents: 86304,
  },
  profissional: {
    name: "PetNexus - Plano Completo",
    description: "Para quem quer crescer sem complicação: Tudo liberado, Módulo Veterinário, Automações e WhatsApp Central.",
    monthlyPriceCents: 14990,
    annualPriceCents: 143904,
  },
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      planKey,
      interval = "monthly",
      customerName,
      customerCpf,
      customerEmail,
      customerPhone,
      petShopName,
      contractAccepted,
      acceptedAt,
    } = body;

    const selectedPlan = PLANS_CONFIG[planKey?.toLowerCase()];
    if (!selectedPlan) {
      return NextResponse.json(
        { error: "Plano inválido selecionado." },
        { status: 400 }
      );
    }

    if (!process.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY.includes("placeholder")) {
      return NextResponse.json(
        {
          error: "STRIPE_SECRET_KEY não configurada. Por favor, adicione sua chave de teste do Stripe no arquivo .env.local.",
          needsKey: true,
        },
        { status: 500 }
      );
    }

    const appUrl =
      process.env.NEXT_PUBLIC_APP_URL ||
      req.nextUrl.origin ||
      "http://localhost:3000";

    const isAnnual = interval === "annual";
    const unitAmount = isAnnual
      ? selectedPlan.annualPriceCents
      : selectedPlan.monthlyPriceCents;
    const recurringInterval = isAnnual ? "year" : "month";

    // Criar a sessão Stripe Checkout com dados e aceite contratual vinculados
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card", "boleto"],
      billing_address_collection: "auto",
      customer_email: customerEmail || undefined,
      mode: "subscription",
      line_items: [
        {
          price_data: {
            currency: "brl",
            product_data: {
              name: selectedPlan.name,
              description: selectedPlan.description,
              images: [`${appUrl}/hero-real.png`],
            },
            unit_amount: unitAmount,
            recurring: {
              interval: recurringInterval,
            },
          },
          quantity: 1,
        },
      ],
      metadata: {
        planKey,
        interval,
        customerName: customerName || "Não informado",
        customerCpf: customerCpf || "Não informado",
        customerPhone: customerPhone || "Não informado",
        petShopName: petShopName || "Não informado",
        contractAccepted: contractAccepted ? "Sim (Aceito Eletronicamente)" : "Não",
        acceptedAt: acceptedAt || new Date().toISOString(),
      },
      success_url: `${appUrl}/sucesso?session_id={CHECKOUT_SESSION_ID}&plan=${planKey}&interval=${interval}&name=${encodeURIComponent(
        customerName || ""
      )}&cpf=${encodeURIComponent(customerCpf || "")}&phone=${encodeURIComponent(
        customerPhone || ""
      )}&petshop=${encodeURIComponent(petShopName || "")}`,
      cancel_url: `${appUrl}/cancelado?plan=${planKey}`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error: unknown) {
    console.error("Erro ao criar sessão Stripe Checkout:", error);
    const errorMessage = error instanceof Error ? error.message : "Erro interno ao processar pagamento.";
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}

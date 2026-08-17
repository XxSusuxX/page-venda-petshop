"use client";

import { useState } from "react";
import CheckoutModal from "./CheckoutModal";

const WHATSAPP_BASE = "https://wa.me/5544998289752?text=";

const plans = [
  {
    key: "basico",
    name: "Básico",
    monthlyPrice: "89,90",
    annualPrice: "71,92",
    annualTotal: "863,04",
    description: "Para quem está começando a organizar o pet shop.",
    popular: false,
    cta: encodeURIComponent("Olá! Tenho interesse no plano Básico do PetNexus. Podem me ajudar?"),
    limits: {
      clientes: "Até 100",
      agendamentos: "Até 150/mês",
      profissionais: "Até 3",
    },
    features: [
      { name: "Painel do Tutor", included: true },
      { name: "Agenda Visual", included: true },
      { name: "Operação Ao Vivo", included: true },
      { name: "PDV & Caixa", included: true },
      { name: "Módulo Veterinário", included: false },
      { name: "WhatsApp Central", included: false },
      { name: "Financeiro", included: true, note: "Resumo básico" },
      { name: "Pacotes de Serviço", included: false },
      { name: "Automações", included: false },
    ],
    support: "WhatsApp (48h)",
    setup: "A partir de R$ 79,90",
  },
  {
    key: "profissional",
    name: "Profissional",
    monthlyPrice: "149,90",
    annualPrice: "119,92",
    annualTotal: "1.439,04",
    description: "Para pet shops que querem crescer com eficiência.",
    popular: true,
    cta: encodeURIComponent("Olá! Tenho interesse no plano Profissional do PetNexus. Podem me ajudar?"),
    limits: {
      clientes: "Até 500",
      agendamentos: "Até 500/mês",
      profissionais: "Até 8",
    },
    features: [
      { name: "Painel do Tutor", included: true },
      { name: "Agenda Visual", included: true },
      { name: "Operação Ao Vivo", included: true },
      { name: "PDV & Caixa", included: true },
      { name: "Módulo Veterinário", included: false },
      { name: "WhatsApp Central", included: true },
      { name: "Financeiro", included: true, note: "Completo" },
      { name: "Pacotes de Serviço", included: true },
      { name: "Automações", included: false },
    ],
    support: "WhatsApp (24h)",
    setup: "A partir de R$ 79,90",
  },
  {
    key: "premium",
    name: "Premium",
    monthlyPrice: "249,90",
    annualPrice: "199,92",
    annualTotal: "2.399,04",
    description: "Para operações completas que exigem o máximo.",
    popular: false,
    cta: encodeURIComponent("Olá! Tenho interesse no plano Premium do PetNexus. Podem me ajudar?"),
    limits: {
      clientes: "Ilimitado",
      agendamentos: "Ilimitado",
      profissionais: "Ilimitado",
    },
    features: [
      { name: "Painel do Tutor", included: true },
      { name: "Agenda Visual", included: true },
      { name: "Operação Ao Vivo", included: true },
      { name: "PDV & Caixa", included: true },
      { name: "Módulo Veterinário", included: true },
      { name: "WhatsApp Central", included: true },
      { name: "Financeiro", included: true, note: "Completo + Exportação" },
      { name: "Pacotes de Serviço", included: true },
      { name: "Automações", included: true },
    ],
    support: "Prioritário (4h)",
    setup: "A partir de R$ 79,90",
  },
];

const guarantees = [
  { icon: "cancel", text: "Sem contrato de fidelidade" },
  { icon: "lock_open", text: "Cancele quando quiser" },
  { icon: "support_agent", text: "Suporte incluso em todos os planos" },
  { icon: "rocket_launch", text: "Sistema pronto em até 48h" },
];

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [selectedPlanForCheckout, setSelectedPlanForCheckout] = useState<typeof plans[0] | null>(null);

  return (
    <section id="planos" className="py-20 md:py-28 bg-surface-container-lowest/50 border-y border-hairline-border/30 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.04] blur-[150px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/[0.03] blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-5 md:px-10">

        {/* Section header */}
        <div className="text-center mb-10 md:mb-14 reveal-on-scroll">
          <span className="text-primary font-bold text-xs uppercase tracking-[0.2em] block mb-3">
            Planos & Preços
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-on-surface mb-5">
            Planos que Cabem no Seu Bolso
          </h2>
          <p className="text-on-surface-variant text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Sem surpresas. Sem contrato de fidelidade. Cancele quando quiser.
          </p>
        </div>

        {/* Annual/Monthly Toggle */}
        <div className="flex justify-center items-center gap-4 mb-10 md:mb-14 reveal-on-scroll stagger-2">
          <span className={`text-sm font-semibold transition-colors duration-200 ${!isAnnual ? "text-on-surface" : "text-on-surface-variant"}`}>
            Mensal
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            aria-label="Alternar entre mensal e anual"
            className={`relative w-14 h-7 rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 cursor-pointer ${isAnnual ? "bg-primary" : "bg-surface-container-high border border-hairline-border"
              }`}
          >
            <div
              className={`absolute top-0.5 w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-300 ${isAnnual ? "translate-x-7" : "translate-x-0.5"
                }`}
              style={{ transition: "transform 300ms cubic-bezier(0.23, 1, 0.32, 1)" }}
            />
          </button>
          <div className="flex items-center gap-2">
            <span className={`text-sm font-semibold transition-colors duration-200 ${isAnnual ? "text-on-surface" : "text-on-surface-variant"}`}>
              Anual
            </span>
            <span className="bg-primary text-on-primary text-[11px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider animate-pulse-subtle">
              −20%
            </span>
          </div>
        </div>

        {/* Annual offer banner */}
        {isAnnual && (
          <div className="max-w-3xl mx-auto mb-10 bg-primary/5 border border-primary/20 rounded-2xl p-5 text-center animate-scale-in">
            <p className="text-base font-bold text-on-surface flex items-center justify-center gap-2 flex-wrap">
              <span className="text-xl">🎉</span>
              Plano anual com <span className="text-primary">20% de desconto</span> — e a implementação{" "}
              <span className="text-primary">100% grátis!</span>
            </p>
          </div>
        )}

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`reveal-on-scroll stagger-${index + 1} relative group rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col transition-all duration-500 ${plan.popular
                  ? "animated-border-card bg-surface-container-low shadow-2xl shadow-primary/10 md:scale-105 md:z-10"
                  : "bg-surface-container border border-hairline-border/60 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/5"
                }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-on-primary text-xs font-extrabold px-5 py-1.5 rounded-full shadow-lg shadow-primary/30 uppercase tracking-wider whitespace-nowrap">
                  ⭐ Mais Popular
                </div>
              )}

              {/* Plan header */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-on-surface mb-1">{plan.name}</h3>
                <p className="text-xs text-on-surface-variant mb-4">{plan.description}</p>

                {/* Price */}
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-sm text-on-surface-variant">R$</span>
                  <span className="text-4xl md:text-5xl font-extrabold text-on-surface tabular-nums">
                    {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-sm text-on-surface-variant">/mês</span>
                </div>

                {/* Annual savings */}
                {isAnnual ? (
                  <div className="mt-2 space-y-1">
                    <p className="text-xs text-on-surface-variant/60 line-through">
                      R$ {plan.monthlyPrice}/mês
                    </p>
                    <p className="text-xs text-primary font-bold">
                      Economize R$ {(parseFloat(plan.monthlyPrice.replace(",", ".")) * 12 - parseFloat(plan.annualTotal.replace(".", "").replace(",", "."))).toFixed(2).replace(".", ",")} ao ano
                    </p>
                  </div>
                ) : (
                  <p className="text-xs text-on-surface-variant/50 mt-2">
                    Ou <span className="text-primary font-bold">R$ {plan.annualPrice}/mês</span> no anual
                  </p>
                )}
              </div>

              {/* Limits */}
              <div className="bg-surface-container-high/50 rounded-xl p-4 mb-5 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-on-surface-variant">Clientes</span>
                  <span className="font-bold text-on-surface">{plan.limits.clientes}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-on-surface-variant">Agendamentos</span>
                  <span className="font-bold text-on-surface">{plan.limits.agendamentos}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-on-surface-variant">Profissionais</span>
                  <span className="font-bold text-on-surface">{plan.limits.profissionais}</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-6 flex-1">
                {plan.features.map((feature, fi) => (
                  <div key={fi} className="flex items-center gap-2.5">
                    {feature.included ? (
                      <span className="material-symbols-outlined text-primary text-lg flex-shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    ) : (
                      <span className="material-symbols-outlined text-on-surface-variant/30 text-lg flex-shrink-0">cancel</span>
                    )}
                    <span className={`text-xs ${feature.included ? "text-on-surface" : "text-on-surface-variant/40"}`}>
                      {feature.name}
                      {feature.note && <span className="text-primary/70 ml-1">({feature.note})</span>}
                    </span>
                  </div>
                ))}
              </div>

              {/* Support & Setup */}
              <div className="border-t border-hairline-border/30 pt-4 mb-5 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-on-surface-variant">Suporte</span>
                  <span className="font-medium text-on-surface">{plan.support}</span>
                </div>
                {!isAnnual && (
                  <div className="flex justify-between text-xs">
                    <span className="text-on-surface-variant">Implementação</span>
                    <span className="font-medium text-on-surface">{plan.setup}</span>
                  </div>
                )}
                {isAnnual && (
                  <div className="flex justify-between text-xs">
                    <span className="text-on-surface-variant">Implementação</span>
                    <span className="font-bold text-primary">🎁 Grátis</span>
                  </div>
                )}
              </div>

              {/* CTA Buttons — Stripe Checkout Online + WhatsApp */}
              <div className="space-y-2.5">
                <button
                  onClick={() => setSelectedPlanForCheckout(plan)}
                  className={`w-full py-3.5 rounded-xl text-sm font-bold text-center transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.97] cursor-pointer ${plan.popular
                      ? "bg-primary text-on-primary hover:brightness-110 shadow-lg shadow-primary/25 hover:shadow-primary/40"
                      : "bg-primary text-on-primary hover:brightness-110 shadow-md shadow-primary/15"
                    }`}
                  style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)" }}
                >
                  <span className="material-symbols-outlined text-lg">credit_card</span>
                  Assinar Online
                </button>

                <a
                  href={`${WHATSAPP_BASE}${plan.cta}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl text-xs font-semibold text-center text-on-surface-variant hover:text-on-surface hover:bg-white/5 border border-hairline-border/60 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Tirar dúvidas no WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee strip */}
        <div className="mt-12 reveal-on-scroll">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {guarantees.map((g, i) => (
              <div key={i} className="flex items-center gap-2 text-on-surface-variant/70">
                <span className="material-symbols-outlined text-primary text-base" style={{ fontVariationSettings: "'FILL' 1" }}>{g.icon}</span>
                <span className="text-xs font-medium">{g.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Setup note */}
        <div className="text-center mt-6 reveal-on-scroll">
          <p className="text-xs text-on-surface-variant/50">
            * O valor da implementação pode variar a partir de R$ 79,90 conforme a complexidade do seu negócio.
            No plano anual, a implementação é gratuita.
          </p>
        </div>
      </div>

      {/* Checkout Modal with Contract terms */}
      {selectedPlanForCheckout && (
        <CheckoutModal
          isOpen={!!selectedPlanForCheckout}
          onClose={() => setSelectedPlanForCheckout(null)}
          plan={selectedPlanForCheckout}
          isAnnual={isAnnual}
        />
      )}
    </section>
  );
}

"use client";

import { useState } from "react";
import CheckoutModal from "./CheckoutModal";

const WHATSAPP_BASE = "https://wa.me/5544998289752?text=";

const plans = [
  {
    key: "essencial",
    name: "Essencial",
    monthlyPrice: "89,90",
    annualPrice: "71,92",
    annualTotal: "863,04",
    description: "Para começar a organizar.",
    popular: false,
    cta: encodeURIComponent("Olá! Tenho interesse no plano Essencial do PetNexus para começar a organizar meu pet shop. Podem me ajudar?"),
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
    key: "completo",
    name: "Completo",
    monthlyPrice: "149,90",
    annualPrice: "119,92",
    annualTotal: "1.439,04",
    description: "Para quem quer crescer sem complicação.",
    popular: true,
    cta: encodeURIComponent("Olá! Vi que o plano Completo é o mais popular e tem tudo liberado. Quero saber mais!"),
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
      { name: "Módulo Veterinário", included: true },
      { name: "WhatsApp Central", included: true },
      { name: "Financeiro", included: true, note: "Completo" },
      { name: "Pacotes de Serviço", included: true },
      { name: "Automações", included: true },
    ],
    support: "WhatsApp (24h)",
    setup: "A partir de R$ 79,90",
  },
  {
    key: "premium",
    name: "Premium",
    monthlyPrice: "199,90",
    annualPrice: "159,92",
    annualTotal: "1.919,04",
    description: "Para quem quer atendimento VIP e consultoria.",
    popular: false,
    cta: encodeURIComponent("Olá! Tenho interesse no plano Premium com suporte prioritário e consultoria do PetNexus. Podem me ajudar?"),
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
    exclusivePerks: [
      {
        icon: "tune",
        title: "Ajuste de fluxo de trabalho grátis",
        desc: "Se precisar mudar como o sistema funciona, ajustamos sem cobrar nada.",
      },
      {
        icon: "verified",
        title: "Correção de bugs e imprevistos grátis",
        desc: "Se surgir qualquer erro no dia a dia, resolvemos sem nenhum custo extra.",
      },
      {
        icon: "monitoring",
        title: "Consultoria mensal de 30 min",
        desc: "1x por mês analisamos seus números e damos dicas práticas para o seu negócio crescer.",
      },
    ],
    support: "WhatsApp Prioritário (4h)",
    setup: "GRÁTIS",
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
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.04] blur-[60px] md:blur-[150px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/[0.03] blur-[50px] md:blur-[120px] rounded-full -z-10" />

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

        {/* Recommendation banner "Não sabe qual escolher?" */}
        <div className="max-w-3xl mx-auto mb-10 bg-primary/10 border border-primary/30 rounded-2xl p-6 text-center reveal-on-scroll">
          <p className="text-lg font-bold text-on-surface mb-2">
            🏆 Não sabe qual escolher? O Completo tem TUDO por R$ 149,90
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm text-on-surface-variant">
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-primary text-base" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              Todas as funcionalidades liberadas
            </span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-primary text-base" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              Suporte em até 24h no WhatsApp
            </span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-primary text-base" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              7 dias de teste grátis
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5 max-w-6xl mx-auto items-stretch">
          {plans.map((plan, index) => {
            const isPopular = plan.popular;
            const isPremium = plan.key === "premium";

            return (
              <div
                key={index}
                className={`reveal-on-scroll stagger-${index + 1} relative group rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col transition-all duration-300 ${isPopular
                    ? "bg-surface-container border-2 border-primary shadow-2xl shadow-primary/20 hover:shadow-primary/30 md:scale-[1.04] md:z-10"
                    : isPremium
                    ? "bg-surface-container border-2 border-amber-400/80 shadow-2xl shadow-amber-500/15 hover:border-amber-400 hover:shadow-amber-500/25"
                    : "bg-surface-container border border-hairline-border/60 hover:border-primary/25 hover:shadow-lg"
                  }`}
              >
                {/* Popular badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-on-primary text-xs font-extrabold px-5 py-1.5 rounded-full shadow-lg shadow-primary/30 uppercase tracking-wider whitespace-nowrap">
                    ⭐ Mais Popular
                  </div>
                )}

                {/* Premium VIP badge */}
                {isPremium && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-black text-xs font-extrabold px-5 py-1.5 rounded-full shadow-lg shadow-amber-500/30 uppercase tracking-wider whitespace-nowrap flex items-center gap-1.5">
                    <span>👑</span> PLANO VIP
                  </div>
                )}

                {/* Plan header — Strictly aligned across all 3 cards */}
                <div className="text-center mb-6">
                  <h3 className={`text-2xl font-extrabold mb-1.5 ${isPremium ? "text-amber-300" : isPopular ? "text-primary" : "text-white"}`}>
                    {plan.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant min-h-[32px] flex items-center justify-center font-medium">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mt-3 flex items-baseline justify-center gap-1">
                    <span className="text-sm text-on-surface-variant font-medium">R$</span>
                    <span className={`text-4xl md:text-5xl font-extrabold tabular-nums ${isPremium ? "text-amber-300" : isPopular ? "text-primary" : "text-white"}`}>
                      {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-sm text-on-surface-variant font-medium">/mês</span>
                  </div>

                  {/* Annual savings / note with exact same height */}
                  <div className="h-6 mt-1 flex items-center justify-center">
                    {isAnnual ? (
                      <p className={`text-xs font-bold ${isPremium ? "text-amber-300" : "text-primary"}`}>
                        Economize R$ {(parseFloat(plan.monthlyPrice.replace(",", ".")) * 12 - parseFloat(plan.annualTotal.replace(".", "").replace(",", "."))).toFixed(2).replace(".", ",")} ao ano
                      </p>
                    ) : (
                      <p className="text-xs text-on-surface-variant/70">
                        Ou <span className={`font-bold ${isPremium ? "text-amber-300" : "text-primary"}`}>R$ {plan.annualPrice}/mês</span> no anual
                      </p>
                    )}
                  </div>
                </div>

                {/* Limits — Perfectly aligned horizontally across all 3 cards */}
                <div className="bg-surface-container-high/60 rounded-xl p-4 mb-5 space-y-2 border border-hairline-border/40">
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-on-surface-variant font-medium">Clientes</span>
                    <span className="font-bold text-white">{plan.limits.clientes}</span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-on-surface-variant font-medium">Agendamentos</span>
                    <span className="font-bold text-white">{plan.limits.agendamentos}</span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-on-surface-variant font-medium">Profissionais</span>
                    <span className="font-bold text-white">{plan.limits.profissionais}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-5 flex-1">
                  {plan.features.map((feature, fi) => (
                    <div key={fi} className="flex items-center gap-2.5">
                      {feature.included ? (
                        <span className={`material-symbols-outlined text-lg flex-shrink-0 ${isPremium ? "text-amber-400" : "text-primary"}`} style={{ fontVariationSettings: "'FILL' 1" }}>
                          check_circle
                        </span>
                      ) : (
                        <span className="material-symbols-outlined text-on-surface-variant/30 text-lg flex-shrink-0">cancel</span>
                      )}
                      <span className={`text-xs sm:text-sm ${feature.included ? "text-on-surface font-medium" : "text-on-surface-variant/40"}`}>
                        {feature.name}
                        {feature.note && <span className={`${isPremium ? "text-amber-300 font-semibold" : "text-primary font-semibold"} ml-1`}>({feature.note})</span>}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Exclusive VIP Perks for Premium */}
                {plan.exclusivePerks && (
                  <div className="bg-surface-container-lowest/90 border-2 border-amber-400/40 rounded-2xl p-4 mb-5 space-y-3.5 text-left shadow-lg">
                    <div className="flex items-center gap-2 text-amber-300 font-extrabold text-xs sm:text-sm uppercase tracking-wider">
                      <span className="text-base">👑</span>
                      DIFERENCIAIS EXCLUSIVOS VIP
                    </div>
                    <div className="space-y-3">
                      {plan.exclusivePerks.map((perk, pi) => (
                        <div key={pi} className="flex items-start gap-2.5">
                          <span className="material-symbols-outlined text-amber-400 text-lg flex-shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
                            {perk.icon}
                          </span>
                          <div>
                            <p className="text-xs sm:text-sm font-bold text-white leading-snug">{perk.title}</p>
                            <p className="text-xs text-zinc-300 leading-relaxed mt-0.5">{perk.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Support & Setup */}
                <div className="border-t border-hairline-border/30 pt-4 mb-5 space-y-2">
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-on-surface-variant font-medium">Suporte</span>
                    <span className={`font-semibold ${isPremium ? "text-amber-300" : "text-white"}`}>{plan.support}</span>
                  </div>
                  {!isAnnual && (
                    <div className="flex justify-between text-xs sm:text-sm">
                      <span className="text-on-surface-variant font-medium">Implementação</span>
                      {isPremium ? (
                        <span className="font-bold text-amber-300 flex items-center gap-1">
                          <span>👑</span> GRÁTIS
                        </span>
                      ) : plan.setup === "GRÁTIS" ? (
                        <span className="font-bold text-primary flex items-center gap-1">
                          <span>🎁</span> GRÁTIS
                        </span>
                      ) : (
                        <span className="font-medium text-white">{plan.setup}</span>
                      )}
                    </div>
                  )}
                  {isAnnual && (
                    <div className="flex justify-between text-xs sm:text-sm">
                      <span className="text-on-surface-variant font-medium">Implementação</span>
                      <span className={`font-bold flex items-center gap-1 ${isPremium ? "text-amber-300" : "text-primary"}`}>
                        {isPremium ? "👑 GRÁTIS" : "🎁 Grátis"}
                      </span>
                    </div>
                  )}
                </div>

                {/* CTA Buttons — Stripe Checkout Online + WhatsApp */}
                <div className="space-y-2.5">
                  <button
                    onClick={() => setSelectedPlanForCheckout(plan)}
                    className={`w-full py-3.5 rounded-xl text-sm font-bold text-center transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.97] cursor-pointer ${isPopular
                        ? "bg-primary text-on-primary hover:brightness-110 shadow-lg shadow-primary/25 hover:shadow-primary/40"
                        : isPremium
                        ? "bg-transparent border-2 border-amber-400 text-amber-300 hover:bg-amber-400 hover:text-black shadow-sm"
                        : "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-on-primary"
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
                    className={`w-full py-2.5 rounded-xl text-xs font-semibold text-center transition-all flex items-center justify-center gap-2 cursor-pointer ${isPremium
                        ? "text-amber-300/90 hover:text-amber-200 hover:bg-amber-400/10 border border-amber-400/30"
                        : "text-on-surface-variant hover:text-on-surface hover:bg-white/5 border border-hairline-border/60"
                      }`}
                  >
                    <svg className={`w-3.5 h-3.5 ${isPremium ? "text-amber-400" : "text-primary"}`} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Tirar dúvidas no WhatsApp
                  </a>
                </div>
              </div>
            );
          })}
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

        {/* 7 Dias de Garantia Incondicional Banner */}
        <div className="mt-10 max-w-2xl mx-auto bg-primary/5 border border-primary/20 rounded-2xl p-6 text-center reveal-on-scroll">
          <span className="material-symbols-outlined text-4xl text-primary mb-2 block" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
          <h3 className="text-lg font-bold text-on-surface mb-2">7 dias de garantia incondicional</h3>
          <p className="text-sm text-on-surface-variant">
            Não gostou? Devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.
          </p>
        </div>

        {/* Setup note */}
        <div className="text-center mt-6 reveal-on-scroll">
          <p className="text-xs text-on-surface-variant/50">
            * Implementação gratuita no plano Premium e em todos os planos anuais. No plano mensal Essencial e Completo, a partir de R$ 79,90.
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

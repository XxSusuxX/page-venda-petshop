"use client";

import { useState } from "react";

const adminFeatures = [
  { icon: "calendar_month", title: "Agenda Visual", desc: "Visão de mês, semana e dia. Nunca mais esqueça um agendamento." },
  { icon: "monitor_heart", title: "Operação Ao Vivo", desc: "Controle cada pet: recebido → banho → secando → pronto → entregue." },
  { icon: "point_of_sale", title: "PDV & Caixa", desc: "Vendas avulsas, fechamento de caixa e controle financeiro integrado." },
  { icon: "folder_shared", title: "Gestão Completa", desc: "Clientes, pets, prontuários e histórico em um só lugar." },
  { icon: "stethoscope", title: "Módulo Veterinário", desc: "Prontuários clínicos, vacinas e consultas integradas ao sistema." },
  { icon: "bar_chart", title: "Financeiro & Relatórios", desc: "Saiba exatamente quanto entra e sai do seu negócio." },
  { icon: "chat", title: "WhatsApp Central", desc: "Mensagens automáticas: confirmação, lembrete, pet pronto." },
  { icon: "loyalty", title: "Pacotes de Serviço", desc: "\"5 banhos por R$ X\" — fidelização automática dos seus clientes." },
  { icon: "groups", title: "Escala da Equipe", desc: "Gerencie sua equipe e horários com facilidade." },
  { icon: "bolt", title: "Automações", desc: "Automatize tarefas repetitivas e ganhe tempo para o que importa." },
];

const tutorFeatures = [
  {
    icon: "link",
    title: "Link Exclusivo & Personalizado",
    desc: "O tutor recebe um link único da sua loja para acessar o portal sem complicações de senha.",
  },
  {
    icon: "visibility",
    title: "Status da Operação em Tempo Real",
    desc: "Acompanha cada etapa do banho e tosa em tempo real direto pelo celular, sem precisar ligar.",
  },
  {
    icon: "history",
    title: "Histórico Completo de Saúde & Estética",
    desc: "Acesso a todos os serviços anteriores, registros de vacinas e prontuários do pet em um só lugar.",
  },
  {
    icon: "event_available",
    title: "Agendamento Online 24 Horas",
    desc: "Agenda novos banhos, consultas ou procedimentos a qualquer momento, 24 horas por dia.",
  },
  {
    icon: "notifications_active",
    title: "Notificações Automáticas no WhatsApp",
    desc: "Avisos instantâneos quando o pet é recebido, quando está pronto e lembretes de agendamento.",
  },
  {
    icon: "card_giftcard",
    title: "Clube de Pacotes & Fidelidade",
    desc: "Visualiza saldo de créditos de pacotes e benefícios acumulados de forma clara e transparente.",
  },
];

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState<"admin" | "tutor">("admin");

  return (
    <section id="funcionalidades" className="py-20 md:py-28 bg-surface-container-lowest/50 border-y border-hairline-border/30 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/[0.03] blur-[60px] md:blur-[150px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-primary/[0.02] blur-[80px] rounded-full -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-14 reveal-on-scroll">
          <span className="text-primary font-bold text-xs uppercase tracking-[0.2em] block mb-3">
            Funcionalidades
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-on-surface mb-5">
            Tudo que seu pet shop precisa
          </h2>
          <p className="text-on-surface-variant text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Duas experiências em um único sistema: potência total para sua gestão e uma experiência incrível para seu cliente.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10 md:mb-14 reveal-on-scroll stagger-2">
          <div className="inline-flex bg-surface-container border border-hairline-border rounded-2xl p-1.5 gap-1">
            <button
              onClick={() => setActiveTab("admin")}
              className={`px-6 md:px-8 py-3 rounded-xl text-sm font-bold flex items-center gap-2 press-scale transition-all cursor-pointer ${
                activeTab === "admin"
                  ? "bg-primary text-on-primary shadow-lg shadow-primary/25"
                  : "text-on-surface-variant hover:text-on-surface hover:bg-white/5"
              }`}
              style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)", transitionDuration: "200ms" }}
            >
              <span className="material-symbols-outlined text-lg">admin_panel_settings</span>
              Para o Pet Shop
            </button>
            <button
              onClick={() => setActiveTab("tutor")}
              className={`px-6 md:px-8 py-3 rounded-xl text-sm font-bold flex items-center gap-2 active:scale-[0.97] transition-all cursor-pointer ${
                activeTab === "tutor"
                  ? "bg-primary text-on-primary shadow-lg shadow-primary/25"
                  : "text-on-surface-variant hover:text-on-surface hover:bg-white/5"
              }`}
              style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)", transitionDuration: "200ms" }}
            >
              <span className="material-symbols-outlined text-lg">person</span>
              Para o Tutor do Pet
            </button>
          </div>
        </div>

        {/* Admin Features Grid */}
        <div className={`transition-all duration-500 ${activeTab === "admin" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 hidden"}`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-5">
            {adminFeatures.map((feature, i) => (
              <div
                key={i}
                className={`reveal-on-scroll stagger-${Math.min(i + 1, 6)} group bg-surface-container border border-hairline-border/60 rounded-2xl p-5 md:p-6 hover:border-primary/30 hover:bg-surface-container-high/50 transition-all duration-300`}
              >
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:scale-110 group-hover:bg-primary/15 transition-all duration-300">
                  <span className="material-symbols-outlined text-xl">{feature.icon}</span>
                </div>
                <h3 className="font-bold text-sm text-on-surface mb-1.5">{feature.title}</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tutor Features Grid */}
        <div className={`transition-all duration-500 ${activeTab === "tutor" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 hidden"}`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto">
            {tutorFeatures.map((feature, i) => (
              <div
                key={i}
                className={`reveal-on-scroll stagger-${Math.min(i + 1, 6)} group bg-surface-container border border-hairline-border/60 hover:border-primary/35 hover:bg-surface-container-high/60 rounded-2xl md:rounded-3xl p-6 md:p-7 flex flex-col gap-4 transition-all duration-300 shadow-lg shadow-black/20 hover:shadow-primary/5`}
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {feature.icon}
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-base text-on-surface group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Differentiator callout */}
          <div className="text-center mt-10 md:mt-14">
            <div className="inline-flex items-center gap-3 bg-primary/10 border border-primary/25 rounded-full px-6 md:px-8 py-3.5 shadow-lg shadow-primary/5">
              <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
              <p className="text-sm sm:text-base font-semibold text-on-surface">
                Seu cliente vira fã. E <span className="text-primary font-bold">cliente fã indica seu pet shop.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

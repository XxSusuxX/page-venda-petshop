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
  { icon: "link", title: "Link Exclusivo", desc: "O tutor recebe um link só dele para acessar o sistema." },
  { icon: "visibility", title: "Status em Tempo Real", desc: "Acompanha cada etapa do serviço sem precisar ligar." },
  { icon: "history", title: "Histórico Completo", desc: "Todo o histórico de serviços e saúde do pet em um lugar." },
  { icon: "event_available", title: "Agendamento Online", desc: "Agenda novo banho ou consulta 24h, sem ligar." },
  { icon: "notifications_active", title: "Notificações Automáticas", desc: "Pet pronto? Agendamento confirmado? O tutor sabe na hora." },
  { icon: "card_giftcard", title: "Pacotes de Fidelidade", desc: "Visualiza e usa créditos de pacotes com facilidade." },
];

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState<"admin" | "tutor">("admin");

  return (
    <section id="funcionalidades" className="py-20 md:py-28 bg-surface-container-lowest/50 border-y border-hairline-border/30 relative overflow-hidden" style={{ contain: 'paint' }}>
      {/* Background */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/[0.03] blur-[150px] rounded-full -z-10" />

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
            Duas experiências em um único sistema: potência total para você e uma experiência incrível para seu cliente.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10 md:mb-14 reveal-on-scroll stagger-2">
          <div className="inline-flex bg-surface-container border border-hairline-border rounded-2xl p-1.5 gap-1">
            <button
              onClick={() => setActiveTab("admin")}
              className={`px-6 md:px-8 py-3 rounded-xl text-sm font-bold flex items-center gap-2 press-scale transition-all ${
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
              className={`px-6 md:px-8 py-3 rounded-xl text-sm font-bold flex items-center gap-2 active:scale-[0.97] transition-all ${
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 max-w-4xl mx-auto">
            {/* Tutor mockup image on left for large screens */}
            <div className="hidden lg:flex items-center justify-center relative group row-span-3">
              <div className="absolute -inset-4 bg-primary/[0.08] blur-[50px] rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-700" />
              <div className="relative max-w-[280px] rounded-3xl overflow-hidden border border-primary/15 shadow-2xl shadow-black/40 mockup-hover">
                <img
                  src="/pet3.png"
                  alt="Painel do Tutor PetNexus — status ao vivo e timeline do atendimento"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Feature cards */}
            {tutorFeatures.map((feature, i) => (
              <div
                key={i}
                className={`reveal-on-scroll stagger-${Math.min(i + 1, 6)} group bg-surface-container border border-hairline-border/60 rounded-2xl p-5 md:p-6 hover:border-primary/30 hover:bg-surface-container-high/50 transition-all duration-300`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0 group-hover:scale-110 group-hover:bg-primary/15 transition-all duration-300">
                    <span className="material-symbols-outlined text-xl">{feature.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-on-surface mb-1">{feature.title}</h3>
                    <p className="text-xs text-on-surface-variant leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Differentiator callout */}
          <div className="text-center mt-10">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3">
              <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
              <p className="text-sm font-semibold text-on-surface">
                Seu cliente vira fã. E <span className="text-primary">cliente fã indica.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

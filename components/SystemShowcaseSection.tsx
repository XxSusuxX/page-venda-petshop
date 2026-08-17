"use client";

import { useState, useRef, useEffect, useCallback } from "react";

const DEMO_URL = "https://white-label-petshop.vercel.app/";
const WHATSAPP_URL =
  "https://wa.me/5544998289752?text=Ol%C3%A1!%20Vi%20as%20telas%20do%20PetNexus%20e%20quero%20saber%20mais!";

const screens = [
  {
    id: "tutor-panel",
    tab: "Painel do Tutor",
    icon: "person_celebrate",
    label: "Exclusivo no mercado",
    labelColor: "text-primary",
    title: "O Tutor Acompanha o Pet em Tempo Real",
    subtitle: "Sem precisar ligar. Sem ansiedade.",
    description:
      "O Painel do Tutor é o nosso diferencial exclusivo. Mostra exatamente em que etapa o pet está: Coletado, Em Atendimento, Finalizado ou Saindo para Entrega — com timeline ao vivo, progresso do serviço e botão de câmera ao vivo. Isso transforma clientes comuns em fãs.",
    image: "/pet1.png",
    badges: [
      { icon: "timeline", text: "Timeline interativa por etapa" },
      { icon: "videocam", text: "Câmera ao vivo do atendimento" },
      { icon: "chat", isWhatsApp: true, text: "Contato com a unidade pelo app" },
      { icon: "notifications_active", text: "Notificações automáticas" },
    ],
    accentFrom: "rgba(78,222,163,0.2)",
    accentTo: "rgba(78,222,163,0.03)",
    floatingBadge: { icon: "monitor_heart", text: "Status ao Vivo", sub: "Em tempo real" },
    url: "app.petnexus.com.br/tutor",
  },
  {
    id: "operations",
    tab: "Operação ao Vivo",
    icon: "view_kanban",
    label: "Kanban de serviços",
    labelColor: "text-violet-400",
    title: "Visão Total da Operação em Andamento",
    subtitle: "Quem está aguardando, quem já está pronto.",
    description:
      "O Painel de Operações organiza todos os serviços do dia em colunas Kanban: Aguardando, Em Atendimento, Pronto para Busca e Em Rota. Cada pet tem foto, nome, tutor, serviço e timer. Inicie atendimentos e gerencie rotas de entrega sem sair da tela.",
    image: "/pet2.png",
    badges: [
      { icon: "view_kanban", text: "Kanban em tempo real" },
      { icon: "timer", text: "Timer por atendimento" },
      { icon: "local_shipping", text: "Gerenciamento de rotas" },
      { icon: "play_circle", text: "Iniciar atendimento 1 clique" },
    ],
    accentFrom: "rgba(139,92,246,0.18)",
    accentTo: "rgba(139,92,246,0.03)",
    floatingBadge: { icon: "view_kanban", text: "Kanban Ao Vivo", sub: "4 colunas de status" },
    url: "app.petnexus.com.br/operacoes",
  },
  {
    id: "pets",
    tab: "Gestão de Pets",
    icon: "pets",
    label: "Prontuário digital",
    labelColor: "text-blue-400",
    title: "Ficha Completa de Cada Pet",
    subtitle: "Raça, peso, saúde, histórico — tudo no lugar certo.",
    description:
      "Cada pet tem sua ficha digital completa: raça, pelagem, peso, saúde, status atual e histórico de serviços. O tutor visualiza e agenda diretamente pelo painel. Sem papelada, sem perda de informação.",
    image: "/pet4.png",
    badges: [
      { icon: "folder_shared", text: "Ficha digital completa" },
      { icon: "health_and_safety", text: "Histórico de saúde" },
      { icon: "edit_calendar", text: "Agendamento integrado" },
      { icon: "badge", text: "Status Em Casa / Em Atendimento" },
    ],
    accentFrom: "rgba(59,130,246,0.18)",
    accentTo: "rgba(59,130,246,0.03)",
    floatingBadge: { icon: "pets", text: "Meus Pets", sub: "Kira & Mimi" },
    url: "app.petnexus.com.br/pets",
  },
  {
    id: "scheduling",
    tab: "Agendamento",
    icon: "calendar_month",
    label: "Self-service 24h",
    labelColor: "text-emerald-400",
    title: "O Tutor Agenda em 3 Cliques",
    subtitle: "Sem ligação. Disponível 24 horas por dia.",
    description:
      "O calendário de agendamento é visual, intuitivo e mostra apenas horários realmente disponíveis. O tutor escolhe o pet, o serviço, a data e o horário — em segundos. Sua agenda nunca mais vai ter conflito ou ligação desnecessária.",
    image: "/pet5.png",
    badges: [
      { icon: "touch_app", text: "3 cliques para agendar" },
      { icon: "event_available", text: "Apenas horários disponíveis" },
      { icon: "check_circle", text: "Confirmação automática" },
      { icon: "schedule", text: "Fluxo guiado passo a passo" },
    ],
    accentFrom: "rgba(16,185,129,0.18)",
    accentTo: "rgba(16,185,129,0.03)",
    floatingBadge: { icon: "calendar_month", text: "Agendamento", sub: "Passo 4 de 5" },
    url: "app.petnexus.com.br/agendar",
  },
  {
    id: "history",
    tab: "Histórico",
    icon: "history",
    label: "Transparência total",
    labelColor: "text-amber-400",
    title: "Histórico Completo de Atendimentos",
    subtitle: "Cada serviço registrado, filtrado, reagendável.",
    description:
      "Todos os atendimentos ficam registrados com data, serviço, valor, status e opção de reagendar com um clique. Filtros por pet e por status (Todos, Concluídos, Cancelados). Isso gera confiança, fidelização e reduz suporte.",
    image: "/pet6.png",
    badges: [
      { icon: "receipt_long", text: "Registro completo por atendimento" },
      { icon: "replay", text: "Reagendamento com 1 clique" },
      { icon: "filter_list", text: "Filtros avançados por pet e status" },
      { icon: "monetization_on", text: "Valor total por serviço" },
    ],
    accentFrom: "rgba(245,158,11,0.18)",
    accentTo: "rgba(245,158,11,0.03)",
    floatingBadge: { icon: "history", text: "Histórico", sub: "6 atendimentos" },
    url: "app.petnexus.com.br/historico",
  },
];

export default function SystemShowcaseSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const isMouseDownRef = useRef(false);

  const active = screens[activeTab];

  const nextSlide = useCallback(() => {
    setActiveTab((prev) => (prev + 1) % screens.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveTab((prev) => (prev - 1 + screens.length) % screens.length);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    startXRef.current = e.touches[0].clientX;
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!startXRef.current) return;
    const diff = e.touches[0].clientX - startXRef.current;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    if (dragOffset < -50) {
      nextSlide();
    } else if (dragOffset > 50) {
      prevSlide();
    }
    setDragOffset(0);
    setIsDragging(false);
    startXRef.current = 0;
  };

  // Mouse Drag Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    isMouseDownRef.current = true;
    startXRef.current = e.clientX;
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDownRef.current) return;
    const diff = e.clientX - startXRef.current;
    setDragOffset(diff);
  };

  const handleMouseUp = () => {
    if (!isMouseDownRef.current) return;
    if (dragOffset < -50) {
      nextSlide();
    } else if (dragOffset > 50) {
      prevSlide();
    }
    setDragOffset(0);
    setIsDragging(false);
    isMouseDownRef.current = false;
    startXRef.current = 0;
  };

  return (
    <section className="py-20 md:py-28 relative overflow-hidden select-none">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-primary/[0.03] blur-[200px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/[0.02] blur-[150px] rounded-full -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Section header */}
        <div className="text-center mb-10 reveal-on-scroll">
          <span className="text-primary font-bold text-xs uppercase tracking-[0.2em] block mb-3">
            O Sistema Por Dentro
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-on-surface mb-5">
            Telas Reais.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-300">
              Zero Mockup.
            </span>
          </h2>
          <p className="text-on-surface-variant text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Veja exatamente o que o seu pet shop e os tutores vão usar todos os dias.
          </p>
        </div>

        {/* Tab navigation */}
        <div className="flex justify-center mb-8 reveal-on-scroll stagger-2 overflow-x-auto no-scrollbar pb-2">
          <div className="inline-flex bg-surface-container border border-hairline-border/60 rounded-2xl p-1.5 gap-1">
            {screens.map((screen, i) => (
              <button
                key={screen.id}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2 px-4 md:px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold whitespace-nowrap transition-all active:scale-[0.97] cursor-pointer ${
                  activeTab === i
                    ? "bg-primary text-on-primary shadow-lg shadow-primary/25"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-white/5"
                }`}
                style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)", transitionDuration: "200ms" }}
              >
                <span className="material-symbols-outlined text-base">{screen.icon}</span>
                <span className="hidden sm:inline">{screen.tab}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Swipe Affordance / Instructions */}
        <div className="flex items-center justify-center gap-2 mb-6 text-on-surface-variant/60 text-xs font-medium reveal-on-scroll">
          <span className="material-symbols-outlined text-sm animate-pulse-subtle">swipe</span>
          <span>Deslize para o lado ou use as setas para navegar</span>
        </div>

        {/* Content area with Swipe / Drag */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center touch-pan-y cursor-grab active:cursor-grabbing"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {/* Left: Screenshot Frame */}
          <div
            className="reveal-from-left relative group order-2 lg:order-1 transition-transform duration-200"
            style={{
              transform: isDragging ? `translateX(${dragOffset * 0.4}px)` : "translateX(0px)",
            }}
          >
            {/* Glow */}
            <div
              className="absolute -inset-8 blur-[80px] rounded-full opacity-60 group-hover:opacity-80 transition-opacity duration-700 -z-10 pointer-events-none"
              style={{ background: `radial-gradient(ellipse, ${active.accentFrom} 0%, ${active.accentTo} 100%)` }}
            />

            {/* Browser frame with constrained height for perfect layout */}
            <div className="rounded-2xl md:rounded-3xl overflow-hidden border border-primary/15 shadow-2xl shadow-black/50 mockup-hover bg-surface-container-low relative">
              {/* Browser chrome */}
              <div className="bg-surface-container-low border-b border-hairline-border/30 px-4 py-2.5 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-warning-amber/60" />
                  <div className="w-3 h-3 rounded-full bg-primary/60" />
                </div>
                <div className="flex-1 mx-4 bg-surface-container-high rounded-md px-3 py-1 text-xs text-on-surface-variant/50 font-mono truncate">
                  {active.url}
                </div>
                <div className="flex items-center gap-1.5 bg-primary/10 border border-primary/20 rounded-full px-2.5 py-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-subtle" />
                  <span className="text-[10px] font-bold text-primary">Ao Vivo</span>
                </div>
              </div>

              {/* Image viewport */}
              <div className="h-[280px] sm:h-[360px] md:h-[420px] bg-surface-container-lowest flex items-center justify-center p-2 sm:p-4 overflow-hidden relative">
                <img
                  key={active.image}
                  src={active.image}
                  alt={active.title}
                  draggable={false}
                  className="max-h-full max-w-full w-auto h-auto object-contain rounded-lg shadow-md animate-fade-in pointer-events-none"
                  loading="lazy"
                />

                {/* Left/Right Navigation Arrows overlay on frame */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevSlide();
                  }}
                  aria-label="Slide anterior"
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-matte-canvas/80 border border-hairline-border/70 text-on-surface hover:text-primary hover:border-primary/40 hover:bg-matte-canvas flex items-center justify-center shadow-lg backdrop-blur-md transition-all active:scale-90 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-xl">chevron_left</span>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextSlide();
                  }}
                  aria-label="Próximo slide"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-matte-canvas/80 border border-hairline-border/70 text-on-surface hover:text-primary hover:border-primary/40 hover:bg-matte-canvas flex items-center justify-center shadow-lg backdrop-blur-md transition-all active:scale-90 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-xl">chevron_right</span>
                </button>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 bg-surface-container-low border border-primary/20 rounded-2xl px-4 py-3 shadow-xl shadow-black/40 backdrop-blur-md">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {active.floatingBadge.icon}
                  </span>
                </div>
                <div>
                  <p className="text-[10px] text-on-surface-variant uppercase tracking-wider">{active.floatingBadge.sub}</p>
                  <p className="text-xs font-bold text-on-surface">{active.floatingBadge.text}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Copy */}
          <div className="order-1 lg:order-2 space-y-6">
            {/* Label */}
            <div className="reveal-on-scroll">
              <span className={`text-xs font-bold uppercase tracking-widest ${active.labelColor}`}>
                {active.label}
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-on-surface mt-2 mb-2 leading-tight">
                {active.title}
              </h3>
              <p className="text-primary font-semibold text-sm md:text-base">{active.subtitle}</p>
            </div>

            {/* Description */}
            <p className="text-on-surface-variant leading-relaxed text-sm md:text-base reveal-on-scroll stagger-2">
              {active.description}
            </p>

            {/* Feature badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 reveal-on-scroll stagger-3">
              {active.badges.map((badge, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-surface-container border border-hairline-border/60 rounded-xl p-3 hover:border-primary/25 hover:bg-surface-container-high/50 transition-all duration-200"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    {badge.isWhatsApp ? (
                      <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    ) : (
                      <span className="material-symbols-outlined text-primary text-base">{badge.icon}</span>
                    )}
                  </div>
                  <span className="text-xs font-medium text-on-surface leading-tight">{badge.text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1 reveal-on-scroll stagger-4">
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary font-bold text-sm px-6 py-3.5 rounded-xl hover:brightness-110 hover:scale-[1.02] active:scale-[0.97] transition-all shadow-lg shadow-primary/20 cursor-pointer"
                style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)", transitionDuration: "200ms" }}
              >
                <span className="material-symbols-outlined text-lg">open_in_new</span>
                Testar ao Vivo
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-hairline-border/70 text-on-surface-variant font-semibold text-sm px-6 py-3.5 rounded-xl hover:bg-white/5 hover:border-primary/30 hover:text-on-surface active:scale-[0.97] transition-all cursor-pointer"
                style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)", transitionDuration: "200ms" }}
              >
                <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Falar com Consultor
              </a>
            </div>
          </div>
        </div>

        {/* Screen navigation dots + Previous/Next controls */}
        <div className="flex items-center justify-center gap-4 mt-12 md:mt-16 reveal-on-scroll">
          <button
            onClick={prevSlide}
            aria-label="Slide anterior"
            className="w-8 h-8 rounded-full bg-surface-container border border-hairline-border/60 hover:border-primary/40 hover:text-primary flex items-center justify-center text-on-surface-variant transition-all active:scale-90 cursor-pointer"
          >
            <span className="material-symbols-outlined text-base">chevron_left</span>
          </button>

          <div className="flex gap-2">
            {screens.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  activeTab === i ? "w-8 h-2 bg-primary" : "w-2 h-2 bg-hairline-border hover:bg-on-surface-variant"
                }`}
                style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)" }}
                aria-label={`Ver ${screens[i].tab}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            aria-label="Próximo slide"
            className="w-8 h-8 rounded-full bg-surface-container border border-hairline-border/60 hover:border-primary/40 hover:text-primary flex items-center justify-center text-on-surface-variant transition-all active:scale-90 cursor-pointer"
          >
            <span className="material-symbols-outlined text-base">chevron_right</span>
          </button>
        </div>
      </div>
    </section>
  );
}

const DEMO_URL = "https://white-label-petshop.vercel.app/";

const highlights = [
  {
    icon: "dashboard",
    title: "Sistema completo e bonito",
    description: "Agenda, operação, financeiro, WhatsApp e muito mais — tudo em um painel intuitivo e moderno.",
    highlight: false,
  },
  {
    icon: "person_celebrate",
    title: "Seu cliente tem acesso próprio",
    description: "O tutor do pet acompanha tudo pelo celular: status ao vivo, histórico, agendamentos e pacotes de fidelidade.",
    highlight: true,
  },
  {
    icon: "rocket_launch",
    title: "Pronto para usar em 48h",
    description: "Nós configuramos tudo para você: serviços, equipe, horários e visual. Inclui treinamento por vídeo-chamada.",
    highlight: false,
  },
];

export default function SolutionSection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/[0.04] blur-[150px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/[0.03] blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Section header */}
        <div className="text-center mb-14 md:mb-20 reveal-on-scroll">
          <span className="text-primary font-bold text-xs uppercase tracking-[0.2em] block mb-3">
            A Solução
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-on-surface mb-5">
            Conheça o <span className="text-primary">PetNexus</span>
          </h2>
          <p className="text-on-surface-variant text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            O sistema de gestão mais completo, moderno e fácil de usar para pet shops no Brasil.
            Tudo que você precisa para organizar, fidelizar e crescer.
          </p>
        </div>

        {/* Content: Visual + Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual — Solution Mockup */}
          <div className="reveal-from-left relative group order-2 lg:order-1">
            <div className="absolute -inset-6 bg-primary/[0.08] blur-[60px] rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-700" />
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-primary/15 shadow-2xl shadow-black/40 mockup-hover">
              <img
                src="/pet1.png"
                alt="Painel do Tutor PetNexus — status do pet em tempo real com timeline interativa"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-surface-container-low/90 backdrop-blur-md border border-primary/20 rounded-xl px-4 py-2.5 shadow-lg">
                <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                <div>
                  <p className="text-[11px] font-bold text-on-surface">Painel do Tutor</p>
                  <p className="text-[10px] text-on-surface-variant">Exclusivo no mercado</p>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-5 order-1 lg:order-2">
            {highlights.map((item, index) => (
              <div
                key={index}
                className={`reveal-on-scroll stagger-${index + 1} group relative p-6 md:p-7 rounded-2xl border transition-all duration-500 ${
                  item.highlight
                    ? "bg-primary/5 border-primary/25 hover:border-primary/40 shadow-lg shadow-primary/5"
                    : "bg-surface-container border-hairline-border/60 hover:border-primary/20"
                }`}
              >
                {item.highlight && (
                  <div className="absolute -top-3 right-6 bg-primary text-on-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Diferencial exclusivo
                  </div>
                )}
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                    item.highlight ? "bg-primary/15 border border-primary/30" : "bg-primary/10 border border-primary/15"
                  }`}>
                    <span className="material-symbols-outlined text-primary text-2xl" style={item.highlight ? { fontVariationSettings: "'FILL' 1" } : undefined}>
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-on-surface mb-1.5">{item.title}</h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* CTA */}
            <div className="pt-2 reveal-on-scroll stagger-4">
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary/10 border border-primary/25 text-primary font-bold text-sm px-7 py-3.5 rounded-xl hover:bg-primary/15 hover:border-primary/40 active:scale-[0.97] transition-all"
                style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)", transitionDuration: "200ms" }}
              >
                <span className="material-symbols-outlined text-lg">visibility</span>
                Ver o Sistema Funcionando
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

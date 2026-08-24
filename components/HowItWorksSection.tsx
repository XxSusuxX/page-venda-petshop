const WHATSAPP_URL =
  "https://wa.me/5544998289752?text=Ol%C3%A1!%20Quero%20come%C3%A7ar%20com%20o%20PetNexus.%20Podem%20me%20ajudar%3F";

const steps = [
  {
    number: "01",
    icon: "shopping_cart",
    title: "Escolha seu plano",
    description: "Selecione o plano ideal para o tamanho do seu pet shop. Sem contrato de fidelidade — cancele quando quiser.",
  },
  {
    number: "02",
    icon: "build",
    title: "Nós configuramos tudo",
    description: "Cadastramos seus serviços, equipe, horários e personalizamos seu sistema. Inclui treinamento por vídeo-chamada.",
  },
  {
    number: "03",
    icon: "rocket_launch",
    title: "Pronto! Comece a usar",
    description: "Em até 48h seu pet shop estará rodando no PetNexus. Seus clientes já podem acessar o Painel do Tutor.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/[0.03] blur-[60px] md:blur-[150px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Section header */}
        <div className="text-center mb-14 md:mb-20 reveal-on-scroll">
          <span className="text-primary font-bold text-xs uppercase tracking-[0.2em] block mb-3">
            Como Funciona
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-on-surface mb-5">
            Comece em <span className="text-primary">3 Passos</span> Simples
          </h2>
          <p className="text-on-surface-variant text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Do primeiro contato ao sistema funcionando: rápido, sem complicação.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 max-w-5xl mx-auto relative">
          {/* Connection line (desktop) — must be behind circles */}
          <div className="hidden md:block absolute top-[46px] left-[20%] right-[20%] h-[2px] bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 -z-10" />

          {steps.map((step, i) => (
            <div key={i} className={`reveal-on-scroll stagger-${i + 1} relative z-10 group text-center`}>
              {/* Step number circle */}
              <div className="relative mx-auto mb-6 w-20 h-20 md:w-24 md:h-24">
                <div className="absolute inset-0 rounded-full bg-primary/10 border-2 border-primary/20 group-hover:border-primary/40 group-hover:bg-primary/15 transition-all duration-500" />
                <div className="absolute inset-0 rounded-full flex flex-col items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-2xl md:text-3xl group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </span>
                </div>
                {/* Step number badge */}
                <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-primary text-on-primary text-xs font-extrabold flex items-center justify-center shadow-lg shadow-primary/30">
                  {step.number}
                </div>
              </div>

              {/* Text */}
              <h3 className="font-bold text-lg md:text-xl text-on-surface mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14 md:mt-20">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-on-primary font-bold text-base px-10 py-4 rounded-2xl hover:brightness-110 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-primary/25"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            Quero Começar Agora
          </a>
        </div>
      </div>
    </section>
  );
}

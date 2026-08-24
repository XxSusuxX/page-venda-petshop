const WHATSAPP_URL =
  "https://wa.me/5544998289752?text=Ol%C3%A1!%20Tenho%20interesse%20no%20PetNexus.%20Gostaria%20de%20saber%20mais!";
const DEMO_URL = "https://white-label-petshop.vercel.app/";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-primary/[0.06] blur-[60px] md:blur-[160px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/[0.04] blur-[50px] md:blur-[130px] rounded-full -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-primary/[0.02] blur-[80px] md:blur-[200px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-5 md:px-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center
        pt-28 pb-16
        md:pt-32 md:pb-20
        lg:pt-24 lg:pb-24"
      >

        {/* ── Text Column ── */}
        <div className="space-y-6 md:space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-xs font-bold tracking-wide animate-fade-in-up"
            style={{ animationDelay: "0ms" }}
          >
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
            Pronto para usar em até 48h
          </div>

          {/* Headline */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.1] text-on-background max-w-2xl animate-fade-in-up"
            style={{ animationDelay: "80ms" }}
          >
            Pare de Perder Clientes por{" "}
            <span className="shimmer-text">
              Desorganização.
            </span>
          </h1>

          {/* Sub-headline */}
          <p
            className="text-base md:text-lg text-on-surface-variant max-w-xl leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "160ms" }}
          >
            O sistema completo para pet shops que querem crescer com agenda organizada, operação ao vivo e clientes que viram fãs.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2 animate-fade-in-up"
            style={{ animationDelay: "240ms" }}
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-primary text-on-primary font-bold text-base px-8 py-4 rounded-2xl extruded-shadow hover:brightness-110 hover:scale-[1.02] active:scale-[0.97] transition-all shadow-lg shadow-primary/25"
              style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)", transitionDuration: "200ms" }}
            >
              <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Falar com um Consultor
            </a>
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-hairline-border text-on-surface font-semibold text-base px-8 py-4 rounded-2xl hover:bg-white/5 hover:border-primary/30 active:scale-[0.97] transition-all"
              style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)", transitionDuration: "200ms" }}
            >
              <span className="material-symbols-outlined text-primary text-lg">play_circle</span>
              Ver Demonstração ao Vivo
            </a>
          </div>

          {/* Social proof */}
          <div
            className="flex flex-col sm:flex-row items-center gap-4 pt-2 animate-fade-in-up"
            style={{ animationDelay: "320ms" }}
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {["M", "R", "A", "J"].map((l, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-primary/20 border-2 border-matte-canvas flex items-center justify-center text-xs text-primary font-bold">{l}</div>
                ))}
              </div>
              <p className="text-xs text-on-surface-variant">
                <span className="font-bold text-on-surface">+50 pet shops</span> já usam o PetNexus
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-1 pl-4 border-l border-hairline-border/30">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-warning-amber text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              ))}
              <span className="text-xs text-on-surface-variant ml-1">5.0</span>
            </div>
          </div>
        </div>

        {/* ── Visual Column — Real system screenshot ── */}
        <div
          className="relative group flex justify-center lg:justify-end animate-fade-in-up"
          style={{ animationDelay: "200ms" }}
        >
          <div className="absolute -inset-8 bg-primary/10 blur-[40px] md:blur-[90px] rounded-full opacity-40 group-hover:opacity-60 transition-opacity duration-700 -z-10" />

          {/* Main screenshot frame */}
          <div className="relative w-full max-w-[600px]">
            {/* Browser chrome */}
            <div className="bg-surface-container-low rounded-t-2xl md:rounded-t-3xl border border-b-0 border-primary/15 px-4 py-2.5 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-warning-amber/60" />
                <div className="w-3 h-3 rounded-full bg-primary/60" />
              </div>
              <div className="flex-1 mx-4 bg-surface-container-high rounded-md px-3 py-1 text-xs text-on-surface-variant/50 font-mono truncate">
                app.petnexus.com.br/agenda
              </div>
              <div className="flex items-center gap-1.5 bg-primary/10 border border-primary/20 rounded-full px-2.5 py-1">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-subtle" />
                <span className="text-[10px] font-bold text-primary">Ao Vivo</span>
              </div>
            </div>

            {/* Screenshot image */}
            <div className="rounded-b-2xl md:rounded-b-3xl overflow-hidden border border-t-0 border-primary/15 shadow-2xl shadow-black/60 mockup-hover">
              <img
                src="/hero-real.png"
                alt="Agenda visual do PetNexus — calendário com agendamentos do dia em tempo real"
                className="w-full h-auto object-cover object-top"
                loading="eager"
              />
            </div>

            {/* Floating badge — bottom-left */}
            <div className="absolute -bottom-4 -left-4 md:-bottom-5 md:-left-5 bg-surface-container-low/95 backdrop-blur-md border border-primary/20 rounded-2xl px-4 py-3 shadow-xl shadow-black/40">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-base" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_month</span>
                </div>
                <div>
                  <p className="text-[10px] text-on-surface-variant">Agendamentos hoje</p>
                  <p className="text-xs font-bold text-primary">3 serviços programados</p>
                </div>
              </div>
            </div>

            {/* Floating badge — top-right */}
            <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 bg-surface-container-low/95 backdrop-blur-md border border-primary/20 rounded-xl px-3 py-2 shadow-lg shadow-black/30">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse-subtle" />
                <span className="text-[11px] font-bold text-primary">Operação ao Vivo</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-bounce opacity-40">
        <span className="text-xs text-on-surface-variant font-medium">Descubra mais</span>
        <span className="material-symbols-outlined text-primary text-xl">keyboard_arrow_down</span>
      </div>
    </section>
  );
}

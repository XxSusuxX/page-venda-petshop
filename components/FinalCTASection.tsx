const WHATSAPP_URL =
  "https://wa.me/5544998289752?text=Ol%C3%A1!%20Quero%20garantir%20minha%20vaga%20de%20implementa%C3%A7%C3%A3o%20do%20PetNexus!";
const DEMO_URL = "https://white-label-petshop.vercel.app/";

export default function FinalCTASection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-5 md:px-10">
        <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-[2rem] md:rounded-[2.5rem] p-8 sm:p-12 md:p-20 text-center overflow-hidden">
          {/* Background glow effects */}
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-primary/20 blur-[50px] md:blur-[120px] rounded-full" />
          <div className="absolute -bottom-32 -left-32 w-60 h-60 bg-primary/15 blur-[40px] md:blur-[100px] rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/[0.05] blur-[80px] md:blur-[200px] rounded-full" />

          {/* Urgency badge */}
          <div className="relative z-10 inline-flex items-center gap-2 bg-primary/15 border border-primary/25 text-primary px-5 py-2 rounded-full text-xs font-bold mb-8 animate-pulse-subtle">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
            Vagas limitadas de implementação em agosto
          </div>

          {/* Headline */}
          <h2 className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-extrabold text-on-surface mb-5 md:mb-6 max-w-3xl mx-auto leading-tight">
            Pronto para Transformar seu{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-300">
              Pet Shop?
            </span>
          </h2>

          <p className="relative z-10 text-base md:text-lg text-on-surface-variant mb-10 max-w-2xl mx-auto leading-relaxed">
            Organização, modernidade e clientes que viram fãs. Tudo isso começa com uma conversa.
          </p>

          {/* CTA Buttons */}
          <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-on-primary font-bold text-base md:text-lg px-10 md:px-12 py-4 md:py-5 rounded-2xl hover:brightness-110 hover:scale-[1.02] active:scale-[0.97] transition-all shadow-xl shadow-primary/30"
              style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)", transitionDuration: "200ms" }}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              Falar com Consultor no WhatsApp
            </a>
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-on-surface-variant hover:text-primary transition-colors underline underline-offset-4"
            >
              Ou agende uma demonstração gratuita →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

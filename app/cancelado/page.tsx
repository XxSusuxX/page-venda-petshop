import Link from "next/link";

const WHATSAPP_URL =
  "https://wa.me/5544998289752?text=Ol%C3%A1!%20Fiquei%20com%20uma%20d%C3%BAvida%20sobre%20os%20planos%20do%20PetNexus.%20Podem%20me%20ajudar%3F";

export default function CanceladoPage() {
  return (
    <div className="min-h-screen bg-matte-canvas text-on-surface flex items-center justify-center p-5 md:p-10 relative overflow-hidden">
      <div className="max-w-md w-full bg-surface-container border border-hairline-border/60 rounded-3xl p-8 text-center shadow-2xl relative">
        <div className="w-16 h-16 rounded-2xl bg-warning-amber/15 border border-warning-amber/30 flex items-center justify-center mx-auto mb-5 text-warning-amber">
          <span className="material-symbols-outlined text-3xl">help_outline</span>
        </div>

        <h1 className="text-xl md:text-2xl font-extrabold text-on-surface mb-2">
          Ficou com alguma dúvida?
        </h1>
        <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
          O processo de checkout não foi concluído. Se você tiver qualquer dúvida sobre funcionalidades, migração ou formas de pagamento, nossa equipe pode te ajudar agora mesmo.
        </p>

        <div className="flex flex-col gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-primary text-on-primary font-bold text-sm px-6 py-3.5 rounded-xl hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-primary/20"
          >
            <span className="material-symbols-outlined text-lg">chat</span>
            Tirar Dúvidas com Especialista
          </a>

          <Link
            href="/#planos"
            className="inline-flex items-center justify-center border border-hairline-border/70 text-on-surface-variant font-semibold text-sm px-6 py-3.5 rounded-xl hover:bg-white/5 hover:text-on-surface transition-all"
          >
            Ver Planos Novamente
          </Link>
        </div>
      </div>
    </div>
  );
}

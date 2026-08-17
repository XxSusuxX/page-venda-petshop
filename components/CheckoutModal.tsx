"use client";

import { useState } from "react";
import ContractModal from "./ContractModal";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: {
    key: string;
    name: string;
    monthlyPrice: string;
    annualPrice: string;
    annualTotal: string;
    cta: string;
  };
  isAnnual: boolean;
}

const WHATSAPP_BASE = "https://wa.me/5544998289752?text=";

// Chave PIX Padrão do PetNexus (Pode ser alterada conforme necessidade)
const PIX_CHAVE = "13084858918";

// Máscara para CPF: 000.000.000-00
function maskCPF(value: string) {
  return value
    .replace(/\D/g, "")
    .slice(0, 11)
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

// Máscara para Telefone: (00) 00000-0000
function maskPhone(value: string) {
  return value
    .replace(/\D/g, "")
    .slice(0, 11)
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d{1,4})$/, "$1-$2");
}

export default function CheckoutModal({
  isOpen,
  onClose,
  plan,
  isAnnual,
}: CheckoutModalProps) {
  const [paymentMethod, setPaymentMethod] = useState<"card" | "pix">("card");
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [petShopName, setPetShopName] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [isContractOpen, setIsContractOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pixCopied, setPixCopied] = useState(false);
  const [showPixStep, setShowPixStep] = useState(false);

  if (!isOpen) return null;

  const currentPrice = isAnnual ? plan.annualPrice : plan.monthlyPrice;
  const totalPriceToPay = isAnnual ? plan.annualTotal : plan.monthlyPrice;
  const isCpfValid = cpf.replace(/\D/g, "").length === 11;
  const isPhoneValid = phone.replace(/\D/g, "").length >= 10;
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isFormValid =
    name.trim().length >= 3 &&
    isCpfValid &&
    isEmailValid &&
    isPhoneValid &&
    acceptedTerms;

  const handleCopyPix = () => {
    navigator.clipboard.writeText(PIX_CHAVE);
    setPixCopied(true);
    setTimeout(() => setPixCopied(false), 2500);
  };

  const handleFinishPix = () => {
    // Redireciona para o WhatsApp de confirmação com dados do contrato preenchidos
    const msg = `⚡ *PAGAMENTO VIA PIX - PETNEXUS*\n\n` +
      `👤 *Cliente:* ${name}\n` +
      `📄 *CPF:* ${cpf}\n` +
      `📧 *E-mail:* ${email}\n` +
      `📱 *WhatsApp:* ${phone}\n` +
      `🐾 *Pet Shop:* ${petShopName || "A definir"}\n` +
      `📦 *Plano:* ${plan.name} (${isAnnual ? "Anual - R$ " + plan.annualTotal : "Mensal - R$ " + plan.monthlyPrice})\n\n` +
      `✅ *Contrato aceito eletronicamente.*\n` +
      `Segue o comprovante do PIX para liberação e início do setup!`;

    window.open(`${WHATSAPP_BASE}${encodeURIComponent(msg)}`, "_blank");

    // Abre página com status de validação pendente do PIX
    window.location.href = `/sucesso?status=pendente_pix&plan=${plan.key}&interval=${isAnnual ? "annual" : "monthly"}&name=${encodeURIComponent(
      name
    )}&cpf=${encodeURIComponent(cpf)}&phone=${encodeURIComponent(phone)}&petshop=${encodeURIComponent(petShopName)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid || isLoading) return;

    if (paymentMethod === "pix") {
      setShowPixStep(true);
      return;
    }

    // Pagamento via Stripe (Cartão/Boleto)
    try {
      setIsLoading(true);
      setError(null);

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          planKey: plan.key,
          interval: isAnnual ? "annual" : "monthly",
          customerName: name.trim(),
          customerCpf: cpf,
          customerEmail: email.trim(),
          customerPhone: phone,
          petShopName: petShopName.trim() || undefined,
          contractAccepted: true,
          acceptedAt: new Date().toISOString(),
        }),
      });

      const data = await res.json();

      if (res.ok && data?.url) {
        window.location.href = data.url;
      } else {
        if (data?.needsKey) {
          setError("Chave da Stripe pendente. Mostrando opção PIX ou WhatsApp...");
          setShowPixStep(true);
        } else {
          setError(data?.error || "Erro ao iniciar o pagamento. Tente novamente.");
        }
      }
    } catch (err: any) {
      console.error("Erro no checkout:", err);
      setError("Erro de conexão. Redirecionando para suporte no WhatsApp...");
      setTimeout(() => {
        window.open(`${WHATSAPP_BASE}${plan.cta}`, "_blank");
      }, 1500);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in select-none">
        <div
          className="bg-surface-container border border-primary/25 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl shadow-black/80 relative overflow-hidden animate-scale-in max-h-[95vh] overflow-y-auto"
          style={{ animationDuration: "200ms" }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>

          {!showPixStep ? (
            <>
              {/* Header */}
              <div className="mb-5">
                <div className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                  Contratação 100% Segura
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-on-surface">
                  Plano {plan.name} {isAnnual && <span className="text-primary text-sm font-bold ml-1">(Anual −20%)</span>}
                </h3>
                <p className="text-xs sm:text-sm text-on-surface-variant mt-1">
                  R$ <strong className="text-on-surface text-base">{currentPrice}</strong>/mês {isAnnual && "• Implantação Grátis"}
                </p>
              </div>

              {/* Payment Method Selector */}
              <div className="mb-5">
                <label className="block text-xs font-semibold text-on-surface mb-2">
                  Forma de Pagamento Preferida:
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("card")}
                    className={`py-3 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${paymentMethod === "card"
                        ? "bg-primary/15 border-primary text-primary shadow-sm"
                        : "bg-surface-container-low border-hairline-border/60 text-on-surface-variant hover:border-hairline-border"
                      }`}
                  >
                    <span className="material-symbols-outlined text-base">credit_card</span>
                    Cartão / Stripe
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod("pix")}
                    className={`py-3 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${paymentMethod === "pix"
                        ? "bg-primary/15 border-primary text-primary shadow-sm"
                        : "bg-surface-container-low border-hairline-border/60 text-on-surface-variant hover:border-hairline-border"
                      }`}
                  >
                    <span className="material-symbols-outlined text-base">bolt</span>
                    PIX Instantâneo
                  </button>
                </div>
              </div>

              {/* Error message */}
              {error && (
                <div className="mb-4 p-3 rounded-xl bg-warning-amber/10 border border-warning-amber/30 text-warning-amber text-xs">
                  {error}
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-on-surface mb-1">
                    Nome Completo do Responsável *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: João da Silva"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-surface-container-low border border-hairline-border/80 focus:border-primary rounded-xl px-3.5 py-2.5 text-sm text-on-surface focus:outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-on-surface mb-1">
                      CPF *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="000.000.000-00"
                      value={cpf}
                      onChange={(e) => setCpf(maskCPF(e.target.value))}
                      className="w-full bg-surface-container-low border border-hairline-border/80 focus:border-primary rounded-xl px-3.5 py-2.5 text-sm text-on-surface focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-on-surface mb-1">
                      WhatsApp *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="(00) 00000-0000"
                      value={phone}
                      onChange={(e) => setPhone(maskPhone(e.target.value))}
                      className="w-full bg-surface-container-low border border-hairline-border/80 focus:border-primary rounded-xl px-3.5 py-2.5 text-sm text-on-surface focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-on-surface mb-1">
                    E-mail para Acesso e Contrato *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="seuemail@exemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-surface-container-low border border-hairline-border/80 focus:border-primary rounded-xl px-3.5 py-2.5 text-sm text-on-surface focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-on-surface mb-1">
                    Nome do Pet Shop / Clínica (Opcional)
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Pet Shop Amigo Fiel"
                    value={petShopName}
                    onChange={(e) => setPetShopName(e.target.value)}
                    className="w-full bg-surface-container-low border border-hairline-border/80 focus:border-primary rounded-xl px-3.5 py-2.5 text-sm text-on-surface focus:outline-none transition-colors"
                  />
                </div>

                {/* Contract Acceptance Box */}
                <div className="pt-1">
                  <label className="flex items-start gap-3 p-3 bg-surface-container-high/40 rounded-xl border border-hairline-border/60 cursor-pointer hover:border-primary/30 transition-colors">
                    <input
                      type="checkbox"
                      checked={acceptedTerms}
                      onChange={(e) => setAcceptedTerms(e.target.checked)}
                      className="mt-0.5 w-4 h-4 rounded border-hairline-border text-primary focus:ring-primary focus:ring-offset-0 bg-surface-container-low cursor-pointer accent-primary"
                    />
                    <span className="text-xs text-on-surface-variant leading-relaxed">
                      Li e concordo com os{" "}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsContractOpen(true);
                        }}
                        className="text-primary font-bold underline hover:brightness-125 inline cursor-pointer"
                      >
                        Termos de Uso e Contrato de Licença do PetNexus
                      </button>{" "}
                      (Clique para ler).
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={!isFormValid || isLoading}
                    className={`w-full py-3.5 rounded-xl text-sm font-bold text-center transition-all flex items-center justify-center gap-2 shadow-lg ${isFormValid && !isLoading
                        ? "bg-primary text-on-primary hover:brightness-110 shadow-primary/25 active:scale-[0.98] cursor-pointer"
                        : "bg-surface-container-high text-on-surface-variant/40 cursor-not-allowed border border-hairline-border/30"
                      }`}
                  >
                    {isLoading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-on-primary border-t-transparent rounded-full animate-spin" />
                        Gerando Pagamento Seguro...
                      </>
                    ) : paymentMethod === "pix" ? (
                      <>
                        <span className="material-symbols-outlined text-lg">bolt</span>
                        Continuar para Chave PIX
                      </>
                    ) : (
                      <>
                        <span className="material-symbols-outlined text-lg">lock</span>
                        Confirmar e Ir para Pagamento
                      </>
                    )}
                  </button>
                </div>

                <p className="text-[11px] text-center text-on-surface-variant/60">
                  🔒 Seus dados estão protegidos com criptografia de ponta a ponta.
                </p>
              </form>
            </>
          ) : (
            /* ─────────────────────────────────────────────────────────────
               PIX PAYMENT STEP (QR Code & Chave Copia e Cola)
               ───────────────────────────────────────────────────────────── */
            <div className="space-y-5 animate-scale-in text-center">
              <div className="w-14 h-14 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center mx-auto text-primary">
                <span className="material-symbols-outlined text-3xl">bolt</span>
              </div>

              <div>
                <h3 className="text-xl font-extrabold text-on-surface">
                  Pagamento via PIX Instantâneo
                </h3>
                <p className="text-xs text-on-surface-variant mt-1">
                  Plano <strong>{plan.name}</strong> • Total a pagar: <strong className="text-primary text-base">R$ {totalPriceToPay}</strong>
                </p>
              </div>

              {/* PIX Key Box */}
              <div className="bg-surface-container-low border border-hairline-border/80 rounded-2xl p-4 text-left space-y-2">
                <span className="text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider block">
                  Chave PIX (E-mail):
                </span>
                <div className="flex items-center justify-between gap-2 bg-surface-container-high/60 p-3 rounded-xl border border-hairline-border">
                  <span className="text-xs sm:text-sm font-mono font-bold text-primary select-all break-all">
                    {PIX_CHAVE}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyPix}
                    className="flex-shrink-0 px-3 py-1.5 bg-primary text-on-primary rounded-lg text-xs font-bold hover:brightness-110 active:scale-95 transition-all cursor-pointer"
                  >
                    {pixCopied ? "✓ Copiado!" : "Copiar"}
                  </button>
                </div>
                <p className="text-[11px] text-on-surface-variant/70">
                  Favorecido: <strong>PetNexus Tecnologia e Gestão SaaS</strong>
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <button
                  type="button"
                  onClick={handleFinishPix}
                  className="w-full py-3.5 rounded-xl bg-primary text-on-primary font-bold text-sm hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-primary/25 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Já fiz o PIX! Enviar Comprovante
                </button>

                <button
                  type="button"
                  onClick={() => setShowPixStep(false)}
                  className="w-full py-2.5 text-xs text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
                >
                  ← Voltar e alterar dados
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Contract Modal */}
      <ContractModal
        isOpen={isContractOpen}
        onClose={() => setIsContractOpen(false)}
        onAccept={() => setAcceptedTerms(true)}
        customerName={name}
        customerCpf={cpf}
      />
    </>
  );
}

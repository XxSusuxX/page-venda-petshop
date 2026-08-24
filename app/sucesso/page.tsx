"use client";

import { useState } from "react";
import Link from "next/link";

export default function SucessoPage({
  searchParams,
}: {
  searchParams: {
    status?: string;
    session_id?: string;
    plan?: string;
    interval?: string;
    name?: string;
    cpf?: string;
    phone?: string;
    petshop?: string;
  };
}) {
  const isPixPending = searchParams?.status === "pendente_pix";
  const planKey = searchParams?.plan || "Profissional";
  const planName = planKey.charAt(0).toUpperCase() + planKey.slice(1);
  const isAnnual = searchParams?.interval === "annual";
  const customerName = searchParams?.name || "Cliente PetNexus";
  const customerCpf = searchParams?.cpf || "Não informado";
  const customerPhone = searchParams?.phone || "";
  const petShopName = searchParams?.petshop || "";

  // Estado do formulário de onboarding
  const [brandColor, setBrandColor] = useState("");
  const [services, setServices] = useState("Banho e Tosa, Consulta Veterinária");
  const [hours, setHours] = useState("Segunda a Sábado, das 08h às 18h");
  const [notes, setNotes] = useState("");
  const [isContractVisible, setIsContractVisible] = useState(false);

  const handlePrintContract = () => {
    window.print();
  };

  const handleSendOnboardingToWhatsApp = () => {
    const message = `🎉 *DADOS DE ONBOARDING - PETNEXUS (48h)*\n\n` +
      `👤 *Cliente:* ${customerName}\n` +
      `📄 *CPF:* ${customerCpf}\n` +
      `📱 *WhatsApp:* ${customerPhone}\n` +
      `🐾 *Pet Shop:* ${petShopName || "A definir"}\n` +
      `📦 *Plano Contratado:* ${planName} (${isAnnual ? "Anual com 20% OFF" : "Mensal"})\n` +
      `💳 *Forma de Pagamento:* ${isPixPending ? "PIX (Comprovante em análise)" : "Cartão / Stripe (Aprovado)"}\n\n` +
      `🎨 *Cores da Marca:* ${brandColor || "Padrão PetNexus"}\n` +
      `✂️ *Serviços Principais:* ${services}\n` +
      `⏰ *Horário de Funcionamento:* ${hours}\n` +
      (notes ? `📝 *Observações:* ${notes}\n\n` : "\n") +
      `✅ *Termos e Contrato aceitos eletronicamente.*`;

    const url = `https://wa.me/5544998289752?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const handleResendPixToWhatsApp = () => {
    const msg = `⚡ *COMPROVANTE DE PAGAMENTO PIX - PETNEXUS*\n\n` +
      `👤 *Cliente:* ${customerName}\n` +
      `📄 *CPF:* ${customerCpf}\n` +
      `📦 *Plano:* ${planName} (${isAnnual ? "Anual" : "Mensal"})\n\n` +
      `Estou enviando o comprovante do PIX em anexo para validação e liberação do acesso!`;
    const url = `https://wa.me/5544998289752?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-matte-canvas text-on-surface p-4 sm:p-6 md:p-10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/[0.06] blur-[80px] md:blur-[200px] rounded-full -z-10 print:hidden" />

      {/* Main Container */}
      <div className="max-w-3xl mx-auto space-y-8 print:hidden">

        {/* Status Card */}
        <div className="bg-surface-container border border-primary/30 rounded-3xl p-6 sm:p-10 shadow-2xl text-center relative overflow-hidden">
          <div
            className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto mb-5 ${
              isPixPending
                ? "bg-warning-amber/15 border border-warning-amber/30 text-warning-amber"
                : "bg-primary/15 border border-primary/30 text-primary"
            }`}
          >
            <span className="material-symbols-outlined text-3xl sm:text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              {isPixPending ? "hourglass_top" : "verified"}
            </span>
          </div>

          <div
            className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 ${
              isPixPending
                ? "bg-warning-amber/10 border border-warning-amber/30 text-warning-amber"
                : "bg-primary/10 border border-primary/20 text-primary"
            }`}
          >
            {isPixPending ? "⏳ Aguardando Validação do PIX" : "✓ Assinatura Confirmada"}
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-on-surface mb-3">
            {isPixPending ? `Solicitação Registrada, ${customerName.split(" ")[0]}!` : `Parabéns, ${customerName.split(" ")[0]}!`}
          </h1>

          <p className="text-on-surface-variant text-sm sm:text-base max-w-lg mx-auto leading-relaxed mb-6">
            {isPixPending ? (
              <>
                Recebemos seus dados e o aceite do contrato. Para ativação do seu plano e liberação em até 48h,{" "}
                <strong className="text-on-surface">envie o comprovante do PIX pelo WhatsApp</strong> para conferência da nossa equipe financeira.
              </>
            ) : (
              <>
                O seu pagamento foi aprovado com sucesso. Seu contrato de licença e prestação de serviços foi homologado eletronicamente.
              </>
            )}
          </p>

          {/* Quick Details Bar */}
          <div className="bg-surface-container-low border border-hairline-border/60 rounded-2xl p-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
            <div>
              <p className="text-[11px] text-on-surface-variant">Plano</p>
              <p className="text-xs sm:text-sm font-bold text-primary">{planName}</p>
            </div>
            <div>
              <p className="text-[11px] text-on-surface-variant">Ciclo</p>
              <p className="text-xs sm:text-sm font-bold text-on-surface">{isAnnual ? "Anual (−20%)" : "Mensal"}</p>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="text-[11px] text-on-surface-variant">Status da Liberação</p>
              <p className={`text-xs sm:text-sm font-bold ${isPixPending ? "text-warning-amber" : "text-primary"}`}>
                {isPixPending ? "Aguardando Comprovante" : "Ativo (Setup 48h)"}
              </p>
            </div>
          </div>

          {/* Actions: WhatsApp PIX Validation & Download Contract */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {isPixPending && (
              <button
                onClick={handleResendPixToWhatsApp}
                className="inline-flex items-center gap-2 bg-primary hover:brightness-110 text-on-primary font-bold px-6 py-3 rounded-xl text-xs sm:text-sm transition-all shadow-lg shadow-primary/25 active:scale-95 cursor-pointer"
              >
                <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Enviar Comprovante pelo WhatsApp
              </button>
            )}

            <button
              onClick={handlePrintContract}
              className="inline-flex items-center gap-2 bg-surface-container-high hover:bg-surface-container-highest border border-hairline-border text-on-surface px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <span className="material-symbols-outlined text-primary text-base">download</span>
              {isPixPending ? "Baixar Minuta do Contrato / Termo" : "Baixar Contrato em PDF / Imprimir"}
            </button>

            <button
              onClick={() => setIsContractVisible(!isContractVisible)}
              className="inline-flex items-center gap-2 border border-hairline-border/80 hover:border-primary/40 text-on-surface-variant hover:text-on-surface px-4 py-3 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-base">visibility</span>
              {isContractVisible ? "Ocultar Contrato" : "Visualizar Termos na Tela"}
            </button>
          </div>
        </div>

        {/* Contract Preview (Expandable) */}
        {isContractVisible && (
          <div className="bg-surface-container border border-primary/20 rounded-3xl p-6 sm:p-8 space-y-4 animate-scale-in text-xs sm:text-sm text-on-surface-variant leading-relaxed">
            <div className="flex items-center justify-between border-b border-hairline-border/40 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Cópia do Contrato Eletrônico Registrado
              </span>
              <button
                onClick={handlePrintContract}
                className="text-primary text-xs font-bold underline cursor-pointer"
              >
                Imprimir / Salvar PDF
              </button>
            </div>
            {isPixPending && (
              <div className="p-3 bg-warning-amber/10 border border-warning-amber/30 rounded-xl text-xs text-warning-amber font-semibold">
                ⚠️ STATUS: PROPOSTA DE ADESÃO — Validação final e homologação sujeitas à conferência do comprovante do PIX.
              </div>
            )}
            <p><strong>CONTRATADA:</strong> GABRIEL SUENAGA, inscrito no CPF sob o nº 130.848.589-18 (PetNexus Tecnologia e Gestão SaaS)</p>
            <p><strong>CONTRATANTE:</strong> {customerName} | CPF: {customerCpf}</p>
            <p><strong>PLANO:</strong> {planName} ({isAnnual ? "Anual" : "Mensal"})</p>
            <p><strong>STATUS DO ACEITE:</strong> Aceito eletronicamente via formulário de contratação nos termos da MP 2.200-2/2001 e Código Civil Brasileiro.</p>
          </div>
        )}

        {/* Onboarding Form Card (First Version Setup) */}
        <div className="bg-surface-container border border-hairline-border/80 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-2xl">tune</span>
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-extrabold text-on-surface">
                Personalização da Sua 1ª Versão (Setup 48h)
              </h2>
              <p className="text-xs text-on-surface-variant">
                Preencha abaixo os dados iniciais para nossa equipe configurar o seu PetNexus assim que o pagamento for validado.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-on-surface mb-1.5">
                Cores Preferidas da sua Marca / Identidade Visual
              </label>
              <input
                type="text"
                placeholder="Ex: Verde Esmeralda e Preto Fosco, Azul Marinho e Branco..."
                value={brandColor}
                onChange={(e) => setBrandColor(e.target.value)}
                className="w-full bg-surface-container-low border border-hairline-border/80 focus:border-primary rounded-xl px-3.5 py-2.5 text-sm text-on-surface focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-on-surface mb-1.5">
                Serviços Principais Oferecidos
              </label>
              <input
                type="text"
                placeholder="Ex: Banho & Tosa, Hidratação, Leva e Traz, Vacinação..."
                value={services}
                onChange={(e) => setServices(e.target.value)}
                className="w-full bg-surface-container-low border border-hairline-border/80 focus:border-primary rounded-xl px-3.5 py-2.5 text-sm text-on-surface focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-on-surface mb-1.5">
                Horários de Funcionamento da Unidade
              </label>
              <input
                type="text"
                placeholder="Ex: Seg a Sex das 08h às 18h | Sáb das 08h às 13h"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
                className="w-full bg-surface-container-low border border-hairline-border/80 focus:border-primary rounded-xl px-3.5 py-2.5 text-sm text-on-surface focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-on-surface mb-1.5">
                Observações ou Pedidos Especiais (Opcional)
              </label>
              <textarea
                rows={2}
                placeholder="Ex: Já possuo logotipo vetorizado, gostaria de integrar 2 profissionais..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-surface-container-low border border-hairline-border/80 focus:border-primary rounded-xl px-3.5 py-2.5 text-sm text-on-surface focus:outline-none transition-colors resize-none"
              />
            </div>

            <button
              onClick={handleSendOnboardingToWhatsApp}
              className="w-full py-4 rounded-xl bg-primary text-on-primary font-bold text-sm sm:text-base hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-primary/25 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Enviar Dados e Iniciar Setup no WhatsApp
            </button>
          </div>
        </div>

        {/* Return home link */}
        <div className="text-center pt-2 pb-8">
          <Link
            href="/"
            className="text-xs text-on-surface-variant hover:text-primary transition-colors underline"
          >
            ← Voltar para a página principal
          </Link>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          PRINT-ONLY CONTRACT SHEET (Folha de Impressão Oficial A4)
          ───────────────────────────────────────────────────────────── */}
      <div className="hidden print:block text-black bg-white p-8 max-w-4xl mx-auto font-serif text-sm leading-relaxed">
        <div className="text-center border-b-2 border-black pb-4 mb-6">
          <h1 className="text-xl font-bold uppercase">
            CONTRATO DE PRESTAÇÃO DE SERVIÇOS E LICENCIAMENTO DE SOFTWARE (PETNEXUS)
          </h1>
          <p className="text-xs text-gray-600 mt-1">
            Registro Eletrônico de Contratação SaaS • Validade Jurídica (MP 2.200-2/2001)
          </p>
        </div>

        {isPixPending && (
          <div className="mb-4 p-2.5 border-2 border-dashed border-gray-600 text-center font-sans font-bold text-xs bg-gray-100">
            ⚠️ STATUS: TERMO DE ADESÃO PROVISÓRIO — PENDENTE DE COMPROVAÇÃO DE PAGAMENTO VIA PIX
          </div>
        )}

        <div className="mb-4 p-3 border border-gray-400 text-xs bg-gray-50">
          <p><strong>CONTRATADA:</strong> GABRIEL SUENAGA, inscrito no CPF sob o nº 130.848.589-18 (PetNexus Tecnologia e Gestão SaaS)</p>
          <p><strong>CONTRATANTE:</strong> {customerName} | CPF: {customerCpf} | Telefone: {customerPhone}</p>
          <p><strong>ESTABELECIMENTO:</strong> {petShopName || "Não especificado"}</p>
          <p><strong>PLANO CONTRATADO:</strong> {planName} ({isAnnual ? "Anual com 20% de Desconto" : "Mensal"})</p>
          <p><strong>FORMA DE PAGAMENTO:</strong> {isPixPending ? "PIX (Em conferência)" : "Cartão de Crédito / Stripe (Aprovado)"}</p>
          <p><strong>DATA E HORA DO REGISTRO:</strong> {new Date().toLocaleString("pt-BR")}</p>
        </div>

        <div className="space-y-4 text-xs">
          <p><strong>CLÁUSULA PRIMEIRA – DO OBJETO:</strong> 1.1. O presente contrato tem por objeto a licença de uso do software plataforma &quot;PetNexus&quot; na modalidade SaaS, conforme o plano escolhido no momento da contratação. 1.2. Estão inclusos na primeira versão (Setup inicial): a personalização básica da identidade visual com base nas diretrizes fornecidas pelo CONTRATANTE e a configuração inicial para o fluxo de trabalho da sua unidade.</p>

          <p><strong>CLÁUSULA SEGUNDA – DO PAGAMENTO E VIGÊNCIA:</strong> 2.1. O CONTRATANTE pagará à CONTRATADA o valor referente ao plano e taxa de setup escolhidos no site. 2.2. O desenvolvimento e a liberação do acesso/personalização da primeira versão terão início imediatamente após a confirmação do pagamento pela instituição financeira.</p>

          <p><strong>CLÁUSULA TERCEIRA – DAS OBRIGAÇÕES DA CONTRATADA:</strong> 3.1. Entregar a plataforma funcional conforme especificações comerciais apresentadas. 3.2. Prestar suporte técnico nos canais oficiais estipulados pela CONTRATADA durante a vigência da assinatura.</p>

          <p><strong>CLÁUSULA QUARTA – DAS OBRIGAÇÕES DO CONTRATANTE:</strong> 4.1. Fornecer informações verídicas de forma tempestiva para que a CONTRATADA realize a configuração inicial. 4.2. Utilizar o sistema em conformidade com a legislação brasileira vigente, sendo vedada a engenharia reversa.</p>

          <p><strong>CLÁUSULA QUINTA – DO ACEITE ELETRÔNICO:</strong> 5.1. Ao marcar a caixa de aceite e finalizar a solicitação na plataforma, o CONTRATANTE declara ter lido e aceito integralmente todas as cláusulas aqui descritas, tendo este registro eletrônico plena validade jurídica.</p>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-400 grid grid-cols-2 gap-8 text-center text-xs">
          <div>
            <div className="border-b border-black mb-1 pb-4 font-semibold">GABRIEL SUENAGA (PetNexus)</div>
            <p className="text-gray-600">CONTRATADA (CPF: 130.848.589-18)</p>
          </div>
          <div>
            <div className="border-b border-black mb-1 pb-4 font-semibold">{customerName}</div>
            <p className="text-gray-600">
              CONTRATANTE {isPixPending ? "(Assinado Eletronicamente — Pendente Compensação)" : "(Assinado Eletronicamente)"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

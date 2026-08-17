"use client";

interface ContractModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept?: () => void;
  customerName?: string;
  customerCpf?: string;
}

export default function ContractModal({
  isOpen,
  onClose,
  onAccept,
  customerName = "[Nome do Cliente]",
  customerCpf = "[CPF do Cliente]",
}: ContractModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
      <div
        className="bg-surface-container border border-primary/25 rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl shadow-black/80 overflow-hidden relative animate-scale-in"
        style={{ animationDuration: "250ms" }}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-hairline-border/50 flex items-center justify-between bg-surface-container-high/50">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              description
            </span>
            <h3 className="font-extrabold text-sm sm:text-base text-on-surface">
              Contrato de Licenciamento & Prestação de Serviços
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {/* Contract Content (Scrollable) */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm text-on-surface-variant leading-relaxed font-sans">
          <div className="text-center pb-4 border-b border-hairline-border/30">
            <p className="font-bold text-on-surface text-base sm:text-lg uppercase tracking-wide">
              CONTRATO DE PRESTAÇÃO DE SERVIÇOS E LICENCIAMENTO DE SOFTWARE (PETNEXUS)
            </p>
            <p className="text-xs text-primary font-medium mt-1">
              Registro Eletrônico de Contratação SaaS
            </p>
          </div>

          <div className="bg-surface-container-low p-4 rounded-xl border border-hairline-border/40 space-y-2">
            <p className="text-xs font-semibold text-on-surface">Pelo presente instrumento particular, de um lado:</p>
            <p>
              <strong className="text-on-surface">CONTRATADA:</strong> GABRIEL SUENAGA, inscrito no CPF sob o nº 130.848.589-18 (PetNexus Tecnologia e Gestão SaaS), doravante denominada simplesmente <strong>CONTRATADA</strong>; e,
            </p>
            <p>
              <strong className="text-on-surface">CONTRATANTE:</strong> <span className="text-primary font-semibold">{customerName || "[Nome do Cliente]"}</span>, inscrito(a) no CPF sob o nº <span className="text-primary font-semibold">{customerCpf || "[CPF do Cliente]"}</span>, doravante denominado(a) simplesmente <strong>CONTRATANTE</strong>, têm entre si justo e contratado o seguinte:
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-on-surface text-sm mb-1 text-primary">
                CLÁUSULA PRIMEIRA – DO OBJETO
              </h4>
              <p>
                <strong>1.1.</strong> O presente contrato tem por objeto a licença de uso do software plataforma <strong>&quot;PetNexus&quot;</strong> (sistema White Label de gestão para pet shops, banho & tosa e clínicas veterinárias) na modalidade SaaS (Software as a Service), conforme o plano escolhido no momento da contratação.
              </p>
              <p className="mt-2">
                <strong>1.2.</strong> Estão inclusos na primeira versão (Setup inicial): a personalização básica da identidade visual com base nas diretrizes fornecidas pelo CONTRATANTE e a configuração inicial para o fluxo de trabalho da sua unidade.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-on-surface text-sm mb-1 text-primary">
                CLÁUSULA SEGUNDA – DO PAGAMENTO E VIGÊNCIA
              </h4>
              <p>
                <strong>2.1.</strong> O CONTRATANTE pagará à CONTRATADA o valor referente ao plano e taxa de setup escolhidos no site, através dos meios de pagamento disponibilizados na plataforma (Cartão de Crédito ou Boleto Bancário via Stripe).
              </p>
              <p className="mt-2">
                <strong>2.2.</strong> O desenvolvimento e a liberação do acesso/personalização da primeira versão terão início imediatamente após a confirmação do pagamento pela instituição financeira.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-on-surface text-sm mb-1 text-primary">
                CLÁUSULA TERCEIRA – DAS OBRIGAÇÕES DA CONTRATADA
              </h4>
              <p>
                <strong>3.1.</strong> Entregar a plataforma funcional conforme especificações comerciais apresentadas na página de vendas oficial.
              </p>
              <p className="mt-2">
                <strong>3.2.</strong> Prestar suporte técnico nos canais oficiais estipulados pela CONTRATADA durante a vigência da assinatura.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-on-surface text-sm mb-1 text-primary">
                CLÁUSULA QUARTA – DAS OBRIGAÇÕES DO CONTRATANTE
              </h4>
              <p>
                <strong>4.1.</strong> Fornecer informações verídicas (Nome, CPF e dados de personalização da marca) de forma tempestiva para que a CONTRATADA realize a configuração inicial no prazo acordado de até 48 horas.
              </p>
              <p className="mt-2">
                <strong>4.2.</strong> Utilizar o sistema em conformidade com a legislação brasileira vigente, sendo expressamente vedada a engenharia reversa ou repasse de acesso a terceiros não autorizados.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-on-surface text-sm mb-1 text-primary">
                CLÁUSULA QUINTA – DO ACEITE ELETRÔNICO
              </h4>
              <p>
                <strong>5.1.</strong> Ao marcar a caixa &quot;Li e concordo com os Termos de Serviço e Contrato de Licença&quot; e finalizar o pagamento no site da CONTRATADA, o CONTRATANTE declara ter lido, compreendido e aceito integralmente todas as cláusulas aqui descritas, tendo este registro eletrônico (data, hora, IP e identificador da transação) <strong>validade jurídica plena</strong> nos termos da Medida Provisória nº 2.200-2/2001 e do Código Civil Brasileiro.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-hairline-border/50 bg-surface-container-high/50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-on-surface-variant/70 text-center sm:text-left">
            Documento com validade jurídica nacional
          </span>
          <div className="flex gap-2.5 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl border border-hairline-border/60 text-xs font-semibold text-on-surface hover:bg-white/5 transition-all"
            >
              Fechar
            </button>
            {onAccept && (
              <button
                onClick={() => {
                  onAccept();
                  onClose();
                }}
                className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-primary text-on-primary text-xs font-bold hover:brightness-110 active:scale-95 transition-all shadow-md shadow-primary/20"
              >
                Li e Concordo
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

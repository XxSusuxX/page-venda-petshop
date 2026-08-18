export default function ProblemSection() {
  const problems = [
    {
      icon: "edit_calendar",
      title: "Agenda no caderno ou planilha",
      description: "Esquece agendamento, confunde horário, perde cliente. O retrabalho come seu lucro.",
      color: "from-red-500/20 to-red-500/5",
    },
    {
      icon: "chat_error",
      title: "WhatsApp lotado e sem controle",
      description: "Mensagem perdida, tutor sem resposta, reclamação na certa. Cada mensagem perdida é um cliente que não volta.",
      color: "from-amber-500/20 to-amber-500/5",
    },
    {
      icon: "money_off",
      title: "Não sabe quanto faturou",
      description: "Fecha o mês no escuro. Sem relatório, sem controle. Como crescer sem saber seus números?",
      color: "from-orange-500/20 to-orange-500/5",
    },
    {
      icon: "sentiment_dissatisfied",
      title: "Tutor reclamando",
      description: "Seu cliente não sabe o status do pet, liga toda hora e vai embora insatisfeito. E leva o boca-a-boca negativo.",
      color: "from-rose-500/20 to-rose-500/5",
    },
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/[0.03] blur-[60px] md:blur-[150px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Section header */}
        <div className="text-center mb-14 md:mb-20 reveal-on-scroll">
          <span className="text-red-400 font-bold text-xs uppercase tracking-[0.2em] block mb-3">
            O Problema
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-on-surface mb-5">
            Isso parece familiar?
          </h2>
          <p className="text-on-surface-variant text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Se você se identificou com pelo menos uma dessas situações, seu pet shop está perdendo dinheiro — e clientes — todos os dias.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`reveal-on-scroll stagger-${index + 1} group relative bg-surface-container border border-hairline-border/60 rounded-2xl p-7 md:p-8 hover:border-red-400/30 transition-all duration-500 overflow-hidden`}
            >
              {/* Gradient overlay */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${problem.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-red-400 text-2xl">
                    {problem.icon}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-on-surface mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transition text */}
        <div className="text-center mt-14 md:mt-20">
          <div className="inline-flex items-center gap-3 bg-primary/5 border border-primary/20 rounded-full px-8 py-4">
            <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>lightbulb</span>
            <p className="text-base md:text-lg font-semibold text-on-surface">
              E se existisse um sistema que resolve <span className="text-primary">tudo isso</span> de uma vez?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";

const faqs = [
  {
    question: "E clientes idosos? Vão conseguir usar?",
    answer: "Não se preocupe! Temos um link simplificado fora do painel onde o tutor faz o agendamento de forma muito mais fácil. Por esse agendamento, já registramos o cliente automaticamente e captamos os dados — sem precisar preencher vários campos. É rápido e intuitivo até para quem não tem familiaridade com tecnologia.",
  },
  {
    question: "Preciso instalar algo?",
    answer: "Não! O PetNexus funciona direto no navegador, no celular ou computador. Sem downloads, sem instalação. Basta abrir o link e começar a usar.",
  },
  {
    question: "É difícil de usar?",
    answer: "O PetNexus foi desenhado para ser intuitivo e fácil de aprender. Além disso, você recebe um treinamento completo por vídeo-chamada incluso na implementação. Em poucos minutos, sua equipe já estará dominando o sistema.",
  },
  {
    question: "E se eu já tiver clientes cadastrados em planilha?",
    answer: "Nós migramos seus dados! Durante a implementação, importamos sua base de clientes e pets para o sistema. Você não perde nenhuma informação.",
  },
  {
    question: "Tem contrato de fidelidade?",
    answer: "Não. Nossos planos são mensais e você pode cancelar a qualquer momento, sem multa e sem burocracia. Acreditamos que você fica porque quer, não porque é obrigado.",
  },
  {
    question: "Em quanto tempo fico pronto?",
    answer: "Após a contratação, configuramos tudo em até 48 horas. Cadastramos seus serviços, equipe, horários e personalizamos o visual. Rápido, né?",
  },
  {
    question: "O que está incluído na implementação?",
    answer: "Cadastro dos seus serviços, configuração de horários, cadastro da equipe, personalização visual com a identidade do seu pet shop e um treinamento completo por vídeo-chamada para você e sua equipe.",
  },
  {
    question: "Meu cliente (tutor do pet) precisa baixar app?",
    answer: "Não! O tutor acessa por um link exclusivo pelo celular. Funciona como um site — sem ocupar espaço no celular, sem atualizações. Abriu o link, está usando.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/[0.03] blur-[60px] md:blur-[150px] rounded-full -z-10" />

      <div className="max-w-3xl mx-auto px-5 md:px-10">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-primary font-bold text-xs uppercase tracking-[0.2em] block mb-3">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-on-surface mb-5">
            Dúvidas Frequentes
          </h2>
          <p className="text-on-surface-variant text-base md:text-lg leading-relaxed">
            Tudo que você precisa saber antes de começar.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-primary/5 border-primary/20"
                    : "bg-surface-container border-hairline-border/60 hover:border-primary/15"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
                >
                  <span className={`font-bold text-sm md:text-base transition-colors ${isOpen ? "text-primary" : "text-on-surface"}`}>
                    {faq.question}
                  </span>
                  <span
                    className={`material-symbols-outlined text-xl flex-shrink-0 transition-all duration-300 ${
                      isOpen ? "rotate-180 text-primary" : "text-on-surface-variant"
                    }`}
                  >
                    expand_more
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-5 md:px-6 pb-5 md:pb-6 text-sm text-on-surface-variant leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

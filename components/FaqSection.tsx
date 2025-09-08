"use client";

import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import Animations from "./Animations";

interface FaqProps {
  id: number;
  question: string;
  answer: string;
  delay?: number;
}

const faqs: FaqProps[] = [
  {
    id: 1,
    question: "Со колку луѓе може да се игра?",
    answer:
      "Идеално е за 3–8 играчи. Се разбира може и повеќе, а ако сте помалку — ќе се напиете побрзо.",
    delay: 0.3,
  },
  {
    id: 2,
    question: "Како се плаќа?",
    answer: "Нема аванс! Кога ќе стигне кутијата, тогаш плаќаш.",
    delay: 0.4,
  },
  {
    id: 3,
    question: "Колку чини доставата?",
    answer: "БЕСПЛАТНО! Каде и да си во македонија!",
    delay: 0.5,
  },
  {
    id: 4,
    question: "Каде можам да ја купам играта?",
    answer:
      "Можеш да ја купиш тука на вебстраната или преку DM на Instagram и TikTok.",

    delay: 0.6,
  },
  {
    id: 5,
    question: "Има карти што не ги разбирам, што да правам?",
    answer: "Слободно прашај не во DM на Instagram, TikTok или на емаил.",
    delay: 0.7,
  },
];

const FaqSection = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(
    faqs[0]?.id || null
  );

  const toggleAccordion = (id: number) => {
    setOpenAccordion(id);
  };

  return (
    <section className="py-16 md:py-24 lg:py-36">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex flex-col gap-6 max-w-[800px] mx-auto">
          {faqs.map((faq: FaqProps) => (
            <button
              type="button"
              key={faq.id}
              onClick={() => toggleAccordion(faq.id)}
              className={`relative grid ${
                openAccordion === faq.id
                  ? "grid-rows-[0.1fr_1fr]"
                  : "grid-rows-[0.1fr_0fr]"
              } overflow-hidden cursor-pointer transition-all duration-300 pt-6 border-t-2 border-body/15 last:border-b-2 last:pb-6`}
            >
              <div className="flex items-center justify-between gap-10 cursor-pointer relative z-20">
                <Animations delay={faq.delay}>
                  <span className="text-lg font-bold text-dark text-start">
                    {faq.question}
                  </span>
                </Animations>

                <div className="flex flex-shrink-0">
                  <FaPlus
                    className={`text-accent text-2xl ${
                      openAccordion === faq.id ? "-rotate-45" : ""
                    } transition-transform duration-300 ease-in-out`}
                  />
                </div>
              </div>
              <div className={`overflow-hidden relative z-20`}>
                <Animations delay={faq.delay}>
                  <p className="text-[#333333] text-left pt-4">{faq.answer}</p>
                </Animations>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

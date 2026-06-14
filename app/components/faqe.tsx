"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";

// Mock data based on the provided image
const faqData = [
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship to most countries worldwide. Shipping options and rates will appear at checkout based on your location.",
  },
  {
    question: "What is your return policy?",
    answer: "Our standard return policy allows returns within 30 days of receiving your order. Items must be unworn, unwashed, and have original tags attached.",
  },
  {
    question: "How do I know which size to select?",
    answer: "Please refer to the size guide available on each product page. Our sizing runs true to size unless otherwise noted in the product description.",
  },
  {
    question: "Do I need an account to place an order?",
    answer: "No, guest checkout is always available. However, creating an account allows you to track orders and save shipping details for faster checkout next time.",
  },
  {
    question: "Do you offer discount codes or seasonal sales?",
    answer: "Yes! The best way to stay updated on our sales and receive exclusive discount codes is by subscribing to our email newsletter.",
  },
  {
    question: "How can I contact customer support?",
    answer: "You can reach our customer support team via the 'Contact' page, or by sending an email to support@example.com. We typically respond within 24 hours.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#FAF9F6] px-6 py-20 md:px-12 lg:py-32">
      <div className="mx-auto max-w-4xl">
        
        {/* Header Section */}
        <div className="mb-12 flex items-end justify-between border-b border-[#3E3228]/20 pb-6">
          <h2 className="font-serif text-3xl font-normal tracking-wide text-[#3E3228] sm:text-4xl md:text-5xl">
            Know Before You Go
          </h2>
          <a 
            href="/faqs" 
            className="group flex items-center gap-2 pb-1 text-[11px] font-medium tracking-[0.2em] text-[#3E3228] uppercase transition-opacity hover:opacity-70"
          >
            More FAQs 
            <ArrowRight size={14} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index} 
                className="border-b border-[#3E3228]/15"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="group flex w-full items-center justify-between py-6 text-left transition-colors focus:outline-none"
                >
                  <span className={`font-serif text-lg transition-colors duration-300 md:text-[22px] ${isOpen ? 'text-[#3E3228]' : 'text-[#3E3228]/80 group-hover:text-[#3E3228]'}`}>
                    {faq.question}
                  </span>
                  
                  {/* Thin Chevron Icon */}
                  <div className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-transparent transition-colors duration-300 group-hover:border-[#3E3228]/10">
                    {isOpen ? (
                      <ChevronUp size={20} strokeWidth={1} className="text-[#3E3228]" />
                    ) : (
                      <ChevronDown size={20} strokeWidth={1} className="text-[#3E3228]/70 group-hover:text-[#3E3228]" />
                    )}
                  </div>
                </button>

                {/* Expandable Answer Area */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-8 pr-8 text-sm md:text-base font-light leading-relaxed text-[#5A4A3C]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, ChevronRight } from "lucide-react";

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
  // Set to 0 to have the first item open by default, mimicking the image.
  // Set to null if you want all of them closed initially.
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-16 md:px-8">
      
      {/* Header Section */}
      <div className="mb-10 flex items-end justify-between border-b border-white pb-2">
        <h2 className="text-3xl font-light uppercase tracking-wide text-black sm:text-4xl md:text-[40px]">
          Know Before You Go
        </h2>
        <a 
          href="/faqs" 
          className="flex items-center gap-1 pb-1 text-sm font-medium text-black transition-opacity hover:opacity-70"
        >
          More FAQs 
          <ChevronRight size={16} strokeWidth={1.5} />
        </a>
      </div>

      {/* Accordion List */}
      <div className="flex flex-col">
        {faqData.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div 
              key={index} 
              className="border-b border-gray-200"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="flex w-full items-center justify-between py-6 text-left transition-colors hover:text-gray-600 focus:outline-none"
              >
                <span className="text-[17px] font-medium text-gray-900">
                  {faq.question}
                </span>
                
                {/* Thin Chevron Icon to match the image styling */}
                {isOpen ? (
                  <ChevronUp size={20} strokeWidth={1} className="text-gray-900" />
                ) : (
                  <ChevronDown size={20} strokeWidth={1} className="text-gray-900" />
                )}
              </button>

              {/* Expandable Answer Area */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="pb-6 pr-8 text-sm font-normal leading-relaxed text-gray-500">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
    </section>
  );
}
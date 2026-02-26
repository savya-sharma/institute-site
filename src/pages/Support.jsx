import React, { useState, useRef, useLayoutEffect } from 'react';
import faqs from '../data/Faq.js';
import gsap from 'gsap';
import Footer from '../sections/Footer.jsx';

// AccordionItem Component
const AccordionItem = ({
  faq,
  idx,
  openIndex,
  setOpenIndex,
  baseIdx,
}) => {
  const contentRef = useRef(null);
  const isOpen = openIndex === baseIdx + idx;

  useLayoutEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    if (isOpen) {
      gsap.to(el, {
        height: 'auto',
        opacity: 1,
        duration: 0.35,
        ease: 'power2.out',
        pointerEvents: 'auto',
        onStart: () => {
          el.style.display = 'block';
          el.style.overflow = 'hidden';
        },
        onComplete: () => {
          el.style.height = 'auto';
          el.style.overflow = 'visible';
        },
      });
    } else {
      gsap.to(el, {
        height: 0,
        opacity: 0,
        duration: 0.25,
        pointerEvents: 'none',
        ease: 'power2.in',
        onStart: () => {
          el.style.overflow = 'hidden';
        },
        onComplete: () => {
          el.style.display = 'none';
        },
      });
    }
  }, [isOpen]);

  return (
    <div
      className="bg-white rounded-xl flex flex-col justify-center shadow-none border-none"
      style={{ boxShadow: '0 1px 3px 0 rgba(60,60,60,0.03)' }}
      key={baseIdx + idx}
    >
      <button
        onClick={() => setOpenIndex(isOpen ? null : baseIdx + idx)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${baseIdx + idx}`}
        id={`faq-question-${baseIdx + idx}`}
        className="flex items-center justify-between h-[66px] px-6 w-full cursor-pointer font-medium text-[#222] text-base md:text-[1.08rem] bg-white rounded-xl border-none outline-none transition"
        style={{ minHeight: '66px' }}
        type="button"
      >
        <span>{faq.question}</span>
        <span className="ml-3 text-2xl text-[#222] font-thin select-none pointer-events-none">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      <div
        ref={contentRef}
        id={`faq-answer-${baseIdx + idx}`}
        aria-labelledby={`faq-question-${baseIdx + idx}`}
        className="px-6 pb-4 text-[#444] text-[1rem] leading-relaxed bg-white"
        style={{
          height: 0,
          overflow: 'hidden',
          opacity: 0,
          display: 'none',
        }}
      >
        {faq.answer}
      </div>
    </div>
  );
};

// Support Page Component
const Support = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // Split FAQs for two-column layout
  const leftFaqs = faqs.slice(0, 3);
  const rightFaqs = faqs.slice(3, 6);

  return (
    <>

      <div className="min-h-screen bg-[#fdfdfd] flex flex-col">
        {/* First Section: Heading and Subheading */}
        <section className="hero w-full min-h-[50vh] h-[50vh] text-white flex items-center justify-center px-4 md:px-8">
          <div className="flex flex-col items-center text-center gap-4 md:gap-6 w-full max-w-8xl">
            <span className="text-[#E04200] text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] font-semibold">
              SUPPORT & HELP
            </span>
            <h1 className="font-[regular] leading-snug sm:leading-tight md:leading-none text-[2.2rem] sm:text-[2.8rem] md:text-[3.2rem] font-bold">
              How Can We Help You?
            </h1>
            <p className="text-[1rem] sm:text-[1.18rem] md:text-[1.28rem] opacity-90 max-w-xl">
              Find answers to Frequently Asked Questions. Need more help? Get in touch with our team!
            </p>
          </div>
        </section>

        {/* Second Section: 2 Column FAQ */}
        <section className="flex-1 flex flex-col items-center justify-center bg-[#f5f5f5] py-12 px-2 min-h-[60vh]">
          <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {/* Left Column */}
            <div className="flex flex-col gap-6">
              {leftFaqs.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  faq={faq}
                  idx={idx}
                  openIndex={openIndex}
                  setOpenIndex={setOpenIndex}
                  baseIdx={0}
                />
              ))}
            </div>
            {/* Right Column */}
            <div className="flex flex-col gap-6">
              {rightFaqs.map((faq, idx) => (
                <AccordionItem
                  key={idx + 3}
                  faq={faq}
                  idx={idx}
                  openIndex={openIndex}
                  setOpenIndex={setOpenIndex}
                  baseIdx={3}
                />
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Support;

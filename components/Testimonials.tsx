"use client";

import React, { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "Still responsive months after launch. Really appreciate the ongoing support.",
    name: "Michael Knott",
    role: "Founder, My Daily Health Journal",
    image: "/client-michael.png",
    rotation: "rotate-1",
  },
  {
    quote:
      "Finally have my own e-commerce platform! This app is exactly what I’ve been dreaming of.",
    name: "Chindra",
    role: "Founder, Beli Elektronik",
    image: "/client-chindra.png",
    rotation: "-rotate-2",
  },
  {
    quote:
      "He rebuilt our broken CRM and payment system. Our whole team is much happier with the performance.",
    name: "Elena Rodriguez",
    role: "CMO, Reachy",
    image: "/client-elena.png",
    rotation: "rotate-1",
  },
  {
    quote: "Easy to work with, highly recommend.",
    name: "Ryan Miller",
    role: "Distribution Digital Lead, Lodgic",
    image: "/client-ryan.png",
    rotation: "-rotate-1",
  },
  {
    quote: "Hanif delivered exactly as we envisioned it.",
    name: "Ashley Vances",
    role: "Product Manager, Notto",
    image: "/client-ashley.png",
    rotation: "rotate-2",
  },
];

export const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 540; // Card width + gap
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="max-w-7xl sm:px-8 sm:py-24 px-6 py-20 mx-auto">
      {/* Header */}
      <div className="flex flex-col gap-y-2">
        <div
          className="flex flex-col justify-between mb-12"
          style={{ animation: "fadeSlideIn 1s ease-out 0.1s both" }}
        >
          <h2 className="text-5xl leading-[0.9] md:text-6xl text-black tracking-tighter text-left font-geist font-medium mb-4">
            Why me?
          </h2>
          <p className="text-xl sm:text-2xl text-black/60 leading-relaxed max-w-xl font-geist tracking-tighter font-medium">
            Think of it as your in-house talent with AI expertise — no hiring,
            no contracts, no agency headaches.
          </p>
        </div>

        <div
          className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 md:gap-x-8 md:gap-y-12 border-t border-black/10 pt-8 sm:pt-12"
          style={{ animation: "fadeSlideIn 1s ease-out 0.3s both" }}
        >
          <div className="space-y-2">
            <Image
              src="/direct-communication-icon.png"
              height={32}
              width={32}
              alt="direct communication icon"
              className="size-8"
            />
            <div className="text-xl sm:text-2xl font-medium text-black font-geist tracking-tighter">
              Direct communication
            </div>
            <p className="font-medium text-black/40 font-geist">
              No middleman, no outsource, just me.
            </p>
          </div>
          <div className="space-y-2">
            <Image
              src="/ai-workflow-icon.png"
              height={32}
              width={32}
              alt="ai icon"
              className="size-8"
            />
            <div className="text-xl sm:text-2xl font-medium text-black font-geist tracking-tighter">
              AI-powered workflows
            </div>
            <p className="font-medium text-black/40 font-geist">
              I use modern AI tools in my workflow to deliver high-quality work,
              faster.
            </p>
          </div>
          <div className="space-y-2">
            <Image
              src="/fast-turn-around-icon.png"
              height={32}
              width={32}
              alt="fast turnaround icon"
              className="size-8"
            />
            <div className="text-xl sm:text-2xl font-medium text-black font-geist tracking-tighter">
              Fast turnaround
            </div>
            <p className="font-medium text-black/40 font-geist">
              No bureaucracy, no approval chains. I move quickly from concept to
              implementation.
            </p>
          </div>
          <div className="space-y-2">
            <Image
              src="/always-in-the-loop-icon.png"
              height={32}
              width={32}
              alt="always in the loop icon"
              className="size-8"
            />
            <div className="text-xl sm:text-2xl font-medium text-black font-geist tracking-tighter">
              Always in the loop
            </div>
            <p className="font-medium text-black/40 font-geist">
              Get progress updates every 2 days via Loom.
            </p>
          </div>
          <div className="space-y-2">
            <Image
              src="/ownership-ip-clarity-icon.png"
              height={32}
              width={32}
              alt="ownership clarity icon"
              className="size-8"
            />
            <div className="text-xl sm:text-2xl font-medium text-black font-geist tracking-tighter">
              Ownership & IP clarity
            </div>
            <p className="font-medium text-black/40 font-geist">
              Full code ownership—you own everything I build, no strings
              attached.
            </p>
          </div>
          <div className="space-y-2">
            <Image
              src="/post-launch-support-icon.png"
              height={32}
              width={32}
              alt="post launch icon"
              className="size-8"
            />
            <div className="text-xl sm:text-2xl font-medium text-black font-geist tracking-tighter">
              Post-launch support
            </div>
            <p className="font-medium text-black/40 font-geist">
              I stick around after launch—bug fixes, updates, and guidance when
              you need it.
            </p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="relative overflow-hidden h-[360px] rounded-3xl -mx-4 sm:mx-0">
          {/* Edge fades */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-24 bg-linear-to-r from-gray-100 to-transparent z-10"
          ></div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-24 bg-linear-to-l from-gray-100 to-transparent z-10"
          ></div>

          {/* Rail */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto scroll-smooth px-4 sm:px-6 absolute top-0 right-0 bottom-0 left-0 items-center hide-scrollbar md:pt-10"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((testimonial, index) => (
              <article
                key={index}
                className={`min-w-[320px] sm:min-w-[520px] max-w-[640px] bg-white border border-neutral-200/70 rounded-[24px] p-6 sm:p-8 text-neutral-900 transition-transform duration-300 hover:-translate-y-1 shadow-xl ${testimonial.rotation} snap-center`}
              >
                <p className="text-lg sm:text-xl md:text-2xl text-neutral-900 tracking-tighter font-geist font-medium">
                  "{testimonial.quote}"
                </p>
                <div className="mt-8 flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-xl object-cover"
                  />
                  <div>
                    <div className="text-sm tracking-tight font-geist font-semibold">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-neutral-500 tracking-tight font-geist">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Controls */}
          <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3">
            <button
              aria-label="Previous"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`hover:bg-neutral-200 transition-all inline-flex text-neutral-900 bg-white w-10 h-10 border-neutral-200 border rounded-full items-center justify-center ${!canScrollLeft ? "opacity-50 cursor-not-allowed" : "opacity-100 cursor-pointer shadow-sm"}`}
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              aria-label="Next"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-10 h-10 rounded-full text-white bg-neutral-900 hover:bg-neutral-800 transition-all inline-flex items-center justify-center ${!canScrollRight ? "opacity-50 cursor-not-allowed" : "opacity-100 cursor-pointer shadow-lg"}`}
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

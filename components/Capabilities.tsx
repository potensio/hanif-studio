import React from "react";
import Image from "next/image";
import { Sparkles, Plus, Minus, ArrowRight } from "lucide-react";

export const Capabilities: React.FC = () => {
  return (
    <section className="max-w-7xl sm:px-8 sm:py-24 px-6 py-20 mx-auto">
      <div className="relative sm:rounded-[32px] sm:bg-white sm:border sm:border-black/10 sm:shadow-2xl z-10 sm:p-12">
        <div className="flex items-start justify-between mb-10 sm:mb-12">
          <div className="flex flex-col p-2 bg-gray-50 border border-black/5 rounded-xl shadow-xl gap-4 items-start">
            <Image
              src="/compass-icon.png"
              height={32}
              width={32}
              alt="email icon"
              className="size-8"
            />
          </div>

          <h2 className="text-5xl text-black font-medium tracking-tight leading-tight font-geist">
            Capabilities
          </h2>
        </div>

        <div className="bg-linear-to-b from-neutral-700 to-neutral-900 rounded-2xl ring-1 ring-white/10 overflow-hidden shadow-[0_2.8px_2.2px_rgba(0,0,0,0.034),0_6.7px_5.3px_rgba(0,0,0,0.048),0_12.5px_10px_rgba(0,0,0,0.06),0_22.3px_17.9px_rgba(0,0,0,0.072),0_41.8px_33.4px_rgba(0,0,0,0.086),0_100px_80px_rgba(0,0,0,0.12)]">
          {/* 001 */}
          <details className="group open:bg-white/5" open>
            <summary className="list-none cursor-pointer [&::-webkit-details-marker]:hidden">
              <div className="flex items-center gap-4 justify-between border-b border-white/10 p-4 sm:p-5">
                <div className="text-white/50 text-base font-geist">(001)</div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-xl font-medium tracking-tight font-geist">
                    Web Application
                  </p>
                </div>
                <div className="shrink-0 h-8 w-8 rounded-full bg-white/10 ring-1 ring-white/15 flex items-center justify-center text-white transition-colors group-hover:bg-white/20">
                  <Plus className="w-4 h-4 group-open:hidden" />
                  <Minus className="w-4 h-4 hidden group-open:block" />
                </div>
              </div>
            </summary>
            <div className="p-4 sm:p-6 animate-in slide-in-from-top-2 duration-200">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-7 flex items-start gap-4">
                  <div className="shrink-0 h-14 w-20 rounded-xl overflow-hidden ring-1 ring-white/20 bg-white/10">
                    <Image
                      src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1d73ea37-684c-4cd9-97fd-02bf2d7528d4_320w.jpg"
                      alt="Product dev"
                      width={80}
                      height={56}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-white text-xl font-medium tracking-tight font-geist">
                      Your idea, fully realized online
                    </h3>
                    <p className="text-neutral-300 text-sm mt-1 font-geist">
                      I build complete web applications tailored to your
                      business—from customer portals to internal tools. Fast,
                      secure, and designed to scale with you.
                    </p>
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-white/80 text-xs font-geist">
                    Technologies I use
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-white text-neutral-900 text-xs px-2.5 py-1 font-geist">
                      TypeScript
                    </span>
                    <span className="inline-flex items-center rounded-full bg-white text-neutral-900 text-xs px-2.5 py-1 font-geist">
                      Tailwind
                    </span>
                    <span className="inline-flex items-center rounded-full bg-white text-neutral-900 text-xs px-2.5 py-1 font-geist">
                      React
                    </span>
                    <span className="inline-flex items-center rounded-full bg-white text-neutral-900 text-xs px-2.5 py-1 font-geist">
                      Next.js
                    </span>
                    <span className="inline-flex items-center rounded-full bg-white text-neutral-900 text-xs px-2.5 py-1 font-geist">
                      Tanstack Start
                    </span>
                    <span className="inline-flex items-center rounded-full bg-white/80 text-neutral-900 text-xs px-2.5 py-1 font-geist">
                      + more
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </details>

          {/* 002 */}
          <details className="group">
            <summary className="list-none cursor-pointer [&::-webkit-details-marker]:hidden">
              <div className="flex items-center gap-4 justify-between border-t border-b border-white/10 p-4 sm:p-5">
                <div className="text-white/50 text-base font-geist">(002)</div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-xl font-medium tracking-tight font-geist">
                    Mobile Application
                  </p>
                </div>
                <div className="shrink-0 h-8 w-8 rounded-full bg-white/10 ring-1 ring-white/15 flex items-center justify-center text-white transition-colors group-hover:bg-white/20">
                  <Plus className="w-4 h-4 group-open:hidden" />
                  <Minus className="w-4 h-4 hidden group-open:block" />
                </div>
              </div>
            </summary>
            <div className="p-4 sm:p-6 animate-in slide-in-from-top-2 duration-200">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-7">
                  <h3 className="text-white text-xl font-medium tracking-tight font-geist">
                    Reach customers on any device
                  </h3>
                  <p className="text-neutral-300 text-sm mt-1 font-geist">
                    Native iOS and Android apps that work smoothly, even
                    offline. I handle everything from design to app store
                    launch.
                  </p>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-white/80 text-xs font-geist">
                    Technologies I use
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-white text-neutral-900 text-xs px-2.5 py-1 font-geist">
                      React Native
                    </span>
                    <span className="inline-flex items-center rounded-full bg-white text-neutral-900 text-xs px-2.5 py-1 font-geist">
                      Expo
                    </span>
                    <span className="inline-flex items-center rounded-full bg-white/80 text-neutral-900 text-xs px-2.5 py-1 font-geist">
                      + more
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </details>

          {/* 003 */}
          <details className="group">
            <summary className="list-none cursor-pointer [&::-webkit-details-marker]:hidden">
              <div className="flex items-center gap-4 justify-between border-t border-b border-white/10 p-4 sm:p-5">
                <div className="text-white/50 text-base font-geist">(003)</div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-xl font-medium tracking-tight font-geist">
                    Chrome Extension
                  </p>
                </div>
                <div className="shrink-0 h-8 w-8 rounded-full bg-white/10 ring-1 ring-white/15 flex items-center justify-center text-white transition-colors group-hover:bg-white/20">
                  <Plus className="w-4 h-4 group-open:hidden" />
                  <Minus className="w-4 h-4 hidden group-open:block" />
                </div>
              </div>
            </summary>
            <div className="p-4 sm:p-6 animate-in slide-in-from-top-2 duration-200">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-7">
                  <h3 className="text-white text-xl font-medium tracking-tight font-geist">
                    Boost productivity right in the browser
                  </h3>
                  <p className="text-neutral-300 text-sm mt-1 font-geist">
                    Custom Chrome extensions that automate tasks, enhance
                    workflows, and integrate seamlessly with the tools your team
                    already uses.
                  </p>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-white/80 text-xs font-geist">
                    Technologies I use
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-white text-neutral-900 text-xs px-2.5 py-1 font-geist">
                      Chrome APIs
                    </span>
                    <span className="inline-flex items-center rounded-full bg-white text-neutral-900 text-xs px-2.5 py-1 font-geist">
                      TypeScript
                    </span>
                    <span className="inline-flex items-center rounded-full bg-white text-neutral-900 text-xs px-2.5 py-1 font-geist">
                      React
                    </span>
                    <span className="inline-flex items-center rounded-full bg-white text-neutral-900 text-xs px-2.5 py-1 font-geist">
                      Webpack
                    </span>
                    <span className="inline-flex items-center rounded-full bg-white/80 text-neutral-900 text-xs px-2.5 py-1 font-geist">
                      + more
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </details>

          {/* 004 */}
          <details className="group">
            <summary className="list-none cursor-pointer [&::-webkit-details-marker]:hidden">
              <div className="flex items-center gap-4 justify-between border-t border-white/10 p-4 sm:p-5">
                <div className="text-white/50 text-base font-geist">(004)</div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-xl font-medium tracking-tight font-geist">
                    Integration, Micro Service, etc
                  </p>
                </div>
                <div className="shrink-0 h-8 w-8 rounded-full bg-white/10 ring-1 ring-white/15 flex items-center justify-center text-white transition-colors group-hover:bg-white/20">
                  <Plus className="w-4 h-4 group-open:hidden" />
                  <Minus className="w-4 h-4 hidden group-open:block" />
                </div>
              </div>
            </summary>
            <div className="p-4 sm:p-6 animate-in slide-in-from-top-2 duration-200">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-7">
                  <h3 className="text-white text-xl font-medium tracking-tight font-geist">
                    Connect your tools, automate the busy work
                  </h3>
                  <p className="text-neutral-300 text-sm mt-1 font-geist">
                    Link your existing software together—CRMs, payment systems,
                    databases. I build the bridges so your data flows
                    automatically.
                  </p>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-white/80 text-xs font-geist">
                    Technologies I use
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-white text-neutral-900 text-xs px-2.5 py-1 font-geist">
                      REST APIs
                    </span>
                    <span className="inline-flex items-center rounded-full bg-white text-neutral-900 text-xs px-2.5 py-1 font-geist">
                      GraphQL
                    </span>
                    <span className="inline-flex items-center rounded-full bg-white text-neutral-900 text-xs px-2.5 py-1 font-geist">
                      Docker
                    </span>
                    <span className="inline-flex items-center rounded-full bg-white text-neutral-900 text-xs px-2.5 py-1 font-geist">
                      Kubernetes
                    </span>
                    <span className="inline-flex items-center rounded-full bg-white/80 text-neutral-900 text-xs px-2.5 py-1 font-geist">
                      + more
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

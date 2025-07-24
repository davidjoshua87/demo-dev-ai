"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroBanner() {
  return (
    <section className="relative min-h-[70vh] sm:min-h-[80vh] md:min-h-screen lg:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/homepage/hero-banner-bg.png"
          alt="Hero Background"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-5 bg-gradient-to-r from-black/30 via-transparent to-black" />

      {/* Hero Content */}
      <div className="relative z-10 container-global py-6 sm:py-16 md:py-20">
        <div className="flex items-center justify-center lg:justify-start min-h-[350px] sm:min-h-[500px] md:min-h-[600px]">
          {/* Content Container */}
          <div className="w-full lg:w-1/2 max-w-4xl text-center lg:text-left">
            {/* Main Heading */}
            <h1 className="text-white font-manrope font-semibold mb-3 sm:mb-6 px-2 sm:px-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight md:leading-[76px] max-w-[749px]">
              Your Mission-Critical Cybersecurity AI Partner
            </h1>

            {/* Subheading */}
            <p className="text-gray-200 font-manrope font-normal mb-4 sm:mb-8 px-2 sm:px-0 text-sm sm:text-base md:text-lg leading-relaxed md:leading-7 max-w-[431px] lg:max-w-none">
              Tech and AI Transformation must be followed-up with adequate
              Cyber-Security measurement.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start px-2 sm:px-0">
              <Button className="text-white text-sm font-semibold px-6 py-3 h-11 min-w-[160px] max-w-[200px] sm:max-w-none rounded-full bg-blue-600 hover:bg-gradient-to-b hover:from-blue-600 hover:to-cyan-400 transition-all duration-200 hover:shadow-lg w-auto sm:w-auto">
                Talk With Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/ui/navigation";
import HeroBanner from "@/components/ui/hero-banner";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar Section */}
      <Navigation />

      {/* Hero Banner Section */}
      <HeroBanner />

      {/* Solutions Section */}
      <section className="py-20 bg-white">
        <div className="container-global">
          {/* Section Header */}
          <div className="text-left mb-16">
            <h2
              className="font-manrope font-semibold text-gray-900 mb-4"
              style={{
                fontFamily: "Manrope",
                fontWeight: 600,
                fontSize: "48px",
                lineHeight: "64px",
                letterSpacing: "0%",
                width: "611px",
                height: "64px",
                opacity: 1,
                margin: "0",
              }}
            >
              Cybersecurity As a Service
            </h2>
            <p
              className="text-gray-600"
              style={{
                fontFamily: "Manrope",
                fontWeight: 500,
                fontSize: "18px",
                lineHeight: "100%",
                letterSpacing: "-1%",
                width: "582px",
                height: "75px",
                opacity: 1,
                margin: "0",
              }}
            >
              24/7 monitoring, threat detection, and expert incident
              response—all from the cloud. Focus on what you do best while we
              safeguard your digital assets.
            </p>
          </div>

          {/* Solution Cards Grid */}
          <div className="relative w-full pl-4 sm:px-8 md:pl-16 lg:pl-24">
            {/* Carousel Container */}
            <div className="overflow-hidden" style={{ margin: "0 auto" }}>
              <div
                className="flex transition-transform duration-500 ease-in-out gap-6"
                id="carousel-track"
              >
                {[1, 2, 3, 4, 5, 6].map((index) => (
                  <div
                    key={index}
                    className="flex-shrink-0"
                    style={{
                      width: "384px",
                      height: "482px",
                    }}
                  >
                    <Card
                      className="group relative overflow-hidden border-0 transition-all duration-300 hover:shadow-xl"
                      style={{
                        width: "384px",
                        height: "482px",
                        borderRadius: "24px",
                        background:
                          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.12)",
                      }}
                    >
                      {/* Card Background Image */}
                      <div className="absolute inset-0 z-0">
                        <Image
                          src={`/images/homepage/solution-card-bg-${index}.png`}
                          alt={`Solution ${index} Background`}
                          fill
                          className="object-cover"
                          style={{ borderRadius: "24px" }}
                        />
                        {/* Gradient Overlay */}
                        <div
                          className="absolute inset-0"
                          style={{
                            borderRadius: "24px",
                            background:
                              "linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.7) 100%)",
                          }}
                        ></div>
                      </div>

                      {/* Card Content */}
                      <div
                        className="relative z-10 flex flex-col justify-between h-full"
                        style={{ padding: "32px" }}
                      >
                        {/* Solution Image */}
                        <div
                          className="flex items-center justify-center"
                          style={{ height: "240px" }}
                        >
                          <div className="relative">
                            <Image
                              src={`/images/homepage/solution-card-${index}.png`}
                              alt={`Solution ${index}`}
                              width={320}
                              height={200}
                              className="transition-transform duration-300 group-hover:scale-105"
                              style={{
                                borderRadius: "16px",
                                boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.2)",
                              }}
                            />
                          </div>
                        </div>

                        {/* Card Text Content */}
                        <div className="space-y-4">
                          <CardHeader className="p-0">
                            <CardTitle
                              className="text-white font-semibold group-hover:text-blue-100 transition-colors duration-300"
                              style={{
                                fontFamily: "Manrope",
                                fontSize: "28px",
                                lineHeight: "36px",
                                fontWeight: 600,
                                letterSpacing: "-0.02em",
                              }}
                            >
                              Solution {index}
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="p-0">
                            <p
                              className="text-white/90 group-hover:text-white transition-colors duration-300"
                              style={{
                                fontFamily: "Manrope",
                                fontSize: "16px",
                                lineHeight: "24px",
                                fontWeight: 400,
                                letterSpacing: "-0.01em",
                                marginBottom: "24px",
                              }}
                            >
                              Innovative solution designed to streamline your
                              workflow and enhance productivity with
                              cutting-edge technology.
                            </p>
                          </CardContent>

                          {/* Learn More Button */}
                          <div>
                            <button
                              className="text-white font-medium transition-all duration-300 transform hover:scale-105"
                              style={{
                                background: "rgba(255, 255, 255, 0.2)",
                                backdropFilter: "blur(10px)",
                                border: "1px solid rgba(255, 255, 255, 0.3)",
                                borderRadius: "12px",
                                padding: "12px 24px",
                                fontFamily: "Manrope",
                                fontSize: "16px",
                                fontWeight: 500,
                                letterSpacing: "-0.01em",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background =
                                  "rgba(255, 255, 255, 0.3)";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background =
                                  "rgba(255, 255, 255, 0.2)";
                              }}
                            >
                              Learn More
                            </button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Navigation Buttons */}
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 transition-all duration-300 transform hover:scale-110"
              style={{
                transform: "translateY(-50%) translateX(-20px)",
                background: "rgba(255, 255, 255, 0.9)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "50%",
                width: "48px",
                height: "48px",
                boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
              }}
              onClick={() => {
                const track = document.getElementById("carousel-track");
                if (track) {
                  const currentTransform = track.style.transform;
                  const currentTranslate = currentTransform
                    ? parseInt(currentTransform.match(/-?\d+/)?.[0] || "0")
                    : 0;
                  const cardWidth = 384 + 24; // card width + gap
                  const containerWidth =
                    track.parentElement?.offsetWidth || 1200;
                  const maxScroll = Math.min(cardWidth, containerWidth);
                  const newTranslate = Math.min(
                    currentTranslate + maxScroll,
                    0
                  );
                  track.style.transform = `translateX(${newTranslate}px)`;
                }
              }}
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{ margin: "auto" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 transition-all duration-300 transform hover:scale-110"
              style={{
                transform: "translateY(-50%) translateX(20px)",
                background: "rgba(255, 255, 255, 0.9)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "50%",
                width: "48px",
                height: "48px",
                boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
              }}
              onClick={() => {
                const track = document.getElementById("carousel-track");
                if (track) {
                  const currentTransform = track.style.transform;
                  const currentTranslate = currentTransform
                    ? parseInt(currentTransform.match(/-?\d+/)?.[0] || "0")
                    : 0;
                  const cardWidth = 384 + 24; // card width + gap
                  const containerWidth =
                    track.parentElement?.offsetWidth || 1200;
                  const maxScroll = -(cardWidth * 3); // assuming 6 cards, show 3 at a time
                  const newTranslate = Math.max(
                    currentTranslate - cardWidth,
                    maxScroll
                  );
                  track.style.transform = `translateX(${newTranslate}px)`;
                }
              }}
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{ margin: "auto" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Carousel Indicators */}
            <div
              className="flex justify-center space-x-2"
              style={{ marginTop: "48px" }}
            >
              {[0, 1, 2].map((indicator) => (
                <button
                  key={indicator}
                  className="transition-colors duration-300"
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: indicator === 0 ? "#667eea" : "#d1d5db",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    const track = document.getElementById("carousel-track");
                    if (track) {
                      const cardWidth = 384 + 24; // card width + gap
                      const translateValue = -(indicator * cardWidth);
                      track.style.transform = `translateX(${translateValue}px)`;

                      // Update indicator states
                      const indicators = track.parentElement?.querySelectorAll(
                        'button[style*="border-radius: 50%"][style*="width: 12px"]'
                      );
                      indicators?.forEach((btn, idx) => {
                        (btn as HTMLElement).style.background =
                          idx === indicator ? "#667eea" : "#d1d5db";
                      });
                    }
                  }}
                  onMouseEnter={(e) => {
                    if (
                      e.currentTarget.style.background === "rgb(209, 213, 219)"
                    ) {
                      e.currentTarget.style.background = "#9ca3af";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (
                      e.currentTarget.style.background === "rgb(156, 163, 175)"
                    ) {
                      e.currentTarget.style.background = "#d1d5db";
                    }
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Feature Cards with Icons */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-2 border-gray-100"
              >
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-6 p-4 bg-gray-50 rounded-full w-24 h-24 flex items-center justify-center">
                    <Image
                      src={`/images/homepage/why-us-card-icon-${index}.png`}
                      alt={`Feature ${index}`}
                      width={64}
                      height={64}
                      className="mx-auto"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    Feature {index}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Excellence in every detail with innovative solutions that
                    drive results and exceed expectations.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Image
              src="/images/homepage/our-client-section.png"
              alt="Our Clients"
              width={1920}
              height={400}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Connect With Us Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/homepage/connect-with-us-bg.png"
            alt="Connect With Us Background"
            fill
            className="object-cover"
          />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10">
          <Image
            src="/images/homepage/connect-with-us-section.png"
            alt="Connect With Us"
            width={1920}
            height={500}
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gray-900">
        <Image
          src="/images/homepage/footer.png"
          alt="Footer"
          width={1920}
          height={300}
          className="w-full h-auto"
        />
      </footer>
    </div>
  );
}

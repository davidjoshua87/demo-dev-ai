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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Individual Solution Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <Card
                key={index}
                className="relative overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Card Background */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={`/images/homepage/solution-card-bg-${index}.png`}
                    alt={`Solution ${index} Background`}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Card Content */}
                <div className="relative z-10 p-6">
                  <div className="mb-4">
                    <Image
                      src={`/images/homepage/solution-card-${index}.png`}
                      alt={`Solution ${index}`}
                      width={300}
                      height={200}
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                  <CardHeader className="p-0">
                    <CardTitle className="text-white text-xl font-bold mb-2">
                      Solution {index}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-white/90 text-sm leading-relaxed">
                      Innovative solution designed to streamline your workflow
                      and enhance productivity with cutting-edge technology.
                    </p>
                  </CardContent>
                </div>
              </Card>
            ))}
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

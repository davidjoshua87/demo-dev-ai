"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Transition } from "@headlessui/react";
import { HomeIcon, GearIcon, PersonIcon } from "@radix-ui/react-icons";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("home");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 font-sans">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Next.js Tech Stack Demo
          </h1>
          <p className="text-lg text-gray-600 font-medium">
            Featuring Manrope font, TailwindCSS, shadcn/ui, Radix UI, and
            Headless UI
          </p>
        </header>

        {/* Technology Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HomeIcon className="w-5 h-5" />
                Next.js 15
              </CardTitle>
              <CardDescription>
                React framework with App Router and Turbopack
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Modern React framework with server components, file-based
                routing, and excellent developer experience.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GearIcon className="w-5 h-5" />
                TailwindCSS
              </CardTitle>
              <CardDescription>Utility-first CSS framework</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Rapidly build modern websites with utility classes and
                responsive design.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PersonIcon className="w-5 h-5" />
                Manrope Font
              </CardTitle>
              <CardDescription>Modern, clean typography</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Beautiful, readable font family optimized for digital
                interfaces.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Interactive Demo Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6">
            Interactive Components Demo
          </h2>

          {/* Headless UI Transition Demo */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4">Headless UI Transition</h3>
            <Button onClick={() => setIsOpen(!isOpen)} className="mb-4">
              Toggle Animation
            </Button>
            <Transition
              show={isOpen}
              enter="transition-opacity duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="bg-blue-100 p-4 rounded-lg">
                <p className="text-blue-800">
                  🎉 This content appears with a smooth transition thanks to
                  Headless UI!
                </p>
              </div>
            </Transition>
          </div>

          {/* Tab Navigation */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4">Tab Navigation</h3>
            <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg mb-4">
              {[
                { id: "home", label: "Home", icon: HomeIcon },
                { id: "settings", label: "Settings", icon: GearIcon },
                { id: "profile", label: "Profile", icon: PersonIcon },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                    selectedTab === tab.id
                      ? "bg-white text-blue-600 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              {selectedTab === "home" && (
                <p>
                  🏠 Welcome to the home tab! This demonstrates state management
                  with React hooks.
                </p>
              )}
              {selectedTab === "settings" && (
                <p>
                  ⚙️ Settings tab content. All transitions are smooth and
                  accessible.
                </p>
              )}
              {selectedTab === "profile" && (
                <p>
                  👤 Profile section. Built with modern React patterns and
                  TypeScript.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Technology Stack Summary */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-3">
                Core Technologies
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✅ Next.js 15 with App Router</li>
                <li>✅ TypeScript for type safety</li>
                <li>✅ TailwindCSS for styling</li>
                <li>✅ Manrope font family</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-3">UI Components</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✅ shadcn/ui component library</li>
                <li>✅ Radix UI primitives</li>
                <li>✅ Headless UI for transitions</li>
                <li>✅ Lucide React icons</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-12 py-8 border-t border-gray-200">
          <p className="text-gray-600">
            Built with ❤️ using modern web technologies
          </p>
        </footer>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg border-b border-gray-700">
      <nav className="container-global">
        <div
          className="flex items-center justify-between"
          style={{ height: "80px" }}
        >
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                src="/images/logo.png"
                alt="Company Logo"
                className="filter drop-shadow-lg"
                style={{ height: "48px", width: "auto" }}
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center" style={{ gap: "48px" }}>
            {/* Solutions Dropdown */}
            <div className="relative group">
              <Button
                variant="ghost"
                className="flex items-center text-white hover:text-blue-400 text-sm font-medium transition-colors duration-200 cursor-pointer bg-transparent hover:bg-transparent"
                style={{ padding: "12px 16px" }}
              >
                Solutions
                <svg
                  className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Button>

              {/* Dropdown Menu */}
              <div
                className="absolute left-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                style={{ width: "280px", marginTop: "8px" }}
              >
                <div className="py-2">
                  <a
                    href="#"
                    className="flex items-center text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    style={{
                      height: "48px",
                      paddingLeft: "20px",
                      paddingRight: "20px",
                    }}
                  >
                    <div className="font-medium">Assessment</div>
                  </a>
                  <a
                    href="#"
                    className="flex items-center text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    style={{
                      height: "48px",
                      paddingLeft: "20px",
                      paddingRight: "20px",
                    }}
                  >
                    <div className="font-medium">CyberShield as a Service</div>
                  </a>
                  <a
                    href="#"
                    className="flex items-center text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    style={{
                      height: "48px",
                      paddingLeft: "20px",
                      paddingRight: "20px",
                    }}
                  >
                    <div className="font-medium">SecureOps</div>
                  </a>
                  <a
                    href="#"
                    className="flex items-center text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    style={{
                      height: "48px",
                      paddingLeft: "20px",
                      paddingRight: "20px",
                    }}
                  >
                    <div className="font-medium">Ultimate Threat Response</div>
                  </a>
                  <a
                    href="#"
                    className="flex items-center text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    style={{
                      height: "48px",
                      paddingLeft: "20px",
                      paddingRight: "20px",
                    }}
                  >
                    <div className="font-medium">Remediation</div>
                  </a>
                  <a
                    href="#"
                    className="flex items-center text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    style={{
                      height: "48px",
                      paddingLeft: "20px",
                      paddingRight: "20px",
                    }}
                  >
                    <div className="font-medium">Essential Toolset</div>
                  </a>
                </div>
              </div>
            </div>

            {/* Connect Now Button */}
            <div className="relative">
              <Button
                className="text-white text-sm font-semibold transition-all duration-200 hover:shadow-lg relative overflow-hidden rounded-full bg-blue-600 hover:bg-gradient-to-b hover:from-blue-600 hover:to-cyan-400 cursor-pointer"
                style={{
                  paddingLeft: "24px",
                  paddingTop: "12px",
                  paddingBottom: "12px",
                  height: "44px",
                }}
              >
                Connect Now
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-400 hover:bg-gray-800 transition-colors duration-200"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-700 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-screen opacity-100 transform translate-y-0"
            : "max-h-0 opacity-0 transform -translate-y-4"
        }`}
      >
        <div className="border-t border-gray-700 shadow-lg bg-gray-900">
          <div
            className={`transition-all duration-500 ease-out delay-100 ${
              isMobileMenuOpen
                ? "transform translate-y-0 opacity-100"
                : "transform -translate-y-4 opacity-0"
            }`}
            style={{ padding: "16px 16px 24px 16px" }}
          >
            {/* Mobile Solutions Section */}
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                {[
                  "Assessment",
                  "CyberShield as a Service",
                  "SecureOps",
                  "Ultimate Threat Response",
                  "Remediation",
                  "Essential Toolset",
                ].map((item, index) => (
                  <a
                    key={item}
                    href="#"
                    className={`text-white hover:bg-blue-600 hover:text-white hover:shadow-lg transition-all duration-300 rounded-lg transform hover:scale-105 ${
                      isMobileMenuOpen
                        ? "translate-x-0 opacity-100"
                        : "translate-x-8 opacity-0"
                    }`}
                    style={{
                      padding: "12px",
                      height: "44px",
                      display: "flex",
                      alignItems: "center",
                      transitionDelay: `${200 + index * 100}ms`,
                      backgroundColor: "transparent",
                    }}
                  >
                    <div className="font-medium text-sm text-white">{item}</div>
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Connect Now Button */}
            <div
              className={`transition-all duration-500 ease-out ${
                isMobileMenuOpen
                  ? "transform translate-y-0 opacity-100"
                  : "transform translate-y-4 opacity-0"
              }`}
              style={{
                marginTop: "16px",
                paddingTop: "16px",
                borderTop: "1px solid #374151",
                transitionDelay: "800ms",
              }}
            >
              <Button
                className="w-full text-white text-sm font-semibold transition-all duration-300 hover:shadow-lg relative overflow-hidden rounded-full bg-blue-600 hover:bg-gradient-to-b hover:from-blue-600 hover:to-cyan-400 hover:scale-105"
                style={{
                  paddingLeft: "24px",
                  paddingRight: "24px",
                  paddingTop: "12px",
                  paddingBottom: "12px",
                  height: "44px",
                }}
              >
                Connect Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

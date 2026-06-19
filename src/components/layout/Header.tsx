"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Container } from "@/components/sections"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import { siteConfig, navigationLinks } from "@/constants/siteConfig"
import { ConsultationModal } from "@/components/forms/ConsultationModal"

/**
 * Header - Main site header with navigation
 *
 * Features:
 * - Sticky header with blur effect on scroll
 * - Mobile-responsive navigation
 * - Active link highlighting
 * - CTA button for consultation
 * - Glassmorphism styling
 */
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setOpenDropdown(null)
  }, [pathname])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setOpenDropdown(null)
    if (openDropdown) {
      document.addEventListener("click", handleClickOutside)
      return () => document.removeEventListener("click", handleClickOutside)
    }
  }, [openDropdown])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 py-4",
        isScrolled
          ? "bg-transparent"
          : "bg-transparent"
      )}
    >
      <Container size="xl">
        {/* Pill-shaped navigation bar */}
        <div
          className={cn(
            "flex h-16 items-center justify-between rounded-full px-6 transition-all duration-300",
            isScrolled
              ? "bg-white/90 backdrop-blur-lg shadow-lg"
              : "bg-white shadow-md"
          )}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl lg:text-3xl font-signature text-primary-700">
              Dr. Antipov
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navigationLinks.map((link) => {
              const hasSubmenu = 'submenu' in link && link.submenu && link.submenu.length > 0
              const isActive = pathname === link.href || (hasSubmenu && link.submenu?.some(sub => pathname === sub.href))

              if (hasSubmenu) {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(link.href)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "text-sm font-medium transition-all duration-200 px-4 py-2 rounded-full flex items-center gap-1",
                        isActive
                          ? "bg-primary-100 text-primary-700"
                          : "text-neutral-700 hover:bg-neutral-100 hover:text-primary-600"
                      )}
                    >
                      {link.title}
                      <ChevronDown className={cn(
                        "h-3 w-3 transition-transform duration-200",
                        openDropdown === link.href && "rotate-180"
                      )} />
                    </Link>

                    {/* Dropdown Menu - wrapped in pointer-events div to maintain hover state */}
                    {openDropdown === link.href && (
                      <div className="absolute top-full left-0 pt-2 z-50">
                        <div className="w-64 bg-white rounded-2xl shadow-xl border border-neutral-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                          {link.submenu?.map((sublink) => (
                            <Link
                              key={sublink.href}
                              href={sublink.href}
                              className={cn(
                                "block px-4 py-3 text-sm transition-colors",
                                pathname === sublink.href
                                  ? "bg-primary-50 text-primary-700 font-medium"
                                  : "text-neutral-700 hover:bg-neutral-50"
                              )}
                            >
                              {sublink.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-all duration-200 px-4 py-2 rounded-full",
                    pathname === link.href
                      ? "bg-primary-100 text-primary-700"
                      : "text-neutral-700 hover:bg-neutral-100 hover:text-primary-600"
                  )}
                >
                  {link.title}
                </Link>
              )
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden xl:flex items-center space-x-2">
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
              className="text-sm font-medium text-neutral-700 hover:text-primary-600 transition-colors flex items-center space-x-2 px-3 py-2 rounded-full hover:bg-neutral-100"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden xl:inline">{siteConfig.contact.phone}</span>
            </a>
            <ConsultationModal>
              <Button size="lg">Book Consultation</Button>
            </ConsultationModal>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden p-2 text-neutral-700 hover:bg-neutral-100 rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="xl:hidden mt-4 bg-white rounded-3xl shadow-lg p-6">
            <nav className="flex flex-col space-y-2">
              {navigationLinks.map((link) => {
                const hasSubmenu = 'submenu' in link && link.submenu && link.submenu.length > 0
                const isActive = pathname === link.href || (hasSubmenu && link.submenu?.some(sub => pathname === sub.href))
                const isOpen = openDropdown === link.href

                if (hasSubmenu) {
                  return (
                    <div key={link.href}>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          setOpenDropdown(isOpen ? null : link.href)
                        }}
                        className={cn(
                          "w-full text-sm font-medium transition-all duration-200 py-3 px-4 rounded-full flex items-center justify-between",
                          isActive
                            ? "bg-primary-100 text-primary-700"
                            : "text-neutral-700 hover:bg-neutral-100"
                        )}
                      >
                        {link.title}
                        <ChevronDown className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          isOpen && "rotate-180"
                        )} />
                      </button>

                      {/* Mobile Submenu */}
                      {isOpen && (
                        <div className="mt-2 ml-4 space-y-1">
                          {link.submenu?.map((sublink) => (
                            <Link
                              key={sublink.href}
                              href={sublink.href}
                              className={cn(
                                "block text-sm py-2 px-4 rounded-full transition-colors",
                                pathname === sublink.href
                                  ? "bg-primary-50 text-primary-700 font-medium"
                                  : "text-neutral-600 hover:bg-neutral-50"
                              )}
                            >
                              {sublink.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-sm font-medium transition-all duration-200 py-3 px-4 rounded-full",
                      pathname === link.href
                        ? "bg-primary-100 text-primary-700"
                        : "text-neutral-700 hover:bg-neutral-100"
                    )}
                  >
                    {link.title}
                  </Link>
                )
              })}
              <div className="pt-4 space-y-3 border-t border-neutral-200 mt-4">
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
                  className="flex items-center space-x-2 text-sm font-medium text-neutral-700 hover:text-primary-600 transition-colors py-2 px-4 hover:bg-neutral-100 rounded-full"
                >
                  <Phone className="h-4 w-4" />
                  <span>{siteConfig.contact.phone}</span>
                </a>
                <ConsultationModal>
                  <Button className="w-full" size="lg">Book Consultation</Button>
                </ConsultationModal>
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  )
}

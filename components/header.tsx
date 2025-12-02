"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, Moon, Sun, Search, X, Home, Calculator, HelpCircle, BookOpen } from "lucide-react"
import Image from "next/image"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useTheme } from "./theme-provider"

export function Header() {
  const { theme, toggleTheme, mounted } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl sticky top-0 z-50 shadow-lg shadow-gray-200/50 dark:shadow-gray-900/50 transition-colors">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="flex items-center justify-between h-24">
            <div className="flex items-center gap-8">
              <Link href="/">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-LCnFAhRppf1WpoIrMPm80uY0pn1a0U.png"
                  alt="CTributária"
                  width={320}
                  height={70}
                  className="h-14 w-auto transition-transform hover:scale-105 duration-300 cursor-pointer"
                />
              </Link>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="/"
                className="text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-[#FF7A00] transition-all duration-300 relative group"
              >
                Início
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF7A00] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/ferramentas"
                className="text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-[#FF7A00] transition-all duration-300 relative group"
              >
                Calculadoras
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF7A00] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/faq"
                className="text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-[#FF7A00] transition-all duration-300 relative group"
              >
                FAQ
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF7A00] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/glossario"
                className="text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-[#FF7A00] transition-all duration-300 relative group"
              >
                Glossário
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF7A00] group-hover:w-full transition-all duration-300"></span>
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <div className="hidden lg:flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2 transition-all hover:bg-gray-200 dark:hover:bg-gray-700">
                <Search className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  placeholder="Pesquisar..."
                  className="border-0 bg-transparent text-sm w-[200px] focus-visible:ring-0 p-0 h-auto dark:text-gray-200"
                />
              </div>

              <Select defaultValue="MG">
                <SelectTrigger className="w-[90px] border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors dark:text-gray-200">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="MG">MG</SelectItem>
                  <SelectItem value="SP">SP</SelectItem>
                  <SelectItem value="RJ">RJ</SelectItem>
                  <SelectItem value="RS">RS</SelectItem>
                  <SelectItem value="BA">BA</SelectItem>
                  <SelectItem value="PR">PR</SelectItem>
                  <SelectItem value="SC">SC</SelectItem>
                </SelectContent>
              </Select>

              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors rounded-full"
              >
                {mounted ? (
                  theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden animate-fade-in"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Mobile menu sidebar */}
          <div className="fixed top-0 right-0 h-full w-[280px] bg-white dark:bg-gray-900 shadow-2xl z-50 md:hidden animate-slide-in-right">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Menu</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <nav className="space-y-2">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <Home className="h-5 w-5 text-[#FF7A00]" />
                  <span className="font-semibold">Início</span>
                </Link>

                <Link
                  href="/ferramentas"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <Calculator className="h-5 w-5 text-[#FF7A00]" />
                  <span className="font-semibold">Calculadoras</span>
                </Link>

                <Link
                  href="/faq"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <HelpCircle className="h-5 w-5 text-[#FF7A00]" />
                  <span className="font-semibold">FAQ</span>
                </Link>

                <Link
                  href="/glossario"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <BookOpen className="h-5 w-5 text-[#FF7A00]" />
                  <span className="font-semibold">Glossário</span>
                </Link>

                <div className="pt-6 mt-6 border-t border-gray-200 dark:border-gray-700">
                  <Link
                    href="/noticia/1"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors text-sm"
                  >
                    Reforma Tributária
                  </Link>
                  <Link
                    href="/#gtin"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors text-sm"
                  >
                    GTIN
                  </Link>
                  <Link
                    href="/#nfe"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors text-sm"
                  >
                    Notas Fiscais
                  </Link>
                </div>
              </nav>

              <div className="mt-8 p-4 bg-gradient-to-r from-[#FF7A00] to-[#FF9500] rounded-xl text-white">
                <p className="text-sm font-semibold mb-2">Precisa de ajuda?</p>
                <p className="text-xs mb-3">Fale com nossos especialistas</p>
                <a
                  href="https://wa.me/5534998623164"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-white text-[#FF7A00] font-semibold py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

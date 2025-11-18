"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calculator } from 'lucide-react'
import Link from "next/link"

export function FloatingCalculatorButton() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href="/ferramentas" className="fixed bottom-32 left-8 z-40">
      <Button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="h-16 w-16 rounded-full bg-gradient-to-r from-[#0046B3] to-[#0046B3]/90 hover:from-[#0046B3]/90 hover:to-[#0046B3]/80 shadow-2xl shadow-[#0046B3]/40 hover:shadow-3xl hover:shadow-[#0046B3]/50 transition-all duration-300 hover:scale-110"
        size="icon"
      >
        <Calculator className="h-7 w-7 text-white" />
        
        {isHovered && (
          <span className="absolute left-20 whitespace-nowrap bg-gray-900 text-white text-sm px-4 py-2 rounded-lg shadow-xl animate-fade-in">
            Calculadora IBS/CBS
          </span>
        )}
      </Button>
    </Link>
  )
}

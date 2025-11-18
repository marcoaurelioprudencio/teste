"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText, Calendar } from "lucide-react"
import Image from "next/image"

export function NewsletterDownload() {
  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "/portal-news-03-11.pdf"
    link.download = "CTributaria-Portal-News-03-11-2025.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Card className="overflow-hidden bg-gradient-to-br from-white to-blue-50/30 dark:from-gray-800 dark:to-gray-900 border-2 border-[#0046B3]/20 shadow-xl hover:shadow-2xl transition-all duration-300 group">
      <div className="p-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-gradient-to-br from-[#FF7A00] to-[#FF9500] rounded-xl">
            <FileText className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Portal News</h3>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Calendar className="h-4 w-4" />
              <span>Edição 22 de Setembro, 2025</span>
            </div>
          </div>
        </div>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          Baixe nosso jornal mensal para se informar sobre as últimas novidades da Reforma Tributária, Imposto Seletivo,
          alterações na Lei Complementar nº 214/2025 e muito mais. Conteúdo exclusivo preparado por nossa equipe de
          especialistas.
        </p>

        <div className="relative mb-6 group/image overflow-hidden rounded-xl border-2 border-gray-200 dark:border-gray-700 shadow-lg">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-n9hANiacfcgmkPuGi0Ej9yd7EXJIoS.png"
            alt="Portal News - Reforma Tributária em foco"
            width={800}
            height={400}
            className="w-full h-auto transition-transform duration-500 group-hover/image:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3 transform scale-90 group-hover/image:scale-100 transition-transform duration-300">
                <Download className="h-10 w-10 text-[#FF7A00]" />
              </div>
              <p className="text-white font-bold text-lg">Clique para baixar</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            onClick={handleDownload}
            className="flex-1 bg-gradient-to-r from-[#FF7A00] to-[#FF9500] hover:from-[#FF7A00]/90 hover:to-[#FF9500]/90 text-white font-bold py-6 rounded-xl shadow-lg shadow-[#FF7A00]/30 hover:shadow-xl hover:shadow-[#FF7A00]/40 transition-all duration-300 hover:scale-105 group/button"
          >
            <Download className="h-5 w-5 mr-2 group-hover/button:animate-bounce" />
            Baixar PDF Completo
          </Button>
          <Button
            variant="outline"
            className="flex-1 border-2 border-[#0046B3] text-[#0046B3] hover:bg-[#0046B3] hover:text-white font-bold py-6 rounded-xl transition-all duration-300 bg-transparent"
          >
            <FileText className="h-5 w-5 mr-2" />
            Visualizar Online
          </Button>
        </div>

        <div className="mt-6 p-4 bg-blue-50 dark:bg-gray-800 rounded-xl border border-blue-200 dark:border-gray-700">
          <p className="text-sm text-gray-700 dark:text-gray-300 text-center">
            <span className="font-bold text-[#0046B3] dark:text-[#FF7A00]">Destaque desta edição:</span> Novo Imposto
            Seletivo - O que muda com a Lei Complementar nº 214/2025
          </p>
        </div>
      </div>
    </Card>
  )
}

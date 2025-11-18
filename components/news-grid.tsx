"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, TrendingUp, FileQuestion } from "lucide-react"

const newsArticles = [
  {
    id: 1,
    category: "GTIN",
    title: "GTIN passa a ser obrigatório nas notas fiscais a partir de outubro de 2025",
    excerpt:
      "A SEFAZ fará a checagem automática do código de barras GTIN nas NF-e e NFC-e. Notas com códigos inválidos serão rejeitadas.",
    date: "01 de outubro de 2025",
    badge: "Urgente",
    badgeColor: "destructive",
    tags: ["GTIN", "NF-e", "Reforma Tributária"],
  },
  {
    id: 2,
    category: "NF-e",
    title: "Novo leiaute das NF-e traz as tags IBS e CBS obrigatórias em 2026",
    excerpt:
      "Em outubro de 2025, o formato entra em homologação. Em janeiro de 2026, torna-se obrigatório também em produção.",
    date: "15 de setembro de 2025",
    badge: "Atualização",
    badgeColor: "default",
    tags: ["IBS/CBS", "NF-e", "Reforma Tributária"],
  },
  {
    id: 3,
    category: "Parametrização",
    title: "CTributária orienta sobre atualização do ERP para parametrização fiscal",
    excerpt: "Campos cEAN e cEANTrib devem estar devidamente configurados para garantir o envio correto do GTIN.",
    date: "20 de agosto de 2025",
    badge: "Orientação",
    badgeColor: "secondary",
    tags: ["GTIN", "NF-e"],
  },
  {
    id: 4,
    category: "Split Payment",
    title: "Split Payment na prática: como funcionará o pagamento parcelado com IBS e CBS",
    excerpt:
      "O imposto não passa pelo caixa do fornecedor. O banco retém e repassa ao Fisco diretamente em cada parcela.",
    date: "10 de novembro de 2025",
    badge: "Análise",
    badgeColor: "default",
    tags: ["Split Payment", "IBS/CBS", "Reforma Tributária"],
  },
  {
    id: 5,
    category: "Penalidades",
    title: "Penalidades por cancelamento de Nota Fiscal: o que mudou com IBS/CBS",
    excerpt:
      "Multa de 20% do valor da operação para cancelamento após o fato gerador. Multa de 10% para cancelamento fora do prazo.",
    date: "05 de novembro de 2025",
    badge: "Importante",
    badgeColor: "destructive",
    tags: ["Penalidades", "IBS/CBS", "NF-e"],
  },
  {
    id: 6,
    category: "NCM",
    title: "NCM é o mesmo, mas o imposto não! GTIN vira o novo CPF fiscal do produto",
    excerpt: "O Fisco não olha apenas o NCM. Ele olha o produto em si, a descrição comercial e principalmente o GTIN.",
    date: "28 de outubro de 2025",
    badge: "Destaque",
    badgeColor: "default",
    tags: ["GTIN", "Reforma Tributária"],
  },
]

interface NewsGridProps {
  searchQuery?: string
  activeFilters?: string[]
}

export function NewsGrid({ searchQuery = "", activeFilters = [] }: NewsGridProps) {
  const filteredArticles = newsArticles.filter((article) => {
    const matchesSearch =
      !searchQuery ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesFilters =
      activeFilters.length === 0 ||
      activeFilters.some(
        (filter) => article.tags.includes(filter) || article.category.toLowerCase() === filter.toLowerCase(),
      )

    return matchesSearch && matchesFilters
  })

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <TrendingUp className="h-7 w-7 text-[#FF7A00]" />
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#0046B3] to-[#0046B3]/80 bg-clip-text text-transparent">
            {filteredArticles.length === newsArticles.length
              ? "Últimas Notícias"
              : `${filteredArticles.length} Notícia${filteredArticles.length !== 1 ? "s" : ""} Encontrada${filteredArticles.length !== 1 ? "s" : ""}`}
          </h2>
        </div>
        <Button
          variant="outline"
          className="border-2 border-[#FF7A00] text-[#FF7A00] hover:bg-[#FF7A00] hover:text-white bg-white transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
        >
          Ver todas
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      {filteredArticles.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
          <div className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-full p-6 mb-6">
            <FileQuestion className="h-16 w-16 text-gray-400" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-3">Nenhuma notícia encontrada</h3>
          <p className="text-gray-600 max-w-md">
            Não encontramos notícias que correspondam aos seus critérios de busca. Tente ajustar os filtros ou usar
            outras palavras-chave.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredArticles.map((article, index) => (
            <Card
              key={article.id}
              className="group hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-[#FF7A00]/30 animate-fade-in-up overflow-hidden bg-white"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-7">
                <div className="flex items-center gap-3 mb-4">
                  <Badge
                    variant={article.badgeColor as any}
                    className={`
                      ${
                        article.badgeColor === "destructive"
                          ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/30"
                          : article.badgeColor === "secondary"
                            ? "bg-gradient-to-r from-gray-500 to-gray-600 text-white shadow-lg shadow-gray-500/30"
                            : "bg-gradient-to-r from-[#0046B3] to-[#0046B3]/90 text-white shadow-lg shadow-[#0046B3]/30"
                      }
                      px-3 py-1 text-xs font-bold tracking-wide
                    `}
                  >
                    {article.badge}
                  </Badge>
                  <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                    {article.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug group-hover:text-[#FF7A00] transition-colors duration-300 cursor-pointer line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-sm text-gray-600 mb-5 leading-relaxed line-clamp-3">{article.excerpt}</p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Calendar className="h-4 w-4 text-[#FF7A00]" />
                    <span className="font-medium">{article.date}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-[#FF7A00] hover:text-white hover:bg-[#FF7A00] font-semibold transition-all duration-300 rounded-full px-4"
                  >
                    Ler mais
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

"use client"

import { useState } from "react"
import { Search, Filter, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface SearchBarProps {
  onSearch: (query: string, filters: string[]) => void
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  const categories = [
    "IBS/CBS",
    "GTIN",
    "Split Payment",
    "NF-e",
    "Simples Nacional",
    "Imposto Seletivo",
    "Reforma Tributária",
    "ICMS",
    "ISS",
    "Penalidades",
  ]

  const handleSearch = () => {
    onSearch(query, activeFilters)
  }

  const toggleFilter = (filter: string) => {
    const newFilters = activeFilters.includes(filter)
      ? activeFilters.filter((f) => f !== filter)
      : [...activeFilters, filter]
    setActiveFilters(newFilters)
    onSearch(query, newFilters)
  }

  const clearFilters = () => {
    setActiveFilters([])
    onSearch(query, [])
  }

  return (
    <div className="w-full bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8 animate-fade-in">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex-1 flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3 border-2 border-transparent focus-within:border-[#FF7A00] transition-all">
          <Search className="h-5 w-5 text-gray-400" />
          <Input
            placeholder="Pesquise por notícias, legislação, IBS/CBS, GTIN..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSearch()}
            className="border-0 bg-transparent text-sm focus-visible:ring-0 p-0 h-auto"
          />
          {query && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                setQuery("")
                onSearch("", activeFilters)
              }}
              className="h-8 w-8 rounded-full"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
        <Button
          onClick={handleSearch}
          className="bg-gradient-to-r from-[#FF7A00] to-[#FF9500] hover:from-[#FF8800] hover:to-[#FFA000] text-white px-8 rounded-xl shadow-lg shadow-orange-200 transition-all hover:scale-105"
        >
          Buscar
        </Button>
        <Button
          variant="outline"
          onClick={() => setShowFilters(!showFilters)}
          className="rounded-xl border-gray-300 hover:bg-gray-50"
        >
          <Filter className="h-4 w-4 mr-2" />
          Filtros
          {activeFilters.length > 0 && (
            <Badge className="ml-2 bg-[#FF7A00] hover:bg-[#FF7A00]">{activeFilters.length}</Badge>
          )}
        </Button>
      </div>

      {showFilters && (
        <div className="pt-4 border-t border-gray-100 animate-fade-in">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-gray-700">Categorias</h3>
            {activeFilters.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="text-xs text-gray-500 hover:text-[#FF7A00]"
              >
                Limpar filtros
              </Button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={activeFilters.includes(category) ? "default" : "outline"}
                className={`cursor-pointer transition-all hover:scale-105 ${
                  activeFilters.includes(category)
                    ? "bg-gradient-to-r from-[#FF7A00] to-[#FF9500] text-white border-0"
                    : "border-gray-300 hover:border-[#FF7A00] hover:text-[#FF7A00]"
                }`}
                onClick={() => toggleFilter(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {activeFilters.length > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-xs text-gray-500 mb-2">Filtros ativos:</p>
          <div className="flex flex-wrap gap-2">
            {activeFilters.map((filter) => (
              <Badge
                key={filter}
                className="bg-[#0046B3] text-white hover:bg-[#0046B3]/90 cursor-pointer"
                onClick={() => toggleFilter(filter)}
              >
                {filter}
                <X className="ml-1 h-3 w-3" />
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

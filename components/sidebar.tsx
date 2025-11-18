import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, TrendingUp, Bell } from "lucide-react"

const fiscalCalendar = [
  { date: "10", day: "DEZ", event: "Vencimento ICMS", type: "estadual" },
  { date: "15", day: "DEZ", event: "IBS/CBS - Apuração", type: "federal" },
  { date: "20", day: "DEZ", event: "DCTF-Web", type: "federal" },
  { date: "25", day: "DEZ", event: "EFD-Reinf", type: "trabalhista" },
]

const highlights = [
  {
    title: "Empresas do Simples estão dispensadas de recolher IBS/CBS em 2026",
    category: "Simples Nacional",
  },
  {
    title: "DERE não é a nova obrigação acessória da reforma tributária",
    category: "Obrigações",
  },
  {
    title: "Transição para o novo modelo: cronograma 2026-2033",
    category: "Reforma",
  },
]

export function Sidebar() {
  return (
    <div className="space-y-8 sticky top-32">
      <Card className="border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden animate-fade-in-up">
        <CardHeader className="bg-gradient-to-r from-[#0046B3] to-[#0046B3]/90 text-white p-5">
          <CardTitle className="text-lg flex items-center gap-3 font-bold">
            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
              <Calendar className="h-5 w-5" />
            </div>
            Calendário Fiscal
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y divide-gray-100">
            {fiscalCalendar.map((item, index) => (
              <div
                key={index}
                className="p-5 hover:bg-gradient-to-r hover:from-gray-50 hover:to-white transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="text-center bg-gradient-to-br from-[#FF7A00] to-[#FF7A00]/80 rounded-xl p-3 min-w-[60px] shadow-lg shadow-[#FF7A00]/20 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-2xl font-bold text-white leading-none">{item.date}</div>
                    <div className="text-xs text-white/90 uppercase font-semibold mt-1">{item.day}</div>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm text-gray-900 mb-2 group-hover:text-[#0046B3] transition-colors">
                      {item.event}
                    </p>
                    <Badge
                      variant="outline"
                      className={`text-xs font-semibold ${
                        item.type === "federal"
                          ? "border-[#0046B3] text-[#0046B3] bg-[#0046B3]/5"
                          : item.type === "estadual"
                            ? "border-[#FF7A00] text-[#FF7A00] bg-[#FF7A00]/5"
                            : "border-gray-400 text-gray-600 bg-gray-50"
                      }`}
                    >
                      {item.type}
                    </Badge>
                  </div>
                  <Bell className="h-4 w-4 text-gray-400 group-hover:text-[#FF7A00] transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card
        className="border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden animate-fade-in-up"
        style={{ animationDelay: "100ms" }}
      >
        <CardHeader className="bg-gradient-to-r from-[#FF7A00] to-[#FF7A00]/90 text-white p-5">
          <CardTitle className="text-lg flex items-center gap-3 font-bold">
            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
              <TrendingUp className="h-5 w-5" />
            </div>
            Destaques da Semana
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y divide-gray-100">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-5 hover:bg-gradient-to-r hover:from-orange-50 hover:to-white transition-all duration-300 cursor-pointer group"
              >
                <Badge
                  variant="outline"
                  className="mb-3 text-xs border-gray-300 text-gray-600 bg-gray-50 font-semibold group-hover:border-[#FF7A00] group-hover:text-[#FF7A00] group-hover:bg-[#FF7A00]/5 transition-all"
                >
                  {item.category}
                </Badge>
                <p className="text-sm font-semibold text-gray-900 leading-snug group-hover:text-[#FF7A00] transition-colors line-clamp-3">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card
        className="border-none shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden animate-fade-in-up"
        style={{ animationDelay: "200ms" }}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0046B3] via-[#0046B3]/95 to-[#0046B3]/80 opacity-95" />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />

          <CardContent className="relative p-7 text-white">
            <div className="w-14 h-14 bg-[#FF7A00] rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-[#FF7A00]/30 animate-pulse">
              <MapPin className="h-7 w-7 text-white" />
            </div>
            <h3 className="font-bold text-xl mb-4 text-white">Uberlândia MG</h3>
            <div className="space-y-2 text-sm text-white/95">
              <p className="font-medium">Av. Vasconcelos Costa, 1281</p>
              <p className="font-medium">Jardim Inconfidência CEP 38410-465</p>
              <p className="font-bold text-[#FF7A00] text-base mt-3">(34) 3224-0102</p>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  )
}

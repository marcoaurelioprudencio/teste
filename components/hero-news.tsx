import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Share2, ArrowRight, Clock } from "lucide-react"

export function HeroNews() {
  return (
    <Card className="overflow-hidden border-none shadow-2xl hover:shadow-3xl transition-all duration-500 animate-fade-in-up group">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0046B3]/5 via-transparent to-[#FF7A00]/5 pointer-events-none" />

        <div className="relative p-10 bg-white">
          <div className="flex items-center gap-3 mb-5">
            <Badge className="bg-gradient-to-r from-[#0046B3] to-[#0046B3]/80 text-white hover:from-[#0046B3]/90 hover:to-[#0046B3]/70 shadow-lg shadow-[#0046B3]/20 px-4 py-1.5 text-xs font-semibold tracking-wide">
              DESTAQUE
            </Badge>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Clock className="h-4 w-4" />
              <span>03 de novembro de 2025</span>
            </div>
          </div>

          <h1 className="text-5xl font-bold bg-gradient-to-r from-[#0046B3] to-[#0046B3]/80 bg-clip-text text-transparent mb-5 leading-tight group-hover:scale-[1.01] transition-transform duration-300">
            Novo Imposto Seletivo: o que muda com a Lei Complementar nº 214/2025
          </h1>

          <p className="text-xl text-gray-700 mb-8 leading-relaxed font-medium">
            Lei Complementar nº 214/2025 cria nova estrutura fiscal e estabelece base de cálculo e alíquotas
            sustentáveis para produtos prejudiciais à saúde e ao meio ambiente.
          </p>

          <div className="prose max-w-none mb-8">
            <p className="text-gray-600 leading-relaxed mb-6">
              O <strong className="text-[#0046B3]">Imposto Seletivo (IS)</strong> foi instituído pelos artigos 416 a 438
              da Lei Complementar nº 214/2025. Ele incide sobre bens e serviços prejudiciais à saúde ou ao meio
              ambiente. As alíquotas serão atualizadas anualmente pelo IPCA, com apuração mensal e comunicação via DTE
              (domicílio tributário eletrônico).
            </p>

            <div className="relative bg-gradient-to-r from-[#FFF7ED] to-orange-50 rounded-xl p-6 border-l-4 border-[#FF7A00] shadow-md">
              <h3 className="text-[#FF7A00] font-bold text-lg mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#FF7A00] rounded-full animate-pulse"></span>
                Principais Pontos
              </h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#FF7A00] font-bold mt-0.5">•</span>
                  <span>
                    <strong>Arts. 416-420:</strong> Estabelecem o fato gerador e base de cálculo
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF7A00] font-bold mt-0.5">•</span>
                  <span>
                    <strong>Arts. 421-424:</strong> Disciplinam as alíquotas e suas variações
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF7A00] font-bold mt-0.5">•</span>
                  <span>
                    <strong>Arts. 425-427:</strong> Definem os contribuintes e responsabilidades
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF7A00] font-bold mt-0.5">•</span>
                  <span>
                    <strong>Art. 428:</strong> Dispõe sobre não incidência nas exportações
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF7A00] font-bold mt-0.5">•</span>
                  <span>
                    <strong>Arts. 429-433:</strong> Tratam de infrações e penalidades
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button className="bg-gradient-to-r from-[#FF7A00] to-[#FF7A00]/90 hover:from-[#FF7A00]/90 hover:to-[#FF7A00]/80 text-white shadow-lg shadow-[#FF7A00]/30 hover:shadow-xl hover:shadow-[#FF7A00]/40 transition-all duration-300 hover:scale-105 px-6 py-6 text-base font-semibold">
              Ler matéria completa
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-2 border-gray-300 bg-white hover:bg-gray-50 hover:border-[#FF7A00] transition-all duration-300 w-12 h-12 rounded-full"
            >
              <Share2 className="h-5 w-5" />
            </Button>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              <span className="font-semibold">Fonte:</span> Portal News CTributária – Lei Complementar nº 214/2025
            </p>
          </div>
        </div>
      </div>
    </Card>
  )
}

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { IbsCbsCalculator } from "@/components/calculators/ibs-cbs-calculator"
import { SplitPaymentSimulator } from "@/components/calculators/split-payment-simulator"
import { ReformTimeline } from "@/components/calculators/reform-timeline"
import { Calculator } from "lucide-react"

export default function FerramentasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
      <Header />
      <main className="max-w-[1400px] mx-auto px-4 py-12">
        <div className="mb-12 animate-fade-in">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-gradient-to-r from-[#FF7A00] to-[#FF9500] p-4 rounded-2xl shadow-lg">
              <Calculator className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-[#0046B3] to-[#0046B3]/80 bg-clip-text text-transparent dark:from-blue-400 dark:to-blue-300">
                Ferramentas e Simuladores
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Utilize nossas calculadoras para entender melhor o impacto da Reforma Tributária
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <IbsCbsCalculator />
          <SplitPaymentSimulator />
          <ReformTimeline />
        </div>
      </main>
      <Footer />
    </div>
  )
}

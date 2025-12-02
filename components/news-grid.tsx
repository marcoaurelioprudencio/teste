"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, TrendingUp, FileQuestion, Share2, Bookmark } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ShareDialog } from "@/components/share-dialog"

interface NewsArticle {
  id: number
  category: string
  title: string
  excerpt: string
  date: string
  badge: string
  badgeColor: string
  tags: string[]
  fullContent?: string
}

const newsArticles: NewsArticle[] = [
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
    fullContent: `A partir de outubro de 2025, a Secretaria da Fazenda (SEFAZ) implementará a validação automática do código GTIN (Global Trade Item Number) em todas as Notas Fiscais Eletrônicas (NF-e) e Notas Fiscais de Consumidor Eletrônicas (NFC-e).

**O que é o GTIN?**

O GTIN é o código de barras internacional que identifica produtos de forma única no mercado. Ele é utilizado em mais de 100 países e permite a rastreabilidade completa dos produtos desde a fabricação até o consumidor final.

**Principais mudanças:**

• Validação automática do GTIN contra a base de dados da GS1 Brasil
• Rejeição imediata de notas fiscais com códigos GTIN inválidos ou inexistentes
• Campos cEAN e cEANTrib passam a ser obrigatórios para produtos que possuem código de barras
• Empresas terão até setembro de 2025 para regularizar seus cadastros

**Impactos para as empresas:**

As empresas devem revisar imediatamente seus cadastros de produtos e garantir que todos os códigos GTIN estejam corretos e devidamente registrados na GS1 Brasil. Notas fiscais com códigos inválidos serão automaticamente rejeitadas, podendo causar atrasos nas entregas e problemas com clientes.

**Recomendações:**

1. Realize um inventário completo dos produtos comercializados
2. Verifique se todos os códigos GTIN estão ativos na GS1 Brasil
3. Atualize os campos cEAN e cEANTrib no seu sistema ERP
4. Teste a emissão de notas fiscais em ambiente de homologação`,
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
    fullContent: `O novo leiaute da Nota Fiscal Eletrônica (NF-e) foi publicado e traz importantes mudanças relacionadas à Reforma Tributária. As novas tags para IBS (Imposto sobre Bens e Serviços) e CBS (Contribuição sobre Bens e Serviços) serão obrigatórias a partir de 2026.

**Cronograma de implementação:**

• Outubro de 2025: Liberação do novo leiaute em ambiente de homologação
• Janeiro de 2026: Obrigatoriedade em ambiente de produção
• Período de transição: 3 meses para adequação dos sistemas

**Novas tags incluídas:**

• <IBS> - Grupo de informações do Imposto sobre Bens e Serviços
• <CBS> - Grupo de informações da Contribuição sobre Bens e Serviços
• <vIBS> - Valor do IBS
• <vCBS> - Valor da CBS
• <pIBS> - Alíquota do IBS
• <pCBS> - Alíquota da CBS

**Estrutura do novo XML:**

O novo leiaute mantém compatibilidade com a estrutura atual, adicionando os novos grupos de tributação. As empresas que já utilizam sistemas atualizados terão facilidade na migração.

**Ações necessárias:**

1. Atualize seu software emissor de NF-e
2. Teste a emissão em ambiente de homologação
3. Treine a equipe fiscal sobre as novas informações
4. Verifique a parametrização das alíquotas de IBS e CBS`,
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
    fullContent: `A CTributária publicou orientações detalhadas para a correta parametrização dos sistemas ERP visando o cumprimento das novas exigências fiscais relacionadas ao GTIN.

**Campos obrigatórios:**

• cEAN: Código de barras GTIN do produto comercializado
• cEANTrib: Código de barras GTIN da unidade tributável
• uCom: Unidade comercial do produto
• uTrib: Unidade tributável do produto

**Regras de preenchimento:**

O campo cEAN deve conter o código GTIN-8, GTIN-12, GTIN-13 ou GTIN-14 válido. Produtos sem código de barras devem utilizar o literal "SEM GTIN".

O campo cEANTrib segue as mesmas regras do cEAN, porém refere-se à unidade tributável do produto. Em muitos casos, os dois campos terão o mesmo valor.

**Validações implementadas:**

• Dígito verificador do GTIN
• Existência do código na base GS1
• Consistência entre cEAN e cEANTrib
• Correspondência com o NCM informado

**Erros mais comuns:**

1. GTIN com dígito verificador incorreto
2. Código GTIN não registrado na GS1
3. Divergência entre unidade comercial e tributável
4. Uso de códigos internos no lugar do GTIN

**Próximos passos:**

Realize uma auditoria completa no cadastro de produtos do seu ERP e corrija as inconsistências antes da entrada em vigor da validação automática.`,
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
    fullContent: `O Split Payment é uma das principais inovações da Reforma Tributária brasileira. Neste modelo, o imposto é retido e repassado ao Fisco no momento do pagamento, sem passar pelo caixa do fornecedor.

**Como funciona:**

Quando um cliente realiza um pagamento, a instituição financeira automaticamente separa a parcela correspondente aos tributos (IBS e CBS) e repassa diretamente aos cofres públicos. O fornecedor recebe apenas o valor líquido da operação.

**Exemplo prático:**

Venda de R$ 1.000,00 com alíquota total de 26,5%:
• Valor do IBS/CBS: R$ 265,00
• Valor líquido ao fornecedor: R$ 735,00

No pagamento parcelado em 3x:
• Parcela 1: R$ 333,33 → R$ 88,33 (tributo) + R$ 245,00 (fornecedor)
• Parcela 2: R$ 333,33 → R$ 88,33 (tributo) + R$ 245,00 (fornecedor)
• Parcela 3: R$ 333,34 → R$ 88,34 (tributo) + R$ 245,00 (fornecedor)

**Benefícios do modelo:**

• Redução da sonegação fiscal
• Maior eficiência na arrecadação
• Simplificação das obrigações acessórias
• Diminuição do custo de conformidade

**Desafios para as empresas:**

• Adaptação do fluxo de caixa
• Integração com sistemas bancários
• Conciliação de pagamentos
• Gestão de créditos tributários

**Cronograma de implementação:**

O Split Payment será implementado gradualmente a partir de 2026, com fases de testes e adequação dos sistemas bancários.`,
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
    fullContent: `A Lei Complementar nº 214/2025 estabeleceu novas penalidades para o cancelamento indevido de Notas Fiscais Eletrônicas no contexto do IBS e CBS.

**Novas multas aplicáveis:**

• 20% do valor da operação: Cancelamento após a ocorrência do fato gerador
• 10% do valor da operação: Cancelamento fora do prazo regulamentar
• 5% do valor da operação: Cancelamento com informações incorretas
• 1% do valor da operação: Cancelamento sem justificativa formal

**Prazo para cancelamento:**

O prazo regular para cancelamento de NF-e permanece em 24 horas a partir da autorização. Após esse período, o contribuinte deve utilizar a Carta de Correção ou emitir NF-e de devolução/estorno.

**Hipóteses de cancelamento permitido:**

1. Erro de digitação identificado antes da circulação da mercadoria
2. Operação não efetivada por desistência do comprador
3. Duplicidade de emissão comprovada
4. Erro na identificação do destinatário

**Hipóteses vedadas:**

• Cancelamento para alterar valores após negociação
• Cancelamento para modificar a tributação
• Cancelamento de operação já escriturada pelo destinatário
• Cancelamento após trânsito da mercadoria

**Procedimento correto:**

Em caso de necessidade de correção após o prazo, utilize os procedimentos de NF-e Complementar, Carta de Correção Eletrônica ou NF-e de Devolução, conforme a situação específica.

**Fiscalização:**

A SEFAZ intensificará a fiscalização de cancelamentos, cruzando informações com manifestações do destinatário e registros de transporte.`,
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
    fullContent: `Com a Reforma Tributária, o GTIN (código de barras) ganha papel central na identificação fiscal dos produtos, funcionando como um verdadeiro "CPF" do item comercializado.

**Por que o GTIN é tão importante?**

O NCM (Nomenclatura Comum do Mercosul) classifica produtos em categorias amplas. Já o GTIN identifica cada produto de forma única e específica. Essa granularidade permite ao Fisco:

• Identificar exatamente qual produto foi comercializado
• Verificar se a tributação aplicada está correta
• Rastrear a cadeia de fornecimento completa
• Detectar fraudes e sonegação com maior precisão

**Exemplo prático:**

NCM 2106.90.10 - Preparações alimentícias

Sob este mesmo NCM, podem existir:
• Suplemento vitamínico (GTIN: 7891234567890)
• Complemento proteico (GTIN: 7891234567891)
• Shake nutricional (GTIN: 7891234567892)

Cada um pode ter tributação diferente de IBS/CBS, mesmo compartilhando o mesmo NCM.

**Impactos práticos:**

1. **Cadastro de produtos:** Cada item deve ter seu GTIN corretamente registrado
2. **Tributação:** A alíquota pode variar por GTIN, não apenas por NCM
3. **Fiscalização:** Cruzamento automático de informações por GTIN
4. **Rastreabilidade:** Histórico completo do produto desde a fabricação

**Ações recomendadas:**

• Revise o cadastro de todos os produtos com GTIN
• Verifique a correta classificação tributária por produto
• Atualize os sistemas para suportar tributação por GTIN
• Treine a equipe fiscal sobre as novas regras

**Conclusão:**

O GTIN deixa de ser apenas um código de barras para controle de estoque e passa a ser o principal identificador fiscal do produto. Empresas que não se adequarem enfrentarão rejeições de notas fiscais e possíveis autuações.`,
  },
]

interface NewsGridProps {
  searchQuery?: string
  activeFilters?: string[]
}

function formatContent(content: string) {
  const lines = content.split('\n')
  const elements: React.ReactNode[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]
    
    if (line.startsWith('**') && line.endsWith('**')) {
      elements.push(
        <h3 key={i} className="text-lg font-bold text-[#0046B3] mt-6 mb-3">
          {line.replace(/\*\*/g, '')}
        </h3>
      )
      i++
    } else if (line.startsWith('• ')) {
      const listItems: React.ReactNode[] = []
      while (i < lines.length && lines[i].startsWith('• ')) {
        listItems.push(
          <li key={i} className="flex items-start gap-2 mb-2">
            <span className="text-[#FF7A00] font-bold mt-1">•</span>
            <span>{lines[i].substring(2)}</span>
          </li>
        )
        i++
      }
      elements.push(
        <ul key={`ul-${i}`} className="ml-4 mb-4">
          {listItems}
        </ul>
      )
    } else if (/^\d+\.\s/.test(line)) {
      const listItems: React.ReactNode[] = []
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        listItems.push(
          <li key={i} className="flex items-start gap-2 mb-2">
            <span className="text-[#FF7A00] font-bold">{lines[i].match(/^\d+/)?.[0]}.</span>
            <span>{lines[i].replace(/^\d+\.\s/, '')}</span>
          </li>
        )
        i++
      }
      elements.push(
        <ol key={`ol-${i}`} className="ml-4 mb-4">
          {listItems}
        </ol>
      )
    } else if (line.trim() === '') {
      elements.push(<div key={i} className="h-2" />)
      i++
    } else {
      elements.push(
        <p key={i} className="text-gray-700 leading-relaxed mb-3">
          {line}
        </p>
      )
      i++
    }
  }

  return elements
}

export function NewsGrid({ searchQuery = "", activeFilters = [] }: NewsGridProps) {
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false)
  const [shareArticle, setShareArticle] = useState<NewsArticle | null>(null)

  const handleReadMore = (article: NewsArticle) => {
    setSelectedArticle(article)
    setIsDialogOpen(true)
  }

  const handleShare = (article: NewsArticle) => {
    setShareArticle(article)
    setIsShareDialogOpen(true)
  }

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
                    onClick={() => handleReadMore(article)}
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

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] p-0 overflow-hidden">
          {selectedArticle && (
            <>
              <div className="bg-gradient-to-r from-[#0046B3] to-[#0046B3]/80 p-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Badge
                    className={`
                      ${
                        selectedArticle.badgeColor === "destructive"
                          ? "bg-red-500 text-white"
                          : selectedArticle.badgeColor === "secondary"
                            ? "bg-gray-500 text-white"
                            : "bg-white text-[#0046B3]"
                      }
                      px-3 py-1 text-xs font-bold tracking-wide
                    `}
                  >
                    {selectedArticle.badge}
                  </Badge>
                  <span className="text-xs text-white/80 font-semibold uppercase tracking-wider">
                    {selectedArticle.category}
                  </span>
                </div>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-white leading-tight">
                    {selectedArticle.title}
                  </DialogTitle>
                  <DialogDescription className="sr-only">
                    Leia a notícia completa sobre {selectedArticle.category}
                  </DialogDescription>
                </DialogHeader>
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center gap-2 text-sm text-white/80">
                    <Calendar className="h-4 w-4" />
                    <span>{selectedArticle.date}</span>
                  </div>
                  <div className="flex gap-2">
                    {selectedArticle.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs border-white/30 text-white/90">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              <ScrollArea className="h-[50vh] px-6 py-4">
                <div className="prose prose-sm max-w-none">
                  {selectedArticle.fullContent ? (
                    formatContent(selectedArticle.fullContent)
                  ) : (
                    <p className="text-gray-700 leading-relaxed">{selectedArticle.excerpt}</p>
                  )}
                </div>
              </ScrollArea>
              <div className="border-t border-gray-200 p-4 flex items-center justify-between bg-gray-50">
                <p className="text-sm text-gray-500">
                  <span className="font-semibold">Fonte:</span> Portal News CTributária
                </p>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="gap-2"
                    onClick={() => {
                      setIsDialogOpen(false)
                      if (selectedArticle) {
                        handleShare(selectedArticle)
                      }
                    }}
                  >
                    <Share2 className="h-4 w-4" />
                    Compartilhar
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Bookmark className="h-4 w-4" />
                    Salvar
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <ShareDialog
        isOpen={isShareDialogOpen}
        onClose={() => setIsShareDialogOpen(false)}
        title={shareArticle?.title || ""}
      />
    </div>
  )
}

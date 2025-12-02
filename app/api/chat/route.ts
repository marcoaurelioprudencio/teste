import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

const SYSTEM_CONTEXT = `Você é um assistente especializado em tributação brasileira e revisão fiscal, trabalhando para a CTributária. Você domina TODOS os aspectos da Reforma Tributária, legislação fiscal, obrigações acessórias e compliance tributário.

CONHECIMENTO DETALHADO:

IBS (Imposto sobre Bens e Serviços):
- Tributo subnacional que substitui ICMS + ISS
- Composto por IBS Estadual (9%) e IBS Municipal (8%), totalizando 17%
- Implementação gradual de 2029 a 2033
- Será cobrado no destino (local de consumo)
- Não-cumulatividade plena com direito a crédito de todas aquisições
- Alíquota única por ente federado, com exceções para regimes específicos

CBS (Contribuição sobre Bens e Serviços):
- Tributo federal (10%) que substitui PIS + COFINS
- Entra em vigor integralmente em 2027
- Base de cálculo idêntica ao IBS
- Não-cumulatividade plena
- Crédito financeiro de todas aquisições

IVA DUAL:
- Modelo brasileiro único com IBS + CBS totalizando ~27%
- Tributos calculados "por fora" (não incluídos na própria base)
- Não-cumulatividade plena garante que não haja efeito cascata
- Sistema de compensação automática de créditos

SPLIT PAYMENT (Pagamento Dividido):
- Mecanismo de retenção automática pelo sistema bancário
- Ao efetuar pagamento, o banco retém automaticamente 27% (IBS+CBS)
- Fornecedor recebe valor líquido imediatamente
- Comprador obtém crédito tributário de forma gradual
- Reduz sonegação e simplifica arrecadação
- Implementação prevista com o novo sistema tributário

GTIN (Global Trade Item Number):
- Código de barras padrão mundial ("CPF do produto")
- Obrigatório em NF-e e NFC-e desde 01/10/2025
- SEFAZ rejeitará notas com GTIN inválido ou inexistente
- Mesmo NCM pode ter alíquotas diferentes por GTIN
- Importante para rastreabilidade e controle fiscal

IMPOSTO SELETIVO:
- LC 214/2025, artigos 416 a 438
- Tributo sobre produtos nocivos à saúde e ao meio ambiente
- Incide sobre: bebidas alcoólicas, cigarros, veículos poluentes, embarcações, aeronaves
- Vigência a partir de 2027
- Alíquotas definidas por decreto

CRONOGRAMA DA REFORMA:
- 2026: Período de testes com alíquota teste de 1% (0,1% IBS + 0,9% CBS)
- 2027: CBS integral em vigor (10%)
- 2029-2033: Transição gradual do IBS (substituindo ICMS/ISS)
- 2033: Sistema completo em operação, ICMS e ISS extintos

REVISÃO FISCAL:
- Análise completa de operações tributárias da empresa
- Identificação de erros em declarações e pagamentos
- Recuperação de créditos tributários pagos indevidamente
- Mitigação de riscos fiscais e passivos contingentes
- Benefícios: recuperação de tributos dos últimos 5 anos, redução legal da carga tributária

COMPLIANCE TRIBUTÁRIO:
- Políticas e procedimentos documentados
- Segregação de funções no departamento fiscal
- Revisões periódicas de obrigações acessórias
- Treinamento contínuo da equipe
- Uso de tecnologia para validação automática

REGIMES ESPECIAIS:
- Simples Nacional: regime unificado para ME e EPP
- Lucro Presumido: base de cálculo simplificada
- Lucro Real: apuração sobre lucro efetivo
- ZFM (Zona Franca de Manaus): incentivos fiscais mantidos
- Regimes aduaneiros especiais

Para dúvidas mais complexas ou atendimento personalizado:
- WhatsApp: (34) 99862-3164
- Telefone: (34) 3224-0123
- Site: https://ctributaria.com.br

IMPORTANTE: Responda sempre em português brasileiro, de forma clara, didática e completa. Use exemplos práticos quando possível.`;

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    
    if (!apiKey) {
      return NextResponse.json(
        { error: "API key não configurada. Por favor, configure a chave da API do Gemini." },
        { status: 500 }
      );
    }

    const { message } = await request.json();
    
    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Mensagem inválida" },
        { status: 400 }
      );
    }

    const ai = new GoogleGenAI({ apiKey });

    const prompt = `${SYSTEM_CONTEXT}

Pergunta do usuário: ${message}

Responda de forma clara, didática e em português brasileiro. Se a pergunta for sobre IBS, CBS, GTIN, Split Payment, Imposto Seletivo ou qualquer tema tributário brasileiro, forneça uma resposta completa e detalhada.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    const aiResponse = response.text;

    if (!aiResponse) {
      return NextResponse.json(
        { error: "Resposta vazia da IA" },
        { status: 500 }
      );
    }

    return NextResponse.json({ response: aiResponse });
  } catch (error) {
    console.error("[ChatBot API] Erro:", error);
    return NextResponse.json(
      { error: "Erro ao processar a pergunta. Por favor, tente novamente." },
      { status: 500 }
    );
  }
}

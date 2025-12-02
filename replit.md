# CTributária News - Portal de Notícias Tributárias

## Overview
CTributária News is a comprehensive Brazilian tax news and information portal built with Next.js 16. The platform provides news, calculators, glossary, and tools related to Brazilian tax reform, GTIN requirements, IBS/CBS taxation, and fiscal documentation.

**Project Type:** Next.js Frontend Application  
**Language:** TypeScript  
**Framework:** Next.js 16 (with Turbopack)  
**UI Library:** React 19 with Radix UI components  
**Styling:** Tailwind CSS v4

## Current State
✅ Fully configured and running on Replit  
✅ Development server running on port 5000  
✅ Production deployment configured  
✅ All dependencies installed (with legacy peer deps due to React 19 compatibility)
✅ ChatBot AI funcionando com Google Gemini + fallback para respostas comuns

## Recent Changes (December 2, 2025)
- Configured Next.js for Replit environment with proper host binding (0.0.0.0:5000)
- Added cache control headers to prevent browser caching issues
- Set up workflow for development server
- Configured autoscale deployment for production
- Installed all dependencies with `--legacy-peer-deps` flag to resolve React 19 compatibility
- **ChatBot AI melhorado:**
  - Criada API route server-side (/api/chat) usando Google Gemini AI
  - Removida chave API do código cliente (segurança)
  - Implementado sistema de fallback com respostas pré-definidas para IBS, CBS, GTIN, Split Payment, Imposto Seletivo e Reforma Tributária
  - Tratamento de erros para rate limit e autenticação

## Project Architecture

### Key Features
1. **News Portal**: Latest tax news and updates with categorization (Urgente, Atualização, NF-e, etc.)
2. **Calculators**: IBS/CBS calculators, reform timeline, split payment simulator
3. **Glossary**: Tax terminology reference
4. **FAQ**: Frequently asked questions
5. **Search**: Full-text search across news and documentation
6. **Theme Support**: Light/dark mode toggle
7. **Floating Tools**: Calculator button and ChatBot

### Directory Structure
```
app/                    # Next.js App Router pages
  ├── faq/             # FAQ page
  ├── ferramentas/     # Tools page (calculators)
  ├── glossario/       # Glossary page
  ├── noticia/[id]/    # Individual news article pages
  ├── layout.tsx       # Root layout with metadata
  └── page.tsx         # Home page

components/            # React components
  ├── calculators/     # Calculator components
  ├── ui/             # Reusable UI components (Radix UI based)
  ├── chat-bot.tsx    # ChatBot component
  ├── header.tsx      # Navigation header
  ├── footer.tsx      # Footer
  └── ...             # Other feature components

lib/                  # Utility functions
hooks/                # Custom React hooks
public/               # Static assets (images, icons)
```

### Technology Stack
- **Frontend Framework**: Next.js 16.0.0 with App Router
- **React**: Version 19.2.0
- **UI Components**: Radix UI primitives
- **Styling**: Tailwind CSS 4.1.9 with PostCSS
- **Forms**: React Hook Form with Zod validation
- **Charts**: Recharts
- **Icons**: Lucide React
- **Toast Notifications**: Sonner
- **Date Handling**: date-fns
- **Theme**: next-themes

## Development

### Running Locally
The development server is configured to run on port 5000 with host binding to 0.0.0.0 for Replit compatibility.

```bash
npm run dev
```

### Building for Production
```bash
npm run build
npm start
```

### Important Notes
- Dependencies are installed with `--legacy-peer-deps` flag due to React 19 compatibility with some packages (notably `vaul`)
- TypeScript build errors are ignored in production (configured in next.config.mjs)
- Images are unoptimized for better Replit compatibility
- Cache-Control headers are set to prevent stale content in the Replit iframe

## Deployment
Configured for Replit Autoscale deployment:
- **Build Command**: `npm run build`
- **Start Command**: `npm start`
- **Port**: 5000
- **Deployment Type**: Autoscale (stateless, scales automatically)

## User Preferences
None documented yet.

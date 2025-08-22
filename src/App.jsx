import './App.css'
import { HeroSection } from './components/sections/HeroSection'
import { CockroachSection } from './components/sections/CockroachSection'
import { PlumbingSection } from './components/sections/PlumbingSection'
import { WaterTankCleaningSection } from './components/sections/WaterTankCleaningSection'
import { PestControlSection } from './components/sections/PestControlSection'
import { CookieBanner } from './components/shared/CookieBanner'
import { GoogleAnalytics } from './components/shared/GoogleAnalytics'
import { DynamicCarouselSection } from './components/sections/DynamicCarouselSection'
import { Header } from './components/shared/Header'
import { Footer } from './components/shared/Footer'
import { FloatingPromotion } from './components/shared/FloatingPromotion'

/**
 * Componente principal da aplicação
 * Layout moderno com glassmorphism e animações otimizadas
 * Inclui sistema de cookies LGPD/GDPR compliant
 */
function App() {
  return (
    <div className="min-h-screen bg-gray-100 overflow-x-hidden">
      <Header />
      {/* Google Analytics - só ativa com consentimento */}
      <GoogleAnalytics measurementId="G-XXXXXXXXXX" />

      {/* Seção Principal - Hero com Família e Controle de Pragas */}
      <HeroSection />

      {/* Carrossel dinâmico de imagens */}
      <DynamicCarouselSection />

      {/* Seção Problemas com Baratas */}
      <CockroachSection />

      {/* Seção Desentupimento */}
      <PlumbingSection />

      {/* Seção Limpeza de Caixa d'Água */}
      <WaterTankCleaningSection />

      {/* Seção Dedetização com Relógio */}
      <PestControlSection />

      {/* Banner de Cookies - LGPD/GDPR Compliant */}
      <CookieBanner />
      
      {/* Banner Flutuante de Promoção */}
      <FloatingPromotion />
      
      <Footer />
    </div>
  )
}

export default App

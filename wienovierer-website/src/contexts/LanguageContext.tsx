'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

export type Language = 'de' | 'en' | 'tr'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Çeviri verileri
const translations = {
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.services': 'Dienstleistungen',
    'nav.about': 'Über uns',
    'nav.references': 'Referenzen',
    'nav.blog': 'Blog',
    'nav.contact': 'Kontakt',
    'nav.quote': 'Angebot anfordern',
    
    // Hero Section
    'hero.title': 'Wienovierer',
    'hero.subtitle': 'Professionelle Reparatur- und Renovierungsdienstleistungen in Wien, Österreich, Deutschland und Ungarn',
    'hero.callNow': 'Jetzt anrufen',
    'hero.getQuote': 'Angebot anfordern',
    
    // Features
    'features.emergency.title': '24/7 Notdienst',
    'features.emergency.desc': 'Wir sind immer für Sie da, schnelle Intervention in Notfällen',
    'features.area.title': 'Großer Servicebereich',
    'features.area.desc': 'Service in Wien, Österreich, Deutschland und Ungarn',
    'features.quality.title': 'Qualitätsservice',
    'features.quality.desc': 'Kundenorientiert, garantierte Qualitätsarbeit',
    
    // Services
    'services.title': 'Unsere Dienstleistungen',
    'services.subtitle': 'Wir führen professionell alle Arten von Reparatur- und Renovierungsarbeiten in Ihrem Zuhause durch',
    
    'services.electrical.title': 'Elektroarbeiten',
    'services.electrical.item1': 'Elektroinstallation und Erneuerung',
    'services.electrical.item2': 'Beleuchtungssysteme und Smart Home Lösungen',
    'services.electrical.item3': 'Elektrische Störungsbehebung und Wartung',
    
    'services.plumbing.title': 'Sanitärinstallation',
    'services.plumbing.item1': 'Sanitärinstallation und Erneuerung',
    'services.plumbing.item2': 'Verstopfungsbeseitigung und Leckageerkennung',
    'services.plumbing.item3': 'Heizungssysteme und Wartung',
    
    'services.painting.title': 'Malerarbeiten & Parkett',
    'services.painting.item1': 'Innenraummalerei und dekorative Anwendungen',
    'services.painting.item2': 'Parkettverlegung und Bodenrenovierung',
    'services.painting.item3': 'Außenfassadenmalerei und Isolierung',
    
    'services.bathroom.title': 'Bad & Küche',
    'services.bathroom.item1': 'Komplette Renovierung und modernes Design',
    'services.bathroom.item2': 'Sanitärausstattung und Montage',
    'services.bathroom.item3': 'Möbelmontage und Einrichtung',
    
    'services.renovation.title': 'Allgemeine Renovierung',
    'services.renovation.item1': 'Raumrenovierung und Einrichtung',
    'services.renovation.item2': 'Tür- und Fensterwechsel',
    'services.renovation.item3': 'Isolierung und Schalldämmung',
    
    'services.emergency.title': 'Notdienst',
    'services.emergency.item1': '24/7 ununterbrochener Service',
    'services.emergency.item2': 'Schnelle Intervention und Lösung',
    'services.emergency.item3': 'Notfall und Reparatur',
    
    // CTA Section
    'cta.title': 'Jetzt Angebot anfordern!',
    'cta.subtitle': 'Kostenlose Besichtigung und detailliertes Angebot für Ihr Projekt',
    'cta.quote': 'Angebot anfordern',
    'cta.appointment': 'Termin vereinbaren',
  },
  
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.references': 'References',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.quote': 'Get Quote',
    
    // Hero Section
    'hero.title': 'Wienovierer',
    'hero.subtitle': 'Professional repair and renovation services in Vienna, Austria, Germany and Hungary',
    'hero.callNow': 'Call Now',
    'hero.getQuote': 'Get Quote',
    
    // Features
    'features.emergency.title': '24/7 Emergency Service',
    'features.emergency.desc': 'We are always there for you, fast intervention in emergencies',
    'features.area.title': 'Wide Service Area',
    'features.area.desc': 'Service in Vienna, Austria, Germany and Hungary',
    'features.quality.title': 'Quality Service',
    'features.quality.desc': 'Customer-focused, guaranteed quality workmanship',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'We professionally perform all types of repair and renovation work in your home',
    
    'services.electrical.title': 'Electrical Work',
    'services.electrical.item1': 'Electrical installation and renewal',
    'services.electrical.item2': 'Lighting systems and smart home solutions',
    'services.electrical.item3': 'Electrical troubleshooting and maintenance',
    
    'services.plumbing.title': 'Plumbing',
    'services.plumbing.item1': 'Plumbing installation and renewal',
    'services.plumbing.item2': 'Clog removal and leak detection',
    'services.plumbing.item3': 'Heating systems and maintenance',
    
    'services.painting.title': 'Painting & Parquet',
    'services.painting.item1': 'Interior painting and decorative applications',
    'services.painting.item2': 'Parquet laying and floor renovation',
    'services.painting.item3': 'Exterior facade painting and insulation',
    
    'services.bathroom.title': 'Bathroom & Kitchen',
    'services.bathroom.item1': 'Complete renovation and modern design',
    'services.bathroom.item2': 'Sanitary ware and installation',
    'services.bathroom.item3': 'Furniture assembly and arrangement',
    
    'services.renovation.title': 'General Renovation',
    'services.renovation.item1': 'Room renovation and arrangement',
    'services.renovation.item2': 'Door and window replacement',
    'services.renovation.item3': 'Insulation and soundproofing',
    
    'services.emergency.title': 'Emergency Service',
    'services.emergency.item1': '24/7 uninterrupted service',
    'services.emergency.item2': 'Fast intervention and solution',
    'services.emergency.item3': 'Emergency and repair',
    
    // CTA Section
    'cta.title': 'Get Quote Now!',
    'cta.subtitle': 'Free inspection and detailed quote for your project',
    'cta.quote': 'Get Quote',
    'cta.appointment': 'Book Appointment',
  },
  
  tr: {
    // Navigation
    'nav.home': 'Ana Sayfa',
    'nav.services': 'Hizmetler',
    'nav.about': 'Hakkımızda',
    'nav.references': 'Referanslar',
    'nav.blog': 'Blog',
    'nav.contact': 'İletişim',
    'nav.quote': 'Teklif Al',
    
    // Hero Section
    'hero.title': 'Wienovierer',
    'hero.subtitle': 'Wien, Avusturya, Almanya ve Macaristan\'da profesyonel tamir ve tadilat hizmetleri',
    'hero.callNow': 'Hemen Ara',
    'hero.getQuote': 'Teklif Al',
    
    // Features
    'features.emergency.title': '7/24 Acil Servis',
    'features.emergency.desc': 'Her zaman yanınızdayız, acil durumlarda hızlı müdahale',
    'features.area.title': 'Geniş Hizmet Alanı',
    'features.area.desc': 'Wien, Avusturya, Almanya ve Macaristan genelinde hizmet',
    'features.quality.title': 'Kaliteli Hizmet',
    'features.quality.desc': 'Müşteri odaklı, kaliteli işçilik garantisi',
    
    // Services
    'services.title': 'Hizmetlerimiz',
    'services.subtitle': 'Evinizle ilgili her türlü tamir ve tadilat işini profesyonelce yapıyoruz',
    
    'services.electrical.title': 'Elektrik İşleri',
    'services.electrical.item1': 'Elektrik tesisatı kurulumu ve yenileme',
    'services.electrical.item2': 'Aydınlatma sistemleri ve akıllı ev çözümleri',
    'services.electrical.item3': 'Elektrik arıza giderme ve bakım',
    
    'services.plumbing.title': 'Su Tesisatı',
    'services.plumbing.item1': 'Su tesisatı kurulumu ve yenileme',
    'services.plumbing.item2': 'Tıkanıklık açma ve su kaçağı tespiti',
    'services.plumbing.item3': 'Isıtma sistemleri ve bakım',
    
    'services.painting.title': 'Boya & Parke',
    'services.painting.item1': 'İç cephe boya ve dekoratif uygulamalar',
    'services.painting.item2': 'Parke döşeme ve zemin yenileme',
    'services.painting.item3': 'Dış cephe boya ve izolasyon',
    
    'services.bathroom.title': 'Banyo & Mutfak',
    'services.bathroom.item1': 'Tamamen yenileme ve modern tasarım',
    'services.bathroom.item2': 'Vitrifiye değişimi ve montaj',
    'services.bathroom.item3': 'Mobilya montajı ve düzenleme',
    
    'services.renovation.title': 'Genel Tadilat',
    'services.renovation.item1': 'Oda yenileme ve düzenleme',
    'services.renovation.item2': 'Kapı pencere değişimi',
    'services.renovation.item3': 'İzolasyon ve ses yalıtımı',
    
    'services.emergency.title': 'Acil Servis',
    'services.emergency.item1': '7/24 kesintisiz hizmet',
    'services.emergency.item2': 'Hızlı müdahale ve çözüm',
    'services.emergency.item3': 'Acil durum ve onarım',
    
    // CTA Section
    'cta.title': 'Hemen Teklif Alın!',
    'cta.subtitle': 'Projeniz için ücretsiz keşif ve detaylı teklif alın',
    'cta.quote': 'Teklif Al',
    'cta.appointment': 'Randevu Al',
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('de')

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

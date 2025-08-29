'use client'

import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const { t, language } = useLanguage()

  const footerTranslations = {
    de: {
      contact: 'Kontakt',
      address: 'Adresse',
      phone: 'Telefon',
      email: 'E-Mail',
      workingHours: 'Arbeitszeiten',
      services: 'Dienstleistungen',
      about: 'Über uns',
      privacy: 'Datenschutz',
      terms: 'AGB',
      copyright: '© 2024 Wienovierer. Alle Rechte vorbehalten.',
      emergency: '24/7 Notdienst verfügbar'
    },
    en: {
      contact: 'Contact',
      address: 'Address',
      phone: 'Phone',
      email: 'Email',
      workingHours: 'Working Hours',
      services: 'Services',
      about: 'About',
      privacy: 'Privacy',
      terms: 'Terms',
      copyright: '© 2024 Wienovierer. All rights reserved.',
      emergency: '24/7 Emergency service available'
    },
    tr: {
      contact: 'İletişim',
      address: 'Adres',
      phone: 'Telefon',
      email: 'E-posta',
      workingHours: 'Çalışma Saatleri',
      services: 'Hizmetler',
      about: 'Hakkımızda',
      privacy: 'Gizlilik',
      terms: 'Şartlar',
      copyright: '© 2024 Wienovierer. Tüm hakları saklıdır.',
      emergency: '7/24 Acil servis mevcut'
    }
  }

  const t_footer = (key: string) => footerTranslations[language][key as keyof typeof footerTranslations[typeof language]] || key

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <Image 
                src="/logo.svg" 
                alt="Wienovierer Logo" 
                width={50} 
                height={50}
                className="mr-3"
              />
              <h3 className="text-2xl font-bold text-white">Wienovierer</h3>
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              {t('hero.subtitle')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t_footer('contact')}</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-slate-300">Wien, Österreich</p>
                  <p className="text-slate-400 text-sm">Deutschland & Ungarn</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-slate-300">+43 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-slate-300">info@wienovierer.com</span>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t_footer('workingHours')}</h4>
            <div className="space-y-2 text-slate-300">
              <div className="flex justify-between">
                <span>Montag - Freitag:</span>
                <span>08:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span>Samstag:</span>
                <span>09:00 - 15:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sonntag:</span>
                <span>Geschlossen</span>
              </div>
            </div>
            <div className="mt-4 p-3 bg-red-600/20 border border-red-500/30 rounded-lg">
              <p className="text-red-400 text-sm font-medium">{t_footer('emergency')}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">{t_footer('copyright')}</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                {t_footer('privacy')}
              </a>
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                {t_footer('terms')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

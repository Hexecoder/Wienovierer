'use client'

import { useState } from 'react'
import { Menu, X, Globe, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const languages = [
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' }
  ]

  const navigation = [
    { name: t('nav.home'), href: '/', key: 'nav.home' },
    { name: t('nav.services'), href: '/services', key: 'nav.services' },
    { name: t('nav.about'), href: '/about', key: 'nav.about' },
    { name: t('nav.references'), href: '/references', key: 'nav.references' },
    { name: t('nav.blog'), href: '/blog', key: 'nav.blog' },
    { name: t('nav.contact'), href: '/contact', key: 'nav.contact' },
    { name: 'Randevu', href: '/appointment', key: 'nav.appointment' }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              <Image 
                src="/logo.svg" 
                alt="Wienovierer Logo" 
                width={40} 
                height={40}
                className="relative z-10"
              />
            </div>
            <span className="text-2xl font-black bg-gradient-to-r from-slate-900 to-blue-800 bg-clip-text text-transparent">
              Wienovierer
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navigation.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-slate-700 hover:text-blue-600 transition-all duration-300 font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLanguage(language === 'de' ? 'en' : language === 'en' ? 'tr' : 'de')}
                className="flex items-center space-x-2 px-4 py-2 rounded-xl hover:bg-slate-100 transition-all duration-300 group"
              >
                <Globe className="w-4 h-4 text-slate-600 group-hover:text-blue-600 transition-colors duration-300" />
                <span className="text-lg">{languages.find(l => l.code === language)?.flag}</span>
              </button>
            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              {t('nav.quote')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-3 rounded-xl hover:bg-slate-100 transition-all duration-300"
          >
            {isOpen ? <X className="w-6 h-6 text-slate-700" /> : <Menu className="w-6 h-6 text-slate-700" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-slate-200/50 py-6 bg-white/95 backdrop-blur-xl">
            <div className="space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="block px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-xl transition-all duration-300 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Language & CTA */}
              <div className="pt-6 border-t border-slate-200/50">
                <div className="flex items-center justify-between px-4">
                  <button
                    onClick={() => setLanguage(language === 'de' ? 'en' : language === 'en' ? 'tr' : 'de')}
                    className="flex items-center space-x-2 px-4 py-3 rounded-xl hover:bg-slate-100 transition-all duration-300"
                  >
                    <Globe className="w-4 h-4 text-slate-600" />
                    <span className="text-lg">{languages.find(l => l.code === language)?.flag}</span>
                  </button>
                  
                  <Link
                    href="/contact"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center gap-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <Phone className="w-4 h-4" />
                    {t('nav.quote')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

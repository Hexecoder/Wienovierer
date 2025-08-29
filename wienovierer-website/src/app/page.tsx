'use client'

import Image from 'next/image'
import { Wrench, Phone, Clock, Star, MapPin, CheckCircle, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Home() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%229C92AC%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        
        {/* Content */}
        <div className="relative z-10 container-custom text-center px-4 max-w-6xl">
          {/* Logo */}
          <div className="mb-12 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-20 animate-pulse"></div>
              <Image 
                src="/logo.svg" 
                alt="Wienovierer Logo" 
                width={100} 
                height={100}
                className="relative z-10 drop-shadow-lg"
              />
            </div>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              {t('hero.title')}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            {t('hero.subtitle')}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button className="group bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-slate-900/25 flex items-center justify-center gap-3">
              <Phone className="w-5 h-5" />
              {t('hero.callNow')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="group bg-white hover:bg-slate-50 text-slate-900 font-semibold py-4 px-8 rounded-2xl transition-all duration-300 border-2 border-slate-200 hover:border-slate-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3">
              {t('hero.getQuote')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20 hover:border-blue-200/50">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-slate-800">{t('features.emergency.title')}</h3>
              <p className="text-slate-600 leading-relaxed">{t('features.emergency.desc')}</p>
            </div>
            
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20 hover:border-green-200/50">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-slate-800">{t('features.area.title')}</h3>
              <p className="text-slate-600 leading-relaxed">{t('features.area.desc')}</p>
            </div>
            
            <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20 hover:border-purple-200/50">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-slate-800">{t('features.quality.title')}</h3>
              <p className="text-slate-600 leading-relaxed">{t('features.quality.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 tracking-tight">
              {t('services.title')}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {t('services.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Elektrik */}
            <div className="group bg-gradient-to-br from-slate-50 to-blue-50/30 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-blue-200">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <Wrench className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-slate-800">{t('services.electrical.title')}</h3>
              <ul className="space-y-4 text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{t('services.electrical.item1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{t('services.electrical.item2')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{t('services.electrical.item3')}</span>
                </li>
              </ul>
            </div>

            {/* Su Tesisatı */}
            <div className="group bg-gradient-to-br from-slate-50 to-green-50/30 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-green-200">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <Wrench className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-slate-800">{t('services.plumbing.title')}</h3>
              <ul className="space-y-4 text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{t('services.plumbing.item1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{t('services.plumbing.item2')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{t('services.plumbing.item3')}</span>
                </li>
              </ul>
            </div>

            {/* Boya & Parke */}
            <div className="group bg-gradient-to-br from-slate-50 to-yellow-50/30 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-yellow-200">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <Wrench className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-slate-800">{t('services.painting.title')}</h3>
              <ul className="space-y-4 text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{t('services.painting.item1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{t('services.painting.item2')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{t('services.painting.item3')}</span>
                </li>
              </ul>
            </div>

            {/* Banyo & Mutfak */}
            <div className="group bg-gradient-to-br from-slate-50 to-purple-50/30 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-purple-200">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <Wrench className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-slate-800">{t('services.bathroom.title')}</h3>
              <ul className="space-y-4 text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{t('services.bathroom.item1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{t('services.bathroom.item2')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{t('services.bathroom.item3')}</span>
                </li>
              </ul>
            </div>

            {/* Tadilat */}
            <div className="group bg-gradient-to-br from-slate-50 to-red-50/30 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-red-200">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <Wrench className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-slate-800">{t('services.renovation.title')}</h3>
              <ul className="space-y-4 text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{t('services.renovation.item1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{t('services.renovation.item2')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{t('services.renovation.item3')}</span>
                </li>
              </ul>
            </div>

            {/* Acil Servis */}
            <div className="group bg-gradient-to-br from-slate-50 to-orange-50/30 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-orange-200">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-slate-800">{t('services.emergency.title')}</h3>
              <ul className="space-y-4 text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{t('services.emergency.item1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{t('services.emergency.item2')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{t('services.emergency.item3')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        
        <div className="container-custom text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">
            {t('cta.title')}
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto leading-relaxed">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group bg-white text-slate-900 hover:bg-slate-100 font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-3">
              {t('cta.quote')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="group border-2 border-white text-white hover:bg-white hover:text-slate-900 font-bold py-4 px-8 rounded-2xl transition-all duration-300 flex items-center gap-3">
              {t('cta.appointment')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

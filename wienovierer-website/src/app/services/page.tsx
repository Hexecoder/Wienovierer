'use client'

import { Wrench, Phone, Clock, Star, MapPin, CheckCircle, ArrowRight, Zap, Droplets, Palette, Bath, Hammer, Shield } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'

export default function ServicesPage() {
  const { t } = useLanguage()

  const serviceDetails = [
    {
      icon: Zap,
      title: t('services.electrical.title'),
      description: 'Profesyonel elektrik tesisatı ve bakım hizmetleri',
      features: [
        t('services.electrical.item1'),
        t('services.electrical.item2'),
        t('services.electrical.item3'),
        'Güvenlik sistemleri kurulumu',
        'Enerji tasarrufu çözümleri'
      ],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100'
    },
    {
      icon: Droplets,
      title: t('services.plumbing.title'),
      description: 'Su tesisatı ve ısıtma sistemleri',
      features: [
        t('services.plumbing.item1'),
        t('services.plumbing.item2'),
        t('services.plumbing.item3'),
        'Su arıtma sistemleri',
        'Sıcak su tesisatı'
      ],
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100'
    },
    {
      icon: Palette,
      title: t('services.painting.title'),
      description: 'İç ve dış cephe boya işleri',
      features: [
        t('services.painting.item1'),
        t('services.painting.item2'),
        t('services.painting.item3'),
        'Dekoratif boya teknikleri',
        'Su bazlı boya uygulamaları'
      ],
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'from-yellow-50 to-orange-100'
    },
    {
      icon: Bath,
      title: t('services.bathroom.title'),
      description: 'Banyo ve mutfak yenileme',
      features: [
        t('services.bathroom.item1'),
        t('services.bathroom.item2'),
        t('services.bathroom.item3'),
        'Modern tasarım çözümleri',
        'Erişilebilirlik uyumluluğu'
      ],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100'
    },
    {
      icon: Hammer,
      title: t('services.renovation.title'),
      description: 'Genel ev tadilat ve yenileme',
      features: [
        t('services.renovation.item1'),
        t('services.renovation.item2'),
        t('services.renovation.item3'),
        'Yapısal güçlendirme',
        'Enerji verimliliği iyileştirmeleri'
      ],
      color: 'from-red-500 to-red-600',
      bgColor: 'from-red-50 to-red-100'
    },
    {
      icon: Shield,
      title: t('services.emergency.title'),
      description: '7/24 acil servis ve onarım',
      features: [
        t('services.emergency.item1'),
        t('services.emergency.item2'),
        t('services.emergency.item3'),
        'Hızlı müdahale garantisi',
        'Gece ve hafta sonu hizmet'
      ],
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-50 to-orange-100'
    }
  ]

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6 text-slate-900 tracking-tight">
            {t('services.title')}
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            {t('services.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              {t('cta.quote')}
            </Link>
            <Link href="/contact" className="btn-secondary">
              {t('cta.appointment')}
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {serviceDetails.map((service, index) => (
              <div key={index} className="group">
                <div className={`bg-gradient-to-br ${service.bgColor} p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-slate-200 h-full`}>
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-slate-800">{service.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-slate-500">
                      <Clock className="w-4 h-4 inline mr-1" />
                      Ortalama süre: 2-5 gün
                    </div>
                    <button className="group bg-slate-900 hover:bg-slate-800 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 flex items-center gap-2">
                      {t('cta.quote')}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">
            {t('cta.title')}
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto leading-relaxed">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="group bg-white text-slate-900 hover:bg-slate-100 font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center gap-3">
              {t('cta.quote')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link href="/contact" className="group border-2 border-white text-white hover:bg-white hover:text-slate-900 font-bold py-4 px-8 rounded-2xl transition-all duration-300 flex items-center gap-3">
              {t('cta.appointment')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

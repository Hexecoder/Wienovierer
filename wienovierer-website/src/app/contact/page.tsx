'use client'

import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { useState } from 'react'

export default function ContactPage() {
  const { t, language } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  
  // Captcha için sabit değerler (useState içinde fonksiyon çağırmayalım)
  const [captchaData] = useState(() => {
    const num1 = Math.floor(Math.random() * 10) + 1
    const num2 = Math.floor(Math.random() * 10) + 1
    return { question: `${num1} + ${num2} = ?`, result: num1 + num2 }
  })
  
  const [captcha, setCaptcha] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Captcha kontrolü
    if (parseInt(captcha) !== captchaData.result) {
      alert('Captcha yanlış! Lütfen tekrar deneyin.')
      setCaptcha('')
      return
    }

    setIsSubmitting(true)
    
    try {
      // Simüle edilmiş API çağrısı
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      console.log('Form submitted:', formData)
      
      // Başarılı submit
      setSubmitStatus('success')
      
      // Formu sıfırla
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      })
      setCaptcha('')
      
      // 3 saniye sonra status'u sıfırla
      setTimeout(() => setSubmitStatus('idle'), 3000)
      
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactTranslations = {
    de: {
      title: 'Kontakt',
      subtitle: 'Bizimle iletişime geçin',
      formTitle: 'Mesaj Gönderin',
      name: 'Ad Soyad',
      email: 'E-posta',
      phone: 'Telefon',
      service: 'Hizmet Türü',
      message: 'Mesajınız',
      send: 'Gönder',
      contactInfo: 'İletişim Bilgileri',
      workingHours: 'Çalışma Saatleri',
      emergency: 'Acil Durum',
      emergencyDesc: '7/24 acil servis için hemen arayın',
      callNow: 'Hemen Ara',
      captcha: 'Güvenlik Kodu',
      captchaPlaceholder: 'Sonucu girin',
      successMessage: 'Mesajınız başarıyla gönderildi!',
      errorMessage: 'Bir hata oluştu. Lütfen tekrar deneyin.',
      sending: 'Gönderiliyor...'
    },
    en: {
      title: 'Contact',
      subtitle: 'Get in touch with us',
      formTitle: 'Send Message',
      name: 'Full Name',
      email: 'Email',
      phone: 'Phone',
      service: 'Service Type',
      message: 'Your Message',
      send: 'Send',
      contactInfo: 'Contact Information',
      workingHours: 'Working Hours',
      emergency: 'Emergency',
      emergencyDesc: 'Call now for 24/7 emergency service',
      callNow: 'Call Now',
      captcha: 'Security Code',
      captchaPlaceholder: 'Enter result',
      successMessage: 'Your message has been sent successfully!',
      errorMessage: 'An error occurred. Please try again.',
      sending: 'Sending...'
    },
    tr: {
      title: 'İletişim',
      subtitle: 'Bizimle iletişime geçin',
      formTitle: 'Mesaj Gönderin',
      name: 'Ad Soyad',
      email: 'E-posta',
      phone: 'Telefon',
      service: 'Hizmet Türü',
      message: 'Mesajınız',
      send: 'Gönder',
      contactInfo: 'İletişim Bilgileri',
      workingHours: 'Çalışma Saatleri',
      emergency: 'Acil Durum',
      emergencyDesc: '7/24 acil servis için hemen arayın',
      callNow: 'Hemen Ara',
      captcha: 'Güvenlik Kodu',
      captchaPlaceholder: 'Sonucu girin',
      successMessage: 'Mesajınız başarıyla gönderildi!',
      errorMessage: 'Bir hata oluştu. Lütfen tekrar deneyin.',
      sending: 'Gönderiliyor...'
    }
  }

  const t_contact = (key: string) => contactTranslations[language][key as keyof typeof contactTranslations[typeof language]] || key

  return (
    <main className="min-h-screen pt-16">
      {/* Success/Error Messages */}
      {submitStatus === 'success' && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg flex items-center space-x-2">
          <CheckCircle className="w-5 h-5" />
          <span>{t_contact('successMessage')}</span>
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-red-500 text-white px-6 py-3 rounded-xl shadow-lg flex items-center space-x-2">
          <AlertCircle className="w-5 h-5" />
          <span>{t_contact('errorMessage')}</span>
        </div>
      )}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6 text-slate-900 tracking-tight">
            {t_contact('title')}
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t_contact('subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-slate-900">{t_contact('formTitle')}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      {t_contact('name')} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      {t_contact('email')} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      {t_contact('phone')}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      {t_contact('service')}
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Seçiniz</option>
                      <option value="electrical">Elektrik İşleri</option>
                      <option value="plumbing">Su Tesisatı</option>
                      <option value="painting">Boya & Parke</option>
                      <option value="bathroom">Banyo & Mutfak</option>
                      <option value="renovation">Genel Tadilat</option>
                      <option value="emergency">Acil Servis</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {t_contact('message')} *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  />
                </div>

                {/* Captcha */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {t_contact('captcha')} *
                  </label>
                  <div className="flex items-center space-x-3">
                    <span className="text-lg font-mono bg-slate-100 px-4 py-3 rounded-lg">
                      {captchaData.question}
                    </span>
                    <input
                      type="number"
                      value={captcha}
                      onChange={(e) => setCaptcha(e.target.value)}
                      placeholder={t_contact('captchaPlaceholder')}
                      required
                      className="flex-1 px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-slate-400 disabled:to-slate-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 disabled:transform-none disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting ? t_contact('sending') : t_contact('send')}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-slate-900">{t_contact('contactInfo')}</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-900">Wien, Österreich</p>
                      <p className="text-slate-600">Deutschland & Ungarn</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="font-semibold text-slate-900">+43 123 456 789</p>
                      <p className="text-slate-600">7/24 Acil Servis</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="font-semibold text-slate-900">info@wienovierer.com</p>
                      <p className="text-slate-600">Hızlı yanıt garantisi</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-slate-900">{t_contact('workingHours')}</h3>
                <div className="space-y-3 text-slate-700">
                  <div className="flex justify-between">
                    <span>Pazartesi - Cuma:</span>
                    <span>08:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cumartesi:</span>
                    <span>09:00 - 15:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pazar:</span>
                    <span>Kapalı</span>
                  </div>
                </div>
              </div>

              {/* Emergency Section */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-2xl border border-red-200">
                <div className="flex items-center space-x-3 mb-3">
                  <Phone className="w-6 h-6 text-red-600" />
                  <h4 className="text-xl font-bold text-red-800">{t_contact('emergency')}</h4>
                </div>
                <p className="text-red-700 mb-4">{t_contact('emergencyDesc')}</p>
                <a
                  href="tel:+43123456789"
                  className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  <span>{t_contact('callNow')}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Hizmet Bölgelerimiz</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Wien, Avusturya, Almanya ve Macaristan genelinde profesyonel hizmet veriyoruz
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Harita Entegrasyonu</h3>
                <p className="text-slate-600">Google Maps veya OpenStreetMap entegrasyonu buraya gelecek</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

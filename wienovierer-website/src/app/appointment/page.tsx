'use client'

import { Calendar, Clock, Phone, MapPin, CheckCircle, AlertCircle, CalendarDays, Clock3, User, MessageSquare } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { useState } from 'react'

export default function AppointmentPage() {
  const { t, language } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    setIsSubmitting(true)
    
    try {
      // Simüle edilmiş API çağrısı
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      console.log('Appointment submitted:', formData)
      
      // Başarılı submit
      setSubmitStatus('success')
      
      // Formu sıfırla
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        message: ''
      })
      
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

  const appointmentTranslations = {
    de: {
      title: 'Online Randevu',
      subtitle: 'Uygun tarih ve saatte randevu alın',
      formTitle: 'Randevu Formu',
      name: 'Ad Soyad',
      email: 'E-posta',
      phone: 'Telefon',
      service: 'Hizmet Türü',
      date: 'Tarih',
      time: 'Saat',
      message: 'Ek Notlar',
      submit: 'Randevu Al',
      contactInfo: 'İletişim Bilgileri',
      workingHours: 'Çalışma Saatleri',
      emergency: 'Acil Durum',
      emergencyDesc: '7/24 acil servis için hemen arayın',
      callNow: 'Hemen Ara',
      successMessage: 'Randevunuz başarıyla alındı!',
      errorMessage: 'Bir hata oluştu. Lütfen tekrar deneyin.',
      submitting: 'Gönderiliyor...',
      selectDate: 'Tarih Seçin',
      selectTime: 'Saat Seçin',
      selectService: 'Hizmet Seçin'
    },
    en: {
      title: 'Online Appointment',
      subtitle: 'Book an appointment at your convenient date and time',
      formTitle: 'Appointment Form',
      name: 'Full Name',
      email: 'Email',
      phone: 'Phone',
      service: 'Service Type',
      date: 'Date',
      time: 'Time',
      message: 'Additional Notes',
      submit: 'Book Appointment',
      contactInfo: 'Contact Information',
      workingHours: 'Working Hours',
      emergency: 'Emergency',
      emergencyDesc: 'Call now for 24/7 emergency service',
      callNow: 'Call Now',
      successMessage: 'Your appointment has been booked successfully!',
      errorMessage: 'An error occurred. Please try again.',
      submitting: 'Submitting...',
      selectDate: 'Select Date',
      selectTime: 'Select Time',
      selectService: 'Select Service'
    },
    tr: {
      title: 'Online Randevu',
      subtitle: 'Uygun tarih ve saatte randevu alın',
      formTitle: 'Randevu Formu',
      name: 'Ad Soyad',
      email: 'E-posta',
      phone: 'Telefon',
      service: 'Hizmet Türü',
      date: 'Tarih',
      time: 'Saat',
      message: 'Ek Notlar',
      submit: 'Randevu Al',
      contactInfo: 'İletişim Bilgileri',
      workingHours: 'Çalışma Saatleri',
      emergency: 'Acil Durum',
      emergencyDesc: '7/24 acil servis için hemen arayın',
      callNow: 'Hemen Ara',
      successMessage: 'Randevunuz başarıyla alındı!',
      errorMessage: 'Bir hata oluştu. Lütfen tekrar deneyin.',
      submitting: 'Gönderiliyor...',
      selectDate: 'Tarih Seçin',
      selectTime: 'Saat Seçin',
      selectService: 'Hizmet Seçin'
    }
  }

  const t_appointment = (key: string) => appointmentTranslations[language][key as keyof typeof appointmentTranslations[typeof language]] || key

  // Bugünden itibaren 30 gün sonrasına kadar tarih seçimi
  const getMinDate = () => {
    const today = new Date()
    return today.toISOString().split('T')[0]
  }

  const getMaxDate = () => {
    const maxDate = new Date()
    maxDate.setDate(maxDate.getDate() + 30)
    return maxDate.toISOString().split('T')[0]
  }

  return (
    <main className="min-h-screen pt-16">
      {/* Success/Error Messages */}
      {submitStatus === 'success' && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg flex items-center space-x-2">
          <CheckCircle className="w-5 h-5" />
          <span>{t_appointment('successMessage')}</span>
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-red-500 text-white px-6 py-3 rounded-xl shadow-lg flex items-center space-x-2">
          <AlertCircle className="w-5 h-5" />
          <span>{t_appointment('errorMessage')}</span>
        </div>
      )}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6 text-slate-900 tracking-tight">
            {t_appointment('title')}
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t_appointment('subtitle')}
          </p>
        </div>
      </section>

      {/* Appointment Content */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Appointment Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-slate-900">{t_appointment('formTitle')}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      {t_appointment('name')} *
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
                      {t_appointment('email')} *
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
                      {t_appointment('phone')} *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      {t_appointment('service')} *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">{t_appointment('selectService')}</option>
                      <option value="electrical">Elektrik İşleri</option>
                      <option value="plumbing">Su Tesisatı</option>
                      <option value="painting">Boya & Parke</option>
                      <option value="bathroom">Banyo & Mutfak</option>
                      <option value="renovation">Genel Tadilat</option>
                      <option value="emergency">Acil Servis</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      {t_appointment('date')} *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={getMinDate()}
                      max={getMaxDate()}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      {t_appointment('time')} *
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">{t_appointment('selectTime')}</option>
                      <option value="08:00">08:00</option>
                      <option value="09:00">09:00</option>
                      <option value="10:00">10:00</option>
                      <option value="11:00">11:00</option>
                      <option value="12:00">12:00</option>
                      <option value="13:00">13:00</option>
                      <option value="14:00">14:00</option>
                      <option value="15:00">15:00</option>
                      <option value="16:00">16:00</option>
                      <option value="17:00">17:00</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {t_appointment('message')}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Randevu hakkında ek bilgi veya özel istekleriniz..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-slate-400 disabled:to-slate-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 disabled:transform-none disabled:cursor-not-allowed"
                >
                  <CalendarDays className="w-5 h-5" />
                  {isSubmitting ? t_appointment('submitting') : t_appointment('submit')}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-slate-900">{t_appointment('contactInfo')}</h3>
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
                    <Calendar className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="font-semibold text-slate-900">Randevu Sistemi</p>
                      <p className="text-slate-600">Online randevu alma kolaylığı</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-slate-900">{t_appointment('workingHours')}</h3>
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
                  <h4 className="text-xl font-bold text-red-800">{t_appointment('emergency')}</h4>
                </div>
                <p className="text-red-700 mb-4">{t_appointment('emergencyDesc')}</p>
                <a
                  href="tel:+43123456789"
                  className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  <span>{t_appointment('callNow')}</span>
                </a>
              </div>

              {/* Info Box */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-200">
                <div className="flex items-center space-x-3 mb-3">
                  <Clock3 className="w-6 h-6 text-blue-600" />
                  <h4 className="text-xl font-bold text-blue-800">Randevu Bilgileri</h4>
                </div>
                <ul className="space-y-2 text-blue-700 text-sm">
                  <li>• Randevular en az 24 saat önceden alınmalıdır</li>
                  <li>• Acil durumlar için telefon ile iletişime geçin</li>
                  <li>• Randevu saatinden 15 dakika önce hazır olun</li>
                  <li>• İptal durumunda en az 2 saat önceden haber verin</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

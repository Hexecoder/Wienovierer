'use client'

import { Calendar, Clock, User, ArrowRight, Search, Filter, BookOpen } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'
import { useState } from 'react'

export default function BlogPage() {
  const { t } = useLanguage()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const blogPosts = [
    {
      id: 1,
      title: 'Elektrik Tesisatında Güvenlik Önlemleri',
      excerpt: 'Ev elektrik tesisatında alınması gereken güvenlik önlemleri ve modern çözümler hakkında detaylı bilgi.',
      category: 'electrical',
      author: 'Wienovierer Uzmanı',
      date: '2024-01-15',
      readTime: '5 dk',
      image: '/api/placeholder/400/250',
      tags: ['Elektrik', 'Güvenlik', 'Bakım']
    },
    {
      id: 2,
      title: 'Su Tesisatı Problemleri ve Çözümleri',
      excerpt: 'Yaygın su tesisatı problemleri, nedenleri ve profesyonel çözüm yöntemleri.',
      category: 'plumbing',
      author: 'Su Tesisatı Uzmanı',
      date: '2024-01-12',
      readTime: '7 dk',
      image: '/api/placeholder/400/250',
      tags: ['Su Tesisatı', 'Onarım', 'Bakım']
    },
    {
      id: 3,
      title: 'Modern Boya Teknikleri ve Trendleri',
      excerpt: '2024 yılında popüler olan boya teknikleri ve ev dekorasyon trendleri.',
      category: 'painting',
      author: 'Dekorasyon Uzmanı',
      date: '2024-01-10',
      readTime: '6 dk',
      image: '/api/placeholder/400/250',
      tags: ['Boya', 'Dekorasyon', 'Trend']
    },
    {
      id: 4,
      title: 'Banyo Yenileme Rehberi',
      excerpt: 'Banyo yenileme sürecinde dikkat edilmesi gerekenler ve modern tasarım önerileri.',
      category: 'bathroom',
      author: 'Tadilat Uzmanı',
      date: '2024-01-08',
      readTime: '8 dk',
      image: '/api/placeholder/400/250',
      tags: ['Banyo', 'Tadilat', 'Tasarım']
    },
    {
      id: 5,
      title: 'Enerji Tasarrufu İçin İzolasyon',
      excerpt: 'Ev izolasyonu ile enerji tasarrufu sağlama yöntemleri ve maliyet analizi.',
      category: 'renovation',
      author: 'Enerji Uzmanı',
      date: '2024-01-05',
      readTime: '9 dk',
      image: '/api/placeholder/400/250',
      tags: ['İzolasyon', 'Enerji', 'Tasarruf']
    },
    {
      id: 6,
      title: 'Acil Durumlarda Ne Yapmalı?',
      excerpt: 'Elektrik, su ve ısıtma sistemlerinde acil durumlar için güvenlik rehberi.',
      category: 'emergency',
      author: 'Güvenlik Uzmanı',
      date: '2024-01-03',
      readTime: '4 dk',
      image: '/api/placeholder/400/250',
      tags: ['Acil Durum', 'Güvenlik', 'Rehber']
    }
  ]

  const categories = [
    { id: 'all', name: 'Tümü', count: blogPosts.length },
    { id: 'electrical', name: 'Elektrik', count: blogPosts.filter(p => p.category === 'electrical').length },
    { id: 'plumbing', name: 'Su Tesisatı', count: blogPosts.filter(p => p.category === 'plumbing').length },
    { id: 'painting', name: 'Boya & Dekorasyon', count: blogPosts.filter(p => p.category === 'painting').length },
    { id: 'bathroom', name: 'Banyo & Mutfak', count: blogPosts.filter(p => p.category === 'bathroom').length },
    { id: 'renovation', name: 'Tadilat', count: blogPosts.filter(p => p.category === 'renovation').length },
    { id: 'emergency', name: 'Acil Durum', count: blogPosts.filter(p => p.category === 'emergency').length }
  ]

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6 text-slate-900 tracking-tight">
            Blog & İpuçları
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ev tadilat ve bakım konularında uzman tavsiyeleri, ipuçları ve güncel bilgiler
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Blog yazılarında ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <BookOpen className="w-16 h-16 text-slate-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-600 mb-2">Sonuç bulunamadı</h3>
              <p className="text-slate-500">Arama kriterlerinize uygun blog yazısı bulunamadı.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-slate-200 overflow-hidden">
                  {/* Image */}
                  <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                        {categories.find(c => c.id === post.category)?.name}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-slate-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {post.title}
                    </h3>

                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More */}
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-1 transition-all duration-300"
                    >
                      <span>Devamını Oku</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Güncel Kalın!
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            En son blog yazıları ve ev tadilat ipuçları için e-posta listemize katılın
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="flex-1 px-4 py-3 rounded-xl text-slate-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105">
              Abone Ol
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

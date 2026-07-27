// app/berita/page.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: 'Akademik' | 'Prestasi' | 'Kegiatan' | 'Pengumuman';
  date: string;
  readTime: string;
  image: string;
  isFeatured?: boolean;
}

const DUMMY_ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Santri MAU Bulmah Raih Medali Emas Olimpiade Sains Nasional 2026',
    slug: 'santri-raih-medali-emas-osn-2026',
    excerpt: 'Prestasi membanggakan kembali diraih oleh perwakilan santri dalam ajang OSN bidang Matematika dan Fisika tingkat nasional.',
    category: 'Prestasi',
    date: '20 Juli 2026',
    readTime: '3 min baca',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop',
    isFeatured: true,
  },
  {
    id: '2',
    title: 'Pembukaan Tahun Ajaran Baru & Masa Ta’aruf Siswa Madrasah (MATSAMA)',
    slug: 'pembukaan-matsama-2026',
    excerpt: 'Kegiatan orientasi santri baru resmi dibuka dengan serangkaian acara kepemimpinan dan pengenalan lingkungan madrasah.',
    category: 'Kegiatan',
    date: '15 Juli 2026',
    readTime: '4 min baca',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: '3',
    title: 'Jadwal Pelaksanaan Ujian Tengah Semester Gasal T.A 2026/2027',
    slug: 'jadwal-uts-gasal-2026',
    excerpt: 'Pengumuman resmi mengenai kalender akademik dan teknis pelaksanaan ujian berbasis digital bagi seluruh jenjang.',
    category: 'Pengumuman',
    date: '10 Juli 2026',
    readTime: '2 min baca',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: '4',
    title: 'Penerapan Kurikulum Berbasis Digital & Kitab Kuning Modern',
    slug: 'kurikulum-digital-kitab-kuning',
    excerpt: 'Inovasi metode pembelajaran yang memadukan kedalaman literatur klasik dengan efisiensi teknologi modern.',
    category: 'Akademik',
    date: '02 Juli 2026',
    readTime: '5 min baca',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: '5',
    title: 'Kunjungan Edukasi Santri ke Perpustakaan & Museum Nasional',
    slug: 'kunjungan-edukasi-santri',
    excerpt: 'Memperluas wawasan sejarah dan kebudayaan melalui agenda studi lapangan berkala santri kelas XI.',
    category: 'Kegiatan',
    date: '25 Juni 2026',
    readTime: '3 min baca',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: '6',
    title: 'Tim Robotik Madrasah Lolos ke Tingkat Internasional di Jepang',
    slug: 'tim-robotik-lolos-internasional',
    excerpt: 'Inovasi karya robot pemilah sampah otomatis buatan santri berhasil memukau juri tingkat regional.',
    category: 'Prestasi',
    date: '18 Juni 2026',
    readTime: '4 min baca',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=600&auto=format&fit=crop',
  },
];

const CATEGORIES = ['Semua', 'Akademik', 'Prestasi', 'Kegiatan', 'Pengumuman'];

export default function BeritaPage() {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter logika
  const featuredArticle = DUMMY_ARTICLES.find((a) => a.isFeatured);
  
  const filteredArticles = DUMMY_ARTICLES.filter((article) => {
    const matchesCategory =
      selectedCategory === 'Semua' || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition-colors duration-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
            Kabar dan Berita terbaru <span className="text-lime-600 dark:text-lime-400">MAU Bulmah</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Informasi terbaru seputar kegiatan, prestasi santri, pengumuman akademik, dan ragam artikel edukatif.
          </p>
        </div>

        {/* FEATURED ARTICLE BANNER (Hanya tampil jika filter "Semua" & tidak ada search) */}
        {selectedCategory === 'Semua' && !searchQuery && featuredArticle && (
          <div className="mb-12 rounded-3xl overflow-hidden bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 relative h-64 lg:h-auto min-h-[280px]">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-4 left-4 bg-lime-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full shadow-md">
                Artikel Unggulan
              </span>
            </div>
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-3">
                  <span className="font-semibold text-lime-600 dark:text-lime-400 uppercase tracking-wider">
                    {featuredArticle.category}
                  </span>
                  <span>•</span>
                  <span>{featuredArticle.date}</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 hover:text-lime-600 dark:hover:text-lime-400 transition-colors">
                  <Link href={`/berita/${featuredArticle.slug}`}>
                    {featuredArticle.title}
                  </Link>
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3">
                  {featuredArticle.excerpt}
                </p>
              </div>
              <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-700/60 pt-4">
                <span className="text-xs text-slate-400">{featuredArticle.readTime}</span>
                <Link
                  href={`/berita/${featuredArticle.slug}`}
                  className="text-sm font-bold text-lime-600 dark:text-lime-400 hover:underline inline-flex items-center gap-1"
                >
                  Baca Selengkapnya →
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* CONTROLS: FILTER KATEGORI & PENCARIAN */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-white dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-700/60">
          
          {/* Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-lime-500 text-slate-950 shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Cari judul berita..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border-none text-xs sm:text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
            />
            <svg
              className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

        </div>

        {/* GRID ARTIKEL */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="flex flex-col bg-white dark:bg-slate-800/80 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700/60 shadow-sm hover:border-lime-500/50 hover:shadow-md transition-all group"
              >
                <div className="relative h-48 overflow-hidden bg-slate-200 dark:bg-slate-700">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-lime-400 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    {article.category}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 line-clamp-2 group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors">
                      <Link href={`/berita/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>

                    <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-700/50 flex items-center justify-between">
                    <Link
                      href={`/berita/${article.slug}`}
                      className="text-xs font-bold text-lime-600 dark:text-lime-400 hover:underline"
                    >
                      Baca Selengkapnya
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Empty State jika pencarian/filter kosong */
          <div className="text-center py-16 bg-white dark:bg-slate-800/40 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700">
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
              Tidak ada berita yang cocok dengan kata kunci atau kategori "{selectedCategory}".
            </p>
            <button
              onClick={() => {
                setSelectedCategory('Semua');
                setSearchQuery('');
              }}
              className="mt-4 text-xs font-bold text-lime-600 dark:text-lime-400 underline"
            >
              Reset Filter
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
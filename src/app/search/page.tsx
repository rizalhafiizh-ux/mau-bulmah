// app/search/page.tsx
'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Link from 'next/link';

// Data simulasi konten sekolah
const dummyData = [
  { id: 1, title: 'Informasi Pendaftaran Siswa Baru (PPDB) 2026', category: 'PPDB', href: '/ppdb', snippet: 'Panduan lengkap alur pendaftaran, syarat, dan jadwal tes seleksi masuk MAU Bulmah.' },
  { id: 2, title: 'Prestasi Santri: Juara 1 Olimpiade Matematika', category: 'Berita', href: '/berita/juara-olimpiade', snippet: 'Selamat kepada ananda Ahmad atas raihan medali emas pada ajang kompetisi sains nasional.' },
  { id: 3, title: 'Direktori & Ikatan Alumni MAU Bustanul Hikmah', category: 'Alumni', href: '/alumni', snippet: 'Wadah silaturahmi, jaringan karir, dan kontribusi para alumni untuk almamater.' },
  { id: 4, title: 'Jadwal Kegiatan Ekstrakurikuler Semester Genap', category: 'Berita', href: '/berita/kegiatan-ekskul', snippet: 'Informasi pendaftaran dan jadwal pertemuan rutin klub bahasa, pramuka, dan robotik.' },
];

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  // Filter data berdasarkan query
  const results = query
    ? dummyData.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.snippet.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 pt-24">
      {/* Header Pencarian */}
      <div className="mb-8 border-b border-gray-200 dark:border-gray-800 pb-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
          Hasil Pencarian
        </h1>
        {query ? (
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Menampilkan hasil untuk kata kunci: <span className="font-semibold text-lime-600 dark:text-lime-400">&quot;{query}&quot;</span>
          </p>
        ) : (
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Ketik kata kunci di kolom pencarian pada Navbar untuk mulai mencari.
          </p>
        )}
      </div>

      {/* Daftar Hasil */}
      {!query ? null : results.length > 0 ? (
        <div className="space-y-6">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Ditemukan {results.length} hasil
          </p>
          <div className="divide-y divide-gray-100 dark:divide-gray-800">
            {results.map((item) => (
              <div key={item.id} className="py-5 first:pt-0 group">
                <span className="inline-block px-2.5 py-0.5 mb-2 text-xs font-semibold rounded-full bg-lime-100 dark:bg-lime-900/30 text-lime-700 dark:text-lime-400">
                  {item.category}
                </span>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors">
                  <Link href={item.href}>{item.title}</Link>
                </h2>
                <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {item.snippet}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Tampilan Jika Data Tidak Ditemukan */
        <div className="text-center py-12 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-dashed border-gray-200 dark:border-gray-700">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <h3 className="mt-3 text-lg font-semibold text-gray-900 dark:text-white">Tidak ada hasil</h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Coba cari dengan kata kunci lain seperti &quot;PPDB&quot;, &quot;Berita&quot;, atau &quot;Alumni&quot;.
          </p>
        </div>
      )}
    </div>
  );
}

// Suspense Boundary diperlukan di Next.js App Router saat menggunakan useSearchParams()
export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-4xl mx-auto px-4 py-16 text-center text-gray-500 dark:text-gray-400">
          Memuat hasil pencarian...
        </div>
      }
    >
      <SearchContent />
    </Suspense>
  );
}
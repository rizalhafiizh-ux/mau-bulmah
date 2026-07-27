// app/alumni/page.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface Alumni {
  id: string;
  name: string;
  graduationYear: string;
  profession: string;
  institution: string;
  quote: string;
  image: string;
}

const DUMMY_ALUMNI: Alumni[] = [
  {
    id: '1',
    name: 'Ahmad Fauzi, S.T.',
    graduationYear: '2020',
    profession: 'Software Engineer',
    institution: 'Tech Corp Jakarta',
    quote: 'Pendidikan karakter dan kemandirian di MAU Bulmah menjadi fondasi utama saya dalam menghadapi tantangan karier di industri teknologi.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Siti Nurhaliza, M.Pd.',
    graduationYear: '2019',
    profession: 'Dosen Muda & Peneliti',
    institution: 'Universitas Indonesia',
    quote: 'Nilai-nilai keislaman dan disiplin tinggi yang ditanamkan para ustadz/ustadzah sangat membekalinya hingga jenjang pascasarjana.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Dr. Muhammad Rizky',
    graduationYear: '2018',
    profession: 'Dokter Spesialis',
    institution: 'RSUD dr. Soetomo',
    quote: 'Imbangnya ilmu umum dan agama membuat saya belajar mengabdi dengan ikhlas dan penuh empati dalam melayani masyarakat.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '4',
    name: 'Aisyah Az-Zahra, B.A.',
    graduationYear: '2021',
    profession: 'Mahasiswi Al-Azhar',
    institution: 'Universitas Al-Azhar Cairo',
    quote: 'Bimbingan kitab kuning di madrasah sangat membantu saya beradaptasi dan lulus seleksi beasiswa ke Timur Tengah.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
  },
];

export default function AlumniPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState('Semua');

  const years = ['Semua', '2021', '2020', '2019', '2018'];

  const filteredAlumni = DUMMY_ALUMNI.filter((alumni) => {
    const matchesSearch =
      alumni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      alumni.profession.toLowerCase().includes(searchQuery.toLowerCase()) ||
      alumni.institution.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesYear =
      selectedYear === 'Semua' || alumni.graduationYear === selectedYear;

    return matchesSearch && matchesYear;
  });

  return (
    <div className="pt-24 min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition-colors duration-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HERO SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-lime-100 dark:bg-lime-900/40 text-lime-700 dark:text-lime-300 text-xs font-bold mb-4">
            Ikatan Alumni MA Unggulan Bustanul Hikmah
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            IKA<span className="text-lime-600 dark:text-lime-400">MALANTAMA</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Menghubungkan ribuan alumni yang tersebar di berbagai perguruan tinggi nasional, internasional, serta berbagai bidang profesional.
          </p>
        </div>

        {/* RINGKASAN STATISTIK */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: 'Total Alumni', value: '2,500+' },
            { label: 'PTN & Luar Negeri', value: '85%' },
            { label: 'Angkatan Terdata', value: '15+' },
            { label: 'Jaringan Wilayah', value: '34 Provinsi' },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-center shadow-sm"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-lime-600 dark:text-lime-400 mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CONTROLS: FITUR CARI & FILTER */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-white dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-700/60">
          
          {/* Filter Angkatan */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            <span className="text-xs font-bold text-slate-400 mr-2 shrink-0">Angkatan:</span>
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedYear === year
                    ? 'bg-lime-500 text-slate-950 shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {year}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Cari nama, profesi, atau kampus..."
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

        {/* GRID KISAH ALUMNI */}
        {filteredAlumni.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {filteredAlumni.map((alumni) => (
              <div
                key={alumni.id}
                className="p-6 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 shadow-sm hover:border-lime-500/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={alumni.image}
                      alt={alumni.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-lime-500"
                    />
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">
                        {alumni.name}
                      </h3>
                      <p className="text-xs text-lime-600 dark:text-lime-400 font-semibold">
                        {alumni.profession} — {alumni.institution}
                      </p>
                      <span className="text-[11px] text-slate-400">
                        Lulusan Tahun {alumni.graduationYear}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm italic leading-relaxed mb-4 bg-slate-50 dark:bg-slate-900/50 p-3.5 rounded-xl border border-slate-100 dark:border-slate-800">
                    "{alumni.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white dark:bg-slate-800/40 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 mb-16">
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Data alumni tidak ditemukan untuk pencarian ini.
            </p>
          </div>
        )}

        {/* CTA TRACER STUDY / PENDATAAN ALUMNI */}
        <div className="rounded-3xl bg-gradient-to-r from-lime-500/20 via-emerald-500/10 to-transparent border border-lime-500/30 p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Kamu Alumni MAU Bulmah?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl">
              Bantu kami melengkapi pendataan Tracer Study untuk mempererat silaturahmi dan memberikan inspirasi kepada adik-adik santri.
            </p>
          </div>
          <a
            href="#tracer-form"
            className="px-6 py-3 rounded-xl bg-lime-500 hover:bg-lime-600 text-slate-950 font-bold text-xs sm:text-sm whitespace-nowrap transition-all shadow-md"
          >
            Isi Form Tracer Study
          </a>
        </div>

      </div>
    </div>
  );
}
// app/ppdb/page.tsx
'use client';

import type { Metadata } from "next";
import React from 'react';
import Link from 'next/link';

export default function PPDBPage() {
    const alurPendaftaran = [
        { step: '01', title: 'Pendaftaran Online', desc: 'Mengisi formulir data diri dan mengunggah berkas persyaratan awal secara online.' },
        { step: '02', title: 'Verifikasi Berkas', desc: 'Panitia melakukan verifikasi dokumen administrasi yang telah diunggah.' },
        { step: '03', title: 'Tes Seleksi', desc: 'Mengikuti tes akademik, baca Al-Qur\'an, dan wawancara potensi diri.' },
        { step: '04', title: 'Pengumuman & Daftar Ulang', desc: 'Melihat hasil seleksi dan melakukan konfirmasi pendaftaran ulang.' },
    ];


    const persyaratan = [
        'Fotokopi Ijazah / Surat Keterangan Lulus (SKL) disahkan (3 lembar)',
        'Fotokopi Akta Kelahiran & Kartu Keluarga (3 lembar)',
        'Pas foto berwarna terbaru ukuran 3x4 (4 lembar, latar belakang biru)',
        'Fotokopi Kartu NISN atau cetak bukti NISN dari Kemdikbud',
        'Fotokopi KIP/PKH/KKS (jika memiliki)',
    ];

    return (
        <div className="pt-24 min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition-colors duration-300">

            {/* 1. HERO SECTION PPDB */}
            <section className="relative overflow-hidden bg-gradient-to-b from-lime-500/10 via-slate-50 to-slate-50 dark:from-lime-500/5 dark:via-slate-900 dark:to-slate-900 py-12 md:py-20 border-b border-gray-200 dark:border-gray-800">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

                    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lime-100 dark:bg-lime-900/40 border border-lime-500/30 text-lime-700 dark:text-lime-300 text-xs sm:text-sm font-semibold mb-6">
                        <span className="w-2 h-2 rounded-full bg-lime-600 dark:bg-lime-400 animate-ping" />
                        Pendaftaran Gelombang 1 Dibuka
                    </span>

                    <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 leading-tight">
                        Penerimaan Peserta Didik Baru <br className="hidden sm:inline" />
                        <span className="text-lime-600 dark:text-lime-400">Tahun Ajaran 2026/2027</span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                        Bergabunglah bersama MAU Bulmah. Kami mencetak generasi islami, berprestasi, berkarakter mulia, dan siap bersaing di era global.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="#formulir"
                            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-lime-500 hover:bg-lime-600 dark:hover:bg-lime-400 text-slate-950 font-bold transition-all shadow-lg shadow-lime-500/25 hover:scale-105"
                        >
                            Isi Formulir Pendaftaran
                        </a>
                        <a
                            href="#brosur"
                            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-semibold border border-slate-300 dark:border-slate-700 shadow-sm transition-all"
                        >
                            Unduh Brosur (PDF)
                        </a>
                    </div>

                </div>
            </section>

            {/* 2. ALUR PENDAFTARAN */}
            <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-3">
                        Alur Pendaftaran PPDB
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
                        4 langkah mudah mendaftar sebagai calon santri/siswa baru.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {alurPendaftaran.map((item, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 shadow-sm relative overflow-hidden group hover:border-lime-500/50 transition-all"
                        >
                            <span className="text-4xl font-black text-lime-500/20 dark:text-lime-400/20 absolute top-4 right-4 group-hover:scale-110 transition-transform">
                                {item.step}
                            </span>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 relative z-10">
                                {item.title}
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed relative z-10">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. PERSYARATAN & INFORMASI PENTING */}
            <section className="py-12 bg-white dark:bg-slate-800/40 border-y border-slate-200 dark:border-slate-800">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                        {/* Persyaratan Dokumen */}
                        <div className="lg:col-span-7">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                                <svg className="w-6 h-6 text-lime-600 dark:text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Persyaratan Berkas Dokumen
                            </h3>
                            <ul className="space-y-3">
                                {persyaratan.map((req, idx) => (
                                    <li key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-700/50">
                                        <span className="w-2 h-2 rounded-full bg-lime-500 mt-2 shrink-0" />
                                        <span className="text-slate-700 dark:text-slate-300 text-sm">{req}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Kotak Info Kontak / Helpdesk */}
                        <div className="lg:col-span-5 p-6 rounded-2xl bg-gradient-to-br from-lime-500/10 to-emerald-500/10 border border-lime-500/20 dark:border-lime-500/30">
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                                Butuh Bantuan Pendaftaran?
                            </h4>
                            <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">
                                Tim panitia PPDB kami siap membantu pertanyaan terkait pendaftaran, tes seleksi, dan biaya pendidikan.
                            </p>

                            <div className="space-y-3 text-sm">
                                <div className="flex items-center gap-3 text-slate-800 dark:text-slate-200 font-medium">
                                    <span className="p-2 rounded-lg bg-white dark:bg-slate-800 shadow-sm text-lime-600 dark:text-lime-400">📞</span>
                                    <span>WhatsApp: +62 812-3456-7890</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-800 dark:text-slate-200 font-medium">
                                    <span className="p-2 rounded-lg bg-white dark:bg-slate-800 shadow-sm text-lime-600 dark:text-lime-400">📍</span>
                                    <span>Sekretariat PPDB MAU Bulmah</span>
                                </div>
                            </div>

                            <div className="mt-6 pt-4 border-t border-lime-500/20">
                                <Link
                                    href="/"
                                    className="text-xs font-semibold text-lime-700 dark:text-lime-400 hover:underline inline-flex items-center gap-1"
                                >
                                    ← Kembali ke Halaman Utama
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}

// components/HeroPrincipal.tsx
import React from 'react';

const HeroPrincipal = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-slate-50 via-gray-100 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-slate-800 dark:text-white overflow-hidden py-12 md:py-20 lg:py-24 transition-colors duration-300">
      {/* Ornamen Latar Belakang (Aksen Cahaya) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-lime-500/20 dark:bg-lime-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-emerald-500/20 dark:bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          
          {/* Kolom Kiri: Kata Sambutan */}
          <div className="lg:col-span-7 flex flex-col justify-center pb-6 lg:pb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-lime-500/10 border border-lime-600/30 dark:border-lime-500/20 text-lime-700 dark:text-lime-400 text-xs sm:text-sm font-semibold w-max mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-lime-600 dark:bg-lime-400 animate-pulse" />
              Ucapan Selamat Datang dari Kepala Sekolah
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
              Mewujudkan Generasi <span className="text-lime-600 dark:text-lime-400">Unggul</span>, Berkarakter & Berdaya Saing Global
            </h1>

            <div className="space-y-4 text-slate-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
              <p>
                <span className="text-2xl font-serif text-lime-600 dark:text-lime-400 font-bold mr-1">&ldquo;</span>
                Assalamu’alaikum Warahmatullahi Wabarakatuh. Selamat datang di portal resmi MAU Bulmah. 
                Kami berkomitmen untuk terus menghadirkan pendidikan berkualitas tinggi yang menyeimbangkan 
                ilmu pengetahuan modern dengan nilai-nilai karakter luhur.
              </p>
              <p>
                Bersama seluruh staf pengajar dan civitas akademika, kami siap mendampingi setiap langkah 
                santri dan siswa dalam meraih mimpi dan potensi terbaik mereka.
              </p>
            </div>

            {/* Nama & Jabatan */}
            <div className="border-l-4 border-lime-500 pl-4 py-1 mb-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Dr. A. Yasykur Aminur Rozi, M.Pd.</h3>
              <p className="text-sm text-lime-700 dark:text-lime-400 font-semibold">Kepala Sekolah MAU Bulmah</p>
            </div>

            {/* Tombol Aksi */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#profil"
                className="px-6 py-3 rounded-xl bg-lime-500 hover:bg-lime-600 dark:hover:bg-lime-400 text-slate-950 font-bold transition-all shadow-md shadow-lime-500/20 hover:scale-105"
              >
                Baca Selengkapnya
              </a>
              <a
                href="#ppdb"
                className="px-6 py-3 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-semibold border border-slate-300 dark:border-slate-700 shadow-sm transition-all"
              >
                Informasi PPDB
              </a>
            </div>
          </div>

          {/* Kolom Kanan: Foto Kepala Sekolah (Tanpa Background) */}
          <div className="lg:col-span-5 relative flex justify-center items-end">
            {/* Lingkaran Dekoratif di Belakang Foto */}
            <div className="absolute bottom-0 w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-tr from-lime-400 to-emerald-300 dark:from-lime-500 dark:to-emerald-400 rounded-full opacity-30 dark:opacity-20 blur-xl" />
            <div className="absolute bottom-0 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 border-2 border-dashed border-lime-500/40 dark:border-lime-500/30 rounded-full animate-[spin_30s_linear_infinite]" />

            {/* Container Foto */}
            <div className="relative z-10 w-full max-w-md mx-auto flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=80" 
                alt="Foto Kepala Sekolah"
                className="w-auto h-[400px] sm:h-[480px] md:h-[520px] object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_20px_20px_rgba(0,0,0,0.6)]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroPrincipal;
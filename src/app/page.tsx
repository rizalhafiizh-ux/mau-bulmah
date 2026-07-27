import Carousel from "./components/carousel";
import AppLink from "./components/applink";
import HeroPrincipal from "./components/heroprincipal";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Carousel Full Screen */}
      <Carousel />
      
      {/* Sambutan Kepala Madrasah */}
      <HeroPrincipal />

      {/* Konten Utama */}
      <div className="py-16 bg-white dark:bg-gray-900 w-full overflow-hidden shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* SEKSI 1: Keunggulan & Program Unggulan */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <span className="text-lime-600 dark:text-lime-400 font-bold text-sm uppercase tracking-wider mb-2 block">
                Mengapa Memilih Kami?
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl mb-4 leading-tight">
                Pendidikan Integratif: Berakhlak Mulia & Berprestasi
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                MAU Bulmah mengombinasikan kurikulum madrasah nasional dengan pemahaman keislaman yang mendalam, membekali santri untuk siap bersaing di tingkat nasional maupun internasional.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-lime-100 dark:bg-lime-900/40 flex items-center justify-center mt-1">
                    <svg className="h-4 w-4 text-lime-600 dark:text-lime-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700 dark:text-gray-300 font-medium">Program Tahfidz Al-Qur'an & Pendalaman Kitab Kuning.</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-lime-100 dark:bg-lime-900/40 flex items-center justify-center mt-1">
                    <svg className="h-4 w-4 text-lime-600 dark:text-lime-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700 dark:text-gray-300 font-medium">Laboratorium Digital & Ekstrakurikuler Robotik / Sains.</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-lime-100 dark:bg-lime-900/40 flex items-center justify-center mt-1">
                    <svg className="h-4 w-4 text-lime-600 dark:text-lime-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <p className="ml-3 text-gray-700 dark:text-gray-300 font-medium">Bimbingan Khusus Sukses Masuk PTN & Beasiswa Luar Negeri.</p>
                </li>
              </ul>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Kegiatan Santri Belajar" 
                className="rounded-2xl shadow-xl w-full object-cover h-96" 
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-lime-400/20 dark:bg-lime-500/10 rounded-full blur-2xl"></div>
            </div>
          </div>

          {/* SEKSI 2: Informasi PPDB / Ajak Mendaftar */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Suasana Kampus MAU Bulmah" 
                className="rounded-2xl shadow-xl w-full object-cover h-96" 
              />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-lime-400/20 dark:bg-lime-500/10 rounded-full blur-2xl"></div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-lime-600 dark:text-lime-400 font-bold text-sm uppercase tracking-wider mb-2 block">
                Penerimaan Santri Baru
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl mb-4 leading-tight">
                Bergabunglah Bersama Keluarga Besar MAU Bulmah
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Pendaftaran Peserta Didik Baru (PPDB) Tahun Ajaran 2026/2027 Gelombang 1 telah dibuka. Dapatkan kesempatan beasiswa prestasi dan fasilitas pendidikan unggulan.
              </p>
              
              <Link 
                href="/ppdb"
                className="inline-block bg-lime-500 hover:bg-lime-600 dark:bg-lime-500 dark:hover:bg-lime-400 text-slate-950 font-bold px-6 py-3.5 rounded-xl transition-all shadow-md shadow-lime-500/20 hover:scale-105"
              >
                Informasi PPDB & Cara Daftar →
              </Link>
            </div>
          </div>

        </div>
      </div>

      <AppLink />
    </div>
  );
}
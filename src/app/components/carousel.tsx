const Carousel = () => {
    const carouselItems = [
        {
            id: "hero-slide-1",
            label: "Pendaftaran 2027",
            title: "PPDB MAU Bulmah Tahun 2027 Resmi Dibuka",
            description: "Segera daftarkan diri Anda dan bergabunglah bersama keluarga besar MAU Bulmah untuk tahun ajaran baru.",
            image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80"
        },
        {
            id: "hero-slide-2",
            label: "Prestasi Siswa",
            title: "Juara 1 Olimpiade Sains Nasional",
            description: "Selamat kepada para santri yang telah meraih prestasi gemilang dan membanggakan di tingkat nasional.",
            image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=1920&q=80"
        },
        {
            id: "hero-slide-3",
            label: "Pengumuman",
            title: "Jadwal Ujian Semester Genap",
            description: "Simak informasi penting mengenai pelaksanaan ujian semester genap untuk seluruh tingkat kelas.",
            image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1920&q=80"
        }
    ];

    return (
        <div className="m-0 relative w-full h-[100dvh] overflow-hidden group shadow-sm">
            {/* Container Slides */}
            <div className="flex w-full h-full overflow-x-auto snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {carouselItems.map((item) => (
                    <div
                        key={item.id}
                        id={item.id}
                        className="snap-start shrink-0 w-full h-full relative"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-900/40 to-transparent flex flex-col justify-end p-6 sm:p-12 md:p-16 lg:p-20">
                            <div className="max-w-4xl mx-auto w-full absolute">
                                <span className="inline-block px-3 py-1 bg-lime-500 text-white text-xs sm:text-sm font-bold rounded-full mb-3 md:mb-4 w-max tracking-wide">
                                    {item.label}
                                </span>
                                <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-3 sm:mb-4 leading-tight">
                                    {item.title}
                                </h2>
                                <p className="text-gray-200 text-sm sm:text-lg md:text-xl max-w-xl line-clamp-3">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Dynamic Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-10">
                {carouselItems.map((item, index) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`h-2 rounded-full transition-all ${index === 0
                                ? "w-8 bg-lime-500 hover:bg-lime-400"
                                : "w-2.5 bg-white/50 hover:bg-white/80"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
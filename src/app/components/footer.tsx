import Image from "next/image";

const Footer = () => {

    return (
        <footer className="m-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* <!-- Main Footer Content --> */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

                    {/* <!-- Company Info --> */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center space-x-3 mb-4">
                            {/* <!-- Logo Placeholder --> */}
                            <div className="w-10 h-10 bg-gray-900 dark:bg-lime-300 rounded-lg flex items-center justify-center">
                                <Image
                                    src="/logo.svg"
                                    alt="Logo"
                                    width={32}
                                    height={32}
                                    className="size-8"
                                />
                            </div>
                            <span className="text-xl font-semibold text-gray-900 dark:text-white">MAU Bulmah</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                            Yayasan Pondok Pesantren Bustanul Hikmah.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* <!-- Quick Links --> */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-6">
                            Tentang kami
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors duration-300 block">
                                    Artikel
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors duration-300 block">
                                    Akreditasi
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors duration-300 block">
                                    Info PPDB
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* <!-- Products --> */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-6">
                            Berita
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors duration-300 block">
                                    Prestasi
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors duration-300 block">
                                    Event
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors duration-300 block">
                                    Kolaborasi
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors duration-300 block">
                                    Alumni
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* <!-- Contact & Newsletter --> */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-6">
                            Newsletter
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                            Dapatkan update terbaru dan insight langsung ke inbox Anda.
                        </p>

                        <form className="space-y-4">
                            <div>
                                <input
                                    type="email"
                                    placeholder="Email Anda"
                                    className="w-full px-4 py-2.5 text-sm border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-lime-500 dark:focus:ring-lime-400 focus:border-transparent transition-all duration-300 outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-gray-900 dark:bg-lime-300 text-white px-4 py-2.5 text-sm font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-lime-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:focus:ring-lime-300 dark:text-gray-900"
                            >
                                Berlangganan
                            </button>
                        </form>
                    </div>

                </div>

                {/* <!-- Divider --> */}
                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">

                        {/* <!-- Copyright --> */}
                        <div className="text-center md:text-left">
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                &copy; 2026 AlumniMAUBH. All rights reserved.
                            </p>
                        </div>

                        {/* <!-- Legal Links --> */}
                        <div className="flex flex-wrap justify-center gap-6">
                            <a href="#" className="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300">
                                Kebijakan Privasi
                            </a>
                            <a href="#" className="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300">
                                Syarat Layanan
                            </a>
                            <a href="#" className="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300">
                                Pengaturan Cookies
                            </a>
                            <a href="#" className="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300">
                                Sitemap
                            </a>
                        </div>

                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
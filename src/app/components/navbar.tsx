"use client";

import Image from "next/image";
import { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  // 1. Cek mode gelap saat komponen pertama kali dimuat
  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setDarkMode(isDark);
  }, []);

  // 2. Fungsi sakelar mode gelap yang simpel & teruji
  const toggleDarkMode = () => {
    const nextMode = !darkMode;
    setDarkMode(nextMode);

    if (nextMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (isMobileMenuOpen) return;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md transition-transform duration-300 ease-in-out dark:border-gray-800 dark:bg-gray-900/90 ${isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="mx-auto flex h-16 max-w-screen-2xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-1 items-center justify-start gap-4 md:gap-8">
          {/* Logo */}
          <Link
            className="flex items-center gap-1 text-teal-600 dark:text-teal-500"
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Image
              src="/logo.svg"
              alt="Logo"
              width={24}
              height={24}
              className="size-10 p-1 px-1.5 my-2 rounded-lg shadow-sm shadow-green-900"

            />
            <span className="text-xl font-medium tracking-wider text-gray-700 dark:text-gray-200">
              MAU <span className="font-extrabold">Bustanul Hikmah</span>
            </span>
          </Link>

          {/* Search (Desktop) */}
          <form onSubmit={handleSearch} className="relative hidden sm:block">
            <input
              className="h-10 w-full rounded-full border-none bg-gray-100 ps-4 pe-10 text-sm shadow-sm sm:w-64 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500"
              type="search"
              placeholder="Cari berita, PPDB..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 text-gray-600 dark:bg-gray-900 dark:text-gray-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>
        </div>

        <div className="flex items-center justify-end gap-4">
          {/* Menu Navigasi Desktop */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <Link className="rounded-md bg-lime-100 px-3 py-2 text-sm font-medium text-lime-700 dark:bg-lime-900/50 dark:text-lime-300" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-gray-500 transition hover:text-lime-600 dark:text-white dark:hover:text-lime-400" href="/ppdb">
                  PPDB
                </Link>
              </li>
              <li>
                <Link className="text-gray-500 transition hover:text-lime-600 dark:text-white dark:hover:text-lime-400" href="/berita">
                  Berita
                </Link>
              </li>
              <li>
                <Link className="text-gray-500 transition hover:text-lime-600 dark:text-white dark:hover:text-lime-400" href="/alumni">
                  Alumni
                </Link>
              </li>
            </ul>
          </nav>

          <span className="hidden h-6 w-px bg-gray-200 md:block dark:bg-gray-700"></span>

          {/* TOMBOL SAKELAR DARK MODE */}
          <button
            type="button"
            onClick={toggleDarkMode}
            className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-300 p-1 ${darkMode ? "bg-lime-500" : "bg-gray-300"
              }`}
          >
            <span
              className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-md transition-transform duration-300 flex items-center justify-center ${darkMode ? "translate-x-6" : "translate-x-0"
                }`}
            >
              {darkMode ? (
                /* Icon Bulan */
                <svg className="h-4 w-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              ) : (
                /* Icon Matahari */
                <svg className="h-4 w-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 100 2h1z" clipRule="evenodd" />
                </svg>
              )}
            </span>
          </button>

          {/* Tombol Hamburger Mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="block rounded bg-gray-100 p-2 text-gray-600 md:hidden dark:bg-gray-800 dark:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Mobile Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white px-4 pt-4 pb-6 dark:border-gray-800 dark:bg-gray-900">
          <form onSubmit={handleSearch} className="relative mb-4">
            <input
              type="search"
              placeholder="Cari berita, PPDB..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-10 rounded-xl bg-gray-100 dark:bg-gray-800 text-sm text-gray-800 dark:text-white ps-4 pe-10 focus:outline-none"
            />
          </form>
          <nav>
            <ul className="flex flex-col space-y-2">
              <li>
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="block rounded-lg bg-lime-100 px-4 py-2.5 text-sm font-semibold text-lime-700 dark:bg-lime-900/50 dark:text-lime-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/ppdb" onClick={() => setIsMobileMenuOpen(false)} className="block rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800">
                  PPDB
                </Link>
              </li>
              <li>
                <Link href="/berita" onClick={() => setIsMobileMenuOpen(false)} className="block rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800">
                  Berita
                </Link>
              </li>
              <li>
                <Link href="/alumni" onClick={() => setIsMobileMenuOpen(false)} className="block rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800">
                  Alumni
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

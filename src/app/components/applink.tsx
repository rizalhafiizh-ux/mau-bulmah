const AppLink = () => {
    return (
        <section className="m-0 py-16 px-6 bg-gray-50 dark:bg-black">
            <div className="max-w-4xl mx-auto text-center bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-16 shadow-lg dark:shadow-none border border-gray-100 dark:border-gray-800">
                <div className="w-16 h-16 bg-lime-100 dark:bg-lime-900/30 text-lime-600 dark:text-lime-300 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2" /><path d="M12 18h.01" /></svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Download MAU-App disini</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">Lakukan Pembayaran lebih mudah, dan monitor perkembangan siswa secara personal dan lebih transparan.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#" className="flex items-center justify-center gap-3 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M16.365 21.434c-1.353 1.134-2.222.753-3.414.281-1.282-.507-2.671-1.077-4.103.268-3.082 2.894-6.398-4.225-4.475-7.469 1.488-2.515 3.931-2.909 5.215-2.617 1.258.286 2.057.854 2.895.836 1.054-.022 2.148-.718 3.518-.584 2.179.213 3.57 1.391 4.195 2.656-3.238 1.838-2.548 6.009.68 7.027-1.124 1.898-2.636 4.123-4.511 2.602zm-5.064-14.732c-.089-2.673 2.179-4.702 4.61-4.702.392 2.802-2.593 4.962-4.61 4.702z" /></svg>
                        <div className="text-left">
                            <div className="text-xs font-medium opacity-80">Download on the</div>
                            <div className="text-sm font-bold">App Store</div>
                        </div>
                    </a>
                    <a href="#" className="flex items-center justify-center gap-3 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.523 15.341l2.368 4.104c.162.281.066.643-.215.805-.281.162-.643.066-.805-.215l-2.42-4.192c-1.378.601-2.883.945-4.471.945-1.588 0-3.093-.344-4.471-.945l-2.42 4.192c-.162.281-.524.377-.805.215-.281-.162-.377-.524-.215-.805l2.368-4.104c-3.14-1.745-5.267-4.996-5.419-8.777h17.924c-.152 3.781-2.279 7.032-5.419 8.777zm-9.523-2.341c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm8 0c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5z" /></svg>
                        <div className="text-left">
                            <div className="text-xs font-medium opacity-80">GET IT ON</div>
                            <div className="text-sm font-bold">Google Play</div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AppLink;
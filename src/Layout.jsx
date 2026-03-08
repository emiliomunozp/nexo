import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import BottomNav from './components/BottomNav';
import { AnimatePresence, motion } from 'framer-motion';

const Layout = () => {
    const location = useLocation();

    return (
        <div className="flex h-screen overflow-hidden bg-[#F9FAFB] text-[#111827]">
            {/* Desktop Sidebar */}
            <Sidebar />

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col h-full overflow-y-auto w-full pb-14 md:pb-0 relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="flex-1 flex flex-col"
                    >
                        <Outlet />
                    </motion.div>
                </AnimatePresence>

                {/* Footer */}
                <footer className="mt-auto py-8 text-center border-t border-gray-200 text-sm text-gray-500">
                    <div className="flex justify-center gap-6 mb-2 text-nexo-dark">
                        <a href="#" className="hover:text-nexo-primary transition-colors hover:underline">UCM</a>
                        <a href="#" className="hover:text-nexo-primary transition-colors hover:underline">Compluemprende</a>
                        <a href="#" className="hover:text-nexo-primary transition-colors hover:underline">OPE</a>
                    </div>
                    <p>&copy; {new Date().getFullYear()} NEXO Project. All rights reserved.</p>
                </footer>
            </main>

            {/* Mobile Bottom Navigation */}
            <BottomNav />
        </div>
    );
};

export default Layout;

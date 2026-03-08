import React from 'react';
import { NavLink } from 'react-router-dom';
import { Activity, PenTool, Briefcase, Users } from 'lucide-react';

const Sidebar = () => {
    const navItems = [
        { to: '/', label: 'Diagnóstico', icon: <Activity size={24} /> },
        { to: '/tools', label: 'Herramientas', icon: <PenTool size={24} /> },
        { to: '/jobs', label: 'Junior Empresa', icon: <Briefcase size={24} /> },
        { to: '/mentoring', label: 'Mentorías', icon: <Users size={24} /> },
    ];

    return (
        <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 h-screen sticky top-0 p-6">
            <div className="mb-10 flex items-center gap-2">
                <div className="w-8 h-8 bg-nexo-primary rounded-md flex items-center justify-center text-white font-bold select-none text-xl">N</div>
                <h1 className="text-2xl font-bold tracking-tight text-nexo-dark">NEXO</h1>
            </div>
            <nav className="flex-1 flex flex-col gap-2">
                {navItems.map((item) => (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 outline-none select-none font-medium active:scale-95 ${isActive
                                ? 'bg-nexo-primary text-white shadow-md shadow-nexo-primary/20'
                                : 'text-gray-500 hover:bg-gray-50 hover:text-nexo-dark'
                            }`
                        }
                    >
                        {item.icon}
                        <span>{item.label}</span>
                    </NavLink>
                ))}
            </nav>

            <div className="mt-auto pt-6 border-t border-gray-100">
                <div className="flex flex-col gap-1 text-sm text-gray-400">
                    <a href="#" className="hover:text-nexo-primary transition-colors py-1">UCM</a>
                    <a href="#" className="hover:text-nexo-primary transition-colors py-1">Compluemprende</a>
                    <a href="#" className="hover:text-nexo-primary transition-colors py-1">OPE</a>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;

import React from 'react';
import { NavLink } from 'react-router-dom';
import { Activity, PenTool, Briefcase, Users } from 'lucide-react';

const BottomNav = () => {
    const navItems = [
        { to: '/', label: 'Diagnóstico', icon: <Activity size={20} /> },
        { to: '/tools', label: 'Herramientas', icon: <PenTool size={20} /> },
        { to: '/jobs', label: 'Proyectos', icon: <Briefcase size={20} /> },
        { to: '/mentoring', label: 'Mentorías', icon: <Users size={20} /> },
    ];

    return (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-2 py-2 pb-safe z-50">
            <ul className="flex justify-between items-center h-14">
                {navItems.map((item) => (
                    <li key={item.to} className="flex-1">
                        <NavLink
                            to={item.to}
                            className={({ isActive }) =>
                                `flex flex-col items-center justify-center gap-1 w-full h-full transition-colors active:scale-95 ${isActive ? 'text-nexo-primary' : 'text-gray-400 hover:text-gray-600'
                                }`
                            }
                        >
                            {item.icon}
                            <span className="text-[10px] font-medium tracking-wide">{item.label}</span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default BottomNav;

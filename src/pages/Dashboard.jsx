import React from 'react';
import { useSurveyData } from '../hooks/useSurveyData';
import {
    PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, Label,
    BarChart, Bar, XAxis, YAxis, CartesianGrid,
    Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Activity } from 'lucide-react';

const CustomDonutLabel = ({ viewBox }) => {
    const { cx, cy } = viewBox;
    return (
        <text x={cx} y={cy} fill="#111827" className="recharts-text recharts-label" textAnchor="middle" dominantBaseline="central">
            <tspan x={cx} dy="0" fontSize="24" fontWeight="bold">0%</tspan>
            <tspan x={cx} dy="24" fontSize="14" fill="#6B7280">Preparados</tspan>
        </text>
    );
};

const Dashboard = () => {
    const data = useSurveyData() || {};
    const navigate = useNavigate();

    const fiscalData = data.fiscalLiteracy || [];
    const uncertainties = data.uncertainties || [];
    const motivations = data.motivations || [];

    const glassCardClasses = "bg-white/70 backdrop-blur-md border border-white/20 shadow-xl shadow-gray-200/50 rounded-2xl p-6 flex flex-col";

    return (
        <div className="p-6 md:p-10 max-w-7xl mx-auto w-full">
            {/* Hero Section */}
            <div className="mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nexo-primary/10 text-nexo-primary text-sm font-semibold mb-6">
                    <Activity size={16} /> Diagnóstico
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-nexo-dark mb-4">
                    NEXO: Profesionalizando <span className="text-nexo-primary">las Bellas Artes.</span>
                </h1>
                <p className="text-xl text-gray-500 max-w-3xl leading-relaxed">
                    Del aula al mercado. Seguridad legal, proyectos reales y compensación justa.
                </p>
            </div>

            {/* Dashboard Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

                {/* 1. The Fiscal Gap (Donut) */}
                <div className={glassCardClasses}>
                    <h2 className="text-2xl font-bold text-nexo-dark mb-2">La Brecha Fiscal</h2>
                    <p className="text-gray-500 text-sm mb-6">El 100% de los estudiantes encuestados admite carecer de autonomía fiscal.</p>
                    <div className="h-64 relative w-full flex-grow">
                        {fiscalData.length > 0 ? (
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={fiscalData}
                                        innerRadius={70}
                                        outerRadius={100}
                                        paddingAngle={5}
                                        dataKey="value"
                                        stroke="none"
                                    >
                                        {fiscalData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.fill} />
                                        ))}
                                        <Label content={<CustomDonutLabel />} position="center" />
                                    </Pie>
                                    <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                                    <Legend iconType="circle" verticalAlign="bottom" height={36} />
                                </PieChart>
                            </ResponsiveContainer>
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-400">Datos no disponibles</div>
                        )}
                    </div>
                </div>

                {/* 2. The Fear Factor (Horizontal Bar) */}
                <div className={glassCardClasses}>
                    <h2 className="text-2xl font-bold text-nexo-dark mb-2">El Factor Miedo</h2>
                    <p className="text-gray-500 text-sm mb-6">Principales incertidumbres que frenan a los estudiantes para trabajar por cuenta propia.</p>
                    <div className="h-64 w-full flex-grow">
                        {uncertainties.length > 0 ? (
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                    data={uncertainties}
                                    layout="vertical"
                                    margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#E5E7EB" />
                                    <XAxis type="number" hide />
                                    <YAxis dataKey="label" type="category" axisLine={false} tickLine={false} tick={{ fill: '#4B5563', fontSize: 13 }} width={140} />
                                    <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                                    <Bar dataKey="value" fill="#F59E0B" radius={[0, 4, 4, 0]} barSize={24} />
                                </BarChart>
                            </ResponsiveContainer>
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-400">Datos no disponibles</div>
                        )}
                    </div>
                </div>

                {/* 3. What We Want (Radar Chart) */}
                <div className={`lg:col-span-2 ${glassCardClasses}`}>
                    <h2 className="text-2xl font-bold text-nexo-dark mb-2 text-center">Qué Queremos</h2>
                    <p className="text-gray-500 text-sm mb-6 text-center">Motivaciones para participar en las Junior Empresas.</p>
                    <div className="h-80 w-full flex-grow mx-auto max-w-2xl">
                        {motivations.length > 0 ? (
                            <ResponsiveContainer width="100%" height="100%">
                                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={motivations}>
                                    <PolarGrid stroke="#E5E7EB" />
                                    <PolarAngleAxis dataKey="factor" tick={{ fill: '#4B5563', fontSize: 13, fontWeight: 500 }} />
                                    <PolarRadiusAxis angle={30} domain={[0, 5]} hide />
                                    <Radar name="Nivel de Motivación" dataKey="score" stroke="#7C3AED" fill="#7C3AED" fillOpacity={0.4} />
                                    <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                                </RadarChart>
                            </ResponsiveContainer>
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-400">Datos no disponibles</div>
                        )}
                    </div>
                </div>

            </div>

            {/* CTA Button */}
            <div className="flex justify-center pb-20 md:pb-0">
                <button
                    onClick={() => navigate('/tools')}
                    className="group flex items-center gap-3 bg-nexo-dark text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg shadow-gray-900/20 hover:bg-gray-800 transition-all active:scale-95 duration-200 outline-none"
                >
                    Solución: Ir a Herramientas
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    );
};

export default Dashboard;

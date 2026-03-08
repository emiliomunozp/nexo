import React, { useState } from 'react';
import { jobOffers } from '../data/jobOffers';
import { Briefcase, Search, X, BadgeCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const JobCard = ({ job, onClick }) => {
    const isMupai = job.client.toLowerCase().includes("mupai");

    return (
        <motion.div
            whileHover={{ y: -4 }}
            className={`cursor-pointer transition-all duration-300 bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-xl shadow-gray-200/50 flex flex-col h-full border ${isMupai ? 'border-amber-400 border-2' : 'border-white/20'}`}
            onClick={() => onClick(job)}
        >
            <div className="flex justify-between items-start mb-4">
                <div className="flex flex-col">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{job.type}</span>
                    <h3 className="text-xl font-bold text-nexo-dark line-clamp-1">{job.title}</h3>
                </div>
                {isMupai && (
                    <div className="text-amber-500 bg-amber-50 p-1.5 rounded-full" title="Socio Verificado">
                        <BadgeCheck size={20} />
                    </div>
                )}
            </div>

            <p className="text-gray-600 mb-4">{job.client}</p>

            <div className="mt-auto pt-4 border-t border-gray-100 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 text-xs font-bold rounded-full ${job.paymentType === 'Dinero'
                            ? 'bg-emerald-100 text-emerald-700'
                            : 'bg-nexo-primary/20 text-nexo-primary'
                        }`}>
                        {job.paymentType === 'Dinero' ? 'Económico' : 'En Especie'}
                    </span>
                    <span className="font-semibold text-nexo-dark text-sm truncate max-w-[140px] text-right" title={job.payment}>
                        {job.payment}
                    </span>
                </div>

                <div className="flex flex-wrap gap-2">
                    {job.tags.map(tag => (
                        <span key={tag} className="text-xs text-gray-500 bg-gray-50 border border-gray-200 px-2 py-0.5 rounded-md">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const JobModal = ({ job, onClose }) => {
    if (!job) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-nexo-dark/40 backdrop-blur-sm"
                    onClick={onClose}
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]"
                >
                    <div className="p-6 md:p-8 flex-col overflow-y-auto">
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-2 bg-gray-100 hover:bg-gray-200 transition-colors rounded-full text-gray-500"
                        >
                            <X size={20} />
                        </button>

                        <div className="mb-6 pr-10">
                            <div className="flex items-center gap-2 mb-2">
                                <span className={`px-3 py-1 text-xs font-bold rounded-full ${job.paymentType === 'Dinero'
                                        ? 'bg-emerald-100 text-emerald-700'
                                        : 'bg-nexo-primary/20 text-nexo-primary'
                                    }`}>
                                    Pago {job.paymentType === 'Dinero' ? 'Económico' : 'en Especie'}
                                </span>
                                {job.client.toLowerCase().includes('mupai') && (
                                    <span className="px-3 py-1 text-xs font-bold rounded-full bg-amber-100 text-amber-700 flex items-center gap-1">
                                        <BadgeCheck size={14} /> Socio Verificado
                                    </span>
                                )}
                            </div>
                            <h2 className="text-3xl font-extrabold text-nexo-dark">{job.title}</h2>
                            <p className="text-lg text-nexo-primary font-medium mt-1">{job.client}</p>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                                <h4 className="text-sm font-bold text-gray-400 uppercase mb-1">Detalles de la Compensación</h4>
                                <p className="text-xl font-bold text-nexo-dark">{job.payment}</p>
                            </div>

                            <div>
                                <h4 className="text-sm font-bold text-gray-400 uppercase mb-2">Descripción</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    Esta es una descripción detallada de los requisitos y responsabilidades de este proyecto. Aquí se especificaría el trabajo exacto requerido por el cliente para la colaboración.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-sm font-bold text-gray-400 uppercase mb-2">Fecha Límite</h4>
                                <p className="text-gray-600 font-medium">En 14 días</p>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-100">
                            <button className="w-full bg-nexo-dark text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:bg-gray-800 transition-all active:scale-95 duration-200 outline-none">
                                Solicitar Ahora
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}

const Jobs = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedJob, setSelectedJob] = useState(null);

    const filteredJobs = jobOffers.filter(job => {
        const query = searchTerm.toLowerCase();
        return (
            job.title.toLowerCase().includes(query) ||
            job.client.toLowerCase().includes(query) ||
            job.tags.some(tag => tag.toLowerCase().includes(query))
        );
    });

    return (
        <div className="p-6 md:p-10 max-w-7xl mx-auto w-full relative">
            <div className="mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nexo-primary/10 text-nexo-primary text-sm font-semibold mb-6">
                    <Briefcase size={16} /> Junior Empresa
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-nexo-dark mb-4">
                    Proyectos Reales. <span className="text-nexo-primary">Experiencia Real.</span>
                </h1>
                <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
                    Conectando a los estudiantes de Bellas Artes con clientes verificados, garantizando una compensación justa y crecimiento profesional.
                </p>
            </div>

            <div className="mb-8 relative max-w-md">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                    type="text"
                    placeholder="Buscar por etiquetas (ej. Diseño, Pintura)..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-11 pr-4 py-4 bg-white border border-gray-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-nexo-primary focus:border-nexo-primary outline-none transition-all text-nexo-dark font-medium"
                />
            </div>

            {filteredJobs.length === 0 ? (
                <div className="p-12 text-center text-gray-500 bg-white/50 rounded-2xl border border-dashed border-gray-300">
                    No se han encontrado proyectos que coincidan con tu búsqueda.
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredJobs.map(job => (
                        <JobCard key={job.id} job={job} onClick={setSelectedJob} />
                    ))}
                </div>
            )}

            {selectedJob && (
                <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />
            )}
        </div>
    );
};

export default Jobs;

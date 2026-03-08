import React from 'react';
import { Users, GraduationCap, Send, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const mentors = [
    { id: 1, name: "Elena Gómez", speciality: "Animación 3D", year: "4º Curso" },
    { id: 2, name: "David Ruiz", speciality: "Diseño Editorial", year: "Antiguo Alumno" },
    { id: 3, name: "Marta Blanco", speciality: "Escultura Contemporánea", year: "3º Curso" }
];

const guides = [
    { id: 1, title: "Cómo aprobar el TFG sin perder la cabeza", category: "Académico" },
    { id: 2, title: "Dónde comprar lienzos baratos en Madrid", category: "Recursos" },
    { id: 3, title: "Sobrevivir al montaje de una Exposición", category: "Práctico" },
    { id: 4, title: "Portfolio 101: Qué NO incluir", category: "Profesional" }
];

const Mentoring = () => {
    const glassCardClasses = "bg-white/70 backdrop-blur-md border border-white/20 shadow-xl shadow-gray-200/50 rounded-2xl p-6 relative overflow-hidden flex flex-col h-full";

    return (
        <div className="p-6 md:p-10 max-w-7xl mx-auto w-full">
            <div className="mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nexo-primary/10 text-nexo-primary text-sm font-semibold mb-6">
                    <Users size={16} /> Mentorías
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-nexo-dark mb-4">
                    Cerrar la <span className="text-nexo-primary">Brecha Generacional.</span>
                </h1>
                <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
                    Conectando estudiantes de últimos cursos y egresados con alumnos nuevos. Comparte conocimiento, herramientas y estrategias de supervivencia.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">

                {/* Find Mentor (Ícaros) */}
                <div className={glassCardClasses}>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 rounded-xl bg-orange-100 text-orange-600">
                            <GraduationCap size={24} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-nexo-dark">Busca un Mentor (Ícaros)</h2>
                            <p className="text-gray-500 text-sm">Pide consejo a estudiantes o egresados con experiencia.</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        {mentors.map(mentor => (
                            <div key={mentor.id} className="p-4 rounded-xl border border-gray-100 bg-white/50 flex items-center justify-between hover:border-nexo-primary/30 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500 text-lg">
                                        {mentor.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-nexo-dark">{mentor.name}</h3>
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <span>{mentor.speciality}</span>
                                            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                            <span className="text-nexo-primary font-medium">{mentor.year}</span>
                                        </div>
                                    </div>
                                </div>
                                <button className="px-4 py-2 text-sm font-semibold border-2 border-nexo-primary text-nexo-primary rounded-lg hover:bg-nexo-primary hover:text-white transition-all active:scale-95 outline-none">
                                    Solicitar
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Become a Mentee (Telémacos) Form */}
                <div className={glassCardClasses}>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 rounded-xl bg-blue-100 text-blue-600">
                            <Send size={24} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-nexo-dark">Conviértete en Telémaco (Pupilo)</h2>
                            <p className="text-gray-500 text-sm">¿En qué necesitas ayuda ahora mismo?</p>
                        </div>
                    </div>

                    <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-gray-700">Tu Área de Interés</label>
                            <input
                                type="text"
                                placeholder="ej., Instalaciones, Arte Digital"
                                className="p-4 border border-gray-200 rounded-xl bg-white/50 focus:ring-2 focus:ring-nexo-primary focus:outline-none transition-all placeholder:text-gray-400 font-medium"
                            />
                        </div>
                        <div className="flex flex-col gap-2 flex-1">
                            <label className="text-sm font-semibold text-gray-700">¿Cuáles son tus principales dudas?</label>
                            <textarea
                                placeholder="Cuéntanos brevemente dónde estás atascado o qué conocimiento práctico te falta..."
                                className="p-4 border border-gray-200 rounded-xl bg-white/50 focus:ring-2 focus:ring-nexo-primary focus:outline-none transition-all resize-none flex-1 placeholder:text-gray-400 font-medium min-h-[120px]"
                            />
                        </div>
                        <button className="w-full bg-nexo-primary text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-nexo-primary/30 hover:bg-violet-700 transition-all active:scale-95 outline-none">
                            Enviar Solicitud
                        </button>
                    </form>
                </div>
            </div>

            {/* The Knowledge Base */}
            <div className="mb-8">
                <div className="flex items-center gap-3 mb-8 justify-center">
                    <BookOpen size={28} className="text-nexo-dark" />
                    <h2 className="text-3xl font-extrabold text-nexo-dark">Base de Conocimiento</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {guides.map(guide => (
                        <motion.a
                            href="#"
                            key={guide.id}
                            whileHover={{ y: -4 }}
                            className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl hover:border-nexo-primary/50 transition-all group flex flex-col justify-between h-40"
                        >
                            <span className="text-xs font-bold uppercase tracking-wider text-nexo-primary mb-2">
                                {guide.category}
                            </span>
                            <h3 className="text-lg font-bold text-nexo-dark group-hover:text-nexo-primary transition-colors line-clamp-3">
                                {guide.title}
                            </h3>
                        </motion.a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Mentoring;

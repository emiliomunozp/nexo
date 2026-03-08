import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Circle, ChevronDown, ChevronRight } from 'lucide-react';

const stepsData = [
    {
        id: 1,
        title: "Redacción de Estatutos",
        goal: "Establecer las reglas",
        requirement: "4 copias originales, firmadas por todos los socios fundadores.",
        details: "Los estatutos son las normas básicas de la Junior Empresa. Definen el propósito, las actividades y la estructura interna. Deben redactarse de acuerdo a la Ley 1/2002."
    },
    {
        id: 2,
        title: "Inscripción en el Registro",
        goal: "Estatus de Responsabilidad Limitada",
        requirement: "Presentar al Registro Nacional o Autonómico de Asociaciones.",
        details: "Inscribir los estatutos y el acta fundacional en el registro otorga a la asociación personalidad jurídica, protegiendo a los miembros de la responsabilidad financiera personal."
    },
    {
        id: 3,
        title: "Modelo 036 de Hacienda",
        goal: "Registro Fiscal",
        requirement: "Solicitar el NIF Provisional en la Agencia Tributaria.",
        details: "Sin el Número de Identificación Fiscal (NIF), tu Junior Empresa no puede realizar operaciones económicas, emitir facturas ni abrir una cuenta bancaria."
    },
    {
        id: 4,
        title: "Apertura de Cuenta Bancaria",
        goal: "Autonomía Financiera",
        requirement: "Requiere NIF y comprobante del Registro.",
        details: "Abrir una cuenta a nombre de la asociación. Esto garantiza una separación completa entre las finanzas personales y la economía de la Junior Empresa."
    }
];

const LegalCompass = () => {
    const [completedSteps, setCompletedSteps] = useState([]);
    const [expandedStep, setExpandedStep] = useState(1);

    const toggleStep = (id, e) => {
        e.stopPropagation();
        if (completedSteps.includes(id)) {
            setCompletedSteps(completedSteps.filter(s => s !== id));
        } else {
            setCompletedSteps([...completedSteps, id]);
            if (id === expandedStep && expandedStep < stepsData.length) {
                setExpandedStep(id + 1);
            }
        }
    };

    const progressPercentage = (completedSteps.length / stepsData.length) * 100;
    const glassCardClasses = "bg-white/70 backdrop-blur-md border border-white/20 shadow-xl shadow-gray-200/50 rounded-2xl p-6 relative overflow-hidden flex flex-col";

    return (
        <div className={`flex-1 ${glassCardClasses}`}>
            {/* Progress Bar */}
            <div className="mb-8 p-1">
                <div className="flex justify-between text-sm font-semibold mb-2">
                    <span className="text-nexo-primary">Constitución Legal</span>
                    <span className="text-nexo-dark">{Math.round(progressPercentage)}%</span>
                </div>
                <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden shadow-inner">
                    <motion.div
                        className="h-full bg-gradient-to-r from-nexo-primary to-nexo-accent"
                        initial={{ width: 0 }}
                        animate={{ width: `${progressPercentage}%` }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                </div>
            </div>

            {/* Stepper List */}
            <div className="flex flex-col gap-3">
                {stepsData.map((step, index) => {
                    const isCompleted = completedSteps.includes(step.id);
                    const isExpanded = expandedStep === step.id;

                    return (
                        <div
                            key={step.id}
                            className={`border rounded-xl transition-all duration-300 ${isExpanded ? 'bg-white shadow-md border-nexo-primary/30' : 'bg-white/40 border-gray-200 hover:border-nexo-primary/50 cursor-pointer'}`}
                            onClick={() => setExpandedStep(isExpanded ? null : step.id)}
                        >
                            {/* Accordion Header */}
                            <div className="p-4 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={(e) => toggleStep(step.id, e)}
                                        className="transition-transform active:scale-90 outline-none"
                                    >
                                        {isCompleted ? (
                                            <CheckCircle2 className="text-nexo-accent w-7 h-7" />
                                        ) : (
                                            <Circle className="text-gray-300 hover:text-nexo-primary w-7 h-7" />
                                        )}
                                    </button>
                                    <div>
                                        <h3 className={`font-bold transition-colors ${isCompleted ? 'text-gray-500 line-through' : 'text-nexo-dark'}`}>
                                            Paso {index + 1}: {step.title}
                                        </h3>
                                        <p className="text-xs text-gray-500 mt-0.5">{step.goal}</p>
                                    </div>
                                </div>
                                <div className="text-gray-400">
                                    {isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                                </div>
                            </div>

                            {/* Accordion Content */}
                            <AnimatePresence>
                                {isExpanded && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-5 pb-5 pt-1 ml-11 border-t border-gray-100 mt-2">
                                            <div className="bg-nexo-accent/10 text-nexo-dark p-3 rounded-lg text-sm mb-3 font-medium border border-nexo-accent/20">
                                                <span className="font-bold">Requisito:</span> {step.requirement}
                                            </div>
                                            <p className="text-sm text-gray-600 leading-relaxed">
                                                {step.details}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default LegalCompass;

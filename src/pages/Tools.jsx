import React from 'react';
import BudgetCalculator from '../features/tools/BudgetCalculator';
import LegalCompass from '../features/tools/LegalCompass';
import { PenTool } from 'lucide-react';

const Tools = () => {
    return (
        <div className="p-6 md:p-10 max-w-7xl mx-auto w-full">
            <div className="mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nexo-primary/10 text-nexo-primary text-sm font-semibold mb-6">
                    <PenTool size={16} /> Herramientas de Estudio
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-nexo-dark mb-4">
                    Potencia tu <span className="text-nexo-accent">Práctica.</span>
                </h1>
                <p className="text-xl text-gray-500 max-w-3xl leading-relaxed">
                    Herramientas prácticas para presupuestar tu trabajo correctamente y navegar por los pasos legales de la profesionalización.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="flex flex-col h-full">
                    <h2 className="text-2xl font-bold text-nexo-dark mb-6">Calculadora de Presupuestos</h2>
                    <BudgetCalculator />
                </div>

                <div className="flex flex-col h-full">
                    <h2 className="text-2xl font-bold text-nexo-dark mb-6">Brújula Legal Junior Empresa</h2>
                    <LegalCompass />
                </div>
            </div>
        </div>
    );
};

export default Tools;

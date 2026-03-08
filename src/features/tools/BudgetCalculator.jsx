import React, { useState } from 'react';
import { Info } from 'lucide-react';

const BudgetCalculator = () => {
    const [materialsCost, setMaterialsCost] = useState(50);
    const [hoursEstimated, setHoursEstimated] = useState(10);
    const [hourlyRate, setHourlyRate] = useState(25);
    const [irpfRate, setIrpfRate] = useState(15);

    // Calculations
    const workValue = hoursEstimated * hourlyRate;
    const basePrice = materialsCost + workValue;
    const iva = basePrice * 0.21;
    const irpfAmount = workValue * (irpfRate / 100);
    const totalClientPrice = basePrice + iva - irpfAmount;
    const netProfit = basePrice - materialsCost - irpfAmount;

    const glassCardClasses = "bg-white/70 backdrop-blur-md border border-white/20 shadow-xl shadow-gray-200/50 rounded-2xl p-6 relative overflow-hidden";

    return (
        <div className={`flex-1 flex flex-col gap-6 ${glassCardClasses}`}>
            {/* Inputs */}
            <div className="space-y-4">
                <div className="flex flex-col gap-1">
                    <label className="text-sm font-semibold text-gray-700">Coste de Materiales (€)</label>
                    <input
                        type="number"
                        value={materialsCost}
                        onChange={(e) => setMaterialsCost(Math.max(0, Number(e.target.value)))}
                        className="p-3 border border-gray-200 rounded-xl bg-white/50 focus:ring-2 focus:ring-nexo-primary focus:outline-none transition-all"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-semibold text-gray-700">Horas Estimadas</label>
                        <input
                            type="number"
                            value={hoursEstimated}
                            onChange={(e) => setHoursEstimated(Math.max(0, Number(e.target.value)))}
                            className="p-3 border border-gray-200 rounded-xl bg-white/50 focus:ring-2 focus:ring-nexo-primary focus:outline-none transition-all"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-semibold text-gray-700">Tarifa por Hora (€/h)</label>
                        <input
                            type="number"
                            value={hourlyRate}
                            onChange={(e) => setHourlyRate(Math.max(0, Number(e.target.value)))}
                            className="p-3 border border-gray-200 rounded-xl bg-white/50 focus:ring-2 focus:ring-nexo-primary focus:outline-none transition-all"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        <label className="text-sm font-semibold text-gray-700">Retención de IRPF</label>
                        <div className="group relative custom-tooltip-trigger">
                            <Info size={16} className="text-gray-400 cursor-help" />
                            <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity bg-nexo-dark text-white text-xs rounded-lg py-2 px-3 w-48 z-10 -top-2 left-6 pointer-events-none">
                                El IRPF es un anticipo en tu impuesto sobre la renta, retenido por el cliente en facturas a empresas o autónomos.
                            </div>
                        </div>
                    </div>
                    <select
                        value={irpfRate}
                        onChange={(e) => setIrpfRate(Number(e.target.value))}
                        className="p-3 border border-gray-200 rounded-xl bg-white/50 focus:ring-2 focus:ring-nexo-primary focus:outline-none transition-all appearance-none"
                    >
                        <option value={2}>2% (Cooperativas / Algunas actividades)</option>
                        <option value={7}>7% (Primeros 3 años de Profesional)</option>
                        <option value={15}>15% (Profesional Estándar)</option>
                    </select>
                </div>
            </div>

            {/* Visual Output */}
            <div className="mt-auto grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 flex flex-col justify-center">
                    <span className="text-sm text-gray-500 font-medium mb-1">Total que Paga el Cliente</span>
                    <span className="text-3xl font-bold text-nexo-dark">{totalClientPrice.toFixed(2)}€</span>
                    <span className="text-xs text-gray-400 mt-2">Incluye 21% de IVA</span>
                </div>

                <div className="bg-nexo-primary/10 rounded-xl p-4 border border-nexo-primary/20 flex flex-col justify-center">
                    <span className="text-sm text-nexo-primary font-semibold mb-1">Lo que te Quedas (Neto)</span>
                    <span className="text-3xl font-bold text-nexo-primary">{netProfit.toFixed(2)}€</span>
                    <span className="text-xs text-nexo-primary/70 mt-2">Después de IRPF y Materiales</span>
                </div>
            </div>
        </div>
    );
};

export default BudgetCalculator;

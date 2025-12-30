import React from 'react';
import masa from '../assets/imgs/masa.png';

const MenuRestaurante = () => {
    const secciones = [
        {
            categoria: "BASE SALSA DE TOMATE",
            pizzas: [
                { nombre: "TAMAÑO", ing: "", precio_junior: "28 CM", precio_senior: "33 CM", isHeader: true },
                { nombre: "", ing: "", precio_junior: "", precio_senior: "" },
                { nombre: "Margarita", ing: "salsa de tomate, mozza y aceitunas.", precio_junior: "6€", precio_senior: "8€" },
                { nombre: "4 Quesos", ing: "salsa de tomate, mozza, emmental, gorgonzola, edam y aceitunas.", precio_junior: "7€", precio_senior: "9€" },
                { nombre: "Oriental", ing: "salsa de tomate, mozza, merguez, pimiento, huevo y aceitunas.", precio_junior: "7€", precio_senior: "9€" },
                { nombre: "Vegetariana", ing: "salsa de tomate, mozza, champiñones, cebolla, verduras de temporada y salsa ajoperejil.", precio_junior: "7€", precio_senior: "9€" },
                { nombre: "Calzone", ing: "salsa de tomate, mozza, pollo, champiñón y pimiento.", precio_junior: "7€", precio_senior: "9€" },
                { nombre: "Chorizo", ing: "salsa de tomate, mozza, chorizo, pimiento, cebolla y aceitunas.", precio_junior: "7€", precio_senior: "9€" },
                { nombre: "Reina", ing: "salsa de tomate, mozza, mortadela, champiñón y aceitunas.", precio_junior: "7€", precio_senior: "9€" },
                { nombre: "Campione", ing: "salsa de tomate, mozza , carne picada, champiñón, huevo y aceitunas.", precio_junior: "7€", precio_senior: "9€" },
                { nombre: "Atún", ing: "salsa de tomate, mozza , atún, pimiento, cebolla y aceitunas.", precio_junior: "7€", precio_senior: "9€" },
                { nombre: "Corrida", ing: "salsa de tomate,mozza , patatas fritas, carne picada y aceitunas.", precio_junior: "7€", precio_senior: "9€" },
                { nombre: "Marisca", ing: "salsa de tomate, mozza, mariscos y salsa ajoperejil.", precio_junior: "7€", precio_senior: "9€" },
                { nombre: "Pollo", ing: "salsa de tomate, mozza, pollo, pimiento, cebolla y aceitunas.", precio_junior: "7€", precio_senior: "9€" },
                { nombre: "Maxi", ing: "salsa de tomate, mozza, merguez, carne picada, huevo y aceitunas.", precio_junior: "8€", precio_senior: "10€" },
                { nombre: "Muysí", ing: "salsa de tomate, mozza, pollo, carne picada, pimiento, cebolla y aceitunas.", precio_junior: "8€", precio_senior: "10€" },
                { nombre: "Royal", ing: "salsa de tomate, mozza, pollo, carne picada, merguez, pimiento, cebolla y aceitunas.", precio_junior: "9€", precio_senior: "11€" }

            ]
        },
        {
            categoria: "BASE NATA",
            pizzas: [
                { nombre: "TAMAÑO", ing: "", precio_junior: "28 CM", precio_senior: "33 CM", isHeader: true },
                { nombre: "", ing: "", precio_junior: "", precio_senior: "" },
                { nombre: "Chicken", ing: "Nata, mozza, pollo, patatas fritas y aceitunas.", precio_junior: "7€", precio_senior: "9€" },
                { nombre: "Queso de Cabra - Miel", ing: "Nata, mozza, queso de cabra - miel.", precio_junior: "7€", precio_senior: "9€" },
                { nombre: "Campesina", ing: "Nata, mozza, lardón, patatas fritas, cebolla y aceitunas.", precio_junior: "7€", precio_senior: "9€" },
                { nombre: "Gourmande", ing: "Nata, mozza, mortadela, pollo, patatas fritas y huevo.", precio_junior: "7€", precio_senior: "9€" },
                { nombre: "Salmón", ing: "Nata, mozza, salmón y salsa ajoperejil.", precio_junior: "8€", precio_senior: "10€" }
            ]
        },
        {
            categoria: "SALSA ESPECIAL",
            pizzas: [
                { nombre: "TAMAÑO", ing: "", precio_junior: "28 CM", precio_senior: "33 CM", isHeader: true },
                { nombre: "", ing: "", precio_junior: "", precio_senior: "" },
                { nombre: "Buffalo", ing: "Salsa BBQ, mozza, carne picada, pimiento, cebolla y aceitunas.", precio_junior: "8€", precio_senior: "10€" },
                { nombre: "Spicy", ing: "Salsa argeline, mozza, carne picada y pollo.", precio_junior: "8€", precio_senior: "10€" }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-[#d2b48c] py-10 px-4 font-serif">
            <div className="max-w-6xl mx-auto bg-[#f4e4bc] shadow-[0_0_50px_rgba(0,0,0,0.3)] border-[12px] border-[#8b4513]/10 p-6 md:p-12 relative overflow-hidden">

                <header className="text-center mb-12">
                    <h1 className="text-7xl md:text-9xl font-['Caveat'] text-[#4a2c2a] mb-2 drop-shadow-sm">Nuestro Menú</h1>
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="h-[2px] w-20 bg-[#4a2c2a]"></div>
                        <span className="text-[#4a2c2a] font-bold tracking-[0.3em] uppercase text-sm md:text-base">Pizzas Artesanas</span>
                        <div className="h-[2px] w-20 bg-[#4a2c2a]"></div>
                    </div>
                    {masa && <img src={masa} alt="masa" className="w-48 md:w-64 mx-auto opacity-90" />}
                </header>

                <div className="grid grid-cols-1 gap-y-16">
                    {secciones.map((seccion, idx) => (
                        <div key={idx} className="relative">
                            {/* Título de Categoría */}
                            <div className="flex justify-center mb-8">
                                <h2 className="text-3xl font-['Permanent_Marker'] text-white bg-[#4a2c2a] px-8 py-2 transform -rotate-1 shadow-lg ring-4 ring-[#4a2c2a] ring-offset-2 ring-offset-[#f4e4bc]">
                                    {seccion.categoria}
                                </h2>
                            </div>

                            {/* Contenedor de Pizzas */}
                            <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                                {seccion.pizzas.map((pizza, i) => (
                                    <div
                                        key={i}
                                        className={`
                                            flex flex-col p-3 transition-all
                                            ${pizza.isHeader
                                                ? "bg-[#4a2c2a] text-[#f4e4bc] rounded-t-lg shadow-md mb-2 md:col-span-1"
                                                : "border-b border-[#4a2c2a]/20 hover:bg-[#8b4513]/5"
                                            }
                                        `}
                                    >
                                        <div className="flex justify-between items-end gap-2">
                                            <h3 className={`uppercase tracking-tighter leading-none ${pizza.isHeader ? "font-black text-lg" : "font-bold text-[#4a2c2a] text-xl"}`}>
                                                {pizza.nombre}
                                            </h3>

                                            <div className="flex gap-4 md:gap-8 text-right shrink-0">
                                                <div className="w-20 md:w-24">
                                                    <p className={`text-xs mb-1 opacity-70 ${!pizza.isHeader && "hidden"}`}>JUNIOR</p>
                                                    <span className={`font-bold block ${pizza.isHeader ? "text-sm" : "text-lg text-[#8b4513]"}`}>
                                                        {pizza.precio_junior}
                                                    </span>
                                                </div>
                                                <div className="w-20 md:w-24">
                                                    <p className={`text-xs mb-1 opacity-70 ${!pizza.isHeader && "hidden"}`}>SENIOR</p>
                                                    <span className={`font-bold block ${pizza.isHeader ? "text-sm" : "text-lg text-[#8b4513]"}`}>
                                                        {pizza.precio_senior}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {!pizza.isHeader && (
                                            <p className="text-sm italic text-amber-900 leading-tight mt-2 capitalize font-medium opacity-80">
                                                {pizza.ing}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <footer className="mt-24 text-center border-t-2 border-dashed border-[#4a2c2a]/30 pt-10">
                    <p className="font-['Caveat'] text-5xl text-[#4a2c2a] rotate-[-2deg]">¡Buen provecho!</p>
                    <p className="mt-6 text-[10px] uppercase tracking-[0.4em] font-sans font-black text-[#4a2c2a] opacity-40">
                        Artesanía · Tradición · Calidad
                    </p>
                    <p className="mt-6 text-[10px] uppercase tracking-[0.4em] font-sans font-black text-[#4a2c2a] opacity-40">
                        © 2025 Restaurante MuySi.
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default MenuRestaurante;
import React from 'react';

const MenuRestaurante = () => {
    // Datos organizados por secciones
    const secciones = [
        {
            categoria: "BASE SALSA DE TOMATE",
            pizzas: [
                { nombre: "Margarita", ing: "salsa de tomate, mozza y aceitunas." },
                { nombre: "4 Quesos", ing: "salsa de tomate, mozza, emmental, gorgonzola, edam y aceitunas." },
                { nombre: "Oriental", ing: "salsa de tomate, mozza, merguez, pimiento, huevo y aceitunas." },
                { nombre: "Vegetariana", ing: "salsa de tomate, mozza, champiñones, cebolla, verduras de temporada y salsa ajoperejil." },
                { nombre: "Calzone", ing: "salsa de tomate, mozza, pollo, champiñón y pimiento." },
                { nombre: "Chorizo", ing: "salsa de tomate, mozza, chorizo, pimiento, cebolla y aceitunas." },
                { nombre: "Reina", ing: "salsa de tomate, mozza, mortadela, champiñón y aceitunas." },
                { nombre: "Campione", ing: "salsa de tomate, mozza, carne picada, champiñón, huevo y aceitunas." },
                { nombre: "Atún", ing: "salsa de tomate, mozza, atún, pimiento, cebolla y aceitunas." },
                { nombre: "Corrida", ing: "salsa de tomate, mozza, patatas fritas, carne picada y aceitunas." },
                { nombre: "Marisca", ing: "salsa de tomate, mozza, mariscos y salsa ajoperejil." },
                { nombre: "Maxi", ing: "salsa de tomate, mozza, merguez, carne picada, huevo y aceitunas." },
                { nombre: "Pollo", ing: "salsa de tomate, mozza, pollo, pimiento, cebolla y aceitunas." },
                { nombre: "Royal", ing: "salsa de tomate, mozza, pollo, carne picada, merguez, pimiento, cebolla y aceitunas." },
                { nombre: "Muysí", ing: "salsa de tomate, mozza, pollo, carne picada, pimiento, cebolla y aceitunas." }
            ]
        },
        {
            categoria: "BASE NATA",
            pizzas: [
                { nombre: "Chicken", ing: "Nata, mozza, pollo, patatas fritas y aceitunas." },
                { nombre: "Salmón", ing: "Nata, mozza, salmón y salsa ajoperejil." },
                { nombre: "Queso de Cabra - Miel", ing: "Nata, mozza, queso de cabra - miel." },
                { nombre: "Campesina", ing: "Nata, mozza, lardón, patatas fritas, cebolla y aceitunas." },
                { nombre: "Gourmande", ing: "Nata, mozza, mortadela, pollo, patatas fritas y huevo." }
            ]
        },
        {
            categoria: "SALSA ESPECIAL",
            pizzas: [
                { nombre: "Buffalo", ing: "Salsa BBQ, mozza, carne picada, pimiento, cebolla y aceitunas." },
                { nombre: "Spicy", ing: "Salsa argeline, mozza, carne picada y pollo." }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-[#d2b48c] py-10 px-4 font-serif">
            {/* Contenedor efecto papel antiguo */}
            <div className="max-w-5xl mx-auto bg-[#f4e4bc] shadow-[0_0_50px_rgba(0,0,0,0.3)] border-[12px] border-[#8b4513]/10 p-6 md:p-12 relative">

                {/* Encabezado Estilo Vintage */}
                <header className="text-center mb-16">
                    <h1 className="text-6xl md:text-8xl font-['Caveat'] text-[#4a2c2a] mb-2">Nuestro Menú</h1>
                    <div className="flex items-center justify-center gap-4">
                        <div className="h-[2px] w-20 bg-[#4a2c2a]"></div>
                        <span className="text-[#4a2c2a] font-bold tracking-[0.2em] uppercase">Pizzas Artesanas</span>
                        <div className="h-[2px] w-20 bg-[#4a2c2a]"></div>
                    </div>
                </header>

                {/* Mapeo de Secciones */}
                <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
                    {secciones.map((seccion, idx) => (
                        <div key={idx} className={seccion.categoria === "BASE SALSA DE TOMATE" ? "md:col-span-2" : "md:col-span-1"}>

                            <h2 className="text-3xl font-['Permanent_Marker'] text-white bg-[#4a2c2a] inline-block px-6 py-2 mb-8 transform -rotate-1 shadow-md">
                                {seccion.categoria}
                            </h2>

                            <div className={`grid ${seccion.categoria === "BASE SALSA DE TOMATE" ? "md:grid-cols-2" : "grid-cols-1"} gap-6`}>
                                {seccion.pizzas.map((pizza, i) => (
                                    <div key={i} className="border-b border-[#4a2c2a]/20 pb-2 group hover:bg-[#8b4513]/5 transition-colors p-2 rounded">
                                        <div className="flex justify-between items-baseline">
                                            <h3 className="text-xl font-bold text-[#4a2c2a] uppercase tracking-tighter">
                                                {pizza.nombre}
                                            </h3>
                                            {/* Aquí podrías añadir el precio si tu amigo te lo da */}
                                            <span className="text-[#4a2c2a] font-bold">-- €</span>
                                        </div>
                                        <p className="text-sm italic text-amber-900 leading-tight mt-1 capitalize">
                                            {pizza.ing}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Decoración inferior */}
                <footer className="mt-20 text-center border-t border-[#4a2c2a]/30 pt-8">
                    <p className="font-['Caveat'] text-4xl text-[#4a2c2a]">¡Buen provecho!</p>
                    <p className="mt-4 text-xs uppercase tracking-widest font-sans font-bold opacity-60">Pizzas preparadas al momento con ingredientes frescos</p>
                </footer>

                {/* Mancha de diseño retro */}
                <div className="absolute top-10 right-10 w-32 h-32 bg-amber-900/5 rounded-full blur-2xl pointer-events-none"></div>
            </div>
        </div>
    );
};

export default MenuRestaurante;
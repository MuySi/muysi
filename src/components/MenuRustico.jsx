import React from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function MenuRustico() {
    const whatsappNumber = "34600000000"; // cambia luego

    const pizzas = [
        {
            category: "Salsa Tomate",
            items: [
                { name: "Margarita", desc: "Tomate, mozzarella, aceitunas", price: "6€ / 8€", tag: "⭐" },
                { name: "4 Quesos", desc: "Mozza, emmental, gorgonzola, edam", price: "7€ / 9€" },
                { name: "Chorizo", desc: "Tomate, mozzarella, chorizo", price: "7€ / 9€" },
            ],
        },
        {
            category: "Base Nata",
            items: [
                { name: "Chicken", desc: "Nata, mozzarella, pollo", price: "8€ / 10€", tag: "🔥" },
                { name: "Campesina", desc: "Nata, lardón, patatas", price: "8€ / 10€" },
            ],
        },
    ];

    const sandwiches = [
        { name: "Buffalo", desc: "Carne picada, cheddar y verduras" },
        { name: "Kefta", desc: "Kefta, cheddar y verduras" },
        { name: "Falafel", desc: "4 falafels, cheddar y verduras" },
        { name: "Westrn", desc: "Carne, bacon, huevo y verduras" },
    ];

    return (
        <div className="bg-black text-white font-sans">
            {/* HERO */}
            <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-6xl md:text-7xl font-extrabold text-yellow-400"
                >
                    MuySi
                </motion.h1>
                <p className="mt-6 text-xl max-w-xl text-gray-300">
                    Pizza artesanal · Pan casero · Street food premium
                </p>
                <div className="flex gap-4 mt-10">
                    <a
                        href={`https://wa.me/${whatsappNumber}`}
                        className="bg-green-500 text-black px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:scale-105 transition"
                    >
                        <Phone /> Pedir por WhatsApp
                    </a>
                </div>
            </section>

            {/* PIZZAS */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold mb-12 text-center">🍕 Pizzas Caseras</h2>
                {pizzas.map((cat) => (
                    <div key={cat.category} className="mb-12">
                        <h3 className="text-2xl font-semibold text-yellow-400 mb-6">
                            {cat.category}
                        </h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {cat.items.map((p) => (
                                <motion.div
                                    whileHover={{ scale: 1.03 }}
                                    key={p.name}
                                    className="bg-zinc-900 rounded-2xl p-6 shadow-lg"
                                >
                                    <div className="flex justify-between items-center">
                                        <h4 className="text-xl font-bold">{p.name}</h4>
                                        {p.tag && (
                                            <span className="text-sm bg-yellow-400 text-black px-2 py-1 rounded-full">
                                                {p.tag}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-gray-400 text-sm mt-2">{p.desc}</p>
                                    <p className="mt-4 font-semibold">{p.price}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </section>

            {/* SANDWICHES */}
            <section className="py-20 bg-zinc-950 px-6">
                <h2 className="text-4xl font-bold mb-12 text-center">🌯 Sandwiches</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {sandwiches.map((s) => (
                        <motion.div
                            whileHover={{ y: -5 }}
                            key={s.name}
                            className="bg-zinc-900 rounded-2xl p-6 text-center"
                        >
                            <h3 className="text-xl font-bold mb-2">{s.name}</h3>
                            <p className="text-gray-400 text-sm">{s.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CASERO */}
            <section className="py-20 px-6 max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-10">100% Casero</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-zinc-900 p-6 rounded-2xl">🥖 Pan artesanal</div>
                    <div className="bg-zinc-900 p-6 rounded-2xl">🥩 Carne fresca</div>
                    <div className="bg-zinc-900 p-6 rounded-2xl">🍟 Patatas caseras</div>
                </div>
            </section>

            {/* CTA */}
            <footer className="py-16 bg-black text-center">
                <a
                    href={`https://wa.me/${whatsappNumber}`}
                    className="inline-flex items-center gap-2 bg-green-500 text-black px-10 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition"
                >
                    <Phone /> Pedir ahora por WhatsApp
                </a>
                <p className="mt-6 text-gray-500">© {new Date().getFullYear()} MuySi</p>
            </footer>
        </div>
    );
}

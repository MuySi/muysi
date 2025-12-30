import { useState } from 'react'
import './App.css'
import MenuRustico from './components/MenuRustico';


const App = () => {
  const menu = [
    { nombre: "Hamburgesa Especial", precio: "12€", desc: "Carne madurada, queso cheddar y salsa secreta." },
    { nombre: "Pizza Artesana", precio: "10€", desc: "Masa madre, tomate natural y albahaca fresca." },
    { nombre: "Ensalada César", precio: "8€", desc: "Pollo braseado, croutons y nuestra salsa especial." },
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">

      {/* HERO SECTION 
      <header className="h-screen flex flex-col items-center justify-center bg-[url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&q=80')] bg-cover bg-center text-white">
        <div className="bg-black/50 p-10 rounded text-center backdrop-blur-sm">
          <h1 className="text-6xl font-bold mb-4">MuySi</h1>
          <p className="text-xl mb-8">La mejor experiencia gastronómica del barrio</p>
          <a href="#menu" className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-full font-bold transition">Ver Menú</a>
        </div>
      </header>
      */}
      <MenuRustico />

      {/* UBICACIÓN 
      <section className="bg-stone-200 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">¿Dónde estamos?</h2>
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="w-full h-80 bg-gray-300 rounded-lg overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.625!2d-3.703!3d40.416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI0JzU3LjYiTiAzwrA0MicxMC44Ilc!5e0!3m2!1ses!2ses!4v1625000000000"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div className="text-left space-y-4">
              <p className="text-lg"><strong>Dirección:</strong> Calle Principal, 123. Madrid.</p>
              <p className="text-lg"><strong>Horario:</strong> Mar - Dom: 13:00 a 23:00</p>
              <a
                href="https://wa.me/34600000000"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700"
              >
                Reservar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
      */}

    </div>
  );
};

export default App;
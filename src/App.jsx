import React, { useState } from 'react';
import { MapPin, Menu, X, Wheat, Beef, Flame, Map } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import img from './assets/imgs/img.jpg';
import imgrolls from './assets/imgs/rolls.jpg';
import imgPizza from './assets/imgs/pizza.jpg';
import imgTacos from './assets/imgs/tacos.jpg';

const App = () => {
  const [activeCategory, setActiveCategory] = useState('pizzas');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [legalType, setLegalType] = useState('legal');

  const openLegal = (type) => {
    setLegalType(type);
    setIsLegalOpen(true);
  };
  // Número de WhatsApp
  const whatsappNumber = "34600000000";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hola,%20quisiera%20hacer%20un%20pedido`;

  // Imágenes por categoría
  const categoryImages = {
    pizzas: imgPizza,
    rolls: imgrolls,
    tacos: imgTacos
  };

  const menuData = {
    pizzas: [
      { name: "Margarita", desc: "Salsa de tomate, mozza y aceitunas", priceJr: "6€", priceSr: "8€", category: "Salsa Tomate" },
      { name: "4 Quesos", desc: "Tomate, mozza, emmental, gorgonzola, edam", priceJr: "7€", priceSr: "9€", category: "Salsa Tomate" },
      { name: "Reina", desc: "Tomate, mozza, mortadela, champiñón", priceJr: "7€", priceSr: "9€", category: "Salsa Tomate" },
      { name: "Chicken", desc: "Nata, mozza, pollo, patatas fritas", priceJr: "8€", priceSr: "10€", category: "Base Nata" },
      { name: "Salmón", desc: "Nata, mozza, salmón y salsa ajoperejil", priceJr: "8€", priceSr: "10€", category: "Base Nata" },
      { name: "Buffalo", desc: "Salsa BBQ, mozza, carne picada, pimiento", priceJr: "8€", priceSr: "10€", category: "Salsa Especial" },
      { name: "Spicy", desc: "Salsa argeline, mozza, carne picada, pollo", priceJr: "8€", priceSr: "10€", category: "Salsa Especial" },
      { name: "MuySi", desc: "Tomate, mozza, pollo, carne picada, pimiento, cebolla", priceJr: "8€", priceSr: "10€", category: "Especialidad" },
    ],
    rolls: [
      { name: "Bufallo", desc: "Carne picada, cheddar y verduras", price: "A consultar" },
      { name: "Kefta", desc: "Kefta, cheddar y verduras", price: "A consultar" },
      { name: "Falafes", desc: "4 falafels, cheddar y verduras", price: "A consultar" },
      { name: "Westrn", desc: "Carne picada, cheddar, bacon, huevo", price: "A consultar" },
      { name: "Tandoori", desc: "Pechuga de pollo, cheddar y verduras", price: "A consultar" },
    ],
    tacosInfo: {
      sizes: [
        { name: "Tacos M", desc: "El tamaño ideal" },
        { name: "Tacos L", desc: "Para mucha hambre" }
      ],
      proteins: ["Kefta", "Carne Picada", "Pollo Marinado", "Falafel", "Tenders", "Nuggets", "Cordon Blue", "Merguez"],
      sauces: ["Yoyo", "Tasty", "Moutarde", "Barbacoa", "Samourai", "Harissa", "Biggy", "Brazil", "Algerienne", "Curry", "Cheesy Easy"],
      extras: ["Quesitos", "Cheddar", "Emmental", "Boursin", "Mozza", "Bacon", "Huevo", "Chorizo"]
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">

      {/* NAVBAR */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <span className="text-3xl font-bold text-orange-600 font-serif tracking-tight">MuySi</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#inicio" className="text-slate-700 hover:text-orange-600 font-medium transition">Inicio</a>
              <a href="#menu" className="text-slate-700 hover:text-orange-600 font-medium transition">Menú</a>
              <a href="#ubicacion" className="text-slate-700 hover:text-orange-600 font-medium transition">Ubicación</a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-2 rounded-full font-bold hover:bg-green-600 transition shadow-lg flex items-center gap-2"
              >
                <FaWhatsapp size={18} /> Pedir por WhatsApp
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-700">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-orange-50 rounded-md">Inicio</a>
              <a href="#menu" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-orange-50 rounded-md">Menú</a>
              <a href="#ubicacion" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-orange-50 rounded-md">Ubicación</a>
              <a href={whatsappLink} className="block px-3 py-3 text-base font-bold text-green-600 bg-green-50 rounded-md">Pedir por WhatsApp</a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section id="inicio" className="relative pt-28 pb-16 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-orange-50 -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Contenido Texto */}
          <div className="text-center lg:text-left flex flex-col">
            <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-orange-600 text-sm font-bold mb-4 self-center lg:self-start">
              100% CASERA & ARTESANAL
            </span>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
              El sabor auténtico <br />
              <span className="text-orange-500">que te mereces</span>
            </h1>

            {/* IMAGEN MÓVIL (Visible solo en móvil, debajo del título) */}
            <div className="block lg:hidden w-full mb-8">
              <div className="bg-orange-200 rounded-3xl h-64 w-full flex items-center justify-center relative overflow-hidden shadow-xl rotate-2">
                <span className="text-orange-800/50 font-bold text-2xl"></span>
                <img src={img} className="object-cover w-full h-full" />
              </div>
            </div>

            <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto lg:mx-0">
              Disfruta de nuestras famosas pizzas con masa casera, rolls con pan Naan recién hecho y los tacos más sabrosos de Cartagena.
            </p>

            {/* Botones de Acción */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 transition shadow-xl flex items-center justify-center gap-2 text-lg"
              >
                <FaWhatsapp size={22} /> PEDIR AHORA
              </a>

              <div className="flex gap-3">
                <a href="#menu" className="flex-1 bg-slate-900 text-white px-4 py-3 rounded-xl font-bold hover:bg-slate-800 transition shadow-md text-center flex items-center justify-center gap-2">
                  <Menu size={18} /> Ver Menú
                </a>
                <a href="#ubicacion" className="flex-1 bg-white text-orange-600 border-2 border-orange-100 px-4 py-3 rounded-xl font-bold hover:bg-orange-50 transition text-center flex items-center justify-center gap-2">
                  <MapPin size={18} /> Ubicación
                </a>
              </div>
            </div>
          </div>

          {/* IMAGEN DESKTOP (Visible solo en pantallas grandes) */}
          <div className="hidden lg:block relative mx-auto w-full">
            <div className="bg-orange-200 rounded-3xl h-[500px] w-full flex items-center justify-center relative overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition duration-500">
              <img src={img} className="object-cover w-full h-full" alt='FOTO PLATO PRINCIPAL' />
            </div>
          </div>
        </div>
      </section>

      {/* QUALITY BADGES */}
      <section className="py-12 bg-white shadow-sm relative z-10 -mt-6 mx-4 rounded-2xl max-w-7xl lg:mx-auto border border-slate-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
          <div className="p-4">
            <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Wheat size={24} />
            </div>
            <h3 className="font-bold text-xl mb-2">Masa Casera 100%</h3>
            <p className="text-slate-500">Nuestras pizzas y panes se preparan diariamente en nuestra cocina.</p>
          </div>
          <div className="p-4">
            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Beef size={24} />
            </div>
            <h3 className="font-bold text-xl mb-2">Carne Fresca</h3>
            <p className="text-slate-500">Selección de carnes de primera calidad para tus rolls y tacos.</p>
          </div>
          <div className="p-4">
            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Flame size={24} />
            </div>
            <h3 className="font-bold text-xl mb-2">Pan Naan Artesanal</h3>
            <p className="text-slate-500">Hecho al momento. Elige entre pan Naan o Tortilla para tus pedidos.</p>
          </div>
        </div>
      </section>

      {/* MENU SECTION */}
      <section id="menu" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-2">Nuestro Menú</h2>
            <p className="text-slate-600">Selecciona una categoría</p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['pizzas', 'rolls', 'tacos'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-full font-bold text-lg capitalize transition-all transform hover:-translate-y-1 ${activeCategory === cat
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FOTO REPRESENTATIVA DE LA CATEGORÍA */}
          <div className="mb-12 w-full h-48 md:h-64 rounded-2xl overflow-hidden shadow-lg bg-slate-200 relative">
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 z-10">
              <span className="text-white font-bold text-3xl md:text-5xl uppercase tracking-widest drop-shadow-md">
                {activeCategory}
              </span>
            </div>
            {/* Aquí va la imagen dinámica según categoría */}
            <img
              src={categoryImages[activeCategory]}
              alt={activeCategory}
              className="w-full h-full object-cover"
            />
          </div>

          {/* CONTENIDO DEL MENÚ */}

          {/* 1. PIZZAS LAYOUT */}
          {activeCategory === 'pizzas' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuData.pizzas.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-5 shadow-md border border-slate-100 flex flex-col justify-between hover:border-orange-200 transition-colors">
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-xl font-bold text-slate-800">{item.name}</h3>
                      <span className="text-xs font-bold bg-orange-50 text-orange-600 px-2 py-1 rounded">{item.category}</span>
                    </div>
                    <p className="text-slate-500 text-sm mb-4">{item.desc}</p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex justify-between items-center text-sm font-semibold">
                    <div className="flex flex-col">
                      <span className="text-slate-400 text-xs">JUNIOR</span>
                      <span className="text-slate-800 text-lg">{item.priceJr}</span>
                    </div>
                    <div className="h-8 w-px bg-slate-200"></div>
                    <div className="flex flex-col text-right">
                      <span className="text-slate-400 text-xs">SENIOR</span>
                      <span className="text-orange-600 text-lg">{item.priceSr}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 2. rolls LAYOUT */}
          {activeCategory === 'rolls' && (
            <div>
              <div className="mb-8 text-center bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                <p className="font-bold text-yellow-800 text-lg flex items-center justify-center gap-2">
                  <Wheat size={24} /> ¡Elige tu base: Pan Naan o Tortilla!
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuData.rolls.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-5 shadow-md border border-slate-100 hover:border-orange-200 transition-colors">
                    <h3 className="text-xl font-bold text-slate-800 mb-1">{item.name}</h3>
                    <p className="text-slate-500 text-sm mb-3">{item.desc}</p>
                    <div className="text-right">
                      <span className="text-orange-600 font-bold bg-orange-50 px-3 py-1 rounded-full text-sm">Consultar precio</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. TACOS LAYOUT */}
          {activeCategory === 'tacos' && (
            <div className="bg-slate-900 rounded-3xl p-6 md:p-10 text-white shadow-2xl">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-yellow-400 mb-2">Monta tu Taco Perfecto</h3>
                <p className="text-slate-300">Crea tu combinación favorita</p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                {/* Columna Izquierda: Tamaños y Proteinas */}
                <div className="space-y-8">
                  <div>
                    <span className="bg-yellow-400 text-slate-900 font-bold px-3 py-1 rounded mb-4 inline-block">EL TAMAÑO</span>
                    <div className="flex gap-4 mt-2">
                      {menuData.tacosInfo.sizes.map((s, i) => (
                        <div key={i} className="flex-1 bg-slate-800 border-2 border-slate-700 p-4 rounded-xl text-center hover:border-yellow-400 transition cursor-default">
                          <div className="font-bold text-xl text-white">{s.name}</div>
                          <div className="text-xs text-slate-400">{s.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="bg-yellow-400 text-slate-900 font-bold px-3 py-1 rounded mb-4 inline-block">LA PROTEÍNA</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {menuData.tacosInfo.proteins.map((p, i) => (
                        <span key={i} className="bg-slate-800 border border-slate-700 px-3 py-2 rounded-lg text-sm font-medium hover:bg-slate-700 hover:text-yellow-400 transition cursor-default">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Columna Derecha: Salsas y Extras */}
                <div className="space-y-8">
                  <div>
                    <span className="bg-yellow-400 text-slate-900 font-bold px-3 py-1 rounded mb-4 inline-block">LAS SALSAS</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {menuData.tacosInfo.sauces.map((s, i) => (
                        <span key={i} className="bg-white text-slate-900 px-3 py-1 rounded-full text-sm font-bold shadow-sm">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="bg-orange-500 text-white font-bold px-3 py-1 rounded mb-4 inline-block">¿ALGO MÁS? (EXTRAS)</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {menuData.tacosInfo.extras.map((e, i) => (
                        <span key={i} className="text-slate-300 border border-slate-600 px-3 py-1 rounded-lg text-xs">{e}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* UBICACIÓN SECTION */}
      <section id="ubicacion" className="py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-orange-600 font-bold tracking-wider uppercase mb-2 block">Visítanos</span>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Dónde encontrarnos</h2>
            <div className="bg-white p-6 rounded-2xl shadow-lg space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-800">Dirección</h4>
                  <p className="text-slate-600">Calle Cuatro Santos 40,<br /> Cartagena, Murcia</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full text-green-600">
                  <FaWhatsapp size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-800">Pedidos</h4>
                  <p className="text-slate-600">Haz tu pedido cómodamente por WhatsApp y ven a recogerlo o te lo llevamos.</p>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-green-600 font-bold mt-1 inline-block hover:underline">Iniciar chat &rarr;</a>
                </div>
              </div>
            </div>
          </div>
          {/* Mapa */}
          <div className="h-80 w-full bg-slate-300 rounded-3xl overflow-hidden shadow-xl relative">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.0415311243974!2d-0.9833361103606423!3d37.601181570886276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6342283f41d53b%3A0xe84ba2233ee85ba9!2sC.%20Cuatro%20Santos%2C%2040%2C%2030202%20Cartagena%2C%20Murcia!5e0!3m2!1ses!2ses!4v1767373154887!5m2!1ses!2ses" className="w-full h-full object-cover"></iframe>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-3xl font-bold text-white font-serif mb-4">MuySi</h2>
              <p className="mb-6 text-slate-400 max-w-sm">
                El auténtico sabor casero en Cartagena. Pizzas, Tacos y Sandwiches hechos con pasión y los mejores ingredientes.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => openLegal('legal')} className="hover:text-orange-500 transition">Aviso Legal</button></li>
                <li><button onClick={() => openLegal('privacidad')} className="hover:text-orange-500 transition">Política de Privacidad</button></li>
                <li><button onClick={() => openLegal('cookies')} className="hover:text-orange-500 transition">Política de Cookies</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Información</h3>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => openLegal('alergenos')} className="hover:text-orange-500 transition flex items-center gap-2"><div className="w-2 h-2 bg-orange-500 rounded-full"></div> Alérgenos</button></li>
                <li><a href="#ubicacion" className="hover:text-orange-500 transition">Dónde estamos</a></li>
                <li><a href={whatsappLink} className="hover:text-orange-500 transition">Contacto</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-center items-center text-sm text-slate-500">
            <p>© 2026 Restaurante MuySi. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* RENDERIZADO DEL MODAL */}
      <LegalModal
        isOpen={isLegalOpen}
        onClose={() => setIsLegalOpen(false)}
        type={legalType}
      />
    </div>
  );
};
/* --- COMPONENTE DE TEXTOS LEGALES (Ventana Emergente) --- */
const LegalModal = ({ isOpen, onClose, type }) => {
  if (!isOpen) return null;

  const content = {
    legal: {
      title: "Aviso Legal",
      text: (
        <div className="space-y-4 text-sm text-slate-600">
          <p><strong>1. DATOS IDENTIFICATIVOS</strong><br />
            En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, se reflejan los siguientes datos:<br />
            La empresa titular de dominio web es <strong>Restaurante MuySi</strong>, con domicilio a estos efectos en Calle Cuatro Santos 40, Cartagena, Murcia.
            <br />Correo electrónico de contacto: <strong>muysimuysi1@gmail.com</strong></p>

          <p><strong>2. USUARIOS</strong><br />
            El acceso y/o uso de este portal de MuySi atribuye la condición de USUARIO, que acepta las Condiciones Generales de Uso aquí reflejadas.</p>

          <p><strong>3. USO DEL PORTAL</strong><br />
            La web proporciona el acceso a informaciones, servicios o datos (en adelante, "los contenidos") pertenecientes a MuySi. El USUARIO asume la responsabilidad del uso del portal.</p>
        </div>
      )
    },
    privacidad: {
      title: "Política de Privacidad",
      text: (
        <div className="space-y-4 text-sm text-slate-600">
          <p><strong>1. RESPONSABLE DEL TRATAMIENTO</strong><br />
            Restaurante MuySi se compromete a proteger la privacidad de los usuarios. Los datos personales facilitados serán tratados de conformidad con el Reglamento (UE) 2016/679 (RGPD).</p>

          <p><strong>2. FINALIDAD</strong><br />
            La finalidad de la recogida de datos (principalmente mediante el enlace a WhatsApp) es gestionar los pedidos solicitados por el cliente y resolver dudas.</p>

          <p><strong>3. LEGITIMACIÓN</strong><br />
            La base legal para el tratamiento de sus datos es la ejecución del servicio solicitado (pedido de comida) y el consentimiento del interesado.</p>

          <p><strong>4. DESTINATARIOS</strong><br />
            No se cederán datos a terceros, salvo obligación legal.</p>
        </div>
      )
    },
    cookies: {
      title: "Política de Cookies",
      text: (
        <div className="space-y-4 text-sm text-slate-600">
          <p><strong>1. ¿QUÉ SON LAS COOKIES?</strong><br />
            Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web.</p>
          <p><strong>2. TIPOS DE COOKIES</strong><br />
            Este sitio web utiliza únicamente <strong>cookies técnicas</strong> necesarias para el funcionamiento de la web (como recordar tu selección en el menú durante la sesión). No utilizamos cookies publicitarias ni de rastreo de terceros.</p>
        </div>
      )
    },
    alergenos: {
      title: "Información sobre Alérgenos",
      text: (
        <div className="space-y-4 text-sm text-slate-600">
          <p>Conforme al Reglamento (UE) nº 1169/2011, informamos a nuestros clientes que nuestros platos pueden contener trazas de los siguientes alérgenos:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Gluten (Cereales)</li>
            <li>Lácteos y derivados</li>
            <li>Huevos</li>
            <li>Pescado (en platos específicos como Pizza Salmón)</li>
            <li>Mostaza y otros condimentos en salsas</li>
          </ul>
          <p className="font-bold">Por favor, si usted tiene alguna alergia o intolerancia, indíquelo claramente al realizar su pedido por WhatsApp.</p>
        </div>
      )
    }
  };

  const currentContent = content[type] || content.legal;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Fondo oscuro backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>

      {/* Contenido Modal */}
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[80vh] flex flex-col relative z-10 animate-in fade-in zoom-in duration-200">

        {/* Cabecera */}
        <div className="flex justify-between items-center p-6 border-b border-slate-100">
          <h3 className="text-2xl font-bold text-slate-800">{currentContent.title}</h3>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition">
            <X size={24} className="text-slate-500" />
          </button>
        </div>

        {/* Texto con scroll */}
        <div className="p-6 overflow-y-auto custom-scrollbar">
          {currentContent.text}
        </div>

        {/* Pie del modal */}
        <div className="p-6 border-t border-slate-100 bg-slate-50 rounded-b-2xl flex justify-end">
          <button onClick={onClose} className="bg-slate-900 text-white px-6 py-2 rounded-lg font-bold hover:bg-slate-800 transition">
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
export default App;
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { Link } from '@tanstack/react-router'
import { ArrowRight, FileText, Download, MapPin } from 'lucide-react'

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Hero Section actualizado */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://potenta.com.ec/wp-content/uploads/slider/cache/7f9be47a7b71fb44011990ebbfaf7e2a/potenta-bn-1.webp" 
            alt="Fondo Industrial" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#06253a]/90 to-[#06253a]/60" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">
            Aumenta la eficiencia de tu <span className="text-[#ff5100]">producción</span>
          </h1>
          <p className="text-xl text-zinc-200 drop-shadow">
            Impulsamos la industria con tecnología e innovación de primera. Soluciones integrales en automatización e instrumentación industrial.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contacto">
              <Button size="lg" className="bg-[#ff5100] hover:bg-[#e04800] text-white font-bold tracking-widest px-8 py-6 text-sm rounded-none">
                 SOLICITAR COTIZACIÓN
              </Button>
            </Link>
            <Link to="/tienda/catalogo">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#06253a] font-bold tracking-widest px-8 py-6 text-sm bg-transparent rounded-none transition-colors">
                VER CATÁLOGO
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Video Corporativo */}
      <section className="py-20 px-6 lg:px-20 bg-zinc-50 flex justify-center border-b border-zinc-200">
        <div className="w-full max-w-5xl shadow-2xl overflow-hidden border-8 border-white bg-white">
          <div className="aspect-video relative">
            <iframe 
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/Egrh4XmfQPs?si=ySowg-k6EaV5U9F4" 
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* 3. Descarga de PDFs */}
      <section className="py-20 px-6 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <a href="https://potenta.com.ec/wp-content/uploads/2024/09/CATALOGO-2023-INSTRUMENTACION.pdf" target="_blank" rel="noreferrer" className="group">
              <Card className="h-full hover:shadow-xl transition-all border-zinc-200 group-hover:border-[#ff5100] bg-zinc-50 group-hover:-translate-y-1 rounded-none">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#06253a]/5 flex items-center justify-center text-[#06253a] group-hover:bg-[#ff5100] group-hover:text-white transition-colors">
                    <FileText size={32} />
                  </div>
                  <h3 className="font-bold text-xl text-[#06253a]">Catálogo Instrumentación</h3>
                  <p className="text-sm text-zinc-500">Explora nuestras soluciones en medición y control industrial.</p>
                  <span className="text-[#ff5100] flex items-center gap-2 text-sm font-semibold !mt-6 transition-transform group-hover:translate-x-1">
                    Descargar PDF <Download size={16} />
                  </span>
                </CardContent>
              </Card>
            </a>
            
            <a href="https://potenta.com.ec/wp-content/uploads/2024/09/CATALOGO-2023-AUTOMATIZACION.pdf" target="_blank" rel="noreferrer" className="group">
              <Card className="h-full hover:shadow-xl transition-all border-zinc-200 group-hover:border-[#ff5100] bg-zinc-50 group-hover:-translate-y-1 rounded-none">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#06253a]/5 flex items-center justify-center text-[#06253a] group-hover:bg-[#ff5100] group-hover:text-white transition-colors">
                    <FileText size={32} />
                  </div>
                  <h3 className="font-bold text-xl text-[#06253a]">Catálogo Automatización</h3>
                  <p className="text-sm text-zinc-500">Descubre equipos para optimizar tus procesos productivos.</p>
                  <span className="text-[#ff5100] flex items-center gap-2 text-sm font-semibold !mt-6 transition-transform group-hover:translate-x-1">
                    Descargar PDF <Download size={16} />
                  </span>
                </CardContent>
              </Card>
            </a>

            <a href="https://potenta.com.ec/wp-content/uploads/2024/09/Carta-de-presentacion-Digital.pdf" target="_blank" rel="noreferrer" className="group">
              <Card className="h-full hover:shadow-xl transition-all border-zinc-200 group-hover:border-[#ff5100] bg-zinc-50 group-hover:-translate-y-1 rounded-none">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#06253a]/5 flex items-center justify-center text-[#06253a] group-hover:bg-[#ff5100] group-hover:text-white transition-colors">
                    <FileText size={32} />
                  </div>
                  <h3 className="font-bold text-xl text-[#06253a]">Carta de Presentación</h3>
                  <p className="text-sm text-zinc-500">Conoce más sobre Potenta, nuestra experiencia y trayectoria.</p>
                  <span className="text-[#ff5100] flex items-center gap-2 text-sm font-semibold !mt-6 transition-transform group-hover:translate-x-1">
                    Descargar PDF <Download size={16} />
                  </span>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </section>

      {/* 4. Marcas Aliadas */}
      <section className="py-20 px-6 lg:px-20 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Instrumentación */}
          <div>
            <h3 className="text-[#ff5100] font-semibold mb-10 text-sm uppercase tracking-widest border-l-2 border-[#ff5100] pl-3">
              Potenta Instrumentación
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-y-12 gap-x-8 items-center justify-items-center opacity-85">
              <img src="https://potenta.com.ec/wp-content/uploads/2024/09/potenta-Potenta-Instrumentacion-uwt.png" alt="UWT" className="h-10 w-auto mix-blend-multiply filter grayscale hover:grayscale-0 transition-all duration-300" />
              <img src="https://potenta.com.ec/wp-content/uploads/2024/09/potenta-Potenta-Instrumentacion-pyromation.png" alt="Pyromation" className="h-10 w-auto mix-blend-multiply filter grayscale hover:grayscale-0 transition-all duration-300 col-span-2 md:col-span-1" />
              <img src="https://potenta.com.ec/wp-content/uploads/2024/09/potenta-Potenta-Instrumentacion-qwyer.png" alt="Dwyer" className="h-12 w-auto mix-blend-multiply filter grayscale hover:grayscale-0 transition-all duration-300" />
              <img src="https://potenta.com.ec/wp-content/uploads/2024/09/potenta-Potenta-Instrumentacion-flomec.png" alt="Flomec" className="h-8 w-auto mix-blend-multiply filter grayscale hover:grayscale-0 transition-all duration-300" />
              <img src="https://potenta.com.ec/wp-content/uploads/2024/09/potenta-Potenta-Instrumentacion-abb.png" alt="ABB" className="h-12 w-auto mix-blend-multiply filter grayscale hover:grayscale-0 transition-all duration-300" />
              <img src="https://potenta.com.ec/wp-content/uploads/2024/09/potenta-Potenta-Instrumentacion-winters.png" alt="Winters" className="h-10 w-auto mix-blend-multiply filter grayscale hover:grayscale-0 transition-all duration-300" />
              <img src="https://potenta.com.ec/wp-content/uploads/2024/09/potenta-baumer.png" alt="Baumer" className="h-8 w-auto mix-blend-multiply filter grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
          </div>

          {/* Automatización */}
          <div>
            <h3 className="text-[#ff5100] font-semibold mb-10 text-sm uppercase tracking-widest border-l-2 border-[#ff5100] pl-3">
              Potenta Automatización
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-8 items-center justify-items-center opacity-85">
              <img src="https://potenta.com.ec/wp-content/uploads/2024/09/potenta-automatizacion-pepperl-fuchs.png" alt="Pepperl+Fuchs" className="h-10 w-auto mix-blend-multiply filter grayscale hover:grayscale-0 transition-all duration-300" />
              <img src="https://potenta.com.ec/wp-content/uploads/2024/09/potenta-automatizacion-schmersal.png" alt="Schmersal" className="h-8 w-auto mix-blend-multiply filter grayscale hover:grayscale-0 transition-all duration-300" />
              <img src="https://potenta.com.ec/wp-content/uploads/2024/09/potenta-automatizacion-patlite.png" alt="Patlite" className="h-8 w-auto mix-blend-multiply filter grayscale hover:grayscale-0 transition-all duration-300" />
              <img src="https://potenta.com.ec/wp-content/uploads/2024/09/potenta-automatizacion-tri-tronics.png" alt="Tri-Tronics" className="h-8 w-auto mix-blend-multiply filter grayscale hover:grayscale-0 transition-all duration-300" />
              <img src="https://potenta.com.ec/wp-content/uploads/2024/09/potenta-automatizacion-wieland.png" alt="Wieland" className="h-12 w-auto mix-blend-multiply filter grayscale hover:grayscale-0 transition-all duration-300" />
              <img src="https://potenta.com.ec/wp-content/uploads/2024/09/potenta-automatizacion-pizzato-1.png" alt="Pizzato" className="h-14 w-auto mix-blend-multiply filter grayscale hover:grayscale-0 transition-all duration-300 lg:col-start-2 lg:col-end-3" />
              <img src="https://potenta.com.ec/wp-content/uploads/2024/09/potenta-automatizacion-lika-1.png" alt="Lika" className="h-16 w-auto mix-blend-multiply filter grayscale hover:grayscale-0 transition-all duration-300" />
              <img src="https://potenta.com.ec/wp-content/uploads/2024/09/potenta-automatizacion-omron-1.png" alt="Omron" className="h-10 w-auto mix-blend-multiply filter grayscale hover:grayscale-0 transition-all duration-300" />
              <img src="https://potenta.com.ec/wp-content/uploads/2024/09/potenta-automatizacion-advantech-1.png" alt="Advantech" className="h-10 w-auto mix-blend-multiply filter grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Clientes */}
      <section className="py-24 px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[#ff5100] font-semibold text-sm uppercase tracking-widest block mb-4">Clientes</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#06253a] max-w-4xl leading-tight">
              La confianza de numerosas marcas, respalda nuestra excelencia en el sector.
            </h2>
            <div className="h-1.5 w-32 bg-[#ff5100] mt-8"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-16 items-center justify-items-center opacity-80 pt-8 mt-12 bg-zinc-50/50 p-12 rounded-xl">
            <img src="https://potenta.com.ec/wp-content/uploads/2024/09/potenta-cliente-favorita.png" alt="La Favorita" className="h-10 w-auto mix-blend-multiply filter grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="https://potenta.com.ec/wp-content/uploads/2024/09/potenta-cliente-pronaca.png" alt="Pronaca" className="h-10 w-auto mix-blend-multiply filter grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="https://potenta.com.ec/wp-content/uploads/2024/09/potenta-cliente-tia.png" alt="Tía" className="h-14 w-auto mix-blend-multiply filter grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="https://potenta.com.ec/wp-content/uploads/2024/09/potenta-cliente-arca-cotinental.png" alt="Arca Continental" className="h-10 w-auto mix-blend-multiply filter grayscale hover:grayscale-0 transition-all duration-300" />
            
            <img src="https://potenta.com.ec/wp-content/uploads/2024/09/potenta-cliente-cerveceria-nacional.png" alt="Cervecería Nacional" className="h-10 w-auto mix-blend-multiply filter grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="https://potenta.com.ec/wp-content/uploads/2024/09/potenta-cliente-confiteca.png" alt="Confiteca" className="h-8 w-auto mix-blend-multiply filter grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="https://potenta.com.ec/wp-content/uploads/2024/09/potenta-cliente-holcim.png" alt="Holcim" className="h-10 w-auto mix-blend-multiply filter grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="https://potenta.com.ec/wp-content/uploads/2024/09/potenta-cliente-nestle.png" alt="Nestle" className="h-10 w-auto mix-blend-multiply filter grayscale hover:grayscale-0 transition-all duration-300" />
            
            <img src="https://potenta.com.ec/wp-content/uploads/2024/09/potenta-cliente-moderna-alimentos.png" alt="Moderna Alimentos" className="h-14 w-auto mix-blend-multiply filter grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="https://potenta.com.ec/wp-content/uploads/2024/09/potenta-cliente-andec.png" alt="Andec" className="h-10 w-auto mix-blend-multiply filter grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="https://potenta.com.ec/wp-content/uploads/2024/09/potenta-cliente-fv.png" alt="FV" className="h-14 w-auto mix-blend-multiply filter grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="https://potenta.com.ec/wp-content/uploads/2024/09/potenta-cliente-fadesa.png" alt="Fadesa" className="h-6 w-auto mix-blend-multiply filter grayscale hover:grayscale-0 transition-all duration-300" />
            
            <img src="https://potenta.com.ec/wp-content/uploads/2024/09/potenta-cliente-elcafe.png" alt="El Café" className="h-10 w-auto mix-blend-multiply filter grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="https://potenta.com.ec/wp-content/uploads/2024/09/potenta-cliente-san-carlos.png" alt="San Carlos" className="h-10 w-auto mix-blend-multiply filter grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="https://potenta.com.ec/wp-content/uploads/2024/09/potenta-cliente-aje.png" alt="Aje" className="h-12 w-auto mix-blend-multiply filter grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="https://potenta.com.ec/wp-content/uploads/2024/09/potenta-cliente-papelesa.png" alt="Papelesa" className="h-10 w-auto mix-blend-multiply filter grayscale hover:grayscale-0 transition-all duration-300" />
          </div>
        </div>
      </section>

      {/* 6. Sección BLOG Flash */}
      <section className="bg-zinc-100/50 py-20 border-t border-zinc-200">
        <div className="container mx-auto px-6 lg:px-20 max-w-7xl">
          <div className="bg-white border-l-4 border-[#06253a] mb-8 shadow-sm flex items-center justify-between">
            <h2 className="text-xl font-bold text-[#06253a] px-4 py-3 uppercase tracking-wide">Últimas Noticias (Blog)</h2>
            <Link to="/blog" className="px-4 text-[#ff5100] text-sm font-semibold hover:underline flex items-center gap-1">Ver todo <ArrowRight size={16} /></Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-4">
            {/* Post Destacado (Izquierda) */}
            <Link to="/blog" className="relative h-[400px] group overflow-hidden block">
              <img 
                src="https://potenta.com.ec/wp-content/uploads/2024/09/medicion-1024x512.jpg" 
                alt="Medición de Nivel" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 blur-[1px] group-hover:blur-none"
                onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000"; e.currentTarget.className = "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" }} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-bold text-xl md:text-2xl hover:text-[#ff5100] transition-colors leading-tight drop-shadow-lg">
                  La Importancia de Medir el Nivel en Procesos Industriales
                </h3>
              </div>
            </Link>

            {/* Posts Secundarios (Derecha) */}
            <div className="grid grid-rows-3 gap-4">
              {/* Post 1 */}
              <Link to="/blog" className="bg-white flex h-[125px] hover:shadow-md transition-shadow group overflow-hidden cursor-pointer border-b-2 border-transparent hover:border-[#ff5100]">
                <div className="w-1/3 bg-[#06253a] relative overflow-hidden flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&q=80&w=400" alt="Equipos Lika" className="object-cover w-full h-full opacity-90 group-hover:scale-110 transition-transform duration-500 mix-blend-luminosity" />
                  <div className="absolute inset-0 bg-[#06253a]/30 pointer-events-none"></div>
                  <div className="absolute bottom-1 w-full text-center text-[8px] text-white/80 tracking-widest font-mono font-bold drop-shadow-md">potenta.com.ec</div>
                </div>
                <div className="w-2/3 p-4 flex flex-col justify-center">
                  <span className="text-xs text-zinc-400 mb-1">12 Septiembre, 2024</span>
                  <h4 className="font-bold text-[#06253a] group-hover:text-[#ff5100] transition-colors text-sm leading-snug line-clamp-2">
                    Explorando los Equipos Lika: Innovación y Precisión en Codificadores y Sensores Industriales
                  </h4>
                </div>
              </Link>
              
              {/* Post 2 */}
              <Link to="/blog" className="bg-white flex h-[125px] hover:shadow-md transition-shadow group overflow-hidden cursor-pointer border-b-2 border-transparent hover:border-[#ff5100]">
                <div className="w-1/3 bg-[#06253a] relative overflow-hidden flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=400" alt="Sensores" className="object-cover w-full h-full opacity-90 group-hover:scale-110 transition-transform duration-500 mix-blend-luminosity" />
                  <div className="absolute inset-0 bg-[#06253a]/30 pointer-events-none"></div>
                  <div className="absolute bottom-1 w-full text-center text-[8px] text-white/80 tracking-widest font-mono font-bold drop-shadow-md">potenta.com.ec</div>
                </div>
                <div className="w-2/3 p-4 flex flex-col justify-center">
                  <span className="text-xs text-zinc-400 mb-1">12 Septiembre, 2024</span>
                  <h4 className="font-bold text-[#06253a] group-hover:text-[#ff5100] transition-colors text-sm leading-snug line-clamp-2">
                    Sensores y Sistemas para Cintas Transportadoras en la Industria Minera
                  </h4>
                </div>
              </Link>

              {/* Post 3 */}
              <Link to="/blog" className="bg-white flex h-[125px] hover:shadow-md transition-shadow group overflow-hidden cursor-pointer border-b-2 border-transparent hover:border-[#ff5100]">
                <div className="w-1/3 bg-[#06253a] relative overflow-hidden flex items-center justify-center">
                  <img src="https://images.unsplash.com/photo-1565514020179-026b92b6d557?auto=format&fit=crop&q=80&w=400" alt="HMI Omron" className="object-cover w-full h-full opacity-90 group-hover:scale-110 transition-transform duration-500 mix-blend-luminosity" />
                  <div className="absolute inset-0 bg-[#06253a]/30 pointer-events-none"></div>
                  <div className="absolute bottom-1 w-full text-center text-[8px] text-white/80 tracking-widest font-mono font-bold drop-shadow-md">potenta.com.ec</div>
                </div>
                <div className="w-2/3 p-4 flex flex-col justify-center">
                  <span className="text-xs text-zinc-400 mb-1">12 Septiembre, 2024</span>
                  <h4 className="font-bold text-[#06253a] group-hover:text-[#ff5100] transition-colors text-sm leading-snug line-clamp-2">
                    Optimización de la Automatización Industrial: La Nueva Interfaz de Usuario de las Pantallas HMI de Omron
                  </h4>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Contacto y Mapas */}
      <section className="bg-white py-20 border-t border-zinc-200">
        <div className="container mx-auto px-6 lg:px-20 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#06253a]">Nuestras Oficinas</h2>
            <div className="h-1 w-20 bg-[#ff5100] mx-auto mt-4"></div>
            <p className="mt-4 text-zinc-500 max-w-2xl mx-auto">Visítanos en nuestras instalaciones principales para atención personalizada y venta directa de componentes industriales.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Quito */}
            <div className="space-y-6 bg-zinc-50 p-6 sm:p-8 rounded-lg border border-zinc-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-[#06253a] p-3 rounded-full text-white mt-1 shadow-md">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#06253a] mb-2 uppercase tracking-wide">Quito</h3>
                  <p className="text-zinc-600 font-medium">Av. Eloy Alfaro N45-75 y de las Higueras.</p>
                </div>
              </div>
              <div className="w-full h-[300px] bg-zinc-200 rounded-lg overflow-hidden border border-zinc-200 relative shadow-sm">
                 <iframe 
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7997972886295!2d-78.4735391!3d-0.1659972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMDknNTcuNiJTIDc4wrAyOCcyNC43Ilc!5e0!3m2!1ses!2sec!4v1610000000000!5m2!1ses!2sec" 
                   className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700" 
                   allowFullScreen={false} 
                   loading="lazy" 
                   referrerPolicy="no-referrer-when-downgrade"
                   title="Mapa Quito"
                 ></iframe>
              </div>
            </div>

            {/* Guayaquil */}
            <div className="space-y-6 bg-zinc-50 p-6 sm:p-8 rounded-lg border border-zinc-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-[#06253a] p-3 rounded-full text-white mt-1 shadow-md">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#06253a] mb-2 uppercase tracking-wide">Guayaquil</h3>
                  <p className="text-zinc-600 font-medium">Urdenor 2, Av. Juan Tanca Marengo, Solar 245 Manzana 23, Local 2.</p>
                </div>
              </div>
              <div className="w-full h-[300px] bg-zinc-200 rounded-lg overflow-hidden border border-zinc-200 relative shadow-sm">
                 <iframe 
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.84042459039!2d-79.9103!3d-2.1334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d6d0000000001%3A0x6b2b71ab2a76f2f2!2sUrdenor%202!5e0!3m2!1ses!2sec!4v1716912345679!5m2!1ses!2sec" 
                   className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700" 
                   allowFullScreen={false} 
                   loading="lazy" 
                   referrerPolicy="no-referrer-when-downgrade"
                   title="Mapa Guayaquil"
                 ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
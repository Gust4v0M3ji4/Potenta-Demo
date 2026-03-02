import { Link } from '@tanstack/react-router'
import { Card, CardContent } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Zap, Factory, Cog, Activity, ArrowRight, ArrowRightCircle } from 'lucide-react'

export default function ServiciosPage() {
  const servicios = [
    {
      id: "instrumentacion",
      icon: <Activity size={32} />,
      title: "Instrumentación Industrial",
      description: "Suministro y asesoría en equipos para medición, monitoreo y control de variables físicas (presión, temperatura, nivel, flujo). Calibración y certificación de dispositivos de campo para asegurar precisión en la cadena productiva.",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80"
    },
    {
      id: "automatizacion",
      icon: <Cog size={32} />,
      title: "Automatización y Control",
      description: "Provisionamiento de PLCs, pantallas HMI, variadores de frecuencia y servosistemas. Diseñamos arquitecturas de control para modernizar maquinaria antigua y optimizar nuevos procesos industriales bajo estándares globales.",
      image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80"
    },
    {
      id: "potencia",
      icon: <Zap size={32} />,
      title: "Integración Eléctrica",
      description: "Tableros de control y distribución de fuerza. Proveemos de toda la aparamenta eléctrica necesaria (contactores, relés, guardamotores, fuentes de poder) para el funcionamiento seguro de la infraestructura industrial.",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80"
    },
    {
      id: "proyectos",
      icon: <Factory size={32} />,
      title: "Asesoría de Proyectos Especiales",
      description: "Acompañamiento desde la concepción hasta el comisionamiento ('Llave en mano'). Nuestro equipo de ingenieros analiza el cuello de botella de su planta y recomienda las marcas y equipos correctos para superarlo.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80"
    }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50">
      {/* Header Breve */}
      <section className="bg-[#06253a] py-16 px-6 lg:px-20 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Soluciones y Servicios</h1>
        <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
          Catálogo detallado de nuestra oferta de valor técnico orientada a la eficiencia y seguridad del ecosistema industrial ecuatoriano.
        </p>
      </section>

      {/* Catálogo de Servicios Expandido */}
      <section className="py-20 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto space-y-16">
          {servicios.map((servicio, index) => (
            <div 
              key={servicio.id} 
              className={`flex flex-col lg:flex-row gap-0 bg-white border border-zinc-200 shadow-lg hover:shadow-xl transition-shadow ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Imagen */}
              <div className="lg:w-1/2 relative min-h-[300px] overflow-hidden">
                <img 
                  src={servicio.image} 
                  alt={servicio.title} 
                  className="absolute inset-0 w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                />
              </div>
              
              {/* Contenido */}
              <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center bg-white relative">
                {/* Patrón de fondo sutil */}
                <div className="absolute opacity-5 inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#06253a 2px, transparent 2px)', backgroundSize: '24px 24px'}}></div>
                
                <div className="relative z-10 space-y-6">
                  <div className="w-14 h-14 bg-[#06253a] text-white flex items-center justify-center shadow-md">
                    {servicio.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-[#06253a]">{servicio.title}</h2>
                  <div className="h-1 w-16 bg-[#ff5100]"></div>
                  <p className="text-zinc-600 text-lg leading-relaxed">
                    {servicio.description}
                  </p>
                  
                  <div className="pt-4">
                    <Link to="/contacto" className="inline-flex items-center gap-2 text-[#ff5100] font-bold tracking-widest text-sm hover:gap-4 transition-all uppercase">
                      Solicitar Evaluación Técnica <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Banner Aliados */}
      <section className="bg-white py-16 border-t border-zinc-200 text-center px-6">
         <div className="max-w-4xl mx-auto space-y-6">
            <h3 className="text-2xl font-bold text-[#06253a]">Respaldados por Gigantes de la Industria</h3>
            <p className="text-zinc-500">
              Nuestros servicios incluyen la provisión e instalación de componentes de marcas como Siemens, ABB, Pepperl+Fuchs, Omron, UWT entre otros, garantizando soporte directo de fábrica.
            </p>
            <div className="pt-4 flex justify-center">
              <Link to="/tienda/catalogo">
                 <Button className="bg-[#06253a] hover:bg-[#ff5100] text-white rounded-none h-12 px-8 font-bold tracking-widest gap-2 transition-colors">
                   VER EQUIPOS DISPONIBLES <ArrowRightCircle size={18} />
                 </Button>
              </Link>
            </div>
         </div>
      </section>
    </div>
  )
}
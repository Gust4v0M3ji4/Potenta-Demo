import { Link } from '@tanstack/react-router'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { Target, Lightbulb, ShieldCheck, Wrench, Users } from 'lucide-react'

export default function NosotrosPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center bg-[#06253a]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[#06253a]/80 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" 
            alt="Ingeniería Industrial" 
            className="w-full h-full object-cover filter grayscale opacity-40 mix-blend-overlay"
          />
        </div>
        
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto space-y-4">
          <span className="text-[#ff5100] font-bold tracking-widest uppercase text-sm">Nuestra Historia & Misión</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Impulsando el motor de la industria ecuatoriana
          </h1>
        </div>
      </section>

      {/* Main Content - Historia */}
      <section className="py-20 px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#06253a]">Trayectoria y Experiencia</h2>
            <div className="h-1 w-20 bg-[#ff5100]"></div>
            <p className="text-zinc-600 text-lg leading-relaxed">
              En <strong className="text-[#06253a]">POTENTA AUTOMATIZACIÓN & INSTRUMENTACIÓN INDUSTRIAL</strong>, nos dedicamos a proveer soluciones tecnológicas de vanguardia para la industria nacional. Con años de experiencia en el mercado, hemos conformado alianzas estratégicas con fábricas líderes a nivel global, permitiéndonos ofrecer equipos de la más alta precisión y confiabilidad.
            </p>
            <p className="text-zinc-600 text-lg leading-relaxed">
              Nuestra misión no se limita a la importación y comercialización; somos un aliado estratégico para nuestros clientes. Brindamos asesoría técnica especializada, asegurando que cada componente, sensor o sistema de control se adapte perfectamente a las necesidades específicas de su línea de producción.
            </p>
            <div className="pt-4 flex gap-4">
              <div className="flex items-center gap-2 text-[#06253a] font-bold">
                <Target className="text-[#ff5100]" /> +10 Años de Experiencia
              </div>
              <div className="flex items-center gap-2 text-[#06253a] font-bold">
                <Users className="text-[#ff5100]" /> Cobertura Nacional
              </div>
            </div>
          </div>
          <div className="relative h-[500px]">
            <img 
              src="https://images.unsplash.com/photo-1565439390114-6fbcf5fcc20f?auto=format&fit=crop&q=80" 
              alt="Planta Industrial" 
              className="w-full h-full object-cover shadow-2xl absolute z-10"
            />
            <div className="absolute inset-0 bg-[#ff5100] translate-x-4 translate-y-4 z-0"></div>
          </div>
        </div>
      </section>

      {/* Valores Corporativos */}
      <section className="py-20 px-6 lg:px-20 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#06253a]">Nuestros Pilares</h2>
            <div className="h-1 w-20 bg-[#ff5100] mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="rounded-none border-zinc-200 bg-white hover:border-[#ff5100] transition-colors group">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-zinc-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-[#ff5100] transition-colors">
                  <Lightbulb size={32} className="text-[#06253a] group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#06253a]">Innovación Continua</h3>
                <p className="text-zinc-600">
                  Proveemos equipos de última generación que garantizan la modernización y eficiencia de los procesos de manufactura.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-none border-zinc-200 bg-white hover:border-[#ff5100] transition-colors group">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-zinc-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-[#ff5100] transition-colors">
                  <ShieldCheck size={32} className="text-[#06253a] group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#06253a]">Calidad Garantizada</h3>
                <p className="text-zinc-600">
                  Somos representantes autorizados de marcas de renombre mundial, asegurando durabilidad y precisión industrial.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-none border-zinc-200 bg-white hover:border-[#ff5100] transition-colors group">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-zinc-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-[#ff5100] transition-colors">
                  <Wrench size={32} className="text-[#06253a] group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#06253a]">Soporte Técnico</h3>
                <p className="text-zinc-600">
                  Acompañamos la venta con asesoría especializada y servicio post-venta para garantizar el éxito de su proyecto.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-[#06253a] text-center px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">¿Listo para optimizar su línea de producción?</h2>
          <p className="text-zinc-300 text-lg">
            Descubra nuestro amplio catálogo de soluciones o contacte a uno de nuestros asesores técnicos para una evaluación personalizada.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link to="/tienda/catalogo">
              <Button size="lg" className="bg-[#ff5100] hover:bg-[#e04800] text-white font-bold tracking-widest px-8 rounded-none">
                VER CATÁLOGO ONLINE
              </Button>
            </Link>
            <Link to="/contacto">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#06253a] font-bold tracking-widest px-8 bg-transparent rounded-none">
                CONTACTAR ASESOR
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
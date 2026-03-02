import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import { Button } from '../components/ui/button'
import { Send, MapPin, Mail, Phone } from 'lucide-react'



export default function ContactoComponent() {
  return (
    <div className="bg-[#e9ecef] min-h-screen pt-12 pb-0 flex flex-col">
      
      {/* Container Principal */}
      <div className="container mx-auto px-6 max-w-5xl flex-grow mb-16">
        
        {/* Sección Formulario */}
        <div className="bg-white p-8 md:p-12 shadow-sm mb-12 relative overflow-hidden">
          <h2 className="text-2xl font-bold text-[#06253a] mb-8 uppercase tracking-wide border-l-4 border-[#ff5100] pl-4">
            CONTÁCTATE CON NOSOTROS
          </h2>
          
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-700">Nombre<span className="text-[#ff5100]">*</span></label>
                <Input placeholder="Ingresa un nombre" className="rounded-none border-zinc-300 bg-zinc-50" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-700">Apellido<span className="text-[#ff5100]">*</span></label>
                <Input placeholder="Ingresa un apellido" className="rounded-none border-zinc-300 bg-zinc-50" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-700">E-mail<span className="text-[#ff5100]">*</span></label>
                <Input type="email" placeholder="Ingresa tu e-mail" className="rounded-none border-zinc-300 bg-zinc-50" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-700">Celular<span className="text-[#ff5100]">*</span></label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 border border-r-0 border-zinc-300 bg-zinc-100 text-zinc-500 text-sm">
                    🇪🇨 +593
                  </span>
                  <Input type="tel" placeholder="Ingresa un celular" className="rounded-none border-zinc-300 bg-zinc-50 flex-1" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-700">Mensaje<span className="text-[#ff5100]">*</span></label>
              <Textarea placeholder="Escribe tu mensaje..." className="min-h-[120px] rounded-none border-zinc-300 bg-zinc-50 resize-y" />
            </div>

            <p className="text-[10px] text-zinc-500 mt-2">
              Al presionar enviar, estás aceptando nuestros <a href="#" className="underline hover:text-[#ff5100]">Términos de Uso</a> — <a href="#" className="underline hover:text-[#ff5100]">Políticas de Privacidad</a> — <a href="#" className="underline hover:text-[#ff5100]">Protección de Datos Personales</a> de Tienda Potenta.
            </p>

            <Button className="bg-[#06253a] hover:bg-[#041a29] text-white rounded-none px-8 font-bold text-sm tracking-wide h-10 mt-2">
              <Send className="w-4 h-4 mr-2" />
              ENVIAR AHORA
            </Button>
          </form>
        </div>

        {/* Sección Sucursales y Mapas */}
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Matriz Guayaquil */}
          <div>
            <h3 className="text-xl font-bold text-[#ff5100] mb-4 border-b border-zinc-300 pb-2">Matriz</h3>
            <div className="bg-zinc-200 aspect-[16/9] mb-4 relative flex items-center justify-center border border-zinc-300 overflow-hidden group shadow-sm">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.84042459039!2d-79.9103!3d-2.1334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d6d0000000001%3A0x6b2b71ab2a76f2f2!2sUrdenor%202!5e0!3m2!1ses!2sec!4v1716912345679!5m2!1ses!2sec" 
                className="w-full h-full border-0 grayscale group-hover:grayscale-0 transition-all duration-700 relative z-10" 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa Guayaquil"
              ></iframe>
            </div>
            <ul className="space-y-3 text-sm text-zinc-700">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#06253a] shrink-0 mt-0.5" />
                <span><strong>Ecuador, Guayaquil, Guayaquil</strong><br/>Urbanor 2, Av. Juan Tanca Marengo Solar 349. Kilometro: 2.5<br/>Manzana: 22 Referencia: Local 2 a lado de Electrocables</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#06253a] shrink-0" />
                <a href="mailto:tiendaonline@potenta.com.ec" className="hover:text-[#ff5100] transition-colors">tiendaonline@potenta.com.ec</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#06253a] shrink-0" />
                <span>+593 9 9999 9999</span>
              </li>
            </ul>
          </div>

          {/* Sucursal Quito */}
          <div>
            <h3 className="text-xl font-bold text-[#ff5100] mb-4 border-b border-zinc-300 pb-2">Sucursal Quito</h3>
            <div className="bg-zinc-200 aspect-[16/9] mb-4 relative flex items-center justify-center border border-zinc-300 overflow-hidden group shadow-sm">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7997972886295!2d-78.4735391!3d-0.1659972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMDknNTcuNiJTIDc4wrAyOCcyNC43Ilc!5e0!3m2!1ses!2sec!4v1610000000000!5m2!1ses!2sec" 
                className="w-full h-full border-0 grayscale group-hover:grayscale-0 transition-all duration-700 relative z-10" 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa Quito"
              ></iframe>
            </div>
            <ul className="space-y-3 text-sm text-zinc-700">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#06253a] shrink-0 mt-0.5" />
                <span><strong>Ecuador, Pichincha, Quito</strong><br/>Av. Eloy Alfaro N40-79 y de las Higueras.</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#06253a] shrink-0" />
                <a href="mailto:tiendaonline@potenta.com.ec" className="hover:text-[#ff5100] transition-colors">tiendaonline@potenta.com.ec</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#06253a] shrink-0" />
                <span>+593 9 8888 8888</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Banner Naranja Inferior */}
      <div className="bg-[#ff5100] text-white py-12 px-6 mt-auto">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between max-w-5xl gap-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest mb-2 opacity-90">Conoce más de nosotros</p>
            <h2 className="text-3xl lg:text-4xl font-black uppercase">
              Visita nuestro sitio<br/>potenta.com.ec
            </h2>
            {/* Redes Sociales Placeholder */}
            <div className="flex gap-3 mt-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-10 h-10 bg-[#06253a] rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:text-[#06253a] transition-all">
                  <span className="sr-only">Social {i}</span>
                  {/* Icon Placeholder */}
                  <div className="w-4 h-4 bg-current opacity-80" />
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative isolate hidden md:flex items-center justify-center">
              <div className="absolute inset-0 bg-[#06253a]/20 translate-x-3 translate-y-3 rounded-tr-3xl rounded-bl-3xl -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400" 
                alt="Ingeniero en planta" 
                className="h-64 md:h-72 w-64 md:w-72 object-cover object-center drop-shadow-xl rounded-tr-3xl rounded-bl-3xl border border-white/20" 
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
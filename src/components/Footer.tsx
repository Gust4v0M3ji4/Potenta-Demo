import { Link } from '@tanstack/react-router'
import { Instagram, MessageCircle, Facebook, Linkedin, Music, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#041a29] text-white pt-16 pb-8 border-t-[8px] border-[#ff5100]">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Col 1: Logo & Social */}
          <div className="space-y-6">
            <img 
              src="https://36580daefdd0e4c6740b-4fe617358557d0f7b1aac6516479e176.ssl.cf1.rackcdn.com/logos/bw.189.1716926953.png" 
              alt="Potenta Industrial" 
              className="h-12 object-contain filter brightness-0 invert" 
            />
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#" className="hover:text-[#ff5100] transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="hover:text-[#ff5100] transition-colors"><MessageCircle className="h-5 w-5" /></a>
              <a href="#" className="hover:text-[#ff5100] transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-[#ff5100] transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="hover:text-[#ff5100] transition-colors"><Music className="h-5 w-5" /></a>
              <a href="#" className="hover:text-[#ff5100] transition-colors"><Youtube className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Col 2: Contacto */}
          <div>
            <h4 className="text-[#ff5100] font-bold text-sm tracking-widest uppercase mb-6 border-b border-white/10 pb-2">Contacto</h4>
            <div className="space-y-4 text-xs lg:text-sm text-zinc-300">
              <p>
                <strong className="text-white block mb-1">Dirección:</strong>
                Urdenor 2, Av. Juan Tanca Marengo Solar 245<br/>
                Kilómetro 2.5 Manzana:23 Referencia:<br/>
                Local 2 a lado de Electrokab<br/>
                Guayaquil — Ecuador
              </p>
              <p>
                <a href="mailto:contacto@potenta.com.ec" className="hover:text-[#ff5100] transition-colors">
                  <strong className="text-white">✉</strong>  Contacto
                </a>
              </p>
              <p>
                <a href="tel:+593969167616" className="hover:text-[#ff5100] transition-colors">
                  <strong className="text-white">✆</strong> +593969167616
                </a>
              </p>
            </div>
          </div>

          {/* Col 3: Secciones */}
          <div>
            <h4 className="text-[#ff5100] font-bold text-sm tracking-widest uppercase mb-6 border-b border-white/10 pb-2">Secciones</h4>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/" className="bg-[#e9ecef] text-[#06253a] px-3 py-2 text-xs font-semibold hover:bg-[#ff5100] hover:text-white transition-colors">▸ Inicio</Link>
              <Link to="/blog" className="bg-[#e9ecef] text-[#06253a] px-3 py-2 text-xs font-semibold hover:bg-[#ff5100] hover:text-white transition-colors">▸ Blog</Link>
              <Link to="/tienda/catalogo" className="bg-[#e9ecef] text-[#06253a] px-3 py-2 text-xs font-semibold hover:bg-[#ff5100] hover:text-white transition-colors">▸ Catálogo</Link>
              <Link to="/nosotros" className="bg-[#e9ecef] text-[#06253a] px-3 py-2 text-xs font-semibold hover:bg-[#ff5100] hover:text-white transition-colors">▸ Nosotros</Link>
              <Link to="/promociones" className="bg-[#e9ecef] text-[#06253a] px-3 py-2 text-xs font-semibold hover:bg-[#ff5100] hover:text-white transition-colors">▸ Promociones</Link>
              <Link to="/contacto" className="bg-[#e9ecef] text-[#06253a] px-3 py-2 text-xs font-semibold hover:bg-[#ff5100] hover:text-white transition-colors">▸ Contacto</Link>
            </div>
          </div>

          {/* Col 4: Métodos de pago */}
          <div>
            <h4 className="text-[#ff5100] font-bold text-sm tracking-widest uppercase mb-6 border-b border-white/10 pb-2">Métodos de Pago Seguro</h4>
            <div className="text-xs lg:text-sm text-zinc-300">
              <p>Pago por Whatsapp, Transferencia, Pago en local.</p>
            </div>
          </div>

        </div>

        <div className="mt-16 pt-6 border-t border-white/10 text-center text-xs text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Potenta Industrial. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

import { Link } from '@tanstack/react-router'
import { Search, ShoppingCart, Menu } from 'lucide-react'
import { Input } from './ui/input'
import { Button } from './ui/button'

export default function Header() {
  return (
    <header className="w-full flex flex-col z-50">
      {/* Top Action Bar */}
      <div className="bg-[#e9ecef] py-4 px-4 lg:px-8 flex items-center justify-between border-b border-zinc-200">
        <div className="container mx-auto flex items-center justify-between gap-4 lg:gap-8">
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img 
              src="https://potenta.com.ec/wp-content/uploads/2024/09/Group-87.png" 
              alt="Potenta Industrial" 
              className="h-10 object-contain" 
            />
          </Link>

          {/* Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-2xl relative">
            <Input 
              type="text" 
              placeholder="Escribe para buscar..." 
              className="w-full h-10 pl-4 pr-12 rounded-none border-0 text-sm focus-visible:ring-0 shadow-sm"
            />
            <Button className="absolute right-0 top-0 h-10 w-12 rounded-none bg-[#06253a] hover:bg-[#041a29] p-0 flex items-center justify-center">
              <Search className="h-4 w-4 text-white" />
            </Button>
          </div>

          {/* Right Utilities */}
          <div className="flex items-center gap-2 lg:gap-6 ml-auto">
            {/* WhatsApp */}
            <a href="#" className="hidden md:flex items-center gap-2 text-sm text-zinc-600 hover:text-[#ff5100] transition-colors bg-white px-4 py-2 border border-zinc-200 shadow-sm">
              <span className="font-semibold text-zinc-700">WhatsApp</span>
            </a>

            {/* Cart */}
            <Link to="/tienda/catalogo" className="flex items-center gap-2 text-zinc-600 hover:text-[#ff5100] transition-colors h-10 px-2 group">
              <ShoppingCart className="h-5 w-5" />
              <span className="bg-[#ff5100]/20 text-[#ff5100] text-xs font-bold px-1.5 py-0.5 min-w-[20px] text-center border border-[#ff5100]/30 shadow-sm group-hover:bg-[#ff5100] group-hover:text-white transition-colors">
                0
              </span>
            </Link>

            {/* Mobile Menu Toggle */}
            <Button variant="ghost" className="lg:hidden h-10 w-10 p-0 text-[#06253a]">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-[#06253a] hidden lg:block border-b border-[#041a29]">
        <div className="container mx-auto px-8">
          <nav className="flex items-center justify-between text-white font-bold text-xs xl:text-sm tracking-wider uppercase h-12">
            <Link to="/" className="hover:text-[#ff5100] transition-colors py-3 w-full text-center hover:bg-white/5" activeProps={{ className: 'text-[#ff5100] bg-white/5' }}>
              INICIO
            </Link>
            <div className="w-[1px] h-6 bg-white/10" />
            <Link to="/tienda/catalogo" className="hover:text-[#ff5100] transition-colors py-3 w-full text-center hover:bg-white/5" activeProps={{ className: 'text-[#ff5100] bg-white/5' }}>
              CATÁLOGO
            </Link>
            <div className="w-[1px] h-6 bg-white/10" />
            <Link to="/promociones" className="hover:text-[#ff5100] transition-colors py-3 w-full text-center hover:bg-white/5" activeProps={{ className: 'text-[#ff5100] bg-white/5' }}>
              PROMOCIONES
            </Link>
            <div className="w-[1px] h-6 bg-white/10" />
            <Link to="/nosotros" className="hover:text-[#ff5100] transition-colors py-3 w-full text-center hover:bg-white/5" activeProps={{ className: 'text-[#ff5100] bg-white/5' }}>
              NOSOTROS
            </Link>
            <div className="w-[1px] h-6 bg-white/10" />
            <Link to="/blog" className="hover:text-[#ff5100] transition-colors py-3 w-full text-center hover:bg-white/5" activeProps={{ className: 'text-[#ff5100] bg-white/5' }}>
              BLOG
            </Link>
            <div className="w-[1px] h-6 bg-white/10" />
            <Link to="/contacto" className="hover:text-[#ff5100] transition-colors py-3 w-full text-center hover:bg-white/5" activeProps={{ className: 'text-[#ff5100] bg-white/5' }}>
              CONTACTO
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

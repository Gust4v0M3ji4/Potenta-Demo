import { useState, useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { Card, CardContent } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Percent, ArrowRight, Loader2, Info } from 'lucide-react'
import { supabase } from '../lib/supabase'
import type { Producto } from '../types/database'

export default function PromocionesPage() {
  const [productos, setProductos] = useState<Producto[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPromociones() {
      try {
        const { data, error } = await supabase
          .from('productos')
          .select('*')
          .gt('descuento_porcentaje', 0) // <--- Filtramos por descuentos mayores a cero
          .eq('disponibilidad', true)
          .order('descuento_porcentaje', { ascending: false })

        if (error) {
          console.error("Error fetching promociones:", error)
          return
        }

        if (data) {
          setProductos(data)
        }
      } catch (err) {
        console.error("Fetch error:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchPromociones()
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50">
      
      {/* Banner Promociones */}
      <section className="bg-[#ff5100] py-12 px-6 lg:px-20 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <div className="flex justify-center mb-2">
            <Percent size={48} className="text-white opacity-80" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">Oportunidades Industriales</h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto font-medium">
            Beneficios exclusivos en lotes de instrumentación, sensores y equipo de automatización para clientes corporativos registrados.
          </p>
        </div>
        
        {/* Abstract pattern */}
        <div className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/2">
          <svg width="400" height="400" fill="none" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="rgba(255,255,255,0.1)" d="M42.7,-74.6C55.9,-65.4,67.7,-54.2,77.1,-41C86.6,-27.7,93.8,-12.3,95.1,3.4C96.5,19.1,91.9,34.9,81.9,47.2C71.8,59.5,56.3,68.2,40.6,76.5C24.9,84.7,9.1,92.5,-6.1,96.6C-21.3,100.8,-35.8,101.3,-49.6,95.5C-63.4,89.7,-76.4,77.5,-84.8,62.8C-93.1,48,-96.8,30.8,-95.1,14.6C-93.4,-1.6,-86.3,-16.9,-77.8,-31.1C-69.2,-45.3,-59.1,-58.5,-46.5,-67.9C-33.9,-77.3,-16.9,-83,-0.1,-82.9C16.8,-82.7,33.5,-76.6,42.7,-74.6Z" transform="translate(100 100) scale(1)"/>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 lg:px-20 max-w-7xl mx-auto w-full">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-32 space-y-4">
             <Loader2 className="w-12 h-12 animate-spin text-[#ff5100]" />
             <p className="text-zinc-500 font-medium tracking-widest text-sm uppercase">Buscando Ofertas...</p>
          </div>
        ) : productos.length === 0 ? (
          <div className="bg-white border border-dashed border-zinc-300 rounded-none p-16 text-center shadow-sm">
             <Info className="w-16 h-16 text-zinc-300 mx-auto mb-4" />
             <h3 className="text-2xl font-bold text-[#06253a] mb-2">Sin promociones activas</h3>
             <p className="text-zinc-500 max-w-md mx-auto mb-8">
               Actualmente no contamos con equipos en descuento o periodo de liquidación pre-establecido. 
               Visita nuestro catálogo completo para acceder al inventario regular.
             </p>
             <Link to="/tienda/catalogo">
               <Button className="bg-[#06253a] hover:bg-[#ff5100] text-white rounded-none px-8 font-bold tracking-widest transition-colors h-12">
                 EXPLORAR CATÁLOGO
               </Button>
             </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productos.map((producto) => (
              <Card key={producto.id} className="rounded-none border-zinc-200 hover:border-[#ff5100] transition-colors bg-white group flex flex-col hover:shadow-xl">
                {/* Etiqueta de Porcentaje de Descuento */}
                <div className="absolute top-0 right-0 bg-[#ff5100] text-white font-bold text-sm px-3 py-1 z-20">
                  -{producto.descuento_porcentaje}% OFF
                </div>

                <div className="aspect-square bg-white relative p-4 flex items-center justify-center border-b border-zinc-100 min-h-[220px]">
                  <img
                    src={producto.imagen_url || "https://fakeimg.pl/400x400/fcfcfc/06253a?text=POTENTA&font=lobster"}
                    alt={producto.nombre}
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <CardContent className="p-5 flex flex-col flex-1 pb-6">
                  <div className="space-y-1 mb-4 flex-1">
                    <span className="text-xs font-semibold tracking-widest text-[#ff5100] uppercase block">
                      {producto.subcategoria || producto.categoria}
                    </span>
                    <h3 className="font-bold text-[#06253a] leading-tight line-clamp-2" title={producto.nombre}>
                      {producto.nombre}
                    </h3>
                    <p className="text-xs text-zinc-400 font-mono mt-2">SKU: {producto.sku}</p>
                  </div>
                  
                  <div className="border-t border-zinc-100 pt-4 flex items-end justify-between">
                    <div>
                      <p className="text-xs text-zinc-400 line-through">
                        Normal: ${Number(producto.precio).toFixed(2)}
                      </p>
                      <p className="font-black text-2xl text-[#06253a]">
                        ${Number(producto.precio_final || producto.precio).toFixed(2)}
                      </p>
                    </div>
                    <Link to="/login" className="flex items-center text-[#ff5100] hover:bg-[#ff5100] hover:text-white p-2 rounded-full transition-colors" title="Ver equipo">
                      <ArrowRight size={20} />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>

      {/* CTA Inferior */}
      <section className="bg-zinc-100 py-12 px-6 text-center border-t border-zinc-200 mt-auto">
        <p className="text-zinc-600 mb-4 max-w-xl mx-auto">
          ¿No encontraste lo que buscabas o buscas compras al mayor para un proyecto especial?
        </p>
        <Link to="/contacto" className="text-[#06253a] font-bold hover:text-[#ff5100] border-b-2 border-[#ff5100] pb-1 uppercase tracking-widest text-sm transition-colors cursor-pointer">
          Solicitar Cotización por Volumen
        </Link>
      </section>
    </div>
  )
}
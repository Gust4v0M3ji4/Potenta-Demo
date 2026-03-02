import { useState, useEffect } from 'react'
import { Card, CardContent } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { ShoppingCart, Loader2, Search } from 'lucide-react'
import { supabase } from '../lib/supabase'
import type { Producto } from '../types/database'

export default function CatalogoComponent() {
  const [allProductos, setAllProductos] = useState<Producto[]>([])
  const [filteredProductos, setFilteredProductos] = useState<Producto[]>([])
  const [loading, setLoading] = useState(true)
  
  // States para filtros dinámicos
  const [categorias, setCategorias] = useState<{nombre: string, count: number}[]>([])
  const [selectedCategoria, setSelectedCategoria] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    async function fetchProductos() {
      try {
        const { data, error } = await supabase
          .from('productos')
          .select('*')
          .eq('disponibilidad', true) // SOLO MOSTRAR PÚBLICOS
          .order('created_at', { ascending: false })
        
        if (error) throw error
        
        if (data) {
          setAllProductos(data)
          setFilteredProductos(data)

          // Extraer categorías únicas con contadores
          const catMap = new Map<string, number>()
          data.forEach(p => {
            const cat = p.categoria || 'Sin Segmento'
            catMap.set(cat, (catMap.get(cat) || 0) + 1)
          })
          const catArray = Array.from(catMap.entries()).map(([nombre, count]) => ({ nombre, count }))
          catArray.sort((a, b) => a.nombre.localeCompare(b.nombre)) // Orden alfabético
          setCategorias(catArray)
        }
      } catch (error) {
        console.error('Error al cargar productos:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProductos()
  }, [])

  // Efecto para Filtrar Productos cuando cambia la búsqueda o la categoría
  useEffect(() => {
    let result = allProductos

    if (selectedCategoria) {
      result = result.filter(p => p.categoria === selectedCategoria)
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      result = result.filter(p => 
        p.nombre.toLowerCase().includes(q) || 
        (p.sku && p.sku.toLowerCase().includes(q)) ||
        (p.subcategoria && p.subcategoria.toLowerCase().includes(q))
      )
    }

    setFilteredProductos(result)
  }, [selectedCategoria, searchQuery, allProductos])

  return (
    <div className="bg-[#e9ecef] min-h-screen py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-6">
        
        {/* SIDEBAR CATEGORÍAS */}
        <aside className="w-full md:w-72 flex-shrink-0">
          <details className="bg-white border border-zinc-200 group md:open" open>
            <summary className="font-bold text-sm px-6 py-4 bg-zinc-50 border-b border-zinc-200 text-zinc-800 uppercase tracking-widest flex justify-between items-center cursor-pointer select-none">
              <span>Filtros / Segmentos</span>
              <div className="flex items-center gap-4">
                {selectedCategoria && (
                  <button onClick={(e) => { e.preventDefault(); setSelectedCategoria(null); }} className="text-xs text-[#ff5100] hover:underline normal-case font-semibold tracking-normal">Limpiar</button>
                )}
                <span className="text-zinc-400 group-open:rotate-180 transition-transform md:hidden">▼</span>
              </div>
            </summary>
            <ul className="text-sm">
              {categorias.length === 0 && !loading && (
                 <li className="px-6 py-4 text-zinc-400">Sin segmentos disponibles</li>
              )}
              {categorias.map((cat, idx) => (
                <li key={idx}>
                  <button 
                    onClick={() => setSelectedCategoria(selectedCategoria === cat.nombre ? null : cat.nombre)}
                    className={`w-full text-left px-4 py-3 border-b border-zinc-100 flex items-center justify-between group/btn transition-colors ${selectedCategoria === cat.nombre ? 'bg-zinc-50 border-l-4 border-l-[#ff5100]' : 'hover:bg-zinc-50 border-l-4 border-transparent'}`}
                  >
                    <span className={`flex items-center transition-colors ${selectedCategoria === cat.nombre ? 'text-[#06253a] font-bold' : 'text-zinc-500 group-hover/btn:text-[#06253a]'}`}>
                      <span className="text-zinc-300 mr-2 text-xs opacity-50">&gt;</span>
                      <span className="truncate max-w-[170px]" title={cat.nombre}>{cat.nombre}</span>
                    </span>
                    <span className={`${selectedCategoria === cat.nombre ? 'bg-[#ff5100] shadow-[#ff5100]/20' : 'bg-[#06253a]'} text-white text-[10px] font-bold px-2 py-0.5 rounded-sm shadow-sm transition-colors`}>
                      {cat.count}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </details>
        </aside>

        {/* CATÁLOGO PRODUCTOS */}
        <div className="flex-1">
          {/* Header filtros */}
          <div className="bg-white border border-zinc-200 p-3 mb-6 flex flex-col sm:flex-row gap-4 justify-between items-center text-sm shadow-sm">
            <div className="flex items-center w-full sm:w-auto">
              <span className="text-zinc-500 hidden xl:inline-block mr-4 font-mono font-medium">{filteredProductos.length} equipos</span>
              <div className="relative w-full sm:w-72 lg:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                <input 
                  type="text" 
                  placeholder="Buscar equipo, modelo o marca..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 border border-zinc-200 bg-zinc-50 focus:outline-none focus:border-[#ff5100] focus:ring-1 focus:ring-[#ff5100] transition-all text-sm rounded-none placeholder:text-zinc-400"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <span className="text-zinc-500 hidden sm:inline">Ordenar productos:</span>
                <select className="border border-zinc-200 bg-white px-2 py-1 text-zinc-700 focus:outline-none">
                  <option>Predeterminado</option>
                  <option>Precio: Menor a Mayor</option>
                  <option>Precio: Mayor a Menor</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-zinc-500 hidden sm:inline">Mostrar:</span>
                <select className="border border-zinc-200 bg-white px-2 py-1 text-zinc-700 focus:outline-none">
                  <option>24</option>
                  <option>48</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {loading ? (
              <div className="col-span-full flex flex-col items-center justify-center p-12 opacity-50">
                <Loader2 className="h-8 w-8 animate-spin text-[#06253a] mb-4" />
                <p className="text-zinc-500 font-semibold tracking-wider uppercase text-sm">Cargando catálogo...</p>
              </div>
            ) : filteredProductos.length === 0 ? (
              <div className="col-span-full text-center p-12 text-zinc-500 bg-white border border-zinc-200 border-dashed">
                No hay productos que coincidan con tus filtros de búsqueda.
              </div>
            ) : (
              filteredProductos.map((prod) => (
                <Card key={prod.id} className="rounded-none border-zinc-200 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                  
                  {/* Imagen */}
                  <div className="aspect-square bg-white border-b border-zinc-100 p-4 relative flex items-center justify-center overflow-hidden group">
                    <img 
                      src={prod.imagen_url || "https://via.placeholder.com/300x300/e9ecef/06253a?text=Sin+Imagen"} 
                      alt={prod.nombre} 
                      className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Marca de agua Genuina */}
                    <div className="absolute inset-0 pointer-events-none opacity-5 flex items-center justify-center -rotate-12 scale-110">
                      <img 
                        src="https://potenta.com.ec/wp-content/uploads/2024/09/Group-87.png" 
                        alt="Watermark" 
                        className="w-full grayscale filter"
                      />
                    </div>
                  </div>

                  {/* Contenido */}
                  <CardContent className="p-4 flex flex-col flex-grow">
                    <div className="mb-2">
                      <span className="text-[#06253a] text-[10px] font-bold uppercase block leading-none">{prod.categoria}</span>
                      <span className="text-zinc-400 text-[9px] uppercase tracking-wider block mt-0.5">{prod.sku}</span>
                    </div>
                    
                    <h3 className="font-semibold text-sm text-zinc-800 leading-tight mb-4 flex-grow line-clamp-3">
                      {prod.nombre}
                    </h3>
                    
                    <div className="mb-4 text-center border-t border-b border-zinc-100 py-2">
                      {prod.precio_final && prod.precio_final < prod.precio ? (
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-zinc-400 text-xs line-through">${prod.precio.toFixed(2)}</span>
                          <span className="font-bold text-[#ff5100] text-sm">${prod.precio_final.toFixed(2)}</span>
                        </div>
                      ) : (
                        <span className="font-bold text-zinc-800 text-sm">${prod.precio.toFixed(2)}</span>
                      )}
                    </div>

                    {!prod.disponibilidad ? (
                      <Button disabled className="w-full bg-[#6c757d] hover:bg-[#6c757d] text-white text-xs font-bold rounded-none h-10 tracking-widest opacity-90 cursor-not-allowed">
                        <ShoppingCart className="mr-2 h-4 w-4 opacity-50" />
                        AGOTADO
                      </Button>
                    ) : (
                      <Button className="w-full bg-[#06253a] hover:bg-[#041a29] text-white text-xs font-bold rounded-none h-10 tracking-widest">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        AGREGAR
                      </Button>
                    )}
                  </CardContent>

                </Card>
              ))
            )}
          </div>
          
        </div>

      </div>
    </div>
  )
}
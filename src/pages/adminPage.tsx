import { useNavigate } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Plus, PackageSearch, LayoutDashboard, Search, LogOut, Loader2, RefreshCcw, EyeOff, Eye, Pencil, X } from 'lucide-react'
import { supabase } from '../lib/supabase'
import type { Producto } from '../types/database'

type Tab = 'dashboard' | 'inventario'

export default function AdminDashboard() {
  const navigate = useNavigate()
  
  // App State
  const [activeTab, setActiveTab] = useState<Tab>('dashboard')
  const [isChecking, setIsChecking] = useState(true)
  const [adminEmail, setAdminEmail] = useState<string>('')
  
  // Productos State
  const [productos, setProductos] = useState<Producto[]>([])
  const [loadingItems, setLoadingItems] = useState(false)
  
  const [editingProduct, setEditingProduct] = useState<string | null>(null)

  // Form State
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    sku: '',
    nombre: '',
    marca: '',
    categoria: '',
    precio: '',
    descuento_porcentaje: '',
    imagen_url: ''
  })
  const [formMsg, setFormMsg] = useState({ type: '', text: '' })

  // --- Auth Check (Bypassed) ---
  useEffect(() => {
    async function checkAdmin() {
      const { data: { session } } = await supabase.auth.getSession()
      
      if (session) {
        setAdminEmail(session.user.email || 'Admin')
      } else {
        setAdminEmail('Invitado (Modo Libre)')
      }

      setIsChecking(false)
      fetchProductos()
    }
    checkAdmin()
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate({ to: '/potenta-admin' })
  }

  // --- Fetching Logic ---
  const fetchProductos = async () => {
    setLoadingItems(true)
    const { data, error } = await supabase
      .from('productos')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(100)

    if (!error && data) {
      setProductos(data)
    }
    setLoadingItems(false)
  }

  const resetForm = () => {
    setFormData({ sku: '', nombre: '', marca: '', categoria: '', precio: '', descuento_porcentaje: '', imagen_url: '' })
    setEditingProduct(null)
    setFormMsg({ type: '', text: '' })
  }

  const handleGuardarProducto = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormMsg({ type: '', text: '' })

    try {
      const payload = {
        sku: formData.sku,
        nombre: formData.nombre,
        subcategoria: formData.marca,
        categoria: formData.categoria,
        precio: parseFloat(formData.precio),
        descuento_porcentaje: formData.descuento_porcentaje ? parseFloat(formData.descuento_porcentaje) : 0,
        imagen_url: formData.imagen_url || null,
        disponibilidad: true
      }

      let error;

      if (editingProduct) {
        // Actualizar
        const { error: updateError } = await supabase
          .from('productos')
          .update(payload)
          .eq('id', editingProduct)
        error = updateError;
      } else {
        // Insertar
        const { error: insertError } = await supabase
          .from('productos')
          .insert([payload])
        error = insertError;
      }

      if (error) throw error

      setFormMsg({ type: 'success', text: editingProduct ? '¡Equipo actualizado correctamente!' : '¡Equipo publicado correctamente!' })
      fetchProductos()
      setTimeout(() => {
        resetForm()
      }, 2500)

    } catch (err: any) {
      setFormMsg({ type: 'error', text: err.message || 'Error guardando en BD.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleEditClick = (prod: Producto) => {
    setEditingProduct(prod.id)
    setFormData({
      sku: prod.sku,
      nombre: prod.nombre,
      marca: prod.subcategoria || '',
      categoria: prod.categoria || '',
      precio: prod.precio.toString(),
      descuento_porcentaje: prod.descuento_porcentaje ? prod.descuento_porcentaje.toString() : '',
      imagen_url: prod.imagen_url || ''
    })
    setFormMsg({ type: '', text: '' })
    // Hacer scroll al formulario top
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const toggleDisponibilidad = async (id: string, estadoActual: boolean) => {
    const nuevoEstado = !estadoActual
    try {
      const { error } = await supabase
        .from('productos')
        .update({ disponibilidad: nuevoEstado })
        .eq('id', id)

      if (error) throw error
      setProductos(productos.map(p => p.id === id ? { ...p, disponibilidad: nuevoEstado } : p))
    } catch (err) {
      alert("No se pudo alterar el estado del producto.")
    }
  }

  if (isChecking) {
    return (
       <div className="min-h-screen bg-[#06253a] flex flex-col items-center justify-center space-y-4">
         <Loader2 className="w-12 h-12 text-[#ff5100] animate-spin" />
         <p className="text-white font-mono tracking-widest uppercase text-sm">Validando Bóveda...</p>
       </div>
    )
  }

  // --- RENDERS POR PESTAÑA ---

  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold text-[#06253a]">Resumen General</h2>
          <p className="text-zinc-500">Métricas operativas de la plataforma comercial.</p>
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="rounded-none border-zinc-200 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="font-medium text-zinc-500">Equipos Registrados</p>
              <PackageSearch className="w-5 h-5 text-zinc-400" />
            </div>
            <h3 className="text-3xl font-bold text-[#06253a]">{productos.length}</h3>
          </CardContent>
        </Card>
        
        <Card className="rounded-none border-zinc-200 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="font-medium text-zinc-500">Ofertas Activas</p>
              <span className="text-green-500 font-bold">%</span>
            </div>
            <h3 className="text-3xl font-bold text-[#06253a]">
              {productos.filter(p => (p.descuento_porcentaje || 0) > 0).length}
            </h3>
          </CardContent>
        </Card>

        <Card className="rounded-none border-zinc-200 shadow-sm bg-[#ff5100] text-white">
          <CardContent className="p-6">
            <p className="text-sm font-medium text-white/80 mb-1">Status Sistema</p>
            <h3 className="text-xl font-bold uppercase tracking-widest flex items-center gap-2">
              SEGURO <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </h3>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-8 bg-zinc-100/50 border border-zinc-200 p-8 text-center rounded-none">
         <ActivityPlaceholder />
         <p className="mt-4 text-zinc-500">Las métricas de visitas y embudos de venta B2B se activarán luego del despliegue en producción.</p>
      </div>
    </div>
  )

  const renderInventario = () => {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-[#06253a]">Catálogo de Productos</h2>
            <p className="text-zinc-500">Gestión de stock e información técnica.</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Formulario a la Izquierda */}
          <Card className="lg:col-span-4 rounded-none border-zinc-200 shadow-sm bg-white h-fit">
            <CardHeader className="border-b border-zinc-100 bg-zinc-50 pb-4">
              <CardTitle className="text-[#06253a] flex items-center justify-between text-base">
                <div className="flex items-center gap-2">
                  {editingProduct ? <Pencil className="h-5 w-5 text-[#ff5100]" /> : <Plus className="h-5 w-5 text-[#ff5100]" />}
                  {editingProduct ? 'Editar Equipo' : 'Ingresar Nuevo Equipo'}
                </div>
                {editingProduct && (
                   <Button variant="ghost" size="sm" onClick={resetForm} className="h-8 text-zinc-500 hover:text-red-600">
                     <X className="w-4 h-4 mr-1" /> Cancelar
                   </Button>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              {formMsg.text && (
                <div className={`p-3 text-sm mb-4 font-medium border ${formMsg.type === 'error' ? 'bg-red-50 text-red-600 border-red-200' : 'bg-green-50 text-green-600 border-green-200'}`}>
                  {formMsg.text}
                </div>
              )}

              <form onSubmit={handleGuardarProducto} className="space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="sku" className="text-xs font-bold text-zinc-500 uppercase">Cód. SKU *</Label>
                  <Input id="sku" required value={formData.sku} onChange={(e) => setFormData({...formData, sku: e.target.value})} placeholder="Ej: PPF-NBB2-12GM" className="rounded-none shadow-none h-10 border-zinc-300 bg-zinc-50/50 uppercase" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="nombre" className="text-xs font-bold text-zinc-500 uppercase">Nombre Completo *</Label>
                  <Input id="nombre" required value={formData.nombre} onChange={(e) => setFormData({...formData, nombre: e.target.value})} placeholder="Sensor Inductivo..." className="rounded-none shadow-none h-10 border-zinc-300 bg-zinc-50/50" />
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <Label htmlFor="marca" className="text-xs font-bold text-zinc-500 uppercase">Marca / Subcategoría *</Label>
                    <Input id="marca" required value={formData.marca} onChange={(e) => setFormData({...formData, marca: e.target.value})} placeholder="Ej: Omron" className="rounded-none shadow-none h-10 border-zinc-300 bg-zinc-50/50" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="categoria" className="text-xs font-bold text-zinc-500 uppercase">Segmento / Categoría *</Label>
                    <Input id="categoria" required value={formData.categoria} onChange={(e) => setFormData({...formData, categoria: e.target.value})} placeholder="Ej: Automatización" className="rounded-none shadow-none h-10 border-zinc-300 bg-zinc-50/50" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-zinc-100">
                  <div className="space-y-1.5">
                    <Label htmlFor="precio" className="text-xs font-bold text-zinc-500 uppercase">Precio B2B ($) *</Label>
                    <Input id="precio" type="number" step="0.01" required value={formData.precio} onChange={(e) => setFormData({...formData, precio: e.target.value})} placeholder="0.00" className="rounded-none shadow-none h-10 border-zinc-300 bg-zinc-50/50 font-mono text-base" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="descuento" className="text-xs font-bold text-zinc-500 uppercase">Descuento (%)</Label>
                    <Input id="descuento" type="number" min="0" max="100" value={formData.descuento_porcentaje} onChange={(e) => setFormData({...formData, descuento_porcentaje: e.target.value})} placeholder="0" className="rounded-none shadow-none h-10 border-zinc-300 bg-zinc-50/50 font-mono text-base" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="imagen_url" className="text-xs font-bold text-zinc-500 uppercase">Enlace Imagen</Label>
                  <Input id="imagen_url" value={formData.imagen_url} onChange={(e) => setFormData({...formData, imagen_url: e.target.value})} placeholder="https://..." className="rounded-none shadow-none h-10 border-zinc-300 bg-zinc-50/50 font-mono text-xs" />
                </div>

                <Button disabled={isSubmitting} className="w-full mt-4 bg-[#ff5100] hover:bg-[#e04800] transition-colors text-white rounded-none h-11 uppercase tracking-widest font-bold shadow-sm shadow-[#ff5100]/20">
                  {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin mx-auto" /> : (editingProduct ? 'Guardar Cambios' : 'Publicar Producto')}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Tabla a la Derecha */}
          <Card className="lg:col-span-8 rounded-none border-zinc-200 shadow-sm bg-white">
            <CardHeader className="border-b border-zinc-100 bg-zinc-50/80 py-3 flex flex-row items-center justify-between">
              <div className="relative">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                 <Input placeholder="Buscar por Nombre / SKU..." className="pl-9 rounded-none border-zinc-300 w-64 h-9 bg-white text-sm" />
              </div>
              <Button variant="ghost" size="sm" onClick={fetchProductos} disabled={loadingItems} className="rounded-none text-zinc-500 hover:text-[#06253a]">
                <RefreshCcw className={`w-4 h-4 mr-2 ${loadingItems ? 'animate-spin' : ''}`} /> Actualizar
              </Button>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto max-h-[650px]">
                <table className="w-full text-sm text-left relative">
                  <thead className="text-xs text-zinc-500 bg-zinc-100 uppercase sticky top-0 z-10 shadow-sm">
                    <tr>
                      <th className="px-5 py-3 font-semibold w-12 text-center">Img</th>
                      <th className="px-5 py-3 font-semibold">SKU / Equipo</th>
                      <th className="px-5 py-3 font-semibold">Categoría</th>
                      <th className="px-5 py-3 font-semibold">Precio</th>
                      <th className="px-5 py-3 font-semibold text-right">Acciones</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100">
                    {productos.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="text-center py-12 text-zinc-400">Sin datos en el inventario.</td>
                      </tr>
                    ) : (
                      productos.map((prod) => (
                        <tr key={prod.id} className="hover:bg-zinc-50/70 transition-colors group">
                          <td className="px-5 py-2">
                            <div className="w-10 h-10 bg-white border border-zinc-200 flex items-center justify-center p-1">
                              {prod.imagen_url ? (
                                <img src={prod.imagen_url} className="w-full h-full object-contain mix-blend-multiply" alt="img" />
                              ) : (
                                <PackageSearch className="w-4 h-4 text-zinc-300" />
                              )}
                            </div>
                          </td>
                          <td className="px-5 py-2">
                             <div className="font-bold text-[#06253a] max-w-[200px] truncate" title={prod.nombre}>{prod.nombre}</div>
                             <div className="font-mono text-[10px] text-zinc-500 mt-0.5">{prod.sku}</div>
                          </td>
                          <td className="px-5 py-2">
                             <span className="inline-block bg-zinc-100 text-zinc-700 font-medium text-[10px] px-2 py-0.5 rounded border border-zinc-200">
                               {prod.categoria}
                             </span>
                             <div className="text-[9px] text-zinc-400 mt-0.5 uppercase tracking-wider">{prod.subcategoria}</div>
                          </td>
                          <td className="px-5 py-2">
                             <div className="font-mono font-bold text-[#06253a]">
                               ${Number(prod.precio).toFixed(2)}
                               {(prod.descuento_porcentaje || 0) > 0 && (
                                 <span className="ml-1 text-[9px] bg-red-100 text-red-600 px-1.5 py-0.5 rounded-sm font-bold tracking-wider">
                                   -{prod.descuento_porcentaje}%
                                 </span>
                               )}
                             </div>
                             <div className="mt-0.5">
                               {prod.disponibilidad ? (
                                 <span className="text-[9px] font-bold text-green-600 flex items-center gap-1">
                                   <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> ACTIVO
                                 </span>
                               ) : (
                                 <span className="text-[9px] font-bold text-red-500 flex items-center gap-1">
                                   <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div> OCULTO
                                 </span>
                               )}
                             </div>
                          </td>
                          <td className="px-5 py-2 text-right">
                            <div className="flex items-center justify-end gap-1">
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                onClick={() => handleEditClick(prod)}
                                className="h-7 px-2 text-xs rounded-none border border-zinc-200 text-zinc-600 hover:border-[#06253a] hover:bg-[#06253a] hover:text-white transition-all"
                                title="Editar producto"
                              >
                                <Pencil className="w-3.5 h-3.5" />
                              </Button>
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                onClick={() => toggleDisponibilidad(prod.id, prod.disponibilidad)}
                                className={`h-7 px-2 text-xs rounded-none border transition-all ${prod.disponibilidad ? 'border-zinc-200 text-zinc-600 hover:border-[#ff5100] hover:bg-[#ff5100] hover:text-white' : 'border-[#ff5100]/30 text-[#ff5100] bg-[#ff5100]/5 hover:bg-[#ff5100] hover:text-white'}`}
                                title={prod.disponibilidad ? 'Ocultar producto de la tienda' : 'Mostrar producto de nuevo'}
                              >
                                {prod.disponibilidad ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }



  return (
    <div className="min-h-screen bg-zinc-50/50 flex flex-col md:flex-row font-sans">
      {/* Sidebar Lateral */}
      <aside className="w-full md:w-64 bg-[#06253a] text-zinc-300 flex-shrink-0 min-h-[100vh] flex flex-col shadow-2xl relative z-20">
        <div className="p-6 border-b border-white/5 flex flex-col gap-4">
          <img 
            src="https://potenta.com.ec/wp-content/uploads/2024/09/Group-87.png" 
            alt="Potenta Industrial Admin" 
            className="h-8 object-contain brightness-0 invert self-start" 
          />
          <div>
            <span className="bg-[#ff5100] text-white text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-widest">Workspace</span>
            <p className="text-xs text-white/50 mt-1 truncate" title={adminEmail}>{adminEmail}</p>
          </div>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-none font-medium transition-colors ${activeTab === 'dashboard' ? 'bg-white/10 text-white border-l-4 border-[#ff5100]' : 'hover:bg-white/5 hover:text-white border-l-4 border-transparent'}`}
          >
            <LayoutDashboard className="h-5 w-5" /> Reportes Globales
          </button>
          
          <button 
            onClick={() => setActiveTab('inventario')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-none font-medium transition-colors ${activeTab === 'inventario' ? 'bg-white/10 text-white border-l-4 border-[#ff5100]' : 'hover:bg-white/5 hover:text-white border-l-4 border-transparent'}`}
          >
            <PackageSearch className="h-5 w-5" /> Catálogo & Stock
          </button>
          
        </nav>

        <div className="p-4 border-t border-white/5">
           <button onClick={handleLogout} className="w-full flex items-center justify-center gap-2 px-4 py-3 text-red-400 hover:bg-red-400/10 hover:text-red-300 transition-colors uppercase tracking-widest text-xs font-bold border border-red-500/20">
             <LogOut className="h-4 w-4" /> Finalizar Sesión
           </button>
        </div>
      </aside>

      {/* Área Central Dinámica */}
      <main className="flex-1 overflow-y-auto w-full relative">
        <div className="absolute top-0 left-0 right-0 h-64 bg-zinc-200/40 border-b border-zinc-200 -z-10"></div>
        <div className="p-6 lg:p-10 max-w-7xl mx-auto">
          {activeTab === 'dashboard' && renderDashboard()}
          {activeTab === 'inventario' && renderInventario()}
        </div>
      </main>
    </div>
  )
}

// Icono animado simple para el Dashboard Placeholder
function ActivityPlaceholder() {
  return (
    <svg className="w-16 h-16 text-zinc-300 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  )
}
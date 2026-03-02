import { useState } from 'react'
import { Link, useNavigate } from '@tanstack/react-router'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { supabase } from '../lib/supabase'
import { Loader2 } from 'lucide-react'

export default function RegisterComponent() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [successMsg, setSuccessMsg] = useState('')

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    empresa_nombre: '',
    ruc: '',
    telefono: ''
  })

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setErrorMsg('')
    setSuccessMsg('')

    try {
      const { error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            empresa_nombre: formData.empresa_nombre,
            ruc: formData.ruc,
            telefono: formData.telefono
          }
        }
      })

      if (error) throw error

      setSuccessMsg('Registro exitoso. Revisa tu correo electrónico para verificar la cuenta o inicia sesión ahora mismo.')
      
      // Navigate to login after 3 seconds
      setTimeout(() => {
        navigate({ to: '/login' })
      }, 3000)

    } catch (error: any) {
      setErrorMsg(error.message || 'Error al intentar crear la cuenta.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-zinc-50 px-4 py-12">
      <div className="w-full max-w-xl bg-white border border-zinc-200 p-8 shadow-sm">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#06253a]">Registro Corporativo</h1>
          <p className="text-zinc-500 mt-2">Crea una cuenta para tu empresa en Potenta B2B</p>
        </div>

        {errorMsg && (
          <div className="bg-red-50 text-red-600 p-4 border border-red-200 mb-6 font-medium text-sm">
            {errorMsg}
          </div>
        )}

        {successMsg && (
          <div className="bg-green-50 text-green-700 p-4 border border-green-200 mb-6 font-medium text-sm">
            {successMsg}
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="empresa">Nombre de la Empresa *</Label>
              <Input 
                id="empresa" 
                required
                value={formData.empresa_nombre}
                onChange={(e) => setFormData({...formData, empresa_nombre: e.target.value})}
                placeholder="Razón Social o Comercial" 
                className="rounded-none border-zinc-300 h-11" 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ruc">RUC *</Label>
              <Input 
                id="ruc" 
                required
                value={formData.ruc}
                onChange={(e) => setFormData({...formData, ruc: e.target.value})}
                placeholder="099999999001" 
                className="rounded-none border-zinc-300 h-11" 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Correo Institucional *</Label>
              <Input 
                id="email" 
                type="email" 
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="compras@empresa.com" 
                className="rounded-none border-zinc-300 h-11" 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="telefono">Teléfono Principal</Label>
              <Input 
                id="telefono" 
                value={formData.telefono}
                onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                placeholder="+593 99..." 
                className="rounded-none border-zinc-300 h-11" 
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="password">Contraseña Corporativa *</Label>
              <Input 
                id="password" 
                type="password" 
                required
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                placeholder="Mínimo 6 caracteres" 
                className="rounded-none border-zinc-300 h-11" 
              />
            </div>
          </div>

          <Button 
            type="submit" 
            disabled={loading}
            className="w-full bg-[#ff5100] hover:bg-[#e04800] text-white rounded-none h-12 text-lg font-bold tracking-widest mt-4"
          >
            {loading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : 'SOLICITAR CUENTA B2B'}
          </Button>
        </form>

        <div className="mt-8 text-center text-sm text-zinc-500 border-t border-zinc-100 pt-6">
          ¿Ya tienes cuenta activa?{' '}
          <Link to="/login" className="text-[#06253a] hover:text-[#ff5100] hover:underline font-bold transition-colors">Iniciar sesión aquí</Link>
        </div>
      </div>
    </div>
  )
}

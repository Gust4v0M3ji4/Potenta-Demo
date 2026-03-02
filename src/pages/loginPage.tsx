import { useState } from 'react'
import { Link, useNavigate } from '@tanstack/react-router'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { supabase } from '../lib/supabase'
import { Loader2 } from 'lucide-react'

export default function LoginComponent() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setErrorMsg('')

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error

      // Redirigir al cliente al catalago o portal
      navigate({ to: '/tienda/catalogo' })
      
    } catch (error: any) {
      setErrorMsg(error.message || 'Credenciales inválidas.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-zinc-50 px-4">
      <div className="w-full max-w-md bg-white border border-zinc-200 p-8 shadow-sm">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#06253a]">Acceso B2B</h1>
          <p className="text-zinc-500 mt-2">Ingresa a tu portal corporativo</p>
        </div>

        {errorMsg && (
          <div className="bg-red-50 text-red-600 p-3 text-sm border border-red-200 mb-6 font-medium text-center">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Correo Electrónico</Label>
            <Input 
              id="email" 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="correo@empresa.com" 
              className="rounded-none border-zinc-300 h-12" 
            />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label htmlFor="password">Contraseña</Label>
              <a href="#" className="text-sm text-[#ff5100] hover:underline">¿Olvidaste tu contraseña?</a>
            </div>
            <Input 
              id="password" 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••" 
              className="rounded-none border-zinc-300 h-12" 
            />
          </div>

          <Button type="submit" disabled={loading} className="w-full bg-[#06253a] hover:bg-[#041a29] text-white rounded-none h-12 text-lg">
            {loading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : 'Iniciar Sesión'}
          </Button>
        </form>

        <div className="mt-6 text-center text-sm text-zinc-500">
          ¿No tienes una cuenta de distribuidor?{' '}
          <Link to="/registro" className="text-[#ff5100] hover:underline font-semibold">Regístrate como Empresa</Link>
        </div>
      </div>
    </div>
  )
}
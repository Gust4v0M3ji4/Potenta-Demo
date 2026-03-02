import { useState } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { supabase } from '../lib/supabase'
import { Loader2, ShieldCheck } from 'lucide-react'

export default function AdminAuthPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setErrorMsg('')

    try {
      // 1. Intentar hacer signIn
      const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (authError) throw authError

      // 2. Verificar que el usuario tenga rol 'admin'
      const { data: perfilData, error: perfilError } = await supabase
        .from('perfiles')
        .select('rol')
        .eq('id', authData.user.id)
        .single()
      
      if (perfilError || !perfilData) {
        throw new Error('No se pudo verificar tu rol administrativo.')
      }

      if (perfilData.rol !== 'admin') {
        // Expulsar si no es admin e informarle
        await supabase.auth.signOut()
        throw new Error('Acceso denegado. Esta cuenta no tiene los permisos suficientes.')
      }

      // 3. Si es admin, llevarlo al dashboard
      navigate({ to: '/admin' })
      
    } catch (error: any) {
      setErrorMsg(error.message || 'Credenciales administrativas inválidas.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 px-4">
      <div className="w-full max-w-md bg-[#041a29] border border-white/10 p-8 shadow-2xl relative overflow-hidden">
        
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff5100] rounded-full filter blur-[100px] opacity-40 mix-blend-screen pointer-events-none"></div>

        <div className="text-center mb-8 relative z-10">
          <div className="w-16 h-16 bg-white/5 mx-auto rounded-full flex items-center justify-center mb-4 border border-white/10">
            <ShieldCheck className="h-8 w-8 text-[#ff5100]" />
          </div>
          <img 
            src="https://potenta.com.ec/wp-content/uploads/2024/09/Group-87.png" 
            alt="Potenta Industrial" 
            className="h-6 object-contain filter brightness-0 invert mx-auto mb-4" 
          />
          <h1 className="text-xl font-bold text-white tracking-widest uppercase">Portal del Staff</h1>
          <p className="text-zinc-500 mt-2 text-xs font-mono">ACCESO RESTRINGIDO - ZONA ADMINISTRATIVA</p>
        </div>

        {errorMsg && (
          <div className="bg-red-500/10 text-red-500 p-3 text-sm border border-red-500/20 mb-6 font-medium text-center relative z-10">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleAdminLogin} className="space-y-6 relative z-10">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-zinc-400">ID Corporativo (Correo)</Label>
            <Input 
              id="email" 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu.nombre@potenta.com.ec" 
              className="rounded-none border-white/10 bg-black/50 text-white placeholder:text-zinc-600 h-12 focus-visible:ring-[#ff5100]" 
            />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label htmlFor="password" className="text-zinc-400">Contraseña Maestra</Label>
            </div>
            <Input 
              id="password" 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••" 
              className="rounded-none border-white/10 bg-black/50 text-white placeholder:text-zinc-600 h-12 focus-visible:ring-[#ff5100]" 
            />
          </div>

          <Button type="submit" disabled={loading} className="w-full bg-[#ff5100] hover:bg-[#e04800] text-white rounded-none h-12 text-sm uppercase tracking-widest font-bold mt-4">
            {loading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : 'AUTENTICAR ADMINISTRADOR'}
          </Button>
        </form>
      </div>
    </div>
  )
}

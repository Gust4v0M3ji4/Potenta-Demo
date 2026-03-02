export type Producto = {
  id: string
  created_at: string
  nombre: string
  sku: string
  precio: number
  precio_final: number | null
  descuento_porcentaje: number | null
  categoria: string
  subcategoria: string | null
  disponibilidad: boolean
  imagen_url: string | null
}

export type Perfil = {
  id: string
  rol: 'cliente_b2b' | 'admin'
  empresa_nombre: string | null
  ruc: string | null
  telefono: string | null
  created_at: string
  updated_at: string
}

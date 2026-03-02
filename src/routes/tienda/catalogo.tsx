import { createFileRoute } from '@tanstack/react-router'
import CatalogoComponent from '../../pages/catalogoPage'

export const Route = createFileRoute('/tienda/catalogo')({
  component: CatalogoComponent,
})

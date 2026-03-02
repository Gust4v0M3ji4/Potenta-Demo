import { createFileRoute } from '@tanstack/react-router'
import PromocionesComponent from '../pages/promocionesPage'

export const Route = createFileRoute('/promociones')({
  component: PromocionesComponent,
})

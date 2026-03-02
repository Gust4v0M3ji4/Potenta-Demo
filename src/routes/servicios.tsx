import { createFileRoute } from '@tanstack/react-router'
import ServiciosComponent from '../pages/serviciosPage'

export const Route = createFileRoute('/servicios')({
  component: ServiciosComponent,
})

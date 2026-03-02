import { createFileRoute } from '@tanstack/react-router'
import RouteComponent from '../pages/nosotrosPage'

export const Route = createFileRoute('/nosotros')({
  component: RouteComponent,
})

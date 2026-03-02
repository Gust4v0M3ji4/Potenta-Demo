import { createFileRoute } from '@tanstack/react-router'
import ContactoComponent from '../pages/contactoPage'

export const Route = createFileRoute('/contacto')({
  component: ContactoComponent,
})

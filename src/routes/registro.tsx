import { createFileRoute } from '@tanstack/react-router'
import RegisterComponent from '../pages/registroPage'

export const Route = createFileRoute('/registro')({
  component: RegisterComponent,
})

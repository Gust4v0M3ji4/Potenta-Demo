import { createFileRoute } from '@tanstack/react-router'
import LoginComponent from '../pages/loginPage'

export const Route = createFileRoute('/login')({
  component: LoginComponent,
})

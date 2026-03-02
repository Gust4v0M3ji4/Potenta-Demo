import { createFileRoute } from '@tanstack/react-router'
import Home from '../pages/indexPage'

export const Route = createFileRoute('/')({
  component: Home,
})

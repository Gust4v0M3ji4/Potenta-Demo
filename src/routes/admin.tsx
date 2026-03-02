import { createFileRoute } from '@tanstack/react-router'
import AdminDashboard from '../pages/adminPage'

export const Route = createFileRoute('/admin')({
  component: AdminDashboard,
})

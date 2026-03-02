import { createFileRoute } from '@tanstack/react-router'
import AdminAuthPage from '../pages/adminAuthPage'

export const Route = createFileRoute('/potenta-admin')({
  component: AdminAuthPage,
})

import { createFileRoute } from '@tanstack/react-router'
import BlogComponent from '../pages/blogPage'

export const Route = createFileRoute('/blog')({
  component: BlogComponent,
})

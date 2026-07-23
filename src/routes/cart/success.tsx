import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/cart/success')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/cart/success"!</div>
}

import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/order')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dashboard/order"!</div>
}

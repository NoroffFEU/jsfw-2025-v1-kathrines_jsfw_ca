import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/cart/')({
    component: Cart,
})

function Cart() {
    return (
        <div className="p-2">
            <h3>Here is your cart!</h3>
        </div>
    )
}

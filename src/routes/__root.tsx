import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

const RootLayout = () => (
    <>
        <div className="p-2 flex justify-between gap-2">
            <Link to="/" className="[&.active]:font-bold font-serif text-5xl text-ink p-2">
                SageShop
            </Link>{' '}
            <div className="flex justify-evenly gap-2 content-center p-4 ">
                <Link to="/" className="[&.active]:font-bold">
                Home
            </Link>{' '}
                <Link to="/cart" className="[&.active]:font-bold">
                    Cart
                </Link>
            </div>
        </div>
        <hr />
        <Outlet />
        <TanStackRouterDevtools />
    </>
)

export const Route = createRootRoute({ component: RootLayout })
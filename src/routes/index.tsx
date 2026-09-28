import { createFileRoute } from '@tanstack/react-router'
//import {ProductCard} from "@/components/product/ProductCard.tsx";
import ProductList from "@/routes/-components/ProductList.tsx";

export const Route = createFileRoute('/')({
    component: Index,
})

function Index() {
    return (
        <div className="p-2">
            <h3>Welcome Home!</h3>
            <ProductList/>

        </div>
    )
}
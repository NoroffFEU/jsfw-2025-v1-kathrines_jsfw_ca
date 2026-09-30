import { createFileRoute } from '@tanstack/react-router'
import ProductList from "@/routes/-components/ProductList.tsx";
import SearchBar from "@/routes/-components/SearchBar.tsx";

export const Route = createFileRoute('/')({
    component: Index,
    validateSearch: (searchParams) => {
        return {
            filter: searchParams?.filter ? String(searchParams.filter) : undefined,
            page: Number(searchParams?.page) || 1,
        }
    }
})

function Index() {
    return (
        <div className="mx-auto max-w-6xl justify-items-center p-2">
            <SearchBar/>
            <ProductList/>

        </div>
    )
}
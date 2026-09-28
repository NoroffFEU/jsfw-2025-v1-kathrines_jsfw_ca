//import type {Product} from "@/schemas/product.ts";
import { useQuery } from '@tanstack/react-query'
import {fetchProducts} from "@/services/api/fetchProducts.ts";
import LoadingSpinner from "@/components/common/LoadingSpinner.tsx";
import ErrorMessage from "@/components/common/ErrorMessage.tsx";
import {ProductCard} from "@/components/product/ProductCard.tsx";
import {useState} from "react";
import PaginationControls from "@/routes/-components/PaginationControls.tsx";

const itemsPerPage = 6

export default  function ProductList() {
    const { data, isLoading, error } = useQuery ({
        queryKey: ['products'],
        queryFn: fetchProducts,
    })
    const [currentPage, setCurrentPage] = useState(1)

    if(isLoading){
        return <LoadingSpinner />
    }

    if(error){
        return <ErrorMessage error={error} />
    }

    if(!data){
        return (
            <p>No data available</p>
        )
    }

    const totalPages = Math.ceil(data.length / itemsPerPage)

    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)

    const handlePageChange = (pageNumber: number) => {
        if (pageNumber >= 1 && pageNumber <= totalPages)  {
            setCurrentPage(pageNumber)
        }
    }

    return (
        <div className={'mx-auto max-w-6xl my-10'}>
            <div className={"grid grid-cols-2 md:grid-cols-3 justify-items-center gap-3"}>
                {currentItems.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
            <div className={'my-5'}>
                <PaginationControls currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/>
            </div>
        </div>

    )


}
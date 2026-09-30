//import type {Product} from "@/schemas/product.ts";
import { useQuery } from '@tanstack/react-query'
import {fetchProducts} from "@/services/api/fetchProducts.ts";
import LoadingSpinner from "@/components/common/LoadingSpinner.tsx";
import ErrorMessage from "@/components/common/ErrorMessage.tsx";
import {ProductCard} from "@/components/product/ProductCard.tsx";
import PaginationControls from "@/routes/-components/PaginationControls.tsx";
import {useNavigate, useSearch} from "@tanstack/react-router"
import type {Product} from "@/schemas/product.ts";

const itemsPerPage = 6

export default  function ProductList() {
    const { data, isLoading, error } = useQuery ({
        queryKey: ['products'],
        queryFn: fetchProducts,
    })

    const  { filter, page } = useSearch({from: '/'})
    const navigate = useNavigate({ from: '/' })

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

   const productsToDisplay: Product[] = ((filter) ? data.filter((product) => product.title.toLowerCase().includes(filter.toLowerCase()) ||
       product.description.toLowerCase().includes(filter.toLowerCase()) ||
       product.tags.some((tag: string): boolean => tag.toLowerCase().includes(filter.toLowerCase()))) : data )

    const totalPages: number = Math.ceil(productsToDisplay.length / itemsPerPage)

    const indexOfLastItem: number = page * itemsPerPage
    const indexOfFirstItem: number = indexOfLastItem - itemsPerPage
    const currentItems: Product[] = productsToDisplay.slice(indexOfFirstItem, indexOfLastItem)

    const handlePageChange = (pageNumber: number): void => {
        if (pageNumber >= 1 && pageNumber <= totalPages)  {
            void navigate({search:{filter, page: pageNumber}, replace:true})
        }
    }

    return (
        <div className={'my-10'}>
            <div className={"grid grid-cols-2 md:grid-cols-3 justify-items-center gap-3"}>
                {currentItems.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
            <div className={'my-5'}>
                <PaginationControls currentPage={page} totalPages={totalPages} onPageChange={handlePageChange}/>
            </div>
        </div>

    )


}
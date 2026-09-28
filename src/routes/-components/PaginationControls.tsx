import {
    Pagination,
    PaginationContent,
    //PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import type { MouseEvent } from "react"


export default function PaginationControls({currentPage, totalPages, onPageChange}: {currentPage: number, totalPages: number, onPageChange: (page: number) => void}) {
    const pageNumbers: number[] = []
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
    }

    const goToPage  = (event: MouseEvent<HTMLAnchorElement>, page: number) => {
        event.preventDefault();
        onPageChange(page)
    }

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''} aria-disabled={currentPage === 1} onClick={(e) => goToPage(e, currentPage - 1)} href={'#'}/>
                </PaginationItem>
                {pageNumbers.map((page: number) => (
                    <PaginationItem key={page}  >
                        <PaginationLink isActive={currentPage === page} onClick={(e) => goToPage(e, page)} href={'#'} >{page}</PaginationLink>
                    </PaginationItem>
                ))}
                <PaginationItem>
                    <PaginationNext  className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''} aria-disabled={currentPage === totalPages} onClick={(e) => goToPage(e, currentPage + 1)} href={'#'}/>
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}


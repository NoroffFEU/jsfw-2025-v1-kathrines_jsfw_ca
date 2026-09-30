import { SearchIcon } from "lucide-react"
import { useSearch, useNavigate } from "@tanstack/react-router"


import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group"

export default function SearchBar() {
    const { filter } = useSearch({ from: '/'})
    const navigate = useNavigate({ from: '/' })

    return (
        <InputGroup className={'relative max-w-lg my-10'}>
            <InputGroupInput id={'inline-start-input'} value={filter ?? ''} onChange={(e) => {void navigate({search:{filter: e.target.value, page: 1}, replace:true} )}} placeholder="Search..." />
            <InputGroupAddon align="inline-start">
                <SearchIcon className={'text-muted-foreground'}/>
            </InputGroupAddon>
        </InputGroup>
    )
}

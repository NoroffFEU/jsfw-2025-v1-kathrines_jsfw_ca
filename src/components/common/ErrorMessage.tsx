import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"
import {APIError} from "@/services/api/apiError.ts";


export default function ErrorMessage({ error }: { error: APIError }) {
    return (
        <div className={"grid w-full max-w-md items-start gap-4"}>
            <Alert variant={'destructive'}>
                <AlertTitle>
                    Error
                </AlertTitle>
                <AlertDescription>
                    {`${error.message}`}
                </AlertDescription>
            </Alert>
        </div>
    )
}
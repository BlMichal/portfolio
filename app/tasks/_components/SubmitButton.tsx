import { Save } from "lucide-react"
import { useFormStatus } from "react-dom"


export default function SubmitButton({clasName, btnType}) {

    const { pending } = useFormStatus()

    return (
        <button
            type={btnType}
            className={`mt-6 font-bold py-2 px-4 rounded ${clasName}`}
            disabled={pending}           
        >
            {pending ? <div><Save className="animate-pulse mx-auto" />
                </div> : <span>Uložit</span>}
        </button>
    )
}

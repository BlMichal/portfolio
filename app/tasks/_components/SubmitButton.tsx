import { Save } from "lucide-react"
import { useFormStatus } from "react-dom"

export default function SubmitButton() {

    const { pending } = useFormStatus()

    return (
        <button
            className='bg-orange-500 text-white mt-6 font-bold py-2 px-4 rounded'
            disabled={pending}  // Disable the button during upload                
        >
            {pending ? <span className="flex gap-2"><Save className="animate-pulse" /> Ukladám...</span> : 'Uložit'}
        </button>
    )
}

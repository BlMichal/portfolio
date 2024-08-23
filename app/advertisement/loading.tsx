import { LoaderCircle } from 'lucide-react'

const Loading = () => {
  return (
    <div className="max-w-7xl mx-auto flex md:min-h-screen-content-md-footer min-h-screen-content-sm-footer items-center justify-center gap-2 flex-auto">
    <span><LoaderCircle size={50} className="animate-spin" /></span>
    <h2 className="">Načítáme data...</h2>
  </div>
  )
}

export default Loading
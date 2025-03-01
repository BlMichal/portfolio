import { deleteAdImages } from "@/lib/actions";
import { Trash2 } from "lucide-react";


const DeleteImageForm = ({ id, imageUrl }: { id: number, imageUrl: string }) => {
  return (
    <form action={deleteAdImages} className="absolute top-0 right-0 z-[999]">
      <label htmlFor="id" className="text-white hidden">
        id
      </label>
      <input type="hidden" name="id" value={id} />
      <label htmlFor="imageUrl" className="text-white hidden">
        imageurl
      </label>
      <input type="hidden" name="imageUrl" value={imageUrl} />
      <button
        type="submit"
        className="bg-red-300 p-1 hover:bg-red-700 rounded-full z-40"
      >
        <Trash2 />
      </button>
    </form>
  );
};

export default DeleteImageForm;

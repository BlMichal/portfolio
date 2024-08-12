import { deleteImages } from "@/lib/actions";


type DeleteImageProps = {
    id : string,
    url: string
}


const DeleteImageForm = ({id , url}: DeleteImageProps ) => {
  return (
    <form action={deleteImages} className="absolute top-0 right-0">
      <label htmlFor="id" className="text-white hidden">
        id
      </label>
      <input type="hidden" name="id" value={id} />
      <label htmlFor="imageUrl" className="text-white hidden">
        imageurl
      </label>
      <input type="hidden" name="imageUrl" value={url} />
      <button
        type="submit"
        className="bg-red-500 hover:bg-red-700  rounded z-40"
      >
        DEL
      </button>
    </form>
  );
};

export default DeleteImageForm;

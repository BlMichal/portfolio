import { LayoutGrid, Rows4 } from "lucide-react";

const AdCardsLayoutButton = ({ setLayout }: { setLayout: (layout: string) => void }) => {

  return (
      <div className="flex items-center px-5 gap-2">
        <button
        id="grid" aria-label="Grid"
          onClick={() => setLayout("layout1")}
          className="bg-blue-500 flex items-center justify-center w-7 h-7 text-white rounded-md"
        >
           <LayoutGrid size={20} />
        </button>
        <button
         id="line" aria-label="Line"
          onClick={() => setLayout("layout2")}
          className="bg-green-500 flex items-center justify-center w-7 h-7 text-white rounded-md"
        >
         <Rows4 size={20} />
        </button>
      </div>          

  );
};

export default AdCardsLayoutButton;

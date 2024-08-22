import { LayoutGrid, Rows4 } from "lucide-react";

const AdCardsLayout = ({ setLayout }: { setLayout: (layout: string) => void }) => {

  return (
      <div className="flex px-5 gap-2">
        <button
          onClick={() => setLayout("layout1")}
          className="bg-blue-500 text-white p-2 rounded"
        >
           <LayoutGrid size={25} />
        </button>
        <button
          onClick={() => setLayout("layout2")}
          className="bg-green-500 text-white p-2 rounded"
        >
         <Rows4 size={25} />
        </button>
      </div>          

  );
};

export default AdCardsLayout;

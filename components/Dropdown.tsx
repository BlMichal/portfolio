
import Link from "next/link";

const Dropdown = ({href,children}) => {
  return (
    <Link href={`/${href}`} className="flex ">
      <span className="whitespace-nowrap hover:text-black text-neutral-400">
        {children}
      </span>
    </Link>
  );
};

export default Dropdown;

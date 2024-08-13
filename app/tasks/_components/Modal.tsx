"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useRef, useEffect } from "react";

type Props = {
  title: string;
  onClose: () => void;
  onOk: () => void;
  children: React.ReactNode;
};

export default function Modal({ title, onClose, onOk, children }: Props) {
  const searchParams= useSearchParams();
  const dialogRef = useRef<null | HTMLDialogElement>(null);
  const router = useRouter()
  const showDialog = searchParams.get("showDialog");

  useEffect(() => {
    if (showDialog === "open") {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [showDialog]);

 

  const closeDialog = () => {
    dialogRef.current?.close();
    onClose();
    
  };

  const clickOk = () => {
    onOk();
    closeDialog();
  };

  
    return (showDialog === "open" ? (
      <dialog ref={dialogRef} onClose={router.back} className="fixed top-10 left-0 z-50 backdrop:bg-black/60 backdrop:bg  ">
        <div className="w-96 bg-gray-600 flex flex-col">
          <div className="flex justify-between mb-4">
            <h1>{title}</h1>
            <button className="px-4 py-2 bg-red-500" onClick={closeDialog}>X</button>
          </div>
          <div>
            {children}
            <div className="flex justify-end">
              <button className="px-4 py-2 bg-white text-black" onClick={clickOk}>OK</button>
            </div>
          </div>
        </div>
      </dialog>
    ) : null)

   
}

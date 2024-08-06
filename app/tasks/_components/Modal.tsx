"use client";

import { useSearchParams } from "next/navigation";
import { useRef, useEffect, Children } from "react";

type Props = {
  title: string;
  onClose: () => void;
  onOk: () => void;
  children: React.ReactNode;
};

export default function Modal({ title, onClose, onOk, children }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const dialogRef = useRef<null | HTMLDialogElement>(null);

  const showDialog = searchParams.get("showDialog");

  useEffect(() => {
    if (showDialog === "open") {
      dialogRef.current?.show();
    } else {
      dialogRef.current?.close();
    }
  }, [showDialog]);

  const removeErrorParam = () => {
    if (searchParams.has('error')) {
      searchParams.delete('error');
      setSearchParams(searchParams);
    }

  const closeDialog = () => {
    dialogRef.current?.close();
    onClose();
  };

  const clickOk = () => {
    onOk();
    closeDialog();
  };

  const dialog: JSX.Element | null =
    showDialog === "open" ? (
      <dialog ref={dialogRef} className="fixed top-50 left-50 -translate-x-50 -translate-y-50 z-50 backdrop:bg-black  ">
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
    ) : null;

  return dialog;
}

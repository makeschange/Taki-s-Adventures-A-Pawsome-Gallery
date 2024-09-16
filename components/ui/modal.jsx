import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Button from "./button";
import { CircleX } from "lucide-react";

function Modal({ onClose, title, message }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;

  return createPortal(
    <>
      <div className="h-screen w-screen fixed top-0 left-0 bottom-0 right-0 bg-black/50" />
      <div
        className="fixed inset-0 flex items-center justify-center z-50"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="max-w-[500px] w-full mx-auto bg-white p-5 rounded-xl shadow-lg">
          <h2 className="text-xl text-red-500 font-semibold mb-2 flex items-center">
            <CircleX />
            {title}
          </h2>
          <p className="my-8 text-xl text-black ">{message}</p>
          <Button onClick={onClose} type="button" className="ml-auto">
            Close
          </Button>
        </div>
      </div>
    </>,
    modalRoot
  );
}

export default Modal;

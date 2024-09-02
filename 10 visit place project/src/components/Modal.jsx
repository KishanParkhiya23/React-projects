import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

export default function Modal({ isOpen, children }) {
  const dialog = useRef();

  useEffect(() => {
    if (isOpen) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [isOpen]);

  return createPortal(
    <dialog className="modal" ref={dialog}>
      {isOpen ? children : null}
    </dialog>,
    document.getElementById("modal")
  );
}

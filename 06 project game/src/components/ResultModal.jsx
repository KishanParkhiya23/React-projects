import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainTime, resetTimer },
  ref
) {
  const dialog = useRef();
  const calculateRemainTime = (remainTime / 1000).toFixed(2);
  const score = Math.round((1 - remainTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog className="result-modal" ref={dialog}>
      <h2>{remainTime <= 0 ? "You Lost" : `Your score is : ${score}`}!</h2>
      <p>
        The target time was <strong>{targetTime}</strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{calculateRemainTime} seconds left</strong>
      </p>
      <form action="dialog" onSubmit={resetTimer}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ResultModal;

import { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar.jsx";

const DEFAULT_TIME = 3000;
export default function DeleteConfirmation({ onConfirm, onCancel }) {
  useEffect(() => {
    console.log("set timer");
    const timer = setTimeout(() => {
      onConfirm();
    }, DEFAULT_TIME);

    return () => {
      console.log("clear timer");
      clearTimeout(timer);
    };
  }, [onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <ProgressBar defaultTime={DEFAULT_TIME} />
    </div>
  );
}

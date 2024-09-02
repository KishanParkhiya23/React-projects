import styles from "./Modal.module.css";
import React, { Fragment } from "react";
import ReactDOM from "react-dom";

const BackDrop = (props) => {
  return <div className={styles.backdrop} onClick={props.modalClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const backDropComponent = document.getElementById("overlaySection");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop modalClose={props.modalClose}/>, backDropComponent)}
      {ReactDOM.createPortal(
        <ModalOverlay> {props.children}</ModalOverlay>,
        backDropComponent
      )}
    </Fragment>
  );
};
export default Modal;

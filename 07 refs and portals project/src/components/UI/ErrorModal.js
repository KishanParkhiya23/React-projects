import React from "react";
import { createPortal } from "react-dom";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

function BackDrop(props) {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
}

function CardComponent(props) {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
}

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      createPortal(
      <BackDrop onConfirm={props.onConfirm} />,
      document.getElementById('back-drops-component')) createPortal(
      <CardComponent
        title={props.title}
        message={props.message}
        onConfirm={props.onConfirm}
      />
      , document.getElementById('cards-component')) )
    </React.Fragment>
  );
};

export default ErrorModal;

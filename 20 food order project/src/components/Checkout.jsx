import Input from "../UI/Input";
import Modal from "../UI/Modal";
import cartContext from "../store/cartContext";
import UserProgressContext from "../store/userProgressContext";
import { useContext } from "react";
import Button from "../UI/BUtton";
import useHttp from "../hooks/useHttp";

export default function Checkout() {
  const cartCtx = useContext(cartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const { error, isFetching, data, sendRequest } = useHttp();

  const cartTotal = cartCtx.items.reduce(
    (total, item) => item.quantity * item.price + total,
    0
  );

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const fd = new FormData(event.target);
    const form_data = Object.fromEntries(fd.entries());

    sendRequest("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        order: {
          items: cartCtx.items,
          customer: form_data,
        },
      },
    });
  };

  return (
    <Modal className="checkout" open={userProgressCtx.progress === "checkout"}>
      <form onSubmit={handleFormSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount : ${cartTotal} </p>
        <Input id="name" name="name" type="text" label="Full name" />
        <Input id="email" name="email" type="email" label="Email" />
        <Input id="street" name="street" type="text" label="Street" />
        <div className="control-row">
          <Input id="city" name="city" type="text" label="City" />
          <Input id="postal-code" name="postal-code" type="text" label="Zip" />
        </div>
        <p className="modal-actions">
          <Button type="button" textOnly onClick={userProgressCtx.hideCheckout}>
            Close
          </Button>
          <Button>Submit order</Button>
        </p>
      </form>
    </Modal>
  );
}

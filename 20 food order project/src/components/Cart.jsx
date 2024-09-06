import Modal from "../UI/Modal";
import { useContext } from "react";
import cartContext from "../store/cartContext";
import Button from "../UI/BUtton";
import UserProgressContext from "../store/userProgressContext";
import CartItem from "./CartItem";

export default function Cart() {
  const cartCtx = useContext(cartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (total, item) => item.quantity * item.price + total,
    0
  );

  return (
    <Modal className="cart" open={userProgressCtx.progress === "cart"}>
      <h2>Your cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onDecrees={() => cartCtx.removeItemFromCart(item.id)}
            onIncrease={() => cartCtx.addItemToCart(item)}
          />
        ))}
      </ul>

      <p className="cart-total">${cartTotal}</p>
      <p className="modal-actions">
        <Button textOnly onClick={userProgressCtx.hideCart}>Close</Button>
        {cartCtx.items.length > 0 && <Button onClick={userProgressCtx.showCheckout}>Go to checkout</Button>}
      </p>
    </Modal>
  );
}

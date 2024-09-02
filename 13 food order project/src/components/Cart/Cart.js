import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
import CartItem from "./CartItem.js";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const handleAddCartItem = (item) => {
    cartCtx.addItem(item);
  };
  const handleRemoveCartItem = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems =
    cartCtx.items.length > 0 ? (
      <ul className={styles["cart-items"]}>
        {cartCtx.items.map((item) => {
          return (
            <CartItem
              key={item.id}
              name={item.name}
              amount={item.amount}
              price={item.price}
              onRemove={handleRemoveCartItem.bind(null, item.id)}
              onAdd={handleAddCartItem.bind(null, item)}
            />
          );
        })}
      </ul>
    ) : (
      <>
        <h3>No items selected in cart</h3>
        <hr />
      </>
    );
  return (
    <Modal modalClose={props.modalClose}>
      {cartItems}
      <div className={styles.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.modalClose}>
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;

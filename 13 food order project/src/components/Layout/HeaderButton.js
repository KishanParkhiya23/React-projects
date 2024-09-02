import styles from "./HeaderButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import { useContext, useEffect, useState } from "react";

const HeaderButton = (props) => {
  const [btnBumped, setBtnBumped] = useState(false);
  const cartCtx = useContext(CartContext);
  // const numberOfCartItems = cartCtx.items.length

  const { items } = cartCtx;

  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  let cartCss = `${styles.button} ${btnBumped && styles.bump}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnBumped(true);

    const timer = setTimeout(() => {
      setBtnBumped(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={cartCss} onClick={props.showModal}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderButton;

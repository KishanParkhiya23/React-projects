import classes from "./CartItem.module.css";
import { cartItemsActions } from "../../store/cartItemSlice";
import { useDispatch } from "react-redux";

const CartItem = (props) => {
  const { id, title, quantity, total, price } = props.item;
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(
      cartItemsActions.addItem({
        id,
        title,
        price,
      })
    );
  };

  const handleDecrease = () => {
    dispatch(cartItemsActions.removeItem(id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleDecrease}>-</button>
          <button onClick={handleIncrease}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;

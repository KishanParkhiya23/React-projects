import { useEffect } from "react";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { sendCartData, fetchCartData } from "../../store/cart-actions";

let firstRequest = true;

const Cart = () => {
  const dispatch = useDispatch();
  const isCartVisible = useSelector(
    (state) => state.visibleSlice.isCartVisible
  );

  const cartItems = useSelector((state) => state.cartItems.items);
  const cartTotal = useSelector((state) => state.cartItems.total);
  const cartChanged = useSelector((state) => state.cartItems.changed);

  useEffect(() => {
    dispatch(fetchCartData());
  }, []);

  useEffect(() => {
    if (firstRequest) {
      firstRequest = false;
      return;
    } else {
      cartChanged &&
        dispatch(sendCartData({ items: cartItems, total: cartTotal }));
    }
  }, [cartItems]);

  return (
    <>
      {isCartVisible && (
        <Card className={classes.cart}>
          <h2>Your Shopping Cart</h2>
          <ul>
            {cartItems.length > 0 ? (
              cartItems.map((item) => {
                return (
                  <CartItem
                    key={item.id}
                    item={{
                      id: item.id,
                      title: item.title,
                      quantity: item.quantity,
                      total: cartTotal,
                      price: item.price,
                    }}
                  />
                );
              })
            ) : (
              <p>Cart is empty</p>
            )}
          </ul>
        </Card>
      )}
    </>
  );
};

export default Cart;

import { visibilityActions } from "./visibleSlice";
import { cartItemsActions } from "./cartItemSlice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchCart = async () => {
      const response = await fetch(
        "https://redux-product-cart-project-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error(response.message || "Error: Failed to fetch data.");
      }
      return response.json();
    };

    try {
      const data = await fetchCart();
      dispatch(cartItemsActions.replaceCart(data));
    } catch (error) {
      dispatch(
        visibilityActions.visibleNotification({
          status: true,
          title: "Error",
          message: "Failed to fetch data to the server!",
        })
      );
    }
  };
};

export const sendCartData = (cartItems) => {
  return async (dispatch) => {
    dispatch(
      visibilityActions.visibleNotification({
        status: true,
        title: "Please wait",
        message: "Please wait, we are updating data !",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://redux-product-cart-project-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cartItems.items,
            total: cartItems.total,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(response.message || "Error: Failed to send request.");
      }
    };

    try {
      await sendRequest();
      dispatch(
        visibilityActions.visibleNotification({
          status: true,
          title: "Success",
          message: "Data updated successfully !",
        })
      );
    } catch (error) {
      dispatch(
        visibilityActions.visibleNotification({
          status: true,
          title: "Error",
          message: "Failed to update data to the server!",
        })
      );
    }
  };
};

import { act, useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedItemAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingItem = state.items.find((item) => item.id === action.item.id);

    if (existingItem) {
      return {
        items: state.items.map((item) => {
          if (item.id === action.item.id) {
            item.amount += action.item.amount;
          }
          return item;
        }),
        totalAmount: updatedItemAmount,
      };
    } else {
      return {
        items: [...state.items, action.item],
        totalAmount: updatedItemAmount,
      };
    }
  } else if (action.type === "REMOVE_ITEM") {
    const existingItem = state.items.find((item) => item.id === action.itemId);
    const updatedItemAmount = state.totalAmount - existingItem.price;

    if (existingItem.amount > 1) {
      return {
        items: state.items.map((item) => {
          if (item.id === action.itemId) {
            item.amount -= 1;
          }
          return item;
        }),
        totalAmount: updatedItemAmount,
      };
    } else {
      return {
        items: state.items.filter((item) => item.id !== action.itemId),
        totalAmount: updatedItemAmount,
      };
    }
  }
  return;
};

const CartContextProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    defaultCartState
  );

  const handleAddItemToCart = (item) => {
    dispatchCartState({ type: "ADD_ITEM", item: item });
  };
  const handleRemoveItemFromCart = (itemId) => {
    dispatchCartState({ type: "REMOVE_ITEM", itemId: itemId });
  };

  const cartContextValue = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: handleAddItemToCart,
    removeItem: handleRemoveItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

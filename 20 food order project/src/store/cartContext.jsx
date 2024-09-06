// import { createContext, useReducer } from "react";

// const cartContext = createContext({
//   items: [],
//   addItemToCart: (item) => {},
//   removeItemFromCart: (id) => {},
// });

// function cartReducer(state, action) {
//   let updatedItems = [...state.items];

//   if (action.type === "ADD_ITEM") {
//     const indexOfExistingItem = state.items.findIndex(
//       (item) => item.id === action.item.id
//     );
//     if (indexOfExistingItem > -1) {
//       updatedItems[indexOfExistingItem].quantity += 1;
//     } else {
//       updatedItems.push({ ...action.item, quantity: 1 });
//     }
//   }

//   if (action.type === "REMOVE_ITEM") {
//     const indexOfExistingItem = state.items.findIndex(
//       (item) => item.id === action.id
//     );

//     if (updatedItems[indexOfExistingItem].quantity > 1) {
//       updatedItems[indexOfExistingItem].quantity -= 1;
//     } else {
//       updatedItems = updatedItems.filter((item) => item.id !== action.id);
//     }
//   }
//   return { ...state, items: updatedItems };
//   //   return state;
// }

// export function CartContextProvider({ children }) {
//   const [cart, dispatchCart] = useReducer(cartReducer, {
//     items: [],
//   });

//   function addItem(item) {
//     dispatchCart({ type: "ADD_ITEM", item });
//   }
//   function removeItem(id) {
//     dispatchCart({ type: "REMOVE_ITEM", id });
//   }

//   const cartCtx = {
//     items: cart.items,
//     addItemToCart: addItem,
//     removeItemFromCart: removeItem,
//   };

//   return (
//     <cartContext.Provider value={cartCtx}>{children}</cartContext.Provider>
//   );
// }

// export default cartContext;
import { createContext, useReducer, useMemo } from "react";

// Action Types
const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";

// Initial context with default methods
const cartContext = createContext({
  items: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
});

// Reducer function to manage cart state
function cartReducer(state, action) {
  switch (action.type) {
    case ADD_ITEM: {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const updatedItems = [...state.items];

      if (existingItemIndex >= 0) {
        // Update quantity if item exists
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1,
        };
      } else {
        // Add new item with quantity 1
        updatedItems.push({ ...action.item, quantity: 1 });
      }

      return { ...state, items: updatedItems };
    }

    case REMOVE_ITEM: {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );

      if (existingItemIndex === -1) {
        // Item not found in the cart
        return state;
      }

      const updatedItems = [...state.items];

      if (updatedItems[existingItemIndex].quantity > 1) {
        // Reduce quantity if more than 1


        // updatedItems[existingItemIndex].quantity -= 1;


        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity - 1,
        };

        
      } else {
        // Remove item if quantity is 1
        updatedItems.splice(existingItemIndex, 1);
      }

      return { ...state, items: updatedItems };
    }

    default:
      return state;
  }
}

// Context provider to wrap around components
export function CartContextProvider({ children }) {
  const [cartState, dispatch] = useReducer(cartReducer, {
    items: [],
  });

  const addItemToCart = (item) => {
    dispatch({ type: ADD_ITEM, item });
  };

  const removeItemFromCart = (id) => {
    dispatch({ type: REMOVE_ITEM, id });
  };

  // Memoize context value to avoid unnecessary re-renders
  const cartContextValue = useMemo(() => {
    return {
      items: cartState.items,
      addItemToCart,
      removeItemFromCart,
    };
  }, [cartState.items]);

  return (
    <cartContext.Provider value={cartContextValue}>
      {children}
    </cartContext.Provider>
  );
}

export default cartContext;

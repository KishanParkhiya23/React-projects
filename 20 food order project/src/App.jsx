import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextProvider } from "./store/cartContext.jsx";
import { UserProgressContextProvider } from "./store/userProgressContext.jsx";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout.jsx";
function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;

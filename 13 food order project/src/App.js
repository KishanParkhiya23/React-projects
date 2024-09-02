import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartContextProvider from "./store/CartContextProvider";

function App() {
  const [isModalShown, setIsModalShown] = useState(false);

  const handleModalShow = () => {
    setIsModalShown(true);
  };
  const handleModalHide = () => {
    setIsModalShown(false);
  };

  return (
    <CartContextProvider>
      {isModalShown && <Cart modalClose={handleModalHide} />}
      <Header onCartShow={handleModalShow} />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;

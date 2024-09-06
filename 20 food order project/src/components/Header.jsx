import logoImg from "../assets/logo.jpg";
import Button from "../UI/BUtton";
import cartContext from "../store/cartContext";
import { useContext } from "react";
import UserProgressContext from "../store/userProgressContext";

export default function Header() {
    const userProgressCtx = useContext(UserProgressContext)
  const cartCtx = useContext(cartContext);
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant" />
        <h1>My Food App</h1>
      </div>
      <Button textOnly onClick={userProgressCtx.showCart}>Cart ({cartCtx.items.length})</Button>
    </header>
  );
}

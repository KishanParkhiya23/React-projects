import Button from "../UI/BUtton";
import { useContext } from "react";
import cartContext from "../store/cartContext";

export default function MealItem({ meal }) {
  const cartCtx = useContext(cartContext);

  const handleAddCart = (item) => {
    cartCtx.addItemToCart(item);
  };

  const imgPath = `/backend/public/${meal.image}`;
  return (
    <li className="meal-item" key={meal.id}>
      <article>
        <img src={imgPath} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">${meal.price}</p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={() => handleAddCart(meal)}>Add to cart</Button>
        </p>
      </article>
    </li>
  );
}

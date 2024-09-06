export default function CartItem({ item, onDecrees, onIncrease }) {
  return (
    <li className="cart-item" key={item.id}>
      <p>
        {item.name} - {item.quantity} x {item.price}
      </p>
      <p className="cart-item-actions">
        <button onClick={onDecrees}>-</button>
        <span>{item.quantity}</span>
        <button onClick={onIncrease}>+</button>
      </p>
    </li>
  );
}

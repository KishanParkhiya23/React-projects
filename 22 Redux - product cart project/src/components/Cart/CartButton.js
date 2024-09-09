import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { visibilityActions } from '../../store/visibleSlice';

const CartButton = (props) => {
  const dispatch = useDispatch()
  const cartItemCount = useSelector(state => state.cartItems.items.length)

  const handleCartToggle = () =>{
    dispatch(visibilityActions.toggleCart())
  }
  return (
    <button className={classes.button} onClick={handleCartToggle}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItemCount}</span>
    </button>
  );
};

export default CartButton;

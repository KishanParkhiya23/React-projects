import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const stateVal = useSelector((state) => state.counter);
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };
  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const handleCustomIncrement = (count) => {
    dispatch(counterActions.increase(count));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {stateVal.toggle && (
        <>
          <div className={classes.value}>{stateVal.counter}</div>
          <div>
            <button onClick={handleDecrement}>
              Decrement <b>-</b>
            </button>
            <button onClick={() => handleCustomIncrement(5)}>
              Increment by 5 <b>+</b>
            </button>
            <button onClick={handleIncrement}>
              Increment <b>+</b>
            </button>
          </div>
        </>
      )}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

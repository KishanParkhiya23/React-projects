import classes from "./Auth.module.css";
import { useDispatch } from "react-redux";
import { authActions } from "../store/authSlice";

const Auth = () => {
  const dispatch = useDispatch();

  const handleLogIn = (event) => {
    event.preventDefault();
    dispatch(authActions.logIn());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={handleLogIn}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required/>
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required/>
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;

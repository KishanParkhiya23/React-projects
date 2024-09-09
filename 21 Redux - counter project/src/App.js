import Counter from "./components/Counter";
import { Fragment } from "react";
import Header from "./components/Header.js";
import Auth from "./components/Auth.js";
import UserProfile from "./components/UserProfile.js";
import { useSelector } from "react-redux";

function App() {
  const authData = useSelector((state) => state.auth);

  return (
    <Fragment>
      <Header />
      {!authData.isAuthenticated ? <Auth /> : <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;

import React, { Fragment, useContext } from "react";
import styles from "./Header.module.css";
import headerImage from "../../assets/meals.jpg";
import HeaderButton from "./HeaderButton";

const Header = (props) => {


  return (
    <Fragment>
      <header className={styles["header"]}>
        <h1>ReactMeals</h1>
        <HeaderButton showModal={props.onCartShow}/>
      </header>
      <div className={styles["main-image"]}>
        <img src={headerImage} atl="A table of delicious food" />
      </div>
    </Fragment>
  );
};

export default Header;

import React, { Fragment } from "react";
import classes from "./Header.module.css";
import food_img from "../../assets/food_app.jpeg";
import HeaderCartButton from "./HeaderCartButton";



const Header = ({cartItems}) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>SR Meals App</h1>
        <HeaderCartButton cartItems={cartItems} />
      </header>
      <div className={classes.main_img}>
        <img src={food_img} alt="Food_img!" />
      </div>
    </Fragment>
  );
};

export default Header;
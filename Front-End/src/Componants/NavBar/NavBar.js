import React, { useContext } from "react";
import classes from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { AuthorizedContext } from "../../Contexts/Authorized";
import Logo from "../../Assets/Logo/logo_transparent.png";

const NavBar = () => {
  const auth = useContext(AuthorizedContext);

  const openPopup = () => {
    auth.setPopup(true);
  };

  return (
    <div className={classes.Navigation}>
      <img src={Logo} alt="Logo" className={classes.Logo} />
      <ul className={classes.LinkContainer}>
        <Link to="/" className={classes.Link}>
          <li>Products</li>
        </Link>
        <Link to="/cart" className={classes.Link}>
          <li>Cart</li>
        </Link>
      </ul>
      <ion-icon
        name="person-outline"
        className={classes.Login}
        onClick={openPopup}
      ></ion-icon>
    </div>
  );
};

export default NavBar;

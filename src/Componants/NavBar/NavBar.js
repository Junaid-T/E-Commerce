import React, { useContext } from "react";
import classes from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { AuthorizedContext } from "../../Contexts/Authorized";

const NavBar = () => {
  const [, , , setPopup] = useContext(AuthorizedContext);

  const openPopup = () => {
    setPopup(true);
  };

  return (
    <div className={classes.Navigation}>
      <img alt="LOGO_TEMP" className={classes.Logo} />
      <ul className={classes.LinkContainer}>
        <Link to="/" className={classes.Link}>
          <li>PRODUCTS</li>
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

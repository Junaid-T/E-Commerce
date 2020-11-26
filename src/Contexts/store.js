import React, { useEffect, createContext, useState } from "react";
import axios from "axios";
import { render } from "@testing-library/react";

export const StoreContext = createContext();

///////////////////////////////////////////////////////////////////////////
const getData = async function () {
  try {
    const data = await axios.get(
      "https://e-commerce-project-94b61.firebaseio.com/TEMP_1.json"
    );
    return data.data;
  } catch (error) {
    console.log(error);
  }
};
/////////////////////////////////////////////////////////////////////////

export const StoreProvider = (props) => {
  const [allProducts, setAllProducts] = useState({});
  const [activeItem, setActiveItem] = useState(null);
  //   const [cart, SetCart] = useState([]);
  //   const [Authorized, setAuthorized] = useState(false);

  ////////////////////////////////////////////////////////////////////////////////////

  ///////////////////////////////////////
  useEffect(() => {
    getData().then((data) => setAllProducts(data));
  }, []);

  /////////////////////////////////////////
  return (
    <StoreContext.Provider value={[allProducts, activeItem, setActiveItem]}>
      {props.children}
    </StoreContext.Provider>
  );
};

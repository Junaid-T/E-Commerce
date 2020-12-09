import React, { useEffect, createContext, useState } from "react";
import axios from "axios";
///////////////////////////////////////////////////////////////////////////

import Backpack from "../Assets/Products/Backpack.jpg";
import Banana from "../Assets/Products/Banana.jpg";
import Clock from "../Assets/Products/Clock.jpg";
import Crocs from "../Assets/Products/Crocs.jpg";
import Duck from "../Assets/Products/Duck.jpg";
import Fan from "../Assets/Products/Fan.jpg";
import Plant from "../Assets/Products/Plant.jpg";
import Sunglasses from "../Assets/Products/Sunglasses.jpg";
import Tent from "../Assets/Products/Tent.jpg";
import ULetter from "../Assets/Products/U.jpg";

const products = {
  item1: {
    name: "Backpack",
    price: 25,
    description: "sdashdash dahsdhs djahdja hjdja",
    id: 1,
    image: Backpack,
  },
  item2: {
    name: "Banana",
    price: 1,
    description: "sdashdash dahsdhs djahdja hjdja",
    id: 2,
    image: Banana,
  },
  item3: {
    name: "Clock",
    price: 35,
    description: "sdashdash dahsdhs djahdja hjdja",
    id: 3,
    image: Clock,
  },
  item4: {
    name: "Crocs",
    price: 12,
    description: "sdashdash dahsdhs djahdja hjdja",
    id: 4,
    image: Crocs,
  },
  item5: {
    name: "Duck",
    price: 2,
    description: "sdashdash dahsdhs djahdja hjdja",
    id: 5,
    image: Duck,
  },
  item6: {
    name: "Fan",
    price: 45,
    description: "sdashdash dahsdhs djahdja hjdja",
    id: 6,
    image: Fan,
  },
  item7: {
    name: "Plant",
    price: 19.99,
    description: "sdashdash dahsdhs djahdja hjdja",
    id: 7,
    image: Plant,
  },
  item8: {
    name: "Sunglasses",
    price: 8.99,
    description: "sdashdash dahsdhs djahdja hjdja",
    id: 8,
    image: Sunglasses,
  },
  item9: {
    name: "Tent",
    price: 70,
    description: "sdashdash dahsdhs djahdja hjdja",
    id: 9,
    image: Tent,
  },
  item10: {
    name: "U",
    price: 9.99,
    description: "sdashdash dahsdhs djahdja hjdja",
    id: 10,
    image: ULetter,
  },
};
///////////////////////////////////////////////////////////////////////////

export const StoreContext = createContext();

///////////////////////////////////////////////////////////////////////////
// const getData = async function () {
//   try {
//     const data = await axios.get(
//       "https://e-commerce-project-94b61.firebaseio.com/TEMP_1.json"
//     );
//     return data.data;
//   } catch (error) {
//     console.log(error);
//   }
// };
///////////////////////////////////////////////////////////////////////////

export const StoreProvider = (props) => {
  const [allProducts, setAllProducts] = useState(products);
  const [activeItem, setActiveItem] = useState(null);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  ////////////////////////////////////////////////////////////////////////////////////

  ///////////////////////////////////////
  // useEffect(() => {
  //   getData().then((data) => setAllProducts(data));
  // }, []);

  /////////////////////////////////////////
  return (
    <StoreContext.Provider
      value={[
        allProducts,
        activeItem,
        setActiveItem,
        cart,
        setCart,
        total,
        setTotal,
      ]}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

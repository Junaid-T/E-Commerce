import { useContext } from "react";
import "./App.css";
import NavBar from "./Componants/NavBar/NavBar";
import AllProducts from "./Containers/AllProducts/AllProducts";
import ProductPopUp from "./Containers/ProductPopUp/ProductPopUp";
import Login from "./Componants/Login/Login";
import Cart from "./Componants/Cart/Cart";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Checkout from "./Componants/Checkout/Checkout";
import { StoreContext } from "./Contexts/store";
import { AuthorizedContext } from "./Contexts/Authorized";

function App() {
  const store = useContext(StoreContext);
  const auth = useContext(AuthorizedContext);

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={AllProducts} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/cart/checkout" exact component={Checkout} />
        </Switch>
        {store.activeItem ? <ProductPopUp /> : null}
        {auth.popup ? <Login /> : null}
      </div>
    </BrowserRouter>
  );
}

export default App;

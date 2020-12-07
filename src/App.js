import "./App.css";
import NavBar from "./Componants/NavBar/NavBar";
import AllProducts from "./Containers/AllProducts/AllProducts";
import ProductPopUp from "./Containers/ProductPopUp/ProductPopUp";
import Login from "./Componants/Login/Login";
import Cart from "./Componants/Cart/Cart";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Checkout from "./Componants/Checkout/Checkout";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={AllProducts} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/cart/checkout" exact component={Checkout} />
        </Switch>
        <ProductPopUp />
        <Login />
      </div>
    </BrowserRouter>
  );
}

export default App;

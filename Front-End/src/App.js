import { useContext, useEffect } from "react";
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
import OrderHistory from "./Containers/OrderHistory/OrderHistory";
import ErrorBoundary from "./UI/ErrorBoundary/ErrorBoundary";

function App() {
  const store = useContext(StoreContext);
  const auth = useContext(AuthorizedContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      auth.setAuthorized(true);
    }
  });

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <ErrorBoundary>
            <Route path="/" exact component={AllProducts} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/cart/checkout" exact component={Checkout} />
            <Route path="/orderhistory" exact component={OrderHistory} />
          </ErrorBoundary>
        </Switch>
        {store.activeItem ? <ProductPopUp /> : null}
        {auth.popup ? <Login /> : null}
      </div>
    </BrowserRouter>
  );
}

export default App;

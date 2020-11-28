import "./App.css";
import NavBar from "./Componants/NavBar/NavBar";
import AllProducts from "./Containers/AllProducts/AllProducts";
import ProductPopUp from "./Containers/ProductPopUp/ProductPopUp";
import Cart from "./Componants/Cart/Cart";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={AllProducts} />
          <Route path="/cart" component={Cart} />
        </Switch>
        <ProductPopUp />
      </div>
    </BrowserRouter>
  );
}

export default App;

//<AllProducts />
//<Cart />

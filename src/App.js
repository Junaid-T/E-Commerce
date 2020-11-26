import "./App.css";
import NavBar from "./Componants/NavBar/NavBar";
import AllProducts from "./Containers/AllProducts/AllProducts";
import ProductPopUp from "./Containers/ProductPopUp/ProductPopUp";

function App() {
  return (
    <div className="App">
      <NavBar />
      <AllProducts />
      <ProductPopUp />
    </div>
  );
}

export default App;

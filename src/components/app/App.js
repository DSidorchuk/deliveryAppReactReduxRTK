import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../header/Header";
import MainPage from "../pages/MainPage";
import ShoppingCart from "../pages/ShoppingCart";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/shoppingcart" element={<ShoppingCart/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

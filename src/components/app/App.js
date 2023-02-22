import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../header/Header";
import MainPage from "../pages/MainPage";
import ShoppingCartPage from "../pages/ShoppingCartPage";
import SingleGoodsItemPage from "../pages/SingleGoodsItemPage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/shoppingcart" element={<ShoppingCartPage/>}/>
          <Route path="/:shopId/:id" element={<SingleGoodsItemPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

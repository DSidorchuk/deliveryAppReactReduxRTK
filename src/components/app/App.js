import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../header/Header";
import MainPage from "../pages/mainPage/MainPage";
import ShoppingCartPage from "../pages/shoppingCartPage/ShoppingCartPage";
import HistoryPage from "../pages/historyPage/HistoryPage";
import CouponesPage from "../pages/couponesPage/CouponesPage";
import SingleGoodsItemPage from "../pages/singleGoodsItemPage/SingleGoodsItemPage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/shoppingcart" element={<ShoppingCartPage/>}/>
          <Route path="/history" element={<HistoryPage/>}/>
          <Route path="/coupones" element={<CouponesPage/>}/>
          <Route path="/:shop/:id" element={<SingleGoodsItemPage/>}/> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

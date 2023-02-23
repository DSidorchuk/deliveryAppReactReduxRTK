import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../header/Header";
import MainPage from "../pages/mainPage/MainPage";
import ShoppingCartPage from "../pages/shoppingCartPage/ShoppingCartPage";
import HistoryPage from "../pages/historyPage/HistoryPage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/shoppingcart" element={<ShoppingCartPage/>}/>
          <Route path="/history" element={<HistoryPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

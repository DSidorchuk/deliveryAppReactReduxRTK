import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Header from "../header/Header";
import Spinner from "../spinner/Spinner";

const MainPage = lazy(() => import("../pages/mainPage/MainPage"));
const BasketPage = lazy(() => import("../pages/basketPage/BasketPage"));
const HistoryPage = lazy(() => import("../pages/historyPage/HistoryPage"));
const CouponesPage = lazy(() => import("../pages/couponesPage/CouponesPage"));
const SingleGoodsItemPage = lazy(() => import("../pages/singleGoodsItemPage/SingleGoodsItemPage"));
const Page404 = lazy(() => import("../pages/page404/404"));


const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Suspense fallback={<Spinner/>}>
          <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/shoppingcart" element={<BasketPage/>}/>
            <Route path="/history" element={<HistoryPage/>}/>
            <Route path="/coupones" element={<CouponesPage/>}/>
            <Route path="/:shop/:id" element={<SingleGoodsItemPage/>}/> 
            <Route path="*" element={<Page404/>}/>
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;

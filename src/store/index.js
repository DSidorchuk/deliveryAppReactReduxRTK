import { configureStore } from '@reduxjs/toolkit';
import shops from '../components/shopList/shopListSlice';
import goods from '../components/goodsList/goodsSlice';
import history from '../components/historyList/historySlice'


const store = configureStore({
    reducer: {shops, goods, history},
    devTools: process.env.NODE_ENV !== 'production'
});

export default store;
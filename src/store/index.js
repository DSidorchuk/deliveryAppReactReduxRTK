import { configureStore } from '@reduxjs/toolkit';
import shops from '../components/shops/shopListSlice';
import goods from '../components/goods/goodsSlice';


const store = configureStore({
    reducer: {shops, goods},
    devTools: process.env.NODE_ENV !== 'production'
});

export default store;
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {useHttp} from '../../hooks/http.hook';

const initialState = {
    goodsList: [],
    goodsLoadingStatus: 'idle',
    orderFromShop: '', // Goods can be ordered only from one shop
    basket: []
}

export const fetchGoods = createAsyncThunk(
    "goods/fetchGoods",
    (shop) => {
        const {request} = useHttp();
        return request(`http://localhost:3001/store/${shop}`);
    }
)

const goodsSlice = createSlice({
    name: "goods",
    initialState,
    reducers: {
        setOrderFromShop: (state, action) => {state.orderFromShop = action.payload},
        addToBasket: (state, action) => {state.basket.push(action.payload)},
        removeFromBasket: (state, action) => {
            state.basket = state.basket.filter(item => item.id !== action.payload)
        },
        clearBasket: state => {
            state.basket = [];
            state.orderFromShop = '';
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchGoods.pending, state => {state.goodsLoadingStatus = "loading"})
            .addCase(fetchGoods.fulfilled, (state, action) => {
                state.goodsList = action.payload.menu
                state.goodsLoadingStatus = "idle";
            })
            .addCase(fetchGoods.rejected, state => {state.goodsLoadingStatus = "error"})
            .addDefaultCase( () => {});
    }
})

const {actions, reducer} = goodsSlice;

export default reducer;

export const {setOrderFromShop,
              addToBasket,
              removeFromBasket,
              clearBasket} = actions;
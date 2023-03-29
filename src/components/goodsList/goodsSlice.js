import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {useHttp} from '../../hooks/http.hook';

const initialState = {
    goodsList: [],
    goodsLoadingStatus: 'idle',
    orderFromShop: '', // Goods can be ordered only from one shop
    basket: [],
    basketAmount: 0,
    coupones: [],
    couponesLoadingStatus: 'idle',
    discount: 0,
    product: '',
    productLoadingStatus: 'idle'
}


// Fetch goods from the server
export const fetchGoods = createAsyncThunk(
    "goods/fetchGoods",
    (shop) => {
        const {request} = useHttp();
        return request(`http://18.193.94.131/products?shop=${shop}`);
    }
)

// Fetch coupones from the server
export const fetchCoupones = createAsyncThunk(
    "goods/fetchCoupones",
    () => {
        const {request} = useHttp();
        return request(`http://18.193.94.131/coupones`);
    }
)

// Fetch single goods item data
export const fetchProduct = createAsyncThunk(
    "goods/fetchProduct",
    (item) => {
        const {request} = useHttp();
        return request(`http://18.193.94.131/product/${item}`);
    }
)

/*
Check if array in basket has same goods item 
and return either -1 if basket empty or hasn`t same goods item
or index of same item
*/
const indexOfItem = (arr, id) => {
    let index = -1;
    if (arr.length === 0) {
        return index;
    } else {
        arr.forEach((item, i) => {
            if (item.id === id) {
                index = i;
            }
        })
    }
    return index;
}

const calculateAmount = (arr) => {
    let amount = 0;
    arr.forEach(item => {
        amount+= item.qtty * item.price;
    })
    return amount;
}

const goodsSlice = createSlice({
    name: "goods",
    initialState,
    reducers: {
        setOrderFromShop: (state, action) => {state.orderFromShop = action.payload},
        addToBasket: (state, action) => {
            const index = indexOfItem(state.basket, action.payload.id);
            if ( index === -1) {
                state.basket.push({...action.payload, qtty: 1})
            } else {
                state.basket[index].qtty++;
            }
            state.basketAmount = calculateAmount(state.basket);
        },
        clearBasket: state => {
            state.basket = [];
            state.orderFromShop = '';
            state.basketAmount = 0;
            state.discount = 0;
        },
        incrQtty: (state, action) => {
            const index = indexOfItem(state.basket, action.payload);
            state.basket[index].qtty++;
            state.basketAmount = calculateAmount(state.basket);
        },
        decrQtty: (state, action) => {
            const index = indexOfItem(state.basket, action.payload);
            state.basket[index].qtty === 1
                ? state.basket = state.basket.filter(item => item.id !== action.payload)
                : state.basket[index].qtty--;
            state.basketAmount = calculateAmount(state.basket);
            if(!state.basket.length) {
                state.orderFromShop = '';
            }
        },
        setDiscount: (state, action) => {state.discount = action.payload}
    },
    extraReducers: builder => {
        builder
            .addCase(fetchGoods.pending, state => {state.goodsLoadingStatus = "loading"})
            .addCase(fetchGoods.fulfilled, (state, action) => {
                state.goodsLoadingStatus = "idle";
                state.goodsList = action.payload
                
            })
            .addCase(fetchGoods.rejected, state => {state.goodsLoadingStatus = "error"})
            .addCase(fetchCoupones.pending, state => {state.couponesLoadingStatus = "loading"})
            .addCase(fetchCoupones.fulfilled, (state, action) => {
                state.coupones = action.payload
                state.couponesLoadingStatus = "idle";
            })
            .addCase(fetchCoupones.rejected, state => {state.couponesLoadingStatus = "error"})
            .addCase(fetchProduct.pending, state => {state.productLoadingStatus = "loading"})
            .addCase(fetchProduct.fulfilled, (state, action) => {
                state.product = action.payload
                state.productLoadingStatus = "idle";
            })
            .addCase(fetchProduct, state => {state.productLoadingStatus = "error"})
            .addDefaultCase( () => {});
    }
})

const {actions, reducer} = goodsSlice;

export default reducer;

export const {setOrderFromShop,
              addToBasket,
              clearBasket,
              incrQtty,
              decrQtty,
              setDiscount} = actions;
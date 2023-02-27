import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {useHttp} from '../../hooks/http.hook';

const initialState = {
    orders: [],
    presentOrders: [],
    ordersOfUser: [],
    orderPostStatus: 'idle',
    ordersLoadingStatus: 'idle'
}

export const postOrder = createAsyncThunk(
    "history/postOrder",
    (order) => {
        const {request} = useHttp();
        return request(`http://localhost:3001/orders`, "POST", JSON.stringify(order));
    }
);

export const getOrders = createAsyncThunk(
    "history/getOrders",
    () => {
        const {request} = useHttp();
        return request(`http://localhost:3001/orders`);
    }
)

const historySlice = createSlice({
    name: "history",
    initialState,
    reducers: {
        checkUserOrders: (state, action) => {
            state.ordersOfUser = state.orders.filter(item => item.phone === action.payload.phone);
        }
    },
    extraReducers: builder => {
        builder
            .addCase(postOrder.pending, state => {state.orderPostStatus = "sending"})
            .addCase(postOrder.fulfilled, (state, action) => {
                state.orderPostStatus = "idle";
                state.presentOrders.push(action.payload);
            })
            .addCase(postOrder.rejected, state => {state.orderPostStatus = "error"})
            
            .addCase(getOrders.pending, state => {state.ordersLoadingStatus = "sending"})
            .addCase(getOrders.fulfilled, (state, action) => {
                state.ordersLoadingStatus = "idle";
                state.orders = action.payload;
            })
            .addCase(getOrders.rejected, state => {state.ordersLoadingStatus = "error"})
            .addDefaultCase(() => {});
    }
});

const {actions, reducer} = historySlice;

export const {checkUserOrders} = actions;

export default reducer;


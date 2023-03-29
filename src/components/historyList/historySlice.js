import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {useHttp} from '../../hooks/http.hook';

const initialState = {
    presentOrders: [],
    ordersOfUser: [],
    orderPostStatus: 'idle',
    ordersLoadingStatus: 'idle'
}

export const postOrder = createAsyncThunk(
    "history/postOrder",
    (order) => {
        const {request} = useHttp();
        return request(`http://18.193.94.131/order`, "POST", JSON.stringify(order));
    }
);

export const getOrders = createAsyncThunk(
    "history/getOrders",
    (num) => {
        const {request} = useHttp();
        console.log(num);
        return request(`http://18.193.94.131/history/${num}`);
    }
)

const historySlice = createSlice({
    name: "history",
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        builder
            .addCase(postOrder.pending, state => {state.orderPostStatus = "sending"})
            .addCase(postOrder.fulfilled, (state, action) => {
                state.orderPostStatus = "idle";
                state.presentOrders.push(action.payload);
            })
            .addCase(postOrder.rejected, state => {state.orderPostStatus = "error"})
            
            .addCase(getOrders.pending, state => {
                state.ordersLoadingStatus = "sending"
            })
            .addCase(getOrders.fulfilled, (state, action) => {
                state.ordersLoadingStatus = "idle";
                state.ordersOfUser = action.payload;
            })
            .addCase(getOrders.rejected, state => {state.ordersLoadingStatus = "error"})
            .addDefaultCase(() => {});
    }
});

const {actions, reducer} = historySlice;

export const {checkUserOrders} = actions;

export default reducer;


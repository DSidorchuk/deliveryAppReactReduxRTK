import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {useHttp} from '../../hooks/http.hook';

const initialState = {
    orders: [],
    presentOrders: [],
    ordersOfUser: [],
    orderPostStatus: 'idle'
}

export const postOrder = createAsyncThunk(
    "history/postOrder",
    (order) => {
        const {request} = useHttp();
        return request(`http://localhost:3001/orders`, "POST", JSON.stringify(order));
    }
);

const historySlice = createSlice({
    name: "history",
    initialState,
    reducers: {
        getUserOrders: (state, action) => {}
    },
    extraReducers: builder => {
        builder
            .addCase(postOrder.pending, state => {state.orderPostStatus = "sending"})
            .addCase(postOrder.fulfilled, (state, action) => {
                state.orderPostStatus = "idle";
                state.presentOrders.push(action.payload);
                console.log(action.payload);
            })
            .addCase(postOrder.rejected, state => {state.orderPostStatus = "error"})
    }
});

const {actions, reducer} = historySlice;

export default reducer;


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {useHttp} from '../../hooks/http.hook';

const initialState = {
    shops: [],
    shopsLoadingStatus: 'idle',
    activeShop: "mcdonalds",
}

export const fetchShops = createAsyncThunk(
    'shops/fetchShops',
    () => {
        const {request} = useHttp();
        return request("http://18.193.94.131/shopslist");
    }
)


const shopsSlice = createSlice({
    name: 'shops',
    initialState,
    reducers: {
        setActiveShop: (state, action) => {state.activeShop = action.payload}
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchShops.pending, state => {state.shopsLoadingStatus = 'loading'})
            .addCase(fetchShops.fulfilled, (state, action) => {
                state.shops = action.payload;
                state.shopsLoadingStatus = 'idle';
            })
            .addCase(fetchShops.rejected, state => {state.shopsLoadingStatus = 'error'})
            .addDefaultCase( () => {});
    }
});

const {actions, reducer} = shopsSlice;

export default reducer;

export const {setActiveShop} = actions;
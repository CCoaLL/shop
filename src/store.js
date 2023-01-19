import { configureStore, createSlice } from "@reduxjs/toolkit";

let products = createSlice(
    {
        name: 'product',
        initialState: [
            {id : 0, name : 'White and Black', count : 2},
            {id : 2, name : 'Grey Yordan', count : 1}
        ],
        reducers: {
            changeCount(state, id) {
                if(id.payload == 0) {
                    state[0].count += 1;
                } else if(id.payload == 2) {
                    state[1].count += 1;
                }
            }
        }
    }
)

export let { changeCount } = products.actions;

export default configureStore({
    reducer: {
        products: products.reducer,
    }
}) 
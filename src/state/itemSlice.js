import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {loading: false, error: null, records: []}

export const itemFilter = createAsyncThunk('items/itemFilter', async(prefix, thunkAPI) => {
    const {rejectWithValue} = thunkAPI
    try {
        const res = await fetch(`http://localhost:5000/items?cat_prefix=${prefix}`)
        const data = await res.json()
        // console.log(data)
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const itemSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        // prevent extra re-rendering when moving from page to page
        clearRecords(state) {
            state.records = [];
        }
    },
    extraReducers: (builder) => {
        builder.addCase(itemFilter.pending, (state) => {
            state.loading = true;
            state.error = null
        })
        builder.addCase(itemFilter.fulfilled, (state, action) => {
            state.loading = false;
            state.records = action.payload
        })
        builder.addCase(itemFilter.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload
        })
    }
})

export default itemSlice.reducer
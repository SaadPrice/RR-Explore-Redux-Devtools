import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: []
};

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            return { items: [...state.items, action.payload] };
        },
        removeOne: (state, action) => {
            const newItems = state.items.filter((item, index) => index !== action.payload);
            return { items: newItems };
        },
        clearTodo: () => {
            return { items: [] };
        }
    }
});

export const { addTodo, removeOne, clearTodo } = todoSlice.actions;

export default todoSlice.reducer;

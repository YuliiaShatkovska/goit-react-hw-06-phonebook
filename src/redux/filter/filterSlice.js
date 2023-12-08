import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialStateFilter';

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterContact: {
      reducer(state, action) {
        state.filter = action.payload;
      },
      prepare(value) {
        return { payload: value };
      },
    },
  },
});

export const { filterContact } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

import { createSlice, nanoid } from '@reduxjs/toolkit';
import { initialState } from './initialStateContacts';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContactAction: {
      reducer(state, action) {
        state.contacts = [...state.contacts, action.payload];
      },
      prepare(name, number) {
        return { payload: { id: nanoid(), name, number } };
      },
    },
    deleteContactAction(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContactAction, deleteContactAction } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;

const persistConfig = {
  key: 'contacts',
  storage,
};

export const persistedContactReducer = persistReducer(
  persistConfig,
  contactsReducer
);

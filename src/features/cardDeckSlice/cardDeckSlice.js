import { createSlice } from '@reduxjs/toolkit'

/* Read https://redux-toolkit.js.org/usage/immer-reducers to understand how to change state here. */

import {data, indexedData} from "../../mockdata/data";

const initialState = {
  status: "checking",
  index: 0,
  cards : data,
  indexedCards: indexedData,
  filteredCards : data,
}

// cards expect the following:
// TODO: fill this in.

export const cardDeckSlice = createSlice({
  name: 'cardDeck',
  initialState: initialState,

  reducers: {
    incrementIndex: (state,action) => {
      state.index = (state.index + 1) % state.cards.length;
    },
    setIndex: (state,action) => {
      state.index = action.payload;
    },
    setFilteredCards: (state, action) => {
      JSON.stringify(action.payload)
      state.filteredCards = action.payload;
      state.index=0;
    }
  }
});

// Action creators are generated for each case reducer function
export const {
  incrementIndex,
  setIndex,
  setFilteredCards,
} = cardDeckSlice.actions

export default cardDeckSlice.reducer

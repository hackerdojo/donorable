import { createSlice } from '@reduxjs/toolkit'

/* Read https://redux-toolkit.js.org/usage/immer-reducers to understand how to change state here. */

import {data, indexedData} from "../../mockdata/data";

const initialState = {
  status: "checking",
  index: 2,
  cards : data,
  indexedCards: indexedData
}

// cards expect the following:
// TODO: fill this in.

export const cardDeckSlice = createSlice({
  name: 'cardDeck',
  initialState: initialState,

  reducers: {
    incrementIndex: (state) => {
      state.index = (state.index + 1) % state.cards.length;
    },
  }
});

// Action creators are generated for each case reducer function
export const {
  incrementIndex,

} = cardDeckSlice.actions

export default cardDeckSlice.reducer

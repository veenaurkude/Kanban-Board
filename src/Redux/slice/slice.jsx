import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "dataList",
  initialState: {
    list: [
      { id: 0, task: "To do" },
      { id: 1, task: "Doing" },
      { id: 2, task: "Done" },
    ],
    cards: [
      { id: 0, card: [] },
      { id: 1, card: [] },
      { id: 2, card: [] },
    ],
  },
  reducers: {
    addTask: (state, action) => {
      if (action.payload.task) {
        state.list.push({
          id: action.payload.id,
          task: action.payload.task,
        });
        state.cards.push({ id: action.payload.id, card: [] });
      }
    },
    addCard: (state, action) => {
      state.cards.map((card, ind) => {
        if (action.payload.id == card["id"]) {
          state.cards[ind].card.push(action.payload.value);
        }
      });
    },
  },
});

export const { addTask, addCard } = dataSlice.actions;

export default dataSlice.reducer;

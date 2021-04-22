export default function authorsReducer(state = [], action) {
  let idx;
  switch (action.type) {
    case "ADD_AUTHOR":
      return [...state, action.author];

    case "REMOVE_BOOK":
      idx = state.findIndex((author) => author.id === action.id);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];
  }
}

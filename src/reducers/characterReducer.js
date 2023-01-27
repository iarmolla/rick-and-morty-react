const initialState = {};
export default function products(state = initialState, action) {
  switch (action.type) {
    case "GET_CHARACTER_SUCCESS":
      return {
        ...state,
        ...action.character,
      };
    default:
      return state;
  }
}

const initialState = [];
export default function products(state = initialState, action) {
  switch (action.type) {
    case "GET_CHARACTERS_SUCCESS":
      return {
        ...state,
        ...action.characters,
      };    
    default:
      return state;
  }
}

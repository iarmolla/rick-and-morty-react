const initialState = [];
export default function products(state = initialState, action) {
  switch (action.type) {
    case "GET_CHARACTERS_SUCCESS":
      return {
        ...state,
        ...action.characters,
      };
    case "UPDATE_CHARACTERS":     
     state.results = state?.results.sort(sortArray);
     return {
      ...state
     }
    case "ORDER_BY_GENDER":
      state?.results.sort(sortByGender);
      return {
        ...state
       }
    case "SEARCH_SUCCESS":
      return {
        ...action.character,
      };
    case "SEARCH_FAILED":
      return (action.error)
    default:
      return state;
  }
}

function sortArray(x, y) {
  return x.name.localeCompare(y.name);
}

function sortByGender(x, y) {
  return x.gender.localeCompare(y.gender);
}

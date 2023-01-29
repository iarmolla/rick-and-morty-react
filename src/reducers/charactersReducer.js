const initialState = [];
export default function products(state = initialState, action) {
  switch (action.type) {
    case "GET_CHARACTERS_SUCCESS":
      return {
        ...state,
        ...action.characters,
      };
    case "UPDATE_CHARACTERS":
      state?.results.sort(sortArray);
    case "ORDER_BY_GENDER":
      state?.results.sort(sortByGender);
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

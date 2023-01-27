const initialState = [];
export default function products(state = initialState, action) {
  switch (action.type) {
    case "GET_EPISODES_SUCCESS":
      return {
        ...state,
        ...action.episodes,
      };    
    default:
      return state;
  }
}

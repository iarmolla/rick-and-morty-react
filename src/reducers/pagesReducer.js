const initialState = {pages: 1};
export default function products(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_PAGE":
        const pages = action.page
      return {
        pages
      };    
    default:
      return state;
  }
}

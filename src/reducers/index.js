import { combineReducers } from "redux";
import charactersReducer from "./charactersReducer";
import characterReducer from "./characterReducer";
import episodesReducer from "./episodesReducer";
import pagesReducer from "./pagesReducer";


const rootReducer = combineReducers({
  characters: charactersReducer,
  character:characterReducer,
  episodes: episodesReducer,
  pages: pagesReducer
});

export default rootReducer;

import { combineReducers } from "redux";
import charactersReducer from "./charactersReducer";
import characterReducer from "./characterReducer";
import episodesReducer from "./episodesReducer";


const rootReducer = combineReducers({
  characters: charactersReducer,
  character:characterReducer,
  episodes: episodesReducer
});

export default rootReducer;

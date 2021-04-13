import { combineReducers } from "redux";
import settings from "./settings";
import map from "./map";
import markers from "./markers";

export default combineReducers({ settings, map, markers });
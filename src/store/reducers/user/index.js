import { combineReducers } from "redux";
import userPostReducer from './userPostData';
import userCameraCaptureReducer from './userCameraCapture';
import userLocalDataReducer from "./userLocalDummyData";
import userAppLoadereReducer from "./userAppLoader";
const userReducers = combineReducers({
    userPost:userPostReducer,
    userCameraCapture:userCameraCaptureReducer,
    userLocalData:userLocalDataReducer,
    userAppLoadere:userAppLoadereReducer
});

export { userReducers };
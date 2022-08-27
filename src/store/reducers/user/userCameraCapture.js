import {USER} from '../../actions';

const userCameraCaptureReducer = (state = null, action) => {
  switch (action.type) {
    case USER.SET_CAMERA_CAPTURE_IMAGE:
      return action.image;
    default:
      return state;
  }
};

export default userCameraCaptureReducer;

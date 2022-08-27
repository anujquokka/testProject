import {USER} from './action-types';

const getAllPost = () => ({
  type: USER.GET_POST,
});

const setAllPost = (post) => ({
  type:USER.SET_ALL_POST,
  post
});

const setCameraCaptureImage = (image) => ({
  type:USER.SET_CAMERA_CAPTURE_IMAGE,
  image
});

const setLocalDummyData = (data) => ({
  type:USER.SET_LOCAL_DUMMY_DATA,
  data
});

const setAppLoader = (val) => ({
  type:USER.APP_LOADER,
  val
})

export {
  getAllPost,
  setAllPost,
  setCameraCaptureImage,
  setLocalDummyData,
  setAppLoader
};

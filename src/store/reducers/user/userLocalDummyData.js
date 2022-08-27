import {USER} from '../../actions';

const userLocalDataReducer = (state = null, action) => {
  switch (action.type) {
    case USER.SET_LOCAL_DUMMY_DATA:
      return action.data;
    default:
      return state;
  }
};

export default userLocalDataReducer;

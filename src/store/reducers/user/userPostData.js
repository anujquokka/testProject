import {USER} from '../../actions';

const userPostReducer = (state = null, action) => {
  switch (action.type) {
    case USER.SET_ALL_POST:
      return action.post;
    default:
      return state;
  }
};

export default userPostReducer;

import {USER} from '../../actions';

const userAppLoadereReducer = (state = false, action) => {
  switch (action.type) {
    case USER.APP_LOADER:
      return action.val;
    default:
      return state;
  }
};

export default userAppLoadereReducer;

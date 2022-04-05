import { combineReducers } from 'redux';

const INITIAL_STATE = {
  current: [],
  possible: [
    'Akash',
    'Akhil',
    'Chandra',
  ],
};

const membersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_MEMBER':
      const {current, possible} = state;
      const addedMember = possible.splice(action.payload, 1);
      current.push(addedMember);
      const newState = {current, possible};
      return newState;
    default:
      return state
  }
}

export default combineReducers({
  members: membersReducer
})
import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

import schedule from './schedule';

const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log('HYDRATE', action);
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  schedule,
});

export default rootReducer;
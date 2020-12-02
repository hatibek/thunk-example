import {createStore, applyMiddleware} from 'redux'
import loggerMiddleware from 'redux-logger'
import axios from 'axios';
import thunkMiddleware from 'redux-thunk';

const GOT_PUPPIES = 'GOT_PUPPIES';

const initialState = {
  puppies: []
}

export const gotPuppies = (puppies) => {
  return {
    type: GOT_PUPPIES,
    puppies
  }
}

export const getPuppies = () => {
  // change into a thunk!!!
  return async (dispatch, getState, extraArguments) => {
    const {data} = await axios.get('/puppies');
    dispatch(gotPuppies(data));
  }
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case GOT_PUPPIES:
      const allPuppies = [...state.puppies, ...action.puppies];
      return {
        ...state,
        puppies: allPuppies
      }
    default:
      return state;
  }
}

const middlewares = applyMiddleware(
  loggerMiddleware,
  thunkMiddleware
)

const store = createStore(
  reducer,
  middlewares
)

export default store;
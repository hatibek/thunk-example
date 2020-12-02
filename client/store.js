import {createStore, applyMiddleware} from 'redux'
import loggerMiddleware from 'redux-logger'

const ADD_PUPPIES = 'ADD_PUPPIES';

const initialState = {
  puppies: []
}

export const addPuppies = (puppies) => {
  return {
    type: ADD_PUPPIES,
    puppies
  }
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_PUPPIES:
      const allPuppies = [...state.puppies, ...action.puppies];
      return {
        ...state,
        puppies: allPuppies
      }
    default:
      return state;
  }
}

const store = createStore(
  reducer,
  applyMiddleware(loggerMiddleware)
)

export default store;
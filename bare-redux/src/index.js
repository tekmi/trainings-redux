import {createStore} from 'redux';

// Action Types
const actionTypes = {
  increment: 'INCREMENT',
  decrement: 'DECREMENT'
};

// Action Creators
const actionCreators = {
  increment: (incrementBy = 1) => {
    return {
      type: actionTypes.increment,
      incrementBy,
    }
  },
  decrement: () => {
    return {
      type: actionTypes.decrement
    }
  }
};

// Initial State
const initialState = {
  counter: 0,
  name: 'Adam',
};

// Root Reducer
const rootReducer = (state = initialState, action) => {
  console.log('Action: ', action);
  switch (action.type) {
    case actionTypes.increment:
      return {
        ...state,
        counter: state.counter + action.incrementBy
      };
    case actionTypes.decrement:
      return {
        ...state,
        counter: state.counter - 1
      };
    default:
      return state;
  }
};

// Store initialization
const store = createStore(rootReducer);
console.log('Store: Initial State', store.getState());

// View Listener creation and attachment to store
const updateViewsListener = () => {
  console.log('Listener: updateViews', store.getState());
};
store.subscribe(updateViewsListener);

// Synchronous actions dispatching
store.dispatch(actionCreators.increment());
store.dispatch(actionCreators.decrement());
store.dispatch(actionCreators.increment(2));
console.log('Store: After Dispatch', store.getState());


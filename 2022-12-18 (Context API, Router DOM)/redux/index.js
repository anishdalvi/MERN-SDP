const { createStore } = require("redux");

/**
 * Implement Action
 */

const BUY_CAR = "BUY_CAR";
const BUY_BIKE = "BUY_BIKE";
const BUY_N_CARS = "BUY_N_CARS";

function buyCar() {
  return {
    type: BUY_CAR,
  };
}

function buyBike() {
  return {
    type: BUY_BIKE,
  };
}

/**
 * Implement Reducer
 * (prevState, action) => newState
 */

const initialState = {
  numberOfCars: 10,
  numberOfCARS: 20,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case BUY_CAR:
      return {
        ...state,
        numberOfCars: state.numberOfCars - 1,
      };
    case BUY_BIKE:
      return {
        ...state,
        numberOfBikes: state.numberOfBikes - 1,
      };
    case BUY_N_CARS:
      return {
        ...state,
        numberOfCars: state.numberOfCars - 3,
      };
    default:
      return state;
  }
}

/**
 * Implement Store
 * Holds application state
 * Allow access to state via getState()
 * Allows state to be update via dispatch (action)
 * Registers listeners via subscribers (listener)
 * Handles unregistering of listners via the function returned by subsscribe(listener)
 */

const store = createStore(reducer);
console.log("Initial state", store.getState());
// const unsubscribe = store.subscribe(() =>
//   console.log("Updated state", store.getState())
// );

store.dispatch(buyCar());
store.dispatch({  type: BUY_N_CARS });
// store.dispatch(buyCar());
// store.dispatch(buyCar());
// store.dispatch(buyBike());
// store.dispatch(buyBike());
// store.dispatch(buyBike());
// unsubscribe();


// Custom store

// function createStore(reducer) {
//     let initialState = {
//         numberOfCars: 10,
//         numberOfBikes: 20,
//     };
//     return {
//         dispatch: (action) => {
//             initialState = reducer(initialState, action)
//         },
//         getState: () => initialState
//     }
// }

import { createStore } from 'redux';

const reducerFx = (state = { counter: 0 }, action) => {
    // Reducer functions should be synchrous function
    // We should not mutate originl state.

    if (action.type === 'INC') {
        return { counter: state.counter + 1 };
    } else if (action.type === 'DEC') {
        return { counter: state.counter - 1 };
    } else if (action.type === 'ADD') {
        return {counter: state.counter + action.payload};
    }
    return state;
}

const store = createStore(reducerFx);
export default store;
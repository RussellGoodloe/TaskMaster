import {createStore} from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});
const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});
const setCount = ({ count = 1} = {}) => ({
    type: 'SET',
    count
});
const resetCount = () => ({
    type: 'RESET'
});

//reducers
//1. Reducers are pure functions(independent of outside variables)
//2. Never change the state or action

const  countReducer = (state = { count:0 }, action)=>{
    const { incrementBy, decrementBy, count} = action;
    switch(action.type) {
        case 'INCREMENT':
            return{
                count: state.count + incrementBy
            };
        case 'DECREMENT':
            return{
                count: state.count - decrementBy
            };
        case 'SET':
            return{
                count: action.count
            };
        case 'RESET':
            return{
                count: 0
            };
        default:
            return state; 
    }
};

const store = createStore(countReducer);

store.subscribe(() => {
    console.log(store.getState());
});


store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 2 }));
store.dispatch(resetCount());
store.dispatch(setCount({ count: 69}));

import { createStore, combineReducers } from 'redux';
import taskReducer from '../reducers/tasks';
import filtersReducer from '../reducers/filters';
import emailsReducer from '../reducers/emailSettings';


export default () => {
    const store = createStore(
        combineReducers({
            tasks: taskReducer,
            filters: filtersReducer,  
            emails: emailsReducer   
        })
    );
    return store;
};

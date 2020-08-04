import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addTask } from './actions/tasks';
import { setTextFilter } from './actions/filters';
import getVisibleTasks from './selectors/tasks';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
//import { firebase } from './firebase/firebase';

const store = configureStore();

store.dispatch(addTask({ description: 'Finish this project', project: 'MIS497', dueDate: 10000, createdAt: 5000}));

const state = store.getState();

const visibleTasks = getVisibleTasks(state.tasks, state.filters)

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

// firebase.auth().onAuthStateChanged(() => {
//     if (user) {
//         console.log("logged in");
//     } else {
//         console.log("logged out");
//     }
// });
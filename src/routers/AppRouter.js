import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Header from "../components/Header";
import TaskDashboard from "../components/TaskDashboard";
import SettingsPage from '../components/SettingsPage';
import EditTaskPage from '../components/EditTaskPage';
import NotFoundPage from '../components/NotFoundPage';
import NewTaskPage from '../components/AddTaskPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={TaskDashboard} exact={true}/>
                <Route path="/settings" component={SettingsPage} />
                <Route path="/edit/:id" component={EditTaskPage} />
                <Route path="/create" component={NewTaskPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);
export default AppRouter;
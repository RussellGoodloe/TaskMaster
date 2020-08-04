import React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions/tasks';
import TaskForm from './TaskForm';

export class AddTaskPage extends React.Component {
    onSubmit = (task) => {
        this.props.addTask(task);
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Add Task</h1>
                    </div>
                </div>
                <div className="content-container">
                    <TaskForm 
                        onSubmit={this.onSubmit}
                    />
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addTask: (task) => dispatch(addTask(task))
});

export default connect(undefined, mapDispatchToProps)(AddTaskPage);
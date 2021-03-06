import React from 'react';
import { connect } from 'react-redux';
import TaskForm from './TaskForm';
import { editTask, removeTask } from '../actions/tasks';

export class EditTaskPage extends React.Component {
    onSubmit = (task) => {
        this.props.editTask(this.props.task.id, task);
        this.props.history.push('/');
    };
    onRemove = () => {
        this.props.removeTask({ id: this.props.task.id});
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Task</h1>
                    </div>
                </div>
                <div className="content-container">
                    <TaskForm 
                        task={this.props.task}
                        onSubmit={this.onSubmit}
                    />
                    <button className="button button--secondary" onClick={this.onRemove}>Remove</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        task: state.tasks.find((task) => task.id === props.match.params.id)
    };
};

const mapDispatchToProps = (dispatch, props) => ({
    editTask: (id, task) => dispatch(editTask(id, task)),
    removeTask: (data) => dispatch(removeTask(data))
});
 
export default connect(mapStateToProps, mapDispatchToProps)(EditTaskPage);
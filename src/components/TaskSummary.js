import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectTasks from '../selectors/tasks';

const TasksSummary = ({ taskCount = 0, project='' }) => {
    const taskWord = taskCount === 1 ? 'task' : 'tasks' ;
    const projectPhrase = project ? ` related to your ${project} project` : '';
    return (
        <div className="page-header">
            <div className="content-container">
                <h3 className="page-header__title">Viewing <span>{taskCount}</span> {taskWord} <span>{projectPhrase}</span></h3>
                <div className="page-header__actions">
                    <Link className="button"to="/create">Add Task</Link>
                </div>
            </div>
        </div>
    );
};
const mapStateToProps = ( state ) => {
    const visibleTasks = selectTasks(state.tasks, state.filters);
    return {
        taskCount: visibleTasks.length,
        project: state.filters.projectText
    };
};
export default connect(mapStateToProps)(TasksSummary);


//good
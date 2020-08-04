import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const TaskListItem = ({ id, description, project, dueDate }) => (
    <Link className="list-item" to={`/edit/${id}`}>
        <div>
            <h3 className="list-item__title">{description}</h3>
            <span className="list-item__sub-title">{project}</span>
        </div>
        <h3 className="list-item__data">{moment(dueDate).format('MMMM do, YYYY')}</h3>
    </Link>
);

export default TaskListItem;


//good
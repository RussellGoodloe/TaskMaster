import uuid from 'uuid';

export const addTask = (
    {
        description='',
        note='',
        project='',
        dueDate=0,
        createdAt=0
    } = {}
) => (
    {
        type: 'ADD_TASK',
        task: {
            id: uuid(),
            description,
            note,
            project,
            dueDate,
            createdAt
        }
});

export const removeTask = ({ id } = {}) => ({
    type: 'REMOVE_TASK',
    id
});

export const editTask = (id, updates) => ({
    type: 'REMOVE_TASK',
    id,
    updates
});

//looks good
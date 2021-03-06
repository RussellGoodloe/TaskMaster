const defaultTasks = [];

const taskReducer = (state = defaultTasks, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [
                ...state,
                action.task
            ];
        case 'REMOVE_TASK':
            return state.filter(({ id }) => id != action.id);
        case 'EDIT_TASK':
            return state.map((task) => {
                if (task.id === action.id) {
                    return {
                        ...task,
                        ...action.updates
                    };
                } else {
                    return task;
                }
            });
        default:
            return state;
    }
};

export default taskReducer;

//good
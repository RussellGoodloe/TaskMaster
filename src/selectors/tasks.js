import moment from 'moment';

export default (tasks, { text, projectText, sortBy, startDate, endDate }) => {
    return tasks.filter((task) => {
        const createdAtMoment = moment(task.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true ;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = task.description.toLowerCase().includes(text.toLowerCase());
        const projectMatch = task.project.toLowerCase().includes(projectText.toLowerCase());

        return startDateMatch && endDateMatch && textMatch && projectMatch;
    }).sort((a,b) => {
        if (sortBy === 'date') {
            return a.dueDate < b.dueDate ? 1 : -1
        } else if (sortBy === 'project') {
            return a.project < b.project ? 1 : -1
        }
    });
};
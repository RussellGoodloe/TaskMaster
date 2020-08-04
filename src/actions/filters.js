
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});
export const setProjectFilter = (projectText = '') => ({
    type: 'SET_PROJECT_FILTER',
    projectText
});
export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});
export const sortByProject = () => ({
    type: 'SORT_BY_PROJECT'
});
export const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate
});
export const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
});

//good?
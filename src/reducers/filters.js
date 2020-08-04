import moment from 'moment';


const defaultFilters = {
    text: '',
    projectText: '',
    sortBy:'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};

export default (state = defaultFilters, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SET_PROJECT_FILTER':
            return {
                ...state,
                projectText: action.projectText
            };
        case 'SORT_BY_PROJECT':
            return {
                ...state,
                sortBy: 'project'
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    };
};


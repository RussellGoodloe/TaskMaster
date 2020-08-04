import { createStore, combineReducers, bindActionCreators } from 'redux';
import uuid from 'uuid';

//---------------------------------------------------------------------------------------------------
//-----------------------------expense action generators---------------------------------------------
//---------------------------------------------------------------------------------------------------


const addExpense = (
    {
        description = '',
        note = '',
        amount=0,
        createdAt=0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

//---------------------------------------------------------------------------------------------------
//------------------------------------expenses Reducer-----------------------------------------------
//---------------------------------------------------------------------------------------------------


const defualtExpenses = [];
const expensesReducer = (state = defualtExpenses, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                   return expense; 
                }
            });
        default:
            return state;
    }
};

//---------------------------------------------------------------------------------------------------
//---------------------------------filter action generators------------------------------------------
//---------------------------------------------------------------------------------------------------

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});
const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate
});
const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
});

//---------------------------------------------------------------------------------------------------
//------------------------------------filters Reducer------------------------------------------------
//---------------------------------------------------------------------------------------------------

const defaultFilters = {
    text: '',
    sortBy:'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = defaultFilters, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'Amount'
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'Date'
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
    }
};
//---------------------------------------------------------------------------------------------------
//----------------------------------------Filter Boi-------------------------------------------------
//---------------------------------------------------------------------------------------------------
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if (sortBy === 'Date'){
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'Amount'){
            return a.amount < b.amount ? 1 : -1
        }
    });
};

//---------------------------------------------------------------------------------------------------
//------------------------------------Proof of concepts----------------------------------------------
//---------------------------------------------------------------------------------------------------
//store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);
//store subscription
store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

    console.log(visibleExpenses);
});


const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100, createdAt: -1000 }));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 300, createdAt: 1000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter('Rent'));
// store.dispatch(setTextFilter(''));

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

//store.dispatch(setStartDate(-1000));
//store.dispatch(setStartDate());
//store.dispatch(setEndDate(-1500));
//store.dispatch(setEndDate());

//store.dispatch(setTextFilter('rent'));

store.dispatch(sortByAmount())

const demoState = {
    expenses: [{
        id: 'sekjfbwekf',
        description: 'January Rent',
        note: 'Final rent payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',//or date
        startDate: undefined,
        endDate: undefined
    }
};

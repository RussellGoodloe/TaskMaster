const defaultSettings = {
    enabled: false,
    frequency: 1,
    address: ''
};

export default (state= defaultSettings, action) => {
    switch (action.type) {
        case 'SET_ENABLE':
            return {
                ...state,
                enabled: action.enabled
            };
        case 'SET_FREQUENCY':
            return {
                ...state,
                frequency: action.frequency
            };
        case 'SET_EMAIL_ADDRESS':
            return {
                ...state,
                address: action.address
            };
        default:
            return state;
    }
};
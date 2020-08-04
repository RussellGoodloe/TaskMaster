export const setEnable = (enable = false) => ({
    type: 'SET_ENABLE',
    enable
});

export const setFrequency = (frequency = 1) => ({
    type: 'SET_FREQUENCY',
    frequency
});

export const setAddress = (address = '') => ({
    type: "SET_ADDRESS",
    address
})
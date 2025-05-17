

// Estado inicial
export const initialState = { launched: false };

// Reducer
export const launchReducer = (state, action) => {
    switch (action.type) {
        case 'LAUNCH':
            
            return { ...state, launched: true };
        default:
            return state;
    }
};

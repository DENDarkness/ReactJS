import { CHANGE_FIRSTNAME } from '../actions/changeFirstname'

const initialState = {
    profile: {
        firstName: 'Denys',
        secondName: 'Bulavin',
        userName: 'DENDarkness',
    },
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_FIRSTNAME:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    firstName: action.payload.firstName,
                },
            };

        default:
            return state;
    }

};
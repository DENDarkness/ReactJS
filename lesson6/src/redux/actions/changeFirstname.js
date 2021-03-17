export const CHANGE_FIRSTNAME = '@@profile/CHANGE_FIRSTNAME';

export const changeFirstname = (firstName) => ({
    type: CHANGE_FIRSTNAME,
    payload: {
        firstName,
    },
});
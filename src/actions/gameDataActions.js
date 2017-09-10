export const LOAD_GAME_DATA_REQUEST = 'loadGameDataRequest';
export const LOAD_GAME_DATA_FAILURE = 'loadGameDataFailure';
export const LOAD_GAME_DATA_SUCCESS = 'loadGameDataSuccess';

export const startRequest = () => ({
    type: LOAD_GAME_DATA_REQUEST,
});

export const failRequest = error => ({
    type: LOAD_GAME_DATA_FAILURE,
    error,
});

export const succeedRequest = ({ sessions, users, characters }) => ({
    type: LOAD_GAME_DATA_SUCCESS,
    sessions,
    users,
    characters,
});
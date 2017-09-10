import React from 'react';
import {
    LOAD_GAME_DATA_REQUEST,
    LOAD_GAME_DATA_FAILURE,
    LOAD_GAME_DATA_SUCCESS,
} from 'actions/gameDataActions';

const DEFAULT_STATE = {
    error: null,
    loaded: false,
    sessions: [],
    characters: [],
    users: [],
};

export default function gameDataReducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case LOAD_GAME_DATA_SUCCESS:
            const { sessions, users, characters } = action;
            return {
                sessions,
                users,
                characters,
                loaded: true,
                error: null,
            };
        case LOAD_GAME_DATA_REQUEST:
            return {
                ...state,
                loaded: false,
                error: null,
            };
        case LOAD_GAME_DATA_FAILURE:
            return {
                ...state,
                loaded: true,
                error: action.error,
            }
        default:
            return state;
    }
};
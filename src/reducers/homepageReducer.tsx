import * as React from 'react';
import LoadingCard from 'components/LoadingCard';

const sessions = [
    <LoadingCard />,
];

const DEFAULT_STATE = {
    sessions,
};

export default function homepageReducer(state = DEFAULT_STATE, action: any) {
    console.log(action);
    switch (action.type) {
        default:
        return state;
    }
};
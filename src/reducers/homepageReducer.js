import React from 'react';
import LoadingCard from 'components/LoadingCard';

const sessions = [
    <LoadingCard />,
];

const DEFAULT_STATE = {
    sessions,
    sessionCarouselIndex: 0,
};

export default function homepageReducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
        default:
        return state;
    }
};
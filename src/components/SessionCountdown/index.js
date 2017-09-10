import React from 'react';
import './style.css';

const getDifferenceInDays = target =>
    Math.ceil((target - Date.now()) / 1000 / 60 / 60 / 24);

const formatDate = date => {
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
}

const SessionCountdown = ({ targetDate }) => {
    const days = getDifferenceInDays(targetDate);
    const parsedDate = new Date(targetDate);
    console.log(targetDate);
    return (
        <div className="sessionCountdown">
            { days >= 0 ? 
                `Event in ${days} days`
                :
                `Event was ${-days} days ago`
            }
            , <strong><time dateTime={parsedDate.toISOString()}>{formatDate(parsedDate)}</time></strong>
        </div>
    );
};


export default SessionCountdown;

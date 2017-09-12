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
    let dayText;
    if(days > 0) {
        dayText = `Event in ${days} days, `;
    } else if (days < 0) {
        dayText = `Event was ${-days} days ago, `;
    } else {
        dayText = 'Event is today, ';
    }


    return (
        <div className="sessionCountdown">
            {dayText}
            <strong>
                <time dateTime={parsedDate.toISOString()}>
                    {formatDate(parsedDate)}
                    </time>
            </strong>
        </div>
    );
};


export default SessionCountdown;

import * as React from 'react';
import './style.css';

export interface SessionCountdownProps { targetDate: Date }

const getDaysUntilTarget = (target: Date): number =>
    Math.ceil(new Date(target.getTime() - new Date().getTime()).getTime() / 1000 / 60 / 60 / 24);

const formatDate = (target: Date): string =>
    `${target.getMonth() + 1}/${target.getDate()}/${target.getFullYear()}`;

const SessionCountdown = ({ targetDate }: SessionCountdownProps) =>
<div className="sessionCountdown">
    { getDaysUntilTarget(targetDate) >= 0 ? 
        `Event in ${getDaysUntilTarget(targetDate)} days`
        :
        `Event was ${-getDaysUntilTarget(targetDate)} days ago`
    }
    , <strong><time dateTime={targetDate.toISOString()}>{formatDate(targetDate)}</time></strong>
</div>;

export default SessionCountdown;

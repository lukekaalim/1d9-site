import * as React from 'react';
import './style.css';

import SessionCountdown from '../SessionCountdown';

export interface SessionCardProps {
    date: Date,
    name: string,
    shortDesc: string,
    foodStatus?: string,
    color?: string
}

const CenteringContainer = ({
    date,
    name,
    shortDesc,
    color,
    foodStatus,
}: SessionCardProps) =>
<div className="card sessionCard" style={{'background-color': color}}>
    <h2 className="sessionHeading">{name}</h2>
    <p>{shortDesc}</p>
    <p>{foodStatus}</p>
    <hr className="bottomBorder"/>
    <SessionCountdown targetDate={date} />
</div>;

export default CenteringContainer;
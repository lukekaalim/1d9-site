import * as React from 'react';
import './style.css';

import SessionCountdown from '../SessionCountdown';

export interface SessionCardProps {
    date: Date,
    name: string,
    shortDesc: string,
    channelLink?: string,
    color?: string,
    invert?: boolean,
}

const SLACK_CHANNEL = 'slack://channel?id=C5NGJNKQR&team=T02JJ4HCZ';

const CenteringContainer = ({
    date,
    name,
    shortDesc,
    color,
    channelLink,
    invert,
}: SessionCardProps) =>
<div className="card sessionCard" style={{'backgroundColor': color, 'color': (invert ? 'white' : 'black')}}>
    <h2 className="sessionHeading">{name}</h2>
    <p>{shortDesc}</p>
    { channelLink && <a href={SLACK_CHANNEL}>{channelLink}</a> }
    <hr className="bottomBorder"/>
    <SessionCountdown targetDate={date} />
</div>;

export default CenteringContainer;

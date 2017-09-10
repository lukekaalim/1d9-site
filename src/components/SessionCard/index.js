import React from 'react';
import style from './style.css';

import SessionCountdown from '../SessionCountdown';

const SLACK_CHANNEL = 'slack://channel?id=C5NGJNKQR&team=T02JJ4HCZ';

const SessionCard = (session) => {
    console.log(session)
    return (
        <div
            className={[style.card, style.sessionCard].join(' ')}
            style={{
                'backgroundColor': session.color,
                'color': (session.invert ? 'white' : 'black')
            }}
        >
            { session.comingUp && <h3 className={style.comingUpHeading}>Coming up next!</h3>}
            <h2 className={style.sessionHeading}>{session.title}</h2>
            <p className={style.dungeonMaster}>DM: {session.owner.name}</p>
            <p>{session.shortDesc}</p>
            { session.channelLink && <a href={SLACK_CHANNEL}>{session.channelLink}</a> }
            <hr className={style.bottomBorder}/>
            <SessionCountdown targetDate={session.date} />
        </div>
    );
}
export default SessionCard;

import React from 'react';
import style from './style.css';

import SessionCountdown from '../SessionCountdown';

const SLACK_CHANNEL = 'slack://channel?id=C5NGJNKQR&team=T02JJ4HCZ';

const SessionCard = ({
    color = "white",
    invert = false,
    comingUp = false,
    title = "",
    owner = { name: ""},
    shortDesc = "",
    channelLink = "",
    date = null,
}) => {
    return (
        <div
            className={[style.card, style.sessionCard].join(' ')}
            style={{
                'backgroundColor': color,
                'color': (invert ? 'white' : 'black')
            }}
        >
            { comingUp && <h3 className={style.comingUpHeading}>Coming up next!</h3>}
            <h2 className={style.sessionHeading}>{title}</h2>
            { owner.name && <p className={style.dungeonMaster}>DM: {owner.name}</p>}
            { shortDesc && <p>{ shortDesc }</p> }
            { channelLink && <a href={SLACK_CHANNEL}>{channelLink}</a> }
            { date &&
                <div>
                    <hr className={style.bottomBorder}/>
                    <SessionCountdown targetDate={date} />
                </div>
            }
        </div>
    );
}
export default SessionCard;

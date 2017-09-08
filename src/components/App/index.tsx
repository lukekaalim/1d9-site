import * as React from 'react';
import './style.css';
import Heading from 'components/Heading';
import CenteringContainer from 'components/CenteringContainer';
import CardCarousel from 'components/CardCarousel';
import SessionCard from 'components/SessionCard';

import Homepage from 'views/Homepage';

export interface Identifiable { id: number };

const currentSession = {
    id: 1,
    date: new Date(2017, 7, 29),
    name: 'The Messenger',
    dmName: 'Luke',
    shortDesc: 'Next Tuesday in Rome. Dungeons and Dragons, Season 2 Pilot',
    channelLink: 'Contact #pen-and-paper for pizza choices/requests',
    color: '#fff252',
    comingUp: true,
};

const lastSession = {
    id: 0,
    date: new Date(2017, 7, 22),
    name: 'The Ritual',
    dmName: 'Richard',
    shortDesc: 'The Party enters into the final chamber of The Necromancers lair',
    color: '#333767',
    invert: true,
}

const futureSession = {
    id: 2,
    date: new Date(2017, 8, 4),
    name: 'The Haunt',
    dmName: 'Matt',
    shortDesc: '',
    color: '#8A0707',
    invert: true,
    backgroundColor: 'black',
}

const firstSession = {
  id: 0,
  date: new Date(2017, 5, 14),
  name: 'The Beginning',
  dmName: 'Luke',
  shortDesc: 'We made characters',
  color: '#ffe9a9',
}

const secondSession = {
  id: 0,
  date: new Date(2017, 5, 19),
  name: 'The Incursion',
  dmName: 'Luke',
  shortDesc: 'The party fought shrubs',
  color: '#edfd68',
}

const thirdSession = {
  id: 0,
  date: new Date(2017, 6, 3),
  name: 'The Necromancer',
  dmName: 'Luke',
  shortDesc: 'The Party did battle with a mysterious Necromancer',
  color: 'rgb(180, 228, 160)',
}

const fourthSession = {
  id: 0,
  date: new Date(2017, 6, 10),
  name: 'The Dungeon Pt 1',
  dmName: 'Richard',
  shortDesc: 'The Party wakes up in a strange Dungeon',
  color: '#bbd9f9',
}

const fifthSession = {
  id: 0,
  date: new Date(2017, 6, 17),
  name: 'The Dungeon Pt 2',
  dmName: 'Richard',
  shortDesc: 'The Party slowly traverses, looting and avoiding traps',
  color: '#b4b6c5',
}

const sessions = [
  <SessionCard {...firstSession} />,
  <SessionCard {...secondSession} />,
  <SessionCard {...thirdSession} />,
  <SessionCard {...fourthSession} />,
  <SessionCard {...fifthSession} />,
  <SessionCard {...lastSession} />,
  <SessionCard {...currentSession} />,
  <SessionCard {...futureSession} />,
  <div className="card"> More coming Soon... </div>,
];

const homepageProps = {
    sessions,
    index: 0,
    users: ['string'],
    date: new Date(),
}

export interface State { selectedSession: number }

class App extends React.Component {
    state: State;

    constructor () {
        super();
        this.state = {
            selectedSession: 6,
        };
        this.selectIndex = this.selectIndex.bind(this);
    }

    selectIndex (index: number) {
        this.setState({ selectedSession: index });
    }

    render () {
        return <div>
            <Heading />
            <Homepage  {...homepageProps} />
        </div>;
    }
}

export default App;

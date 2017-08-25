import * as React from 'react';
import Heading from '../Heading';
import CenteringContainer from '../CenteringContainer';
import CardCarousel from '../CardCarousel';
import SessionCard from '../SessionCard';

export interface Identifiable { id: number };

const currentSession = {
    id: 1,
    date: new Date(2017, 7, 29),
    name: 'Dungeons and Dragons, Season 2 Pilot',
    shortDesc: 'DM: Luke. Next Tuesday in Rome. The start of a fresh quest!',
    channelLink: 'Contact #pen-and-paper for pizza choices/requests',
    color: '#B8E986',
};

const lastSession = {
    id: 0,
    date: new Date(2017, 7, 22),
    name: 'The Boss Battle',
    shortDesc: 'DM: Richard. The Party enters into the final chamber of The Necromancers lair',
    color: '#333767',
    invert: true,
}

const futureSession = {
    id: 2,
    date: new Date(2017, 8, 4),
    name: 'The Haunt',
    shortDesc: 'DM: Matt.',
    color: '#e56635',
    invert: true,
}

const sessions = [
    <div className="card"> I don't remember what happened before this lol </div>,
    <SessionCard {...lastSession} />,
    <SessionCard {...currentSession} />,
    <SessionCard {...futureSession} />,
    <div className="card"> More coming Soon... </div>,
];

export interface State { selectedSession: number }

class App extends React.Component {
    state: State;

    constructor () {
        super();
        this.state = {
            selectedSession: 2,
        };
        this.selectIndex = this.selectIndex.bind(this);
    }

    selectIndex (index: number) {
        this.setState({ selectedSession: index });
        console.log('state set to', index);
    }

    render () {
        return <div>
            <Heading />
            <CenteringContainer>
                <CardCarousel cards={sessions} currentIndex={this.state.selectedSession} selectIndex={this.selectIndex} />
            </CenteringContainer>
        </div>;
    }
}


export default App;

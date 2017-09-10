import React, { Component } from 'react';
import { connect } from 'react-redux'
import style from './style.css';

import { startRequest, failRequest, succeedRequest } from 'actions/gameDataActions';

import Heading from 'components/Heading';

import Homepage from 'views/Homepage';


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
/*
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
*/

const mapDispatchToProps = dispatch => ({
    startGameDataRequest: () => dispatch(startRequest()),
    succeedGameDataRequest: data => dispatch(succeedRequest(data)),
    failGameDataRequest: error => dispatch(failRequest(error)),
});

class App extends Component {
    componentDidMount() {
        const { startGameDataRequest, succeedGameDataRequest, failGameDataRequest } = this.props;
        startGameDataRequest();
        fetch('/gameData.json')
          .then(response => response.json().then(succeedGameDataRequest))
          .catch(failGameDataRequest);
    }

    render() {
        return (
            <div>
                <Heading />
                <Homepage />
            </div>);
    }
};

export default connect(null, mapDispatchToProps)(App);

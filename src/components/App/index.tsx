import * as React from 'react';
import Heading from '../Heading';
import CenteringContainer from '../CenteringContainer';
import SessionCard from '../SessionCard';

const App = () =>
<div>
    <Heading />
    <CenteringContainer>
        <SessionCard
            date={new Date(2017, 7, 29)}
            name="Dungeons and Dragons, Season 2"
            shortDesc="Game run by Luke, next Tuesday in Rome"
            channelLink="Contact #pen-and-paper for pizza choices/requests"
            color="#B8E986"
            />
    </CenteringContainer>
</div>;

export default App;

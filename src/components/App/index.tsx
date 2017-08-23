import * as React from 'react';
import Heading from '../Heading';
import CenteringContainer from '../CenteringContainer';
import CountdownCard from '../CountdownCard';

const App = () =>
<div>
    <Heading />
    <CenteringContainer>
        <CountdownCard targetDate={new Date(2017, 7, 29)} />
    </CenteringContainer>
</div>;

export default App;
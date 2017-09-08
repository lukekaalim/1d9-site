import * as React from 'react';
import CenteringContainer from 'components/CenteringContainer';
import CardCarousel from 'components/CardCarousel';
import { connect } from 'react-redux';

type HomepageTheme = 'haunt' | 'storm' | 'dungeon';
type UserId = number;

interface User {
    id: UserId,
    name: string,
    title: string,
};

export interface HomepageProps {
    sessions: Array<JSX.Element>,
    users: Array<User>,
    date: Date,
    index: number,
    theme?: HomepageTheme,
};

const mapStateToProps = ({ homepage: { sessions, users, theme, date, index } }: { homepage: HomepageProps }) => ({
    sessions,
    users,
    theme,
    date,
    index,
});

const Homepage = ({ sessions, users, theme, date, index }: HomepageProps) => {
    console.log(sessions);
    return (
        <CenteringContainer>
            <CardCarousel cards={sessions} index={0}/>
        </ CenteringContainer>
    );
};

export default connect(mapStateToProps)(Homepage);
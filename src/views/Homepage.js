import React from 'react';
import CenteringContainer from 'components/CenteringContainer';
import CardCarousel from 'components/CardCarousel';
import SessionCard from 'components/SessionCard';
import { connect } from 'react-redux';

const mapStateToProps = ({homepage: {theme, date, index}, gameData: { error, sessions, users }}) => ({
    sessions,
    users,
    theme,
    date,
    index,
    error,
});

const Homepage = ({ sessions, users, theme, date, index, error }) => {
    const sessionCards = sessions.map(session => <SessionCard owner={users[session.ownerId]} key={session.id} {...session} />);

    return (
        <CenteringContainer>
            { error ? error.toString() : <CardCarousel cards={sessionCards} index={0}/>}
        </ CenteringContainer>
    );
};

export default connect(mapStateToProps)(Homepage);
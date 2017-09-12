import React from 'react';
import CenteringContainer from 'components/CenteringContainer';
import CardCarousel from 'components/CardCarousel';
import SessionCard from 'components/SessionCard';
import { setIndex } from 'actions/homepageActions';
import { connect } from 'react-redux';

const mapStateToProps = ({homepage: {theme, date, sessionCarouselIndex}, gameData: { error, sessions, users }}) => ({
    sessions,
    users,
    theme,
    date,
    sessionCarouselIndex,
    error,
});

const mapDispatchToProps = dispatch => ({
    setIndex: index => dispatch(setIndex(index)),
});

const Homepage = ({ sessions, users, theme, date, sessionCarouselIndex, error, setIndex }) => {
    const sessionCards = sessions.map((session, index) =>
        <div onClick={() => setIndex(index)}><SessionCard owner={users[session.ownerId]} key={session.id} {...session} /></div>
    );

    return (
        <CenteringContainer>
            { error ? error.toString() : <CardCarousel cards={sessionCards} index={sessionCarouselIndex}/>}
        </ CenteringContainer>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
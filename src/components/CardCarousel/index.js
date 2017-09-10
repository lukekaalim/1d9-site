import React from 'react';
import './style.css';

const CARD_WIDTH = 350;

const calculateOffset = index => `translateX(${-(index * CARD_WIDTH) - (CARD_WIDTH / 2)}px)`;

const CardCarousel = ({ cards, index }) => 
<div className="cardCarousel">
    <span className="carouselSlider" style={{'transform': calculateOffset(index)}}>
        {cards.map((card, cardIndex) =>
            <div
                className={cardIndex == index && 'selected'}
                key={cardIndex}
                style={{'width': CARD_WIDTH}}
            >
                {card}
            </div>
        )}
    </span>
</div>;

export default CardCarousel;
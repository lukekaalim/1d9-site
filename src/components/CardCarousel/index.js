import React from 'react';
import style from './style.css';

const CARD_WIDTH = 350;

const calculateOffset = index => `translateX(${-(index * CARD_WIDTH) - (CARD_WIDTH / 2)}px)`;

const CardCarousel = ({ cards, index }) => 
<div className={style.cardCarousel}>
    <span className={style.carouselSlider} style={{'transform': calculateOffset(index)}}>
        {cards.map((card, cardIndex) =>
            <div
                className={cardIndex == index && style.selected}
                key={cardIndex}
                style={{'width': CARD_WIDTH}}
            >
                {card}
            </div>
        )}
    </span>
</div>;

export default CardCarousel;
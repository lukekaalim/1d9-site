import * as React from 'react';
import './style.css';

export interface CardCarouselProps {
    cards: Array<JSX.Element>,
    index: number,
};

const CARD_WIDTH = 350;

const calculateOffset = (index: number): string => `translateX(${-(index * CARD_WIDTH) - (CARD_WIDTH / 2)}px)`;

const CardCarousel = ({ cards, index }: CardCarouselProps) => 
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
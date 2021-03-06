import * as React from 'react';
import './style.css';

export interface CardCarouselProps { cards: Array<object>, currentIndex: number, selectIndex: (index: number) => void };

const CARD_WIDTH = 350;

const calculateOffset = (index: number): string => `translateX(${-(index * CARD_WIDTH) - (CARD_WIDTH / 2)}px)`;

const CardCarousel = ({ cards, currentIndex, selectIndex }: CardCarouselProps) => 
<div className="cardCarousel">
    <span className="carouselSlider" style={{'transform': calculateOffset(currentIndex)}}>
        {cards.map((card, cardIndex) =>
            <div
                className={`cardItem${cardIndex === currentIndex ? ' selected' : ''}`}
                key={cardIndex}
                style={{'width': CARD_WIDTH}}
                onClick={() => selectIndex(cardIndex)}
            >
                {card}
            </div>
        )}
    </span>
</div>;

export default CardCarousel;
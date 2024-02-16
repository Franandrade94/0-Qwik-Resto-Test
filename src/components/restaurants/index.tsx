import './restaurants.css';
import { component$, useStore, $ } from '@builder.io/qwik';
import RestoCard1 from './restaurantCard/restaurant1';
import RestoCard2 from './restaurantCard/restaurant2';
import RestoCard3 from './restaurantCard/restaurant3';



export default component$(() => {
  const state = useStore({
    startIndex: 0,
    cards: [
      <RestoCard1/>,
      <RestoCard2/>,
      <RestoCard3/>,
      
    ],
    visibleCards: 3,
  });

  
  const next = $(() => {
    state.startIndex = (state.startIndex + 1) % state.cards.length;
  });

  const prev = $(() => {
    state.startIndex = (state.startIndex - 1 + state.cards.length) % state.cards.length;
  });

  const getVisibleCards = () => {
    const endIndex = state.startIndex + state.visibleCards;
    if (endIndex <= state.cards.length) {
      return state.cards.slice(state.startIndex, endIndex);
    } else {
      return [
        ...state.cards.slice(state.startIndex, state.cards.length),
        ...state.cards.slice(0, endIndex % state.cards.length),
      ];
    }
  };

  return (
    <div class='resto-component'>
      <div class='resto-container'>

        <div class="resto-title">
          <h2>Restaurantes</h2>
        </div>

        <div class='resto-carousel-container'>
              <div class="resto-card-container"> 
                {getVisibleCards().map((card, index) => (
                  <div class='restocard-chef' key={index}>
                    {card}
                  </div>
                ))}
              </div>
              
              <div class="carousel-controls-resto">
                <button 
                  class="control-prev-resto" 
                  onClick$={prev}>
                    ‹
                  </button>
              
                <button 
                  class="control-next-resto" 
                  onClick$={next}>
                    ›
                  </button>
              </div>

              
        </div>  

        <button class="resto-cards-button">Ver todos</button>

      </div>
    </div>
  );
});
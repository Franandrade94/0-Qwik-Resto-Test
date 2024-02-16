import './chefs.css';
import { component$, useStore, $ } from '@builder.io/qwik';
import ChefCard1 from './Chefcard/chef1';
import ChefCard2 from './Chefcard/chef2';
import ChefCard3 from './Chefcard/chef3';
import ChefCard4 from './Chefcard/chef4';
import ChefCard5 from './Chefcard/chef5';

export default component$(() => {
  const state = useStore({
    startIndex: 0,
    cards: [
      <ChefCard1 />,
      <ChefCard2 />,
      <ChefCard3 />,
      <ChefCard4 />,
      <ChefCard5 />,
    ],
    visibleCards: 4,
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
    <div class='chef-component'>
      <div class='chef-container'>

        <div class="Chef-title">
          <h2>Chefs</h2>
        </div>

        <div class='chef-carousel-container'>
              <div class="card-container"> 
                {getVisibleCards().map((card, index) => (
                  <div class='chefcard-chef' key={index}>
                    {card}
                  </div>
                ))}
              </div>
              
              <div class="carousel-controls-chef">
                <button 
                  class="control-prev-chef" 
                  onClick$={prev}>
                    ‹
                  </button>
              
                <button  
                  class="control-next-chef" 
                  onClick$={next}>
                    ›
                  </button>
              </div>

              
        </div>  

        <button class="Chefs-cards-button">Ver todos</button>

      </div>
    </div>
  );
});
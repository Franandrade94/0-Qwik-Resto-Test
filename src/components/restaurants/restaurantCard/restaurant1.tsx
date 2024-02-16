import { component$, useStore } from '@builder.io/qwik';
import './restocard.css';
import Img1 from '../../../assets/Images/restaurants/1.png';

export const RestoCard1 = component$(() => {
  const state = useStore({
    hovered: false,
  });

  const restaurant = {
    name: 'Nombre',
    especial: 'Especialidad',
    ubication: 'Ubication',
    image: Img1,
  };

  return (
    <div
      class="restocard-container"
      onMouseEnter$={() => (state.hovered = true)}
      onMouseLeave$={() => (state.hovered = false)}
    >
      <img
        width="100"
        height="100"
        src={restaurant.image}
        alt={restaurant.name}
        class={state.hovered ? 'blurred' : ''}
      />
      {state.hovered && (
        <div class="resto-name">
          <p style={{ color: '#ffb700' }}>{restaurant.name}</p>
          <p>{restaurant.especial}</p>
          <p style={{ color: '#ffb700' }}>{restaurant.ubication}</p>
        </div>
      )}
    </div>
  );
});

export default RestoCard1;
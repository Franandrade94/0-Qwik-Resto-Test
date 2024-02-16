import { component$, useStore} from '@builder.io/qwik';
import './chefscard.css';
import Img1 from '~/assets/Images/chefs/5.png'

interface Chef {
    name: string;
    image: string;
    hovered: boolean;
}

export const ChefCard1 = component$(() => {
    const state = useStore<Chef>({
        name: 'Camila Rodríguez',
        image: Img1,
        hovered: false,
    });

    return (
        <div
            class="chefcard-container"
            onMouseEnter$={() => (state.hovered = true)}
            onMouseLeave$={() => (state.hovered = false)}
        >
            <img
                width="100" // Add the intrinsic width of the image here
                height="100"
                src={state.image}
                alt={state.name}
                class={state.hovered ? 'blurred' : ''}
            />
            {state.hovered && <div class="chef-name">{state.name}</div>}
        </div>
    );
});

export default ChefCard1;

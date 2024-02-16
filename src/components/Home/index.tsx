import './home.css';
import { component$, useStore, $ } from '@builder.io/qwik';
import SliderImg from '../../assets/Images/Home-Imgs/1.png';
import SliderImg2 from '../../assets/Images/Home-Imgs/2.png';
import Insta from "../../assets/Images/icons/insta.png";
import Linkedin from "../../assets/Images/icons/linkedin.png";
import Twitter from "../../assets/Images/icons/twitter.png";
import Youtube from "../../assets/Images/icons/youtube.png";





export default component$(() => {
  const state = useStore({
    activeIndex: 0,
    slides: [
      { src: SliderImg, alt: 'First Slide' },
      { src: SliderImg2, alt: 'Second Slide' },
      { src: SliderImg, alt: 'Third Slide' },
      { src: SliderImg2, alt: 'Fourth Slide' },
    ],
  });

  const goToSlide = $((index: number) => {
    state.activeIndex = index;
  });

  

  return (
    <div id='HomeSection' class="carousel-container-home">
      {state.slides.map((slide, index) => (
        <div
          class={`carousel-slide-home ${index === state.activeIndex ? 'active' : ''}`}
          key={index}
          style={`background-image: url('${slide.src}');`}
          role="img"
          aria-label={slide.alt}
        />
      ))}
   

      <div class="carousel-controls-home">
        <button
          class="control-prev-home"
          onClick$={() => goToSlide((state.activeIndex - 1 + state.slides.length) % state.slides.length)}
        >
          ‹
        </button>
        <button
          class="control-next-home"
          onClick$={() => goToSlide((state.activeIndex + 1) % state.slides.length)}
        >
          ›
        </button>
      </div>
  
        <div class='home-icons-container'>

            <div>
                <img
                    src={ Insta }
                    alt=''                
                />
            </div>

            <div>
                <img
                    src={ Linkedin }
                    alt=''                
                />
            </div>

            <div>
                <img
                    src={ Youtube }
                    alt=''                
                />
            </div>

            <div>
                <img
                    src={ Twitter }
                    alt=''                
                />
            </div>

        </div>
      
    </div>
  );
});

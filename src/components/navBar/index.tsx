import './navbar.css';
import { $, component$, useOnWindow, useStore } from "@builder.io/qwik";
import SearchIcon from '../../assets/Images/navbar/search.png'
import { IconClose, IconMenu } from "../icons";


export default component$(() => {

  const store = useStore({
    isNavOpen: false,
    windowWidth: 0,
    currentSection: "Home",
  });
  

  const updateCurrentSection = $(() => {
    const homeSection = document.getElementById("Home");
    const chefSection = document.getElementById("ChefPage");
    const restaurantSection = document.getElementById("RestaurantPage");

    const scrollY = window.scrollY;

    if (homeSection && chefSection && restaurantSection) {
      if (scrollY >= homeSection.offsetTop && scrollY < chefSection.offsetTop) {
        store.currentSection = "Home";
      } else if (scrollY >= chefSection.offsetTop && scrollY < restaurantSection.offsetTop) {
        store.currentSection = "ChefPage";
      } else if (scrollY >= restaurantSection.offsetTop) {
        store.currentSection = "RestaurantPage";
      }
    }
  });

  
  const scrollToSection = $( (sectionId: string) => {
    let actualSectionId = '';
    switch (sectionId) {
      case 'Home':
        actualSectionId = 'HomeSection';
        break;
      case 'ChefPage':
        actualSectionId = 'ChefSection';
        break;
      case 'RestaurantPage':
        actualSectionId = 'RestoSection';
        break;
      default:
        console.warn('Section ID not found');
        return;
    }
  
    const section = document.getElementById(actualSectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  });

  useOnWindow(
    "load",
    $(() => {
      store.windowWidth = window.innerWidth;
      updateCurrentSection();
    })
  );
  
  useOnWindow(
    "resize",
    $(() => {
      store.windowWidth = window.innerWidth
    })
  );

  useOnWindow("scroll", updateCurrentSection);

  return (
    <>

      { /* DESKTOP NAV */}

      {store.isNavOpen || store.windowWidth > 768 ? (
        
        <nav class={store.isNavOpen  ? 'open' : ''} >
          <ul>
            <li><a onClick$={() => scrollToSection('Home')}>Home</a></li>
            <li><a onClick$={() => scrollToSection('ChefPage')} >Chef</a></li>
            <li><a onClick$={() => scrollToSection('RestaurantPage')} >Restaurantes</a></li>
            <li>
              <select>
                <option value="">Buscar</option>
              </select>
            </li>
          </ul>

          <div class='Nav-Logo'>
            <h1>LOGO</h1>
          </div>

          <div class='Nav-button'>
            <img
              src={ SearchIcon }
              alt=""
            />

            <button>
              Iniciar Sesion
            </button>

            <button>
              Crear Cuenta
            </button>
          </div>

        </nav>

      ) : (
        ""
      )}

      {/* Open button */}
      { !store.isNavOpen ? (
        <button
          class="nav-open"
          aria-label='Abir Menu'
          onClick$={() => (store.isNavOpen = !store.isNavOpen)}
        >
          <IconMenu/>
        </button>
      ) : (
        ''
      )}

      {/* Close button */}
        
      { store.isNavOpen ? (
        <button
          class='nav-close'
          aria-label='Cerrar Menu'
          onClick$={() => (store.isNavOpen = !store.isNavOpen) }
        >
          <IconClose/>
        </button>
      ) : (
        ''
      )}

      
    </>
  );
});
import './navbar.css';
import { $, component$, useOnWindow, useStore } from "@builder.io/qwik";
import SearchIcon from '../../assets/Images/navbar/search.png'
import { IconClose, IconMenu } from "../icons";


export default component$(() => {

  const store = useStore({
    isNavOpen: false,
    windowWidth: 0,
  });

  useOnWindow(
    "load",
    $(() => {
      store.windowWidth = window.innerWidth
    })
  )
  
  useOnWindow(
    "resize",
    $(() => {
      store.windowWidth = window.innerWidth
    })
  )

  return (
    <>

      { /* DESKTOP NAV */}

      {store.isNavOpen || store.windowWidth > 768 ? (
        
        <nav class={store.isNavOpen  ? 'open' : ''} >
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/chef">Chef</a></li>
            <li><a href="/restaurantes">Restaurantes</a></li>
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
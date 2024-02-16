
import Img1 from '~/assets/Images/Register/1.png?jsx';import './register.css';
import { component$ } from "@builder.io/qwik";



export default component$(() => {

    return(

        <div class='Register-component'>

            <div class='Register-container-1'>
                <div class='Register-buttons-container'>
                    <button>
                        Chef
                    </button>

                    <button>
                        Usuario
                    </button>
                </div>

                <div class="Register-P-container">
                    <p>
                        Registrate y forma parte de la revolucion de la industria culinaria
                    </p>
                </div>

            </div>

            <div class='Register-container-2'>
                <Img1
                    class='Register-Image'
                    alt=""
                />
            </div>

        </div>
        
    )

})
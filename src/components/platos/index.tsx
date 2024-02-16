import './platos.css';
import { component$ } from "@builder.io/qwik";
import Star from './star';
import Food1 from '../../assets/Images/platos/Food1.png';
import Food2 from '../../assets/Images/platos/Food2.png';
import Chef1 from '../../assets/Images/platos/Chef1.png';
import Chef2 from '../../assets/Images/platos/Chef2.png';
import Chef3 from '../../assets/Images/platos/Chef3.png';


export default component$(() => {

    const Platos = [
        {
            nombre: 'Nombre Plato 1',
            image: Food1,
            rating: 3,
            chef: {
                chefname: "Santiago Martinez",
                chefimage: Chef2,
            }
        },
        {
            nombre: 'Nombre Plato 2',
            image: Food2,
            rating: 5,
            chef: {
                chefname: "Valeria Garcia",
                chefimage: Chef1,
            }
        },
        {
            nombre: 'Nombre Plato 3',
            image: Food1,
            rating: 4,
            chef: {
                chefname: "Alejandro Herrera",
                chefimage: Chef3,
            }
        },
    ]

    const renderStars = (rating: number) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(<Star key={i} filled={i <= rating} />);
        }
        return stars;
    };

    return(

        <div class='Platos-component'>
            {Platos.map((plato, index) =>(
                <div 
                    class='Plato-Container'
                    key={index}
                >
                    <div class='Image-Plato-container'>
                        <img
                            class='Image-plato'
                            src={ plato.image }
                            alt={ plato.nombre }
                        />

                        <div class='overlay' >
                            <h3 class='plato-name'>
                                { plato.nombre }
                            </h3>

                            <div class='Chef-info'>
                                <img
                                    class='Chef-image-plato'
                                    src={ plato.chef.chefimage }
                                    alt={ plato.chef.chefname }
                                />
                                <p>
                                    { plato.chef.chefname }
                                </p>
                            </div>
                            <p
                                class='stars-plato'
                                style={{ color:"rgb(255, 183, 0)", fontSize:'40px'}}
                            >
                                { renderStars(plato.rating) }
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        
    )

})
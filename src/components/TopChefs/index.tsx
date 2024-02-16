import './topchefs.css';
import { component$ } from "@builder.io/qwik";
import Chef1 from '../../assets/Images/topChefs/chef1.png';
import Chef2 from '../../assets/Images/topChefs/chef2.png';
import Chef3 from '../../assets/Images/topChefs/chef3.png';
import Top1 from '../../assets/Images/topChefs/top1.png';
import Top2 from '../../assets/Images/topChefs/top2.png';
import Top3 from '../../assets/Images/topChefs/top3.png';

export default component$(() => {
    const chefs = [
        {
            name: '',
            image: Chef1,
            rating: '1',
        },
        {
            name: '',
            image: Chef2,
            rating: '2',
        },
        {
            name: '',
            image: Chef3,
            rating: '3',
        },
    ];

    const topImages: { [key: string]: string } = {
        '1': Top1,
        '2': Top2,
        '3': Top3,
    };

    return (
        <div class="top-chefs-component">
            <h2>Top 3 Chefs estelares</h2>
            <div class='top-chefs-container'>
                {chefs.map((chef, index) => (
                    <div key={index} class={`chef-rank-${chef.rating}`}>
                        <img
                            class={`TopChefrank-img-${chef.rating}`}
                            src={topImages[chef.rating]}
                            alt={`Top ${chef.rating}`}
                        />
                        <img
                            src={chef.image}
                            alt=""
                        />
                    </div>
                ))}
            </div>
        </div>
    );
});

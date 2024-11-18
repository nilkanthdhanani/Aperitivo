import Image from 'next/image'
import styles from './cocktailsList.module.scss'

import ourCocktailBg from "../../../assets/images/webp/ourCocktailBg.webp"

const cocktails = [
    {
        title: 'Oldies Remix',
        items: [
            {
                name: 'Bloody Cherry',
                description: 'A bold and daring cocktail featuring rich cherry flavors, premium vodka, and a tantalizing hint of spice for an unforgettable drink.',
                price: '$10.50',
            },
            {
                name: 'Magic Hour',
                description: 'A vibrant tropical medley of mango, pineapple, and a splash of rum, perfectly capturing the essence of a beachside sunset.',
                price: '$11.00',
            },
            {
                name: 'Tiki Taka',
                description: 'A refreshing and exotic drink combining zesty lime, creamy coconut, and smooth tequila, delivering a delightful taste of the tropics.',
                price: '$10.75',
            },
            {
                name: 'Americana',
                description: 'A timeless bourbon classic with bitters, accented by a fresh twist of orange for a bold, smooth finish.',
                price: '$12.00',
            },
        ],
    },
    {
        title: 'Bitter Galore',
        items: [
            {
                name: 'Pomelo Yuzu',
                description: 'An invigorating cocktail blending tangy pomelo and aromatic yuzu, delivering a vibrant citrus burst with every sip.',
                price: '$10.25',
            },
            {
                name: 'Lime Supreme',
                description: 'A sophisticated lime-forward drink crafted with crisp gin and a cooling touch of mint for ultimate refreshment.',
                price: '$10.75',
            },
            {
                name: 'Ginger White',
                description: 'A zesty infusion of ginger, lime, and fine gin, elegantly balanced to provide a smooth, unforgettable finish.',
                price: '$11.25',
            },
            {
                name: 'Citrus Blend',
                description: 'A lively fusion of orange, lemon, and aromatic bitters, creating a rejuvenating cocktail with a delightful tangy kick.',
                price: '$10.50',
            },
        ],
    },
    {
        title: 'Floral Fusion',
        items: [
            {
                name: 'Lavender Dew',
                description: 'A calming mix of fragrant lavender, zesty lemon, and crisp gin, delivering a truly elegant floral cocktail experience.',
                price: '$10.75',
            },
            {
                name: 'Lilly Rose',
                description: 'A delicate floral drink featuring aromatic rose water paired with smooth vodka for a taste of refined sophistication.',
                price: '$11.00',
            },
            {
                name: 'Jasmin Edge',
                description: 'A harmonious combination of jasmine tea, refreshing lemon, and smooth rum, offering a unique and delicate flavor profile.',
                price: '$11.50',
            },
            {
                name: 'Spicy Blossom',
                description: 'An adventurous cocktail mixing hibiscus and spice-infused tequila for a bold, fiery twist on a floral classic.',
                price: '$12.25',
            },
        ],
    },
    {
        title: 'Apéritivo Box',
        items: [
            {
                name: 'Triple Ace',
                description: 'A sophisticated aperitivo blending crisp grapefruit bitterness with smooth herbal notes, perfect for a refreshing start to any evening.',
                price: '$10.00',
            },
            {
                name: 'Sunset Kit',
                description: 'A smooth prosecco and peach blend with a touch of lime, embodying the charm of a perfect summer sunset.',
                price: '$10.50',
            },
        ],
    },
];


export default function CocktailsList() {
    return (
        <section className={styles.cocktailsList}>
            <div className={styles.cocktailsListImg}>
                <Image src={ourCocktailBg} alt="Cocktail" />
            </div>
            <div className={styles.cocktailsListContent}>
                {cocktails.map((cocktail, index) => (
                    <div className={styles.cocktailsMain} key={index}>
                        <h2>{cocktail.title}</h2>
                        {cocktail.items.map((item, idx) => (
                            <div className={styles.cocktailGrid} key={idx}>
                                <div className={styles.cocktailsMainDetail}>
                                    <h3>{item.name}</h3>
                                    <p>{item.description}</p>
                                </div>
                                <span>{item.price}</span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    )
}

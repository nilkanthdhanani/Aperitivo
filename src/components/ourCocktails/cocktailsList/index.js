import Image from 'next/image'
import styles from './cocktailsList.module.scss'

import ourCocktailBg from "../../../assets/images/webp/ourCocktailBg.webp"

const cocktails = [
    {
        title: 'Oldies Remix',
        items: [
            {
                name: 'Bloody Cherry',
                description: 'A bold blend of cherry and vodka with a hint of spice.',
                price: '$10.50',
            },
            {
                name: 'Magic Hour',
                description: 'A tropical delight with mango, pineapple, and a splash of rum.',
                price: '$11.00',
            },
            {
                name: 'Tiki Taka',
                description: 'A refreshing cocktail with lime, coconut, and a touch of tequila.',
                price: '$10.75',
            },
            {
                name: 'Americana',
                description: 'A classic mix of bourbon and bitters with a twist of orange.',
                price: '$12.00',
            },
        ],
    },
    {
        title: 'Bitter Galore',
        items: [
            {
                name: 'Pomelo Yuzu',
                description: 'A tangy, citrus blend with pomelo and yuzu notes.',
                price: '$10.25',
            },
            {
                name: 'Lime Supreme',
                description: 'An intense lime cocktail with gin and a hint of mint.',
                price: '$10.75',
            },
            {
                name: 'Ginger White',
                description: 'A zesty mix of ginger, lime, and gin with a smooth finish.',
                price: '$11.25',
            },
            {
                name: 'Citrus Blend',
                description: 'A refreshing blend of orange, lemon, and a hint of bitters.',
                price: '$10.50',
            },
        ],
    },
    {
        title: 'Floral Fusion',
        items: [
            {
                name: 'Lavender Dew',
                description: 'A soothing mix of lavender, lemon, and gin.',
                price: '$10.75',
            },
            {
                name: 'Lilly Rose',
                description: 'A floral cocktail with rose water and vodka.',
                price: '$11.00',
            },
            {
                name: 'Jasmin Edge',
                description: 'A delicate blend of jasmine tea and rum with a hint of lemon.',
                price: '$11.50',
            },
            {
                name: 'Spicy Blossom',
                description: 'A unique mix of hibiscus and spice-infused tequila.',
                price: '$12.25',
            },
        ],
    },
    {
        title: 'Apéritivo Box',
        items: [
            {
                name: 'Triple Ace',
                description: 'A crisp and bitter aperitivo with a hint of grapefruit.',
                price: '$10.00',
            },
            {
                name: 'Sunset Kit',
                description: 'A smooth blend of prosecco and peach with a splash of lime.',
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

"use client"
import { useState } from 'react'
import Link from 'next/link'
import styles from './cocktails.module.scss'
import Image from 'next/image'
import DetailModal from '@/components/orderOnline/cocktailDetails';

import bloodyCherry from "@/assets/images/webp/bloodyCherry.webp"
import magicHour from "@/assets/images/webp/magicHour.webp"
import tikiTaka from "@/assets/images/webp/tikiTaka.webp"
import americana from "@/assets/images/webp/americana.webp"
import pomeloYuzu from "@/assets/images/webp/pomeloYuzu.webp"
import limeSupreme from "@/assets/images/webp/limeSupreme.webp"
import gingerWhite from "@/assets/images/webp/gingerWhite.webp"
import citrusBlend from "@/assets/images/webp/citrusBlend.webp"
import lavenderDew from "@/assets/images/webp/lavenderDew.webp"
import lillyRose from "@/assets/images/webp/lillyRose.webp"
import jasminEdge from "@/assets/images/webp/jasminEdge.webp"
import spicyBlossom from "@/assets/images/webp/spicyBlossom.webp"
import tripleAce from "@/assets/images/webp/tripleAce.webp"
import sunsetKit from "@/assets/images/webp/sunsetKit.webp"

const cocktails = [
    {
        title: 'Oldies Remix',
        items: [
            {
                name: 'Bloody Cherry',
                description: 'A bold and daring cocktail featuring rich cherry flavors, premium vodka, and a tantalizing hint of spice for an unforgettable drink.',
                price: '$10.50',
                image: bloodyCherry,
            },
            {
                name: 'Magic Hour',
                description: 'A vibrant tropical medley of mango, pineapple, and a splash of rum, perfectly capturing the essence of a beachside sunset.',
                price: '$11.00',
                image: magicHour,
            },
            {
                name: 'Tiki Taka',
                description: 'A refreshing and exotic drink combining zesty lime, creamy coconut, and smooth tequila, delivering a delightful taste of the tropics.',
                price: '$10.75',
                image: tikiTaka,
            },
            {
                name: 'Americana',
                description: 'A timeless bourbon classic with bitters, accented by a fresh twist of orange for a bold, smooth finish.',
                price: '$12.00',
                image: americana,
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
                image: pomeloYuzu,
            },
            {
                name: 'Lime Supreme',
                description: 'A sophisticated lime-forward drink crafted with crisp gin and a cooling touch of mint for ultimate refreshment.',
                price: '$10.75',
                image: limeSupreme,
            },
            {
                name: 'Ginger White',
                description: 'A zesty infusion of ginger, lime, and fine gin, elegantly balanced to provide a smooth, unforgettable finish.',
                price: '$11.25',
                image: gingerWhite,
            },
            {
                name: 'Citrus Blend',
                description: 'A lively fusion of orange, lemon, and aromatic bitters, creating a rejuvenating cocktail with a delightful tangy kick.',
                price: '$10.50',
                image: citrusBlend,
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
                image: lavenderDew,
            },
            {
                name: 'Lilly Rose',
                description: 'A delicate floral drink featuring aromatic rose water paired with smooth vodka for a taste of refined sophistication.',
                price: '$11.00',
                image: lillyRose,
            },
            {
                name: 'Jasmin Edge',
                description: 'A harmonious combination of jasmine tea, refreshing lemon, and smooth rum, offering a unique and delicate flavor profile.',
                price: '$11.50',
                image: jasminEdge,
            },
            {
                name: 'Spicy Blossom',
                description: 'An adventurous cocktail mixing hibiscus and spice-infused tequila for a bold, fiery twist on a floral classic.',
                price: '$12.25',
                image: spicyBlossom,
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
                image: tripleAce,
            },
            {
                name: 'Sunset Kit',
                description: 'A smooth prosecco and peach blend with a touch of lime, embodying the charm of a perfect summer sunset.',
                price: '$10.50',
                image: sunsetKit,
            },
        ],
    },
];

export default function Cocktails() {
    const [selectedItem, setSelectedItem] = useState(null);

    const openModal = (item) => {
        setSelectedItem(item);
    };

    const closeModal = () => {
        setSelectedItem(null);
    };

    return (
        <div className={styles.cocktails}>
            <div className={styles.container}>
                <h2>Cocktails</h2>
                <div className={styles.cocktailsTrack}>
                    <div className={styles.cocktailsTrackList}>
                        {cocktails.map((section) => (
                            <Link
                                key={section.title}
                                href={`#${section.title.replace(/\s+/g, "").toLowerCase()}`}>
                                {section.title}
                            </Link>
                        ))}
                    </div>
                    <div className={styles.viewCartButton}>
                        <button type="button">
                            View Cart <span>(6)</span>
                        </button>
                    </div>
                </div>

                {cocktails.map((section) => (
                    <div
                        key={section.title}
                        className={styles.cocktailsMian}
                        id={section.title.replace(/\s+/g, "").toLowerCase()}>
                        <h3>{section.title}</h3>
                        <div className={styles.cocktailsMianList}>
                            {section.items.map((item, index) => (
                                <div
                                    key={index}
                                    className={styles.cocktailsListBox}
                                    onClick={() => openModal(item)}>
                                    <div className={styles.cocktailsListBoxTitle}>
                                        <div>
                                            <h4>{item.name}</h4>
                                            <p>{item.description}</p>
                                        </div>
                                        <span>{item.price}</span>
                                    </div>
                                    <Image src={item.image} alt={item.name} />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            {selectedItem && (
                <DetailModal isOpen={!!selectedItem} onClose={closeModal} item={selectedItem}/>
            )}
        </div>
    );
}

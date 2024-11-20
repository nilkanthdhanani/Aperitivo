"use client"
import { useState } from 'react';
import LockIco from '@/assets/images/svg/lockIco';
import styles from './cart.module.scss';

import limeSupreme from "@/assets/images/webp/limeSupreme.webp";
import jasminEdge from "@/assets/images/webp/jasminEdge.webp";
import tikiTaka from "@/assets/images/webp/tikiTaka.webp";
import tripleAce from "@/assets/images/webp/tripleAce.webp";
import citrusBlend from "@/assets/images/webp/citrusBlend.webp";
import Image from 'next/image';
import TrashIco from '@/assets/images/svg/trashIco';
import PromoIco from '@/assets/images/svg/promoIco';
import NoteIco from '@/assets/images/svg/noteIco';

const cartItemsData = [
    { image: limeSupreme, name: 'Lime Supreme', price: 10.75, quantity: 1 },
    { image: jasminEdge, name: 'Jasmin Edge', price: 11.50, quantity: 1 },
    { image: tikiTaka, name: 'Tiki Taka', price: 10.75, quantity: 1 },
    { image: tripleAce, name: 'Triple Ace', price: 10.00, quantity: 1 },
    { image: citrusBlend, name: 'Citrus Blend', price: 10.50, quantity: 1 },
];

export default function CartPage() {
    const [cartItems, setCartItems] = useState(cartItemsData);

    const handleQuantityChange = (index, delta) => {
        setCartItems((prevItems) =>
            prevItems.map((item, i) =>
                i === index
                    ? {
                        ...item,
                        quantity: Math.max(item.quantity + delta, 1),
                    } : item
            )
        );
    };

    const calculateTotal = (price, quantity) => (price * quantity).toFixed(2);

    const calculateSubtotal = () =>
        cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

    return (
        <main>
            <div className={styles.myCart}>
                <div className={styles.containerCart}>
                    <div className={styles.myCartGrid}>
                        <div className={styles.myCartContent}>
                            <h2>My Cart</h2>
                            {cartItems.map((item, index) => (
                                <div className={styles.myCartItems} key={index}>
                                    <div className={styles.myCartItemsName}>
                                        <Image src={item.image} alt={item.name} />
                                        <div>
                                            <h3>{item.name}</h3>
                                            <span>${item.price.toFixed(2)}</span>
                                        </div>
                                        <TrashIco />
                                    </div>
                                    <div className={styles.myCartCalculate}>
                                        <div className={styles.quantityButtons}>
                                            <button onClick={() => handleQuantityChange(index, -1)}>-</button>
                                            <input type="text" value={item.quantity} readOnly />
                                            <button onClick={() => handleQuantityChange(index, 1)}>+</button>
                                        </div>
                                        <span>${calculateTotal(item.price, item.quantity)}</span>
                                        <TrashIco />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={styles.orderSummary}>
                                <h2>Order Summary</h2>
                            <div className={styles.orderSummaryDiv}>
                                <div className={styles.subTotalDiv}>
                                    <h3>Subtotal</h3>
                                    <span>${calculateSubtotal()}</span>
                                </div>
                                <div className={styles.subTotalDiv}>
                                    <h3>Pickup</h3>
                                    <span>FREE</span>
                                </div>
                                <div className={styles.totalDiv}>
                                    <h3>Total</h3>
                                    <span>${calculateSubtotal()}</span>
                                </div>
                                <div className={styles.enterAdd}>
                                    <div className={styles.promoCode}>
                                        <PromoIco />
                                        <p>Enter a promo code</p>
                                    </div>
                                    <input type="text" />
                                </div>
                                <div className={styles.enterAdd}>
                                    <div className={styles.promoCode}>
                                        <NoteIco />
                                        <p>Add a note</p>
                                    </div>
                                    <textarea rows={4}></textarea>
                                </div>
                                <div className={styles.checkoutButton}>
                                    <button type="button">Checkout</button>
                                </div>
                                <div className={styles.secureDiv}>
                                    <LockIco />
                                    <p>Secure Checkout</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

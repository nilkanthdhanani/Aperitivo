import React, { useState } from "react";
import styles from "./cocktailDetails.module.scss";
import Image from "next/image";
import CloseIco from "@/assets/images/svg/closeIco";

export default function DetailModal({ isOpen, onClose, item }) {
    const [quantity, setQuantity] = useState(1);

    if (!isOpen) return null;

    const handleQuantityChange = (type) => {
        setQuantity((prev) => (type === "increment" ? prev + 1 : Math.max(1, prev - 1)));
    };

    const totalPrice = (quantity * parseFloat(item.price.slice(1))).toFixed(2);

    return (
        <div className={styles.DetailModal} onClick={onClose}>
            <div className={styles.DetailModalContent} onClick={(e) => e.stopPropagation()}>
                <div className={styles.closeButton} onClick={onClose}><CloseIco /></div>
                <div className={styles.DetailModallBody}>
                    <Image src={item.image} alt={item.name} />
                    <div className={styles.DetailModallContent}>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <div className={styles.quantityButtons}>
                            <button onClick={() => handleQuantityChange("decrement")}>-</button>
                            <input type="text" value={quantity} readOnly />
                            <button onClick={() => handleQuantityChange("increment")}>+</button>
                        </div>
                        <div className={styles.addToCart} onClick={onClose}>
                            <button>Add to Cart | ${totalPrice}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

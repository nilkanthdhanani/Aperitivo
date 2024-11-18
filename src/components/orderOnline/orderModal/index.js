"use client";
import { useState, useRef } from "react";
import CloseIco from "@/assets/images/svg/closeIco";
import styles from "./orderModal.module.scss";
import PickupDiv from "./howReceive/pickupDiv";
import DeliveryDiv from "./howReceive/deliveryDiv";

export default function OrderModal({ closeModal, initialType = "pickup", setActiveOption }) {
    const [selectedOption, setSelectedOption] = useState(initialType);
    const modalRef = useRef(null);

    const handleOutsideClick = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            closeModal();
        }
    };

    const handleSave = () => {
        setActiveOption(selectedOption);
        closeModal();
    };

    return (
        <div className={styles.orderModal} onClick={handleOutsideClick}>
            <div className={styles.orderModalContent} ref={modalRef}>
                <div className={styles.orderModalContentMain}>
                    <div className={styles.orderModalHead}>
                        <h2>How would you like to receive your order?</h2>
                        <div onClick={closeModal} style={{ cursor: "pointer" }}>
                            <CloseIco />
                        </div>
                    </div>
                    <div className={styles.orderModalButton}>
                        <button
                            type="button"
                            onClick={() => setSelectedOption("pickup")}
                            className={`${styles.button} ${selectedOption === "pickup" ? styles.active : ""}`}>
                            Pickup
                        </button>
                        <button
                            type="button"
                            onClick={() => setSelectedOption("delivery")}
                            className={`${styles.button} ${selectedOption === "delivery" ? styles.active : ""}`}>
                            Delivery
                        </button>
                    </div>
                    <div className={styles.orderModalDetail}>
                        {selectedOption === "pickup" && <PickupDiv />}
                        {selectedOption === "delivery" && <DeliveryDiv />}
                    </div>
                </div>
                <div className={styles.orderModalSave}>
                    <button type="button" onClick={handleSave}>Save</button>
                </div>
            </div>
        </div>
    );
}

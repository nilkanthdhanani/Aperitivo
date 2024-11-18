"use client";
import { useState, useEffect } from "react";
import OrderModal from "../orderModal";
import styles from "./orderHead.module.scss";
import TimeIco from "@/assets/images/svg/timeIco";
import LocationIco from "@/assets/images/svg/locationIco";

export default function OrderHead() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState("pickup");
    const [activeOption, setActiveOption] = useState("pickup");

    const openModal = (type) => {
        setModalType(type);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        if (isModalOpen) {
            document.body.classList.add("scroll-off");
        } else {
            document.body.classList.remove("scroll-off");
        }

        return () => {
            document.body.classList.remove("scroll-off");
        };
    }, [isModalOpen]);

    return (
        <>
            <section className={styles.orderHead}>
                <div className={styles.container}>
                    <h1>Order Online</h1>
                    <p>You can order online! Browse our menu items and choose what you'd like to order from us.</p>
                    <div className={styles.orderButton}>
                        <button type="button"><div className={styles.dotDiv}></div>Accepting Orders</button>
                        <button type="button"><div className={styles.dotDiv}></div>Free Delivery</button>
                        <button type="button"><div className={styles.dotDiv}></div>Cash On Delivery</button>
                    </div>
                    <div className={styles.orderMain}>
                        <div className={styles.orderMainButton}>
                            <button
                                type="button"
                                onClick={() => openModal("pickup")}
                                className={`${styles.button} ${activeOption === "pickup" ? styles.active : ""}`}>
                                Pickup
                            </button>
                            <button
                                type="button"
                                onClick={() => openModal("delivery")}
                                className={`${styles.button} ${activeOption === "delivery" ? styles.active : ""}`}>
                                Delivery
                            </button>
                        </div>
                    </div>
                    <div className={styles.orderDetails}>
                        {activeOption === "pickup" && (
                            <div className={styles.pickupDetails}>
                                <div className={styles.detailsTime}>
                                    <TimeIco />
                                    <p>Pickup Time: <span>up to 30 minutes</span></p>
                                </div>
                                <div className={styles.detailsTime}>
                                    <LocationIco />
                                    <p>Pickup Address: <span>San Francisco, CA</span></p>
                                </div>
                            </div>
                        )}
                        {activeOption === "delivery" && (
                            <div className={styles.deliveryDetails}>
                                <div className={styles.detailsTime}>
                                    <TimeIco />
                                    <p>Delivery Time: <span>up to 60 minutes</span></p>
                                </div>
                                <div className={styles.detailsTime}>
                                    <LocationIco />
                                    <p>Delivery Address: <span>San Francisco, CA</span></p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            {isModalOpen && (
                <OrderModal
                    closeModal={closeModal}
                    initialType={modalType}
                    setActiveOption={setActiveOption}
                />
            )}
        </>
    );
}

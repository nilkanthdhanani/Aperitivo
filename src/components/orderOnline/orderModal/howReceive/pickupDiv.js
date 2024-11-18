import { useState } from 'react';
import styles from './howReceive.module.scss'

export default function PickupDiv() {
    const [radioSelection, setRadioSelection] = useState("1");

    return (
        <div className={styles.pickupDiv}>
            <div className={styles.pickupFrom}>
                <h3>Pickup From:</h3>
                <p>San Francisco, CA, USA</p>
            </div>
            <div className={styles.pickupWhen}>
                <h3>When:</h3>
                <div className={styles.radioGroup}>
                    <label>
                        <input
                            type="radio"
                            name="option"
                            value="1"
                            checked={radioSelection === "1"}
                            onChange={() => setRadioSelection("1")} />
                        <span></span> Up to 30 minutes
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="option"
                            value="2"
                            checked={radioSelection === "2"}
                            onChange={() => setRadioSelection("2")} />
                        <span></span> Schedule for later
                    </label>
                </div>
            </div>
            {radioSelection === "2" && (
                <div className={styles.sheduleDate}>
                    <div className={styles.sheduleDateSelect}>
                        <label htmlFor="date-select">Date:</label>
                        <select name="date-select">
                            <option>Today</option>
                        </select>
                    </div>
                    <div className={styles.sheduleDateSelect}>
                        <label htmlFor="time-select">Time:</label>
                        <select name="time-select">
                            <option>09:00 PM</option>
                            <option>09:30 PM</option>
                            <option>10:00 PM</option>
                            <option>10:30 PM</option>
                            <option>11:00 PM</option>
                            <option>11:30 PM</option>
                            <option>12:00 AM</option>
                            <option>12:30 AM</option>
                        </select>
                    </div>
                </div>
            )}
        </div>
    )
}

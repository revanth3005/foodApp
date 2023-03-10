import React from "react";
import styles from './MealsSummary.module.css'

const MealsSummary = () => {
  return (
    <div className={styles.summary} data-aos="zoom-in-up" >
      <h2>Delicious Food, Delivered To</h2>
      <p>
        Choose your favourite meal from our board selection of menu and enjoy a
        delecious lunch or dinner at home
      </p>
      <p>
        All our meals are cooked with high-quality ingridents of course by
        experienced
      </p>
    </div>
  );
};

export default MealsSummary;
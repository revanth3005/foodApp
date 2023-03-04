import React from "react";
import MeanuItem from "./MeanuItem";
import styles from './AvailableMeals.module.css'
import db from '../../assets/data.json'

const AvailableMeals = ({addItemsToCart}) => {
  
  return (
    <section className={styles.MeanuList}>
      {db.data.map((meal) => (
        <MeanuItem
        addItemsToCart={addItemsToCart}
          name={meal.name}
          price={meal.price}
          description={meal.description}
          id={meal.id}
        />
      ))}
    </section>
  );
};

export default AvailableMeals;
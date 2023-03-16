import React, { useEffect, useState } from "react";
import MenuItem from "../MenuItem/MenuItem";
import styles from "./AvailableMeals.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const AvailableMeals = ({ addItemsToCart }) => {
  const [mealsData, setMealsData] = useState();
  const [load, setLoad] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  useEffect(() => {
    const loaded = [];
    const fetchData = async () => {
      const data = await axios.get(
        "https://foodservice-6f06f-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json"
      );
      console.log(data.data);
      for (const key in data.data) {
        loaded.push({
          id: key,
          name: data.data[key].name,
          price: data.data[key].price,
          description: data.data[key].description,
        });
      }
    };
    fetchData();
    const timer = setTimeout(() => {
      setMealsData(loaded);
      setLoad(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className={styles.MenuList} data-aos="fade-up">
      {load ? (
        mealsData.map((meal) => (
          <div key={meal.id} style={{ padding: "5px" }}>
            <MenuItem
              addItemsToCart={addItemsToCart}
              name={meal.name}
              price={meal.price}
              description={meal.description}
              id={meal.id}
            />
          </div>
        ))
      ) : (
        <div class={styles.spinner}></div>
      )}
      {}
    </div>
  );
};

export default AvailableMeals;

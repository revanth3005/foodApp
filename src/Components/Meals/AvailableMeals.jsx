import React, { useEffect, useState } from "react";
import MeanuItem from "./MeanuItem";
import styles from "./AvailableMeals.module.css";
import db from "../../assets/data.json";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const AvailableMeals = ({ addItemsToCart }) => {
  const [mealsdata, setMealsData] = useState();
  const [dum,setDum]=useState({})
  const [load, setLoad] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get(
        "https://foodservice-6f06f-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json"
      );
      console.log(data.data);
      setDum(data.data)
      const loaded = [];
      for (const key in data.data) {
        loaded.push({
          id: key,
          name: data.data[key].name,
          price: data.data[key].price,
          description: data.data[key].description,
        });
      }
      setMealsData(loaded);
      setLoad(true);
    };
    fetchdata();
  }, []);
  // Object.keys(dum).map((key)=>{
  //   console.log(dum[key].name);
  // })
  return (
    <div className={styles.MeanuList} data-aos="fade-up">
      {load &&
        mealsdata.map((meal) => (
          <div key={meal.id} style={{padding:'5px'}}>
            <MeanuItem
              addItemsToCart={addItemsToCart}
              name={meal.name}
              price={meal.price}
              description={meal.description}
              id={meal.id}
            />
          </div>
        ))}
      {}
    </div>
  );
};

export default AvailableMeals;

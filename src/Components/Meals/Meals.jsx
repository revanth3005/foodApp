import React from 'react'
import AvailableMeals from './AvailableMeals/AvailableMeals'
import MealsSummary from './MealsSummary/MealsSummary'

const Meals = ({addItemsToCart}) => {
  return (
    <section>
        <MealsSummary/>
        <AvailableMeals addItemsToCart={addItemsToCart}/>
    </section>
  )
}

export default Meals
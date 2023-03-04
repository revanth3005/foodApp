import React from 'react'
import AvailableMeals from './AvailableMeals'
import MealsSummary from './MealsSummary'

const Meals = ({addItemsToCart}) => {
  return (
    <section>
        <MealsSummary/>
        <AvailableMeals addItemsToCart={addItemsToCart}/>
    </section>
  )
}

export default Meals
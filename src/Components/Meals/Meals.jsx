import React from 'react'
import Report from '../Report/Report'
import AvailableMeals from './AvailableMeals/AvailableMeals'
import MealsSummary from './MealsSummary/MealsSummary'

const Meals = ({addItemsToCart,cartItems}) => {
  return (
    <section>
        <MealsSummary/>
        <AvailableMeals addItemsToCart={addItemsToCart} cartItems={cartItems}/>
        <Report />
    </section>
  )
}

export default Meals
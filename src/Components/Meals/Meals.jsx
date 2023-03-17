import React from 'react'
import Report from '../Report/Report'
import AvailableMeals from './AvailableMeals/AvailableMeals'
import MealsSummary from './MealsSummary/MealsSummary'

const Meals = ({addItemsToCart}) => {
  return (
    <section>
        <MealsSummary/>
        <AvailableMeals addItemsToCart={addItemsToCart}/>
        <Report />
    </section>
  )
}

export default Meals
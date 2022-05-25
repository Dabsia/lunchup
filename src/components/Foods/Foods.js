import React, { useState, useEffect } from 'react'
import { foodsData } from './FoodsData'
import Food from '../Food/Food'
import './Foods.css'

const Foods = () => {

    const [foodList, setsetFoodList] = useState([])

    useEffect(() => {
        setsetFoodList(foodsData)
    }, [foodList])


  return (
    <div className='foodsContainer'>
        {
            foodList.map(food => {
                return (
                    <Food key = {food.id}  name = {food.name} price = {food.price} imageUrl = {food.imageUrl}/>
                )
            })
        }
    </div>
  )
}

export default Foods
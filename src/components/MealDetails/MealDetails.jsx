import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../Spinner/Spinner'
import { motion } from 'framer-motion'

const MealDetails = () => {
  const { id } = useParams()
  const [meal, setMeal] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMeal(data.meals[0])
        setLoading(false)
      })
  }, [id])

  const { strMeal, strMealThumb, strInstructions } = meal

  return (
    <>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <div className='bg-[#1B2021] min-h-screen grid content-center'>
          <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 text-white items-center'>
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img src={strMealThumb} alt='' />
            </motion.div>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className='p-4'
            >
              <h2 className='text-3xl font-semibold'>
                Cooking instruction for {strMeal}
              </h2>
              <p className='text-xl mt-12'>{strInstructions}</p>
              <div className='mt-5'>
                <LoadIngrediants meal={meal}></LoadIngrediants>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </>
  )
}

function LoadIngrediants({ meal }) {
  const ingrediants = []
  for (let i = 0; i < 10; i++) {
    const ingrediant = meal[`strIngredient${i}`]
    if (ingrediant) ingrediants.push(ingrediant)
  }
  return <p className='text-xl text-zinc-400'>Ingrediants : {ingrediants.join(', ')}</p>
}

export default MealDetails

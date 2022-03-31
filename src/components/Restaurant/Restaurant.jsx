import React, { useEffect, useState } from 'react'
import Meals from '../Meals/Meals'
import Spinner from '../Spinner/Spinner'

const Restaurant = () => {
  const [searchText, setSearchText] = useState('')
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // setLoading(true) //?without this loading animation will show only once for initial fetch
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMeals(data.meals)
        setLoading(false)
      })
  }, [searchText])

  const searchFood = (e) => {
    setSearchText(e.target.value)
  }
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className='bg-[#1B2021] pt-8 text-white'>
          <div className='text-center'>
            <h1 className='text-3xl font-bold'>Search Meal by Name</h1>
            <input
              onChange={searchFood}
              placeholder='search your favourite food'
              className='font-semibold rounded border-0 mt-12 md:w-1/3 py-2 px-6 outline-none bg-zinc-600 focus:bg-zinc-700'
              type='text'
            />
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 container mx-auto mt-16 w-3/4 min-h-screen'>
            {meals?.map((meal) => (
              <Meals key={meal.idMeal} meal={meal}></Meals>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default Restaurant

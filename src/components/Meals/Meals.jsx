import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Meals = ({ meal }) => {
  const {
    strMeal: name,
    strMealThumb: thumbnail,
    strCategory: category,
    idMeal: id,
  } = meal

  return (
    <motion.div
      initial={{y: 30, opacity: .5}}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className='flex flex-col justify-between bg-[#30343F] rounded-lg text-white h-[600px] overflow-hidden'
    >
      <div className='p-2'>
        <div className='bg-red-500 rounded-md overflow-hidden'>
          <img
            className='hover:scale-110 transition-transform duration-300'
            src={thumbnail}
            alt=''
          />
        </div>
        <div className='px-4 mt-4'>
          <h2 className='text-3xl'>{name}</h2>
          <h2 className='text-xl font-semibold'>{category}</h2>
        </div>
      </div>
      <Link
        to={`/restaurant/${id}`}
        className='bg-[#2a2d36] w-full py-4 text-lg font-semibold text-center hover:bg-gray-600 transition-colors'
      >
        Details
      </Link>
    </motion.div>
  )
}

export default Meals

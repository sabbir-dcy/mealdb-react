import React from 'react'
import { motion } from 'framer-motion'
const Home = () => {
  return (
    <motion.div className='text-center h-screen bg-[#1B2021] text-white flex flex-col justify-center items-center'>
      {/* prettier-ignore */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        >
        <h1 className='text-4xl font-semibold'>
          welcome to meal db unofficial
        </h1>
        <p className='text-lg mt-5 w-3/4 mx-auto'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati,
          incidunt. Dolor labore numquam inventore? Aperiam optio aliquam
          blanditiis sint quis asperiores, reprehenderit tenetur culpa? Qui
          inventore earum odit libero eum.
        </p>
      </motion.div>
    </motion.div>
  )
}

export default Home

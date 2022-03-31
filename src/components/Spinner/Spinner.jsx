import React from 'react'
import './Spinner.css'

const Spinner = () => {
  return (
    <div className='bg-[#1B2021] h-screen grid content-center justify-center'>
      <div className='w-8 h-8 shape border-2 flex justify-center items-center'>
        <div className='w-6 h-6 shape border-2'></div>
      </div>
    </div>
  )
}

export default Spinner

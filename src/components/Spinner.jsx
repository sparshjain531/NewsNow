import React from 'react'
import spin from "./spin.gif"

const Spinner = () => {
  return (
    <div className='text-center'>
      <img className='my-3' src={spin} alt="spin" />
    </div>
  )
}

export default Spinner

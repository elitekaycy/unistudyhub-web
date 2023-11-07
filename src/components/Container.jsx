import React from 'react'

function Container({ children }) {
  return (
    <div className='md:px-56 px-12'>
         {children}
    </div>
  )
}

export default Container
import React from 'react'

const Loading = () => {
  return (
    <div className='loading-container absolute left-1/2 top-0 flex justify-center items-center h-screen'>
        <div className="lds-hourglass"></div>
    </div>
  )
}

export default Loading
import React from 'react'
import william from "./William.jpg"

function Experience() {
  return (
    <div className='flex flex-col'>
      <div className='mt-28 h-[500px]'>
      <div className='flex flex-col'>
        <div className='inline-flex items-center justify-center mb-14'>
          <hr className='w-full h-1 border-0 bg-gray-200 rounded'/>
          <h1 className='text-4xl md:text-6xl text-center px-2 md:px-5
          -translate-x-1/2 absolute bg-white left-1/2' id="Experience">Experience</h1>
        </div>
      </div>
      <div className='w-1/3 pl-10 flex flex-col'>
        <div className='my-2 w-48 h-48'>
          <img src={william} alt="William" />
        </div>
        <div className='my-2 w-48 h-48'>
          <img src={william} alt="William" />
        </div>
        <div className='my-2 w-48 h-48'>
          <img src={william} alt="William" />
        </div>
      </div>
    </div>
      {/* <div className='inline-flex items-center justify-center mb-14'>
          <hr className='w-full h-1 border-0 bg-gray-200 rounded'/>
          <h1 className='text-4xl md:text-6xl text-center px-2 md:px-5
          -translate-x-1/2 absolute bg-white left-1/2' id="About">About Me</h1>
        </div>
      <div className='w-1/3 pl-10 flex flex-col'>
        <div className='my-2 w-48 h-48'>
          <img src={william} alt="William" />
        </div>
        <div className='my-2 w-48 h-48'>
          <img src={william} alt="William" />
        </div>
        <div className='my-2 w-48 h-48'>
          <img src={william} alt="William" />
        </div>
      </div>
      <div className='w-2/3'>
        Descriptions
      </div> */}
    </div>
  )
}

export default Experience
import React from 'react'

function About() {
  return (
    <div className='mt-28 h-[500px]'>
      <div className='flex flex-col'>
        <div className='inline-flex items-center justify-center mb-14'>
          <hr className='mx-2 w-full h-1 border-0 bg-gray-200 rounded'/>
          <h1 className='text-4xl md:text-6xl text-center px-2 md:px-5
          -translate-x-1/2 absolute bg-white left-1/2' id="About">About Me</h1>
        </div>
        <p>
          Description here about things and stuff and possibly even stuff and things
        </p>
      </div>
    </div>
  )
}

export default About
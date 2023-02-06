import React from 'react'

function About() {
  return (
    <div className='mt-28'>
      <div className='flex flex-col'>
        <div className='inline-flex items-center justify-center mb-14'>
          <hr className='mx-2 w-full h-1 border-0 bg-gray-200 rounded'/>
          <h1 className='text-4xl md:text-6xl px-2 md:px-5 bg-white absolute'
          id="About">About Me</h1>
        </div>
        <div className='w-1/2 self-center pt-10'>
          <p className='text-center text-2xl'>
            I am a recent graduate from Louisiana State University currently looking for a full time software
            developer position.
            <br /><br />
            My story started my freshman year of college, where I was first introduced to the programming
            language Python. The very next semester, I changed my major from kinesiology to computer science,
            and I haven't looked back since.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
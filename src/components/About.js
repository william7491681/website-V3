import React from 'react'

function About(props) {
  const darkStyles = {
    wrapper: ["pt-28 bg-neutral-800"],
    hr: ["mx-2 w-full h-1 border-0 bg-neutral-600 rounded"],
    about: ["text-4xl md:text-6xl font-semibold font-yeseva px-2 md:px-5 bg-neutral-800 absolute text-gray-200"],
    desc: ["text-center font-light text-2xl pt-10 md:pt-0 text-gray-200"]
  }
  const lightStyles = {
    wrapper: ["pt-28"],
    hr: ["mx-2 w-full h-1 border-0 bg-gray-200 rounded"],
    about: ["text-4xl md:text-6xl font-semibold font-yeseva px-2 md:px-5 bg-white absolute"],
    desc: ["text-center font-light text-2xl pt-10 md:pt-0"]
  }
  const isDarkMode = props.DarkMode;

  return (
    <div className={isDarkMode ? darkStyles.wrapper : lightStyles.wrapper}>
      <div className='flex flex-col'>
        <div className='inline-flex items-center justify-center mb-14'>
          <hr className={isDarkMode ? darkStyles.hr : lightStyles.hr}/>
          <h1 className={isDarkMode ? darkStyles.about : lightStyles.about}
          id="About">About Me</h1>
        </div>
        <div className='w-2/3 md:w-1/2 self-center md:pt-10'>
          <p className={isDarkMode ? darkStyles.desc : lightStyles.desc}>
            I am a recent graduate from Louisiana State University currently looking for a full time software
            developer position.
            <br /><br />
            My story started my freshman year of college, where I was first introduced to the programming
            language Python.
            <br /><br />
            The very next semester, I changed my major from kinesiology to computer science,
            and I haven't looked back since.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
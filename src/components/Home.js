import React from 'react'
import william from "./assets/William.jpg"


function Home(props) {
  const darkStyles = {
    home: ["flex flex-col md:flex-row justify-center py-10 bg-neutral-800"],
    HIWD: ["text-4xl md:text-6xl text-gray-200"],
    leftList: ["mt-2 font-bold text-gray-200"],
    rightList: ["mt-2 ml-[6px] text-gray-200"]
  }
  const lightStyles = {
    home: ["flex flex-col md:flex-row justify-center py-10"],
    HIWD: ["text-4xl md:text-6xl"],
    leftList: ["mt-2 font-bold"],
    rightList: ["mt-2 ml-[6px]"]
  }
  const isDarkMode = props.DarkMode;
  return (
    <div id="Home" className={isDarkMode ? darkStyles.home : lightStyles.home}>
      <div className='flex justify-evenly h-5/6'>
        <div className='flex justify-evenly h-5/6'>
          <div className='w-1/3 self-end'>
            <img src={william} alt="William" className='h-2/3'/>
          </div>
          <div className='w-1/3 md:w-2/3 md:flex md:justify-center'>
            <div className='w-5/6 md:flex md:flex-col justify-evenly'>
              <div>
                <h1 className={isDarkMode ? darkStyles.HIWD : lightStyles.HIWD}>
                  Hi, I'm William Dines
                </h1>
                <p className='text-sm md:text-lg font-light md:font-normal text-blue-700'>
                  Software Developer
                </p>
              </div>
              <div className='hidden md:flex text-2xl content-between'>
                <div>
                  <p className={isDarkMode ? darkStyles.leftList : lightStyles.leftList}>Address: </p>
                  <p className={isDarkMode ? darkStyles.leftList : lightStyles.leftList}>Phone: </p>
                  <p className={isDarkMode ? darkStyles.leftList : lightStyles.leftList}>Email: </p>
                  <p className={isDarkMode ? darkStyles.leftList : lightStyles.leftList}>Linkedin: </p>
                  <p className={isDarkMode ? darkStyles.leftList : lightStyles.leftList}>Github: </p>
                </div>
                <div className='ml-5'>
                  <p className={isDarkMode ? darkStyles.rightList : lightStyles.rightList}>152 S. Tish Drive</p>
                  <p className={isDarkMode ? darkStyles.rightList : lightStyles.rightList}>(405)-888-2607</p>
                  <p className={isDarkMode ? darkStyles.rightList : lightStyles.rightList}>Williamdines@rocketmail.com</p>
                  <p className='mt-2'>
                    <a href="http://Linkedin.com/in/William-Dines" target="_blank" rel="noopener noreferrer"
                    className='text-blue-700'>&nbsp;Linkedin.com/in/William-Dines</a>
                  </p>
                  <p className='mt-2'>
                    <a href="http://Github.com/william7491681" target="_blank" rel="noopener noreferrer"
                    className='text-blue-700'>&nbsp;Github.com/William7491681</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-5/6 flex md:hidden items-start pl-2 pt-10 self-center'>
        <div>
          <p className='mt-2 font-bold'>Address: </p>
          <p className='mt-2 font-bold'>Phone: </p>
          <p className='mt-2 font-bold'>Email: </p>
          <p className='mt-2 font-bold'>Linkedin: </p>
          <p className='mt-2 font-bold'>Github: </p>
        </div>
        <div>
          <p className='mt-2 ml-4'>152 S. Tish Drive</p>
          <p className='mt-2 ml-4'>(405)-888-2607</p>
          <p className='mt-2 ml-4'>Williamdines@rocketmail.com</p>
          <p className='mt-2 ml-3'>
            <a href="http://Linkedin.com/in/William-Dines" target="_blank" rel="noopener noreferrer"
            className='text-blue-700 visited:text-purple-800'>&nbsp;Linkedin.com/in/William-Dines</a>
          </p>
          <p className='mt-2 ml-3'>
            <a href="http://Github.com/william7491681" target="_blank" rel="noopener noreferrer"
            className='text-blue-700 visited:text-purple-800'>&nbsp;Github.com/William7491681</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
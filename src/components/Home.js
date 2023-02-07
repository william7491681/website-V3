import React from 'react'
import william from "./assets/William.jpg"


function Home(props) {
  const darkStyles = {
    home: ["flex flex-col md:flex-row justify-center pt-10 bg-neutral-800"],
    HIWD: ["text-4xl md:text-6xl text-gray-200 font-light"],
    leftList: ["mt-2 font-semibold text-gray-200"],
    rightList: ["mt-2 ml-[6px] font-light text-gray-200"],
    mobileRightList: ["mt-2 ml-4 font-light text-gray-200"]
  }
  const lightStyles = {
    home: ["flex flex-col md:flex-row justify-center pt-10"],
    HIWD: ["text-4xl md:text-6xl"],
    leftList: ["mt-2 font-semibold"],
    rightList: ["mt-2 font-light ml-[6px]"],
    mobileRightList: ["mt-2 font-light ml-4"]
  }
  const isDarkMode = props.DarkMode;
  return (
    <div id="Home" className={isDarkMode ? darkStyles.home : lightStyles.home}>
        <div className='flex justify-evenly h-5/6'>
          <div className='w-1/3 h-full self-end justify-self-center'>
            <img src={william} alt="William" className='w-full h-full'/>
          </div>
          <div className='w-1/3 md:w-2/3 md:flex md:justify-center'>
            <div className='w-5/6 md:flex md:flex-col justify-evenly'>
              <div>
                <h1 className={isDarkMode ? darkStyles.HIWD : lightStyles.HIWD}>
                  Hi, I'm <span className='font-bold font-yeseva'>William Dines</span>
                </h1>
                <p className='text-sm md:text-lg text-blue-700 font-light'>
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
      <div className='w-5/6 flex md:hidden items-start pl-2 pt-10 self-center'>
        <div>
          <p className={isDarkMode ? darkStyles.leftList : lightStyles.leftList}>Address: </p>
          <p className={isDarkMode ? darkStyles.leftList : lightStyles.leftList}>Phone: </p>
          <p className={isDarkMode ? darkStyles.leftList : lightStyles.leftList}>Email: </p>
          <p className={isDarkMode ? darkStyles.leftList : lightStyles.leftList}>Linkedin: </p>
          <p className={isDarkMode ? darkStyles.leftList : lightStyles.leftList}>Github: </p>
        </div>
        <div>
          <p className={isDarkMode ? darkStyles.mobileRightList : lightStyles.mobileRightList}>152 S. Tish Drive</p>
          <p className={isDarkMode ? darkStyles.mobileRightList : lightStyles.mobileRightList}>(405)-888-2607</p>
          <p className={isDarkMode ? darkStyles.mobileRightList : lightStyles.mobileRightList}>Williamdines@rocketmail.com</p>
          <p className='mt-2 ml-3'>
            <a href="http://Linkedin.com/in/William-Dines" target="_blank" rel="noopener noreferrer"
            className='text-blue-700'>&nbsp;Linkedin.com/in/William-Dines</a>
          </p>
          <p className='mt-2 ml-3'>
            <a href="http://Github.com/william7491681" target="_blank" rel="noopener noreferrer"
            className='text-blue-700'>&nbsp;Github.com/William7491681</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
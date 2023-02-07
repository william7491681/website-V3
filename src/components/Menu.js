import {React, useState, useRef} from 'react'
import { FiMenu, FiPlus } from "react-icons/fi"
import resume from "./assets/resume.pdf"

function Menu(props) {
  const [Navigating, setNavigating] = useState(false)
  const menuClicked = () => {
    setNavigating(!Navigating);
  }
  const menuSection = useRef(null);
  const clickOffMenu = (e) => {
    if (menuSection.current && Navigating && !menuSection.current.contains(e.target)) {
      setNavigating(false);
    }
  }
  document.addEventListener("mousedown", clickOffMenu);

  const darkStyles = {
    wholeMenu: ["fixed right-0 pr-2 pt-2 bg-neutral-600 z-10"],
    outMenu: ["animate-rotate hover:cursor-pointer text-white"],
    inMenu: ["animate-rotate absolute right-0 mr-5 ml-1 hover:cursor-pointer rotate-45 text-white"],
    li: ["mb-2 px-1 hover:cursor-pointer bg-neutral-200 font-medium"]
  }
  const lightStyles = {
    wholeMenu: ["fixed right-0 pr-2 pt-2 bg-neutral-100 z-10"],
    outMenu: ["animate-rotate hover:cursor-pointer text-neutral-700 text-black"],
    inMenu: ["animate-rotate absolute right-0 mr-5 ml-1 hover:cursor-pointer rotate-45 text-black"],
    li: ["mb-2 px-1 hover:cursor-pointer bg-neutral-400 text-white font-medium"]
  }
  const isDarkMode = props.DarkMode;
  const scroller = (el) => {
    const str = el.target.innerText
    const element = document.getElementById(str)
    if (element) {
      element.scrollIntoView({behavior: "smooth"})
      setNavigating(!Navigating);
    }
}

  return (
    <div>
      {Navigating ?
      <div className={isDarkMode ? darkStyles.wholeMenu : lightStyles.wholeMenu} ref={menuSection}>
        <FiPlus size={35} className={isDarkMode ? darkStyles.inMenu : lightStyles.inMenu} onClick={menuClicked} />
        <ul className='pt-10 text-xl font-extralight'>
          <li className={isDarkMode ? darkStyles.li : lightStyles.li} onClick={scroller}>Home</li>
          <li className={isDarkMode ? darkStyles.li : lightStyles.li} onClick={scroller}>About</li>
          <li className={isDarkMode ? darkStyles.li : lightStyles.li} onClick={scroller}>Experience</li>
          <li className={isDarkMode ? darkStyles.li : lightStyles.li}>
            <form action="mailto:williamdines@rocketmail.com?subject=Communication from William-Dines.com" method="post" encType='text/plain'>
              <button type="submit">
                Contact by Email
              </button>
            </form>
          </li>
          <li className={isDarkMode ? darkStyles.li : lightStyles.li}>
            <a href={resume} download="William-Dines-Resume" onClick={menuClicked}>Download Resume</a>
          </li>
        </ul>
      </div>
      :
      <div className='fixed right-0 mr-5 mt-2'>
        <FiMenu size={35} className={isDarkMode ? darkStyles.outMenu : lightStyles.outMenu} onClick={menuClicked} />
      </div>
      
      }
    </div>
  )
}

export default Menu
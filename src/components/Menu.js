import {React, useState, useRef} from 'react'
import { FiMenu, FiPlus } from "react-icons/fi"
import resume from "./resume.pdf"

function Menu() {
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

  const styles = {
    li: ["mb-2 px-1 hover:cursor-pointer bg-neutral-200"]
  }

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
      <div className='fixed right-0 pr-2 pt-2 bg-neutral-100' ref={menuSection}>
        <FiPlus size={35} className="animate-rotate absolute right-0 mr-5 ml-1
        hover:cursor-pointer rotate-45 text-neutral-700" onClick={menuClicked} />
        <ul className='pt-10 text-xl font-extralight'>
          <li className={styles.li} onClick={scroller}>Home</li>
          <li className={styles.li} onClick={scroller}>About</li>
          <li className={styles.li} onClick={scroller}>Experience</li>
          <li className={styles.li}>4</li>
          <li className={styles.li}>
            <a href={resume} download="William-Dines-Resume">Download Resume</a>
          </li>
        </ul>
      </div>
      :
      <div className='fixed right-0 mr-5 mt-2'>
        <FiMenu size={35} className="animate-rotate hover:cursor-pointer
        text-neutral-700" onClick={menuClicked} />
      </div>
      
      }
    </div>
  )
}

export default Menu
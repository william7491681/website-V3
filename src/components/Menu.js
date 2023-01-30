import {React, useState} from 'react'
import { FiMenu, FiPlus } from "react-icons/fi"

function Menu() {
  const [Navigating, setNavigating] = useState(false)
  const menuClicked = () => {
    setNavigating(!Navigating);
  }

  const styles = {
    li: ["my-3 ml-1"]
  }
  return (
    <div>
      {Navigating ?
      <div className='fixed right-0 pr-5 pl-1 pt-2 bg-gray-100'>
        <FiPlus size={35} className="absolute right-0 mr-5 ml-1 hover:cursor-pointer rotate-45" onClick={menuClicked} />
        <ul className='pt-10 text-xl font-extralight'>
          <li className={styles.li}>Home</li>
          <li className={styles.li}>About</li>
          <li className={styles.li}>Experience</li>
          <li className={styles.li}>4</li>
          <li className={styles.li}>Download Resume</li>
        </ul>
      </div>
      :
      <div className='fixed right-0 mr-5 mt-2'>
        <FiMenu size={35} className="hover:cursor-pointer" onClick={menuClicked} />
      </div>
      
      }
    </div>
  )
}

export default Menu
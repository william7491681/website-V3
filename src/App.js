import { React, useState } from 'react'
import { Menu, Home, About, Experience, Footer } from "./components"
import { MdDarkMode, MdWbSunny} from "react-icons/md"

function App() {
  const [DarkMode, setDarkMode] = useState(true)
  const toggleDarkMode = () => {
    setDarkMode(!DarkMode);
  }
  return (
    <div>
      <div className='hidden md:block fixed right-20 mt-3'>
        { DarkMode ?
          <MdWbSunny className="hover:cursor-pointer text-white" size={35} onClick={toggleDarkMode}/>
          :
          <MdDarkMode className="hover:cursor-pointer text-black" size={35} onClick={toggleDarkMode}/>
        }
      </div>
      <div className='md:hidden fixed left-5 mt-3'>
      { DarkMode ?
          <MdWbSunny className="hover:cursor-pointer text-white" size={35} onClick={toggleDarkMode}/>
          :
          <MdDarkMode className="hover:cursor-pointer text-black" size={35} onClick={toggleDarkMode}/>
        }
      </div>
      <Menu DarkMode={DarkMode}/>
      <Home DarkMode={DarkMode}/>
      <About DarkMode={DarkMode}/>
      <Experience DarkMode={DarkMode}/>
      {/* <Footer /> */}
    </div>
  )
}

export default App
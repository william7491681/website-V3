import { React, useState } from 'react'
import { Menu, Home, About, Experience, Footer } from "./components"
import { MdDarkMode, MdOutlineDarkMode} from "react-icons/md"

function App() {
  const [DarkMode, setDarkMode] = useState(false)
  const toggleDarkMode = () => {
    setDarkMode(!DarkMode);
  }
  return (
    <div>
      <div className='fixed right-20 mt-2 z-20'>
        { DarkMode ?
          <MdDarkMode className="hover:cursor-pointer" size={35} onClick={toggleDarkMode}/>
          :
          <MdOutlineDarkMode className="hover:cursor-pointer" size={35} onClick={toggleDarkMode}/>
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
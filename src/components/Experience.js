import React from 'react'
import python from "./assets/python.png"
import R from "./assets/R2.png"
import powerBI from "./assets/powerBI.png"
import java from "./assets/java.png"
import sql from "./assets/sql.png"
import C from "./assets/C.png"
import tailwind from "./assets/tailwind.png"
import react from "./assets/react.png"
import flask from "./assets/flask.png"

function Experience(props) {
  const darkStyles = {
    wrapper: ["flex flex-col pb-1 bg-neutral-800"],
    hr: ["mx-2 w-full h-1 border-0 bg-neutral-600 rounded"],
    exp: ["text-4xl md:text-6xl px-2 md:px-5 bg-neutral-800 text-gray-200 absolute"],
    skillTitles: ["text-3xl text-center pb-4 text-gray-200"],
    skillDescriptions: ["pt-5 text-center w-4/5 text-gray-200"],
    mobileSkillTitle: ["text-center text-gray-200 text-xl mt-20"],
    mobileSkillDescriptions: ["text-center text-gray-200"]
  }
  const lightStyles = {
    wrapper: ["flex flex-col pb-1"],
    hr: ["mx-2 w-full h-1 border-0 bg-gray-200 rounded"],
    exp: ["text-4xl md:text-6xl px-2 md:px-5 bg-white absolute"],
    skillTitles: ["text-3xl text-center pb-4"],
    skillDescriptions: ["pt-5 text-center w-4/5"],
    mobileSkillTitle: ["text-center text-xl mt-20"],
    mobileSkillDescriptions: ["text-center"]
  }
  const isDarkMode = props.DarkMode;

  return (
    <div className={isDarkMode ? darkStyles.wrapper : lightStyles.wrapper}>
      <div className='mt-28'>
        <div className='flex flex-col'>
          <div className='inline-flex items-center justify-center mb-14'>
            <hr className={isDarkMode ? darkStyles.hr : lightStyles.hr} />
            <h1 className={isDarkMode ? darkStyles.exp : lightStyles.exp}
            id="Experience">Experience</h1>
          </div>
        </div>
        <div className='hidden md:block'>
          <div className='flex justify-around mt-10'>
            <div className='w-1/3 flex flex-col items-center'>
              <p className={isDarkMode ? darkStyles.skillTitles : lightStyles.skillTitles}>
                Data Science/Analytics
              </p>
              <div className='flex justify-center h-[81px]'>
                <img src={python} alt="Python" className='px-2'/>
                <img src={R} alt="R" className='px-2'/>
                <img src={powerBI} alt="Power BI" className='px-2'/>
              </div>
              <p className={isDarkMode ? darkStyles.skillDescriptions : lightStyles.skillDescriptions}>
                I have experience with data science/analytics using Python, R, and Power BI.
                <br /><br />
                I am able to utilize libraries such as Pandas, Numpy, and Scikit-Learn to manipulate, analyze,
                and predict data.
                <br /><br />
                I am then able to visualize that data with either Python/R libraries, or a
                dashboarding tool such as Power BI.
              </p>
            </div>
            <div className='w-1/3 flex flex-col items-center'>
              <p className={isDarkMode ? darkStyles.skillTitles : lightStyles.skillTitles}>
                Application Development
              </p>
              <div className='flex justify-center h-[81px]'>
                <img src={java} alt="Java" className='px-2'/>
                <img src={sql} alt="SQL" className='px-2'/>
                <img src={C} alt="C" className='px-2'/>
              </div>
              <p className={isDarkMode ? darkStyles.skillDescriptions : lightStyles.skillDescriptions}>
                I have experience with application development using Java, C, and SQL.
                <br /><br />
                My experience began in college, where I created projects that centered around the
                concepts of object oriented programming, advanced data structures/algorithms, and computational
                organization/design.
              </p>
            </div>
            <div className='w-1/3 flex flex-col items-center'>
              <p className={isDarkMode ? darkStyles.skillTitles : lightStyles.skillTitles}>
                Web Development
              </p>
              <div className='flex justify-center h-[81px]'>
                <img src={react} alt="React" className='px-2'/>
                <img src={tailwind} alt="Javascript" className='px-2'/>
                <img src={flask} alt="Flask" className={`px-[10px] ${isDarkMode ? "invert" : null}`}/>
              </div>
              <p className={isDarkMode ? darkStyles.skillDescriptions : lightStyles.skillDescriptions}>
                I have experience with web development using React.js, HTML, CSS/Tailwind, Flask, and more.
                <br /><br />
                I am newer to website development, but I am quickly learning different libraries/frameworks.
                <br /><br />
                Currently, I am working on side projects involving web development, such as this website.
              </p>
            </div>
          </div>
        </div>
        <div className='md:hidden flex flex-col items-center'>
          <div className='flex flex-col'>
            <p className={isDarkMode ? darkStyles.mobileSkillTitle : lightStyles.mobileSkillTitle}>
              Data Science/Analytics
            </p>
            <div className='flex w-2/3 h-[50px] justify-evenly ml-auto mr-auto mt-5'>
              <img src={python} alt="Python" />
              <img src={R} alt="R" />
              <img src={powerBI} alt="Power BI" />
            </div>
            <p className={isDarkMode ? darkStyles.mobileSkillDescriptions : lightStyles.mobileSkillDescriptions}>
                I have experience with data science/analytics using Python, R, and Power BI.
                <br /><br />
                I am able to utilize libraries such as Pandas, Numpy, and Scikit-Learn to manipulate, analyze,
                and predict data.
                <br /><br />
                I am then able to visualize that data with either Python/R libraries, or a
                dashboarding tool such as Power BI.
            </p>
          </div>
          <div className='flex flex-col'>
            <p className={isDarkMode ? darkStyles.mobileSkillTitle : lightStyles.mobileSkillTitle}>
              Application Development
            </p>
            <div className='flex w-2/3 h-[50px] justify-evenly ml-auto mr-auto mt-5'>
              <img src={java} alt="Java" />
              <img src={sql} alt="SQL" />
              <img src={C} alt="C" />
            </div>
            <p className={isDarkMode ? darkStyles.mobileSkillDescriptions : lightStyles.mobileSkillDescriptions}>
                I have experience with application development using Java, C, and SQL.
                <br /><br />
                My experience began in college, where I created projects that centered around the
                concepts of object oriented programming, advanced data structures/algorithms, and computational
                organization/design.
            </p>
          </div>
          <div className='flex flex-col'>
            <p className={isDarkMode ? darkStyles.mobileSkillTitle : lightStyles.mobileSkillTitle}>
              Web Development
            </p>
            <div className='flex w-2/3 h-[50px] justify-evenly ml-auto mr-auto mt-5'>
              <img src={react} alt="React" />
              <img src={tailwind} alt="TailwindCSS" />
              <img src={flask} alt="Flask" className={`px-[1px] ${isDarkMode ? "invert" : null}`}/>
            </div>
            <p className={isDarkMode ? darkStyles.mobileSkillDescriptions : lightStyles.mobileSkillDescriptions}>
                I have experience with web development using React.js, HTML, CSS/Tailwind, Flask, and more.
                <br /><br />
                I am newer to website development, but I am quickly learning different libraries/frameworks.
                <br /><br />
                Currently, I am working on side projects involving web development, including this website.
                <br /><br />
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
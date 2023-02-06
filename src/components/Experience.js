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

function Experience() {
  return (
    <div className='flex flex-col pb-1'>
      <div className='mt-28'>
        <div className='flex flex-col'>
          <div className='inline-flex items-center justify-center mb-14'>
            <hr className='mx-2 w-full h-1 border-0 bg-gray-200 rounded'/>
            <h1 className='text-4xl md:text-6xl px-2 md:px-5 bg-white absolute'
            id="Experience">Experience</h1>
          </div>
        </div>
        <div className='flex justify-around mt-20'>
          <div className='w-1/3 flex flex-col items-center'>
            <p className='text-3xl text-center pb-4'>
              Data Science/Analytics
            </p>
            <div className='flex justify-center h-[81px]'>
              <img src={python} alt="Python" className='px-2'/>
              <img src={R} alt="R" className='px-2'/>
              <img src={powerBI} alt="Power BI" className='px-2'/>
            </div>
            <p className='pt-5 text-center w-4/5'>
              {/* I have experience with software tools such as Python, R, and Power BI for data science/analytics. */}
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
            <p className='text-3xl text-center pb-4'>
              Application Development
            </p>
            <div className='flex justify-center h-[81px]'>
              <img src={java} alt="Java" className='px-2'/>
              <img src={sql} alt="SQL" className='px-2'/>
              <img src={C} alt="C" className='px-2'/>
            </div>
            <p className='pt-5 text-center w-4/5'>
              I have experience with application development using Java, C, and SQL.
              <br /><br />
              My experience began in college, where I created projects that centered around the
              concepts of object oriented programming, advanced data structures/algorithms, and computational
              organization/design.

            </p>
          </div>
          <div className='w-1/3 flex flex-col items-center'>
            <p className='text-3xl text-center pb-4'>
              Web Development
            </p>
            <div className='flex justify-center h-[81px]'>
              <img src={react} alt="React" className='px-2'/>
              <img src={tailwind} alt="Javascript" className='px-2'/>
              <img src={flask} alt="Flask" className='px-2'/>
            </div>
            <p className='pt-5 text-center w-4/5'>
              I have experience with web development using React.js, HTML, CSS/Tailwind, Flask, and more.
              <br /><br />
              I am newer to website development, but I am quickly learning different libraries/frameworks
              such as React.js, Flask, Tailwind, and more.
              <br /><br />
              Currently, I am working on side projects involving web development, including this website.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
import React from 'react'
import { Link, Route, Router, Routes } from 'react-router-dom'
import Home from './Home'

const SelectFes = () => {
  return (
    <div className='text-center'>
      <div className='mt-20'>

       <div className='m-4 w-1/3 mx-auto border border-slate-500'>
          <Link to="/tite/1">
            TEST
          </Link>
        </div>

        <div className='m-4 w-1/3 mx-auto border border-slate-500'>
          <Link to="/tite/2">
            <img src={process.env.PUBLIC_URL + '/resources/tif230804.jpg'} 
              alt="TIF2023 0804" />
          </Link>
        </div>

        <div className='m-4 w-1/3 mx-auto border border-slate-500'>
          <Link to="/tite/3">
            <img src={process.env.PUBLIC_URL + '/resources/tif230805.jpg'} 
              alt="TIF2023 0805" />
          </Link>
        </div>

        <div className='m-4 w-1/3 mx-auto border border-slate-500'>
          <Link to="/tite/4">
            <img src={process.env.PUBLIC_URL + '/resources/tif230806.jpg'} 
              alt="TIF2023 0806" />
          </Link>
        </div>

      </div>
      <Routes>
        <Route path="/tite/:id" component={Home} />
      </Routes>
    </div>
    
  )
}

export default SelectFes
import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import SideDrawer from '../CmnComponents/SideDrawer'
import MenuModal from "../CmnComponents/MenuModal"

const SelectFes = () => {
  return (
    <>
    <div className="fixed top-12 right-12">
      <MenuModal></MenuModal>
    </div>
    <div className='text-center'>
      <div className='mt-20'>

       <div className='m-4 w-4/5 mx-auto border border-slate-500'>
          <Link to="/tite/1">
            TEST
          </Link>
        </div>

        <div className='m-4 w-4/5 mx-auto border border-slate-500'>
          <Link to="/tite/2">
            <img src={process.env.PUBLIC_URL + '/resources/tif/tif230804.jpg'} 
              alt="TIF2023 0804" />
          </Link>
        </div>

        <div className='m-4 w-4/5 mx-auto border border-slate-500'>
          <Link to="/tite/3">
            <img src={process.env.PUBLIC_URL + '/resources/tif/tif230805.jpg'} 
              alt="TIF2023 0805" />
          </Link>
        </div>

        <div className='m-4 w-4/5 mx-auto border border-slate-500'>
          <Link to="/tite/4">
            <img src={process.env.PUBLIC_URL + '/resources/tif/tif230806.jpg'} 
              alt="TIF2023 0806" />
          </Link>
        </div>

      </div>
      <Routes>
        <Route path="/tite/:id" component={Home} />
      </Routes>
    </div>
  </>
  )
}

export default SelectFes
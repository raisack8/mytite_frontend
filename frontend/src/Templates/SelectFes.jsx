import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import SideDrawer from '../CmnComponents/SideDrawer'
import MenuModal from "../CmnComponents/MenuModal"
import {localStorageReset} from "../utils"

const SelectFes = () => {
  localStorageReset();
  return (
    <>
    <div className="fixed top-12 right-12">
      <MenuModal padding={'0.5rem'}></MenuModal>
    </div>
    <div className='text-center'>
      <div className='mt-20'>
        <div>
          <h1 className='text-3xl font-mono'>マイタイテ</h1>
          <h3 className='text-lg'>自分だけのタイムテーブルを作ろう</h3>
        </div>
        <div className='p-2'>
          <p>チュートリアル動画</p>
          <div className=''>
          <iframe width="260" height="170" className='mr-auto ml-auto' 
          src="https://www.youtube.com/embed/LQ4o5p4QAqA" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen></iframe>
          </div>
        </div>
        <div className='m-4 w-3/5 mx-auto border border-slate-500'>
          <Link to="/tite/2">
            <img src={process.env.PUBLIC_URL + '/resources/tif/tif230804.jpg'} 
              alt="TIF2023 0804" />
          </Link>
        </div>

        <div className='m-4 w-3/5 mx-auto border border-slate-500'>
          <Link to="/tite/3">
            <img src={process.env.PUBLIC_URL + '/resources/tif/tif230805.jpg'} 
              alt="TIF2023 0805" />
          </Link>
        </div>

        <div className='m-4 w-3/5 mx-auto border border-slate-500'>
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
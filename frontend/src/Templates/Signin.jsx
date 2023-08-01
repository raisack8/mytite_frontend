import React, { useState } from 'react'
import Login from '../LoginComponents/Login'
import Register from '../LoginComponents/Register'
import MenuModal from "../CmnComponents/MenuModal"
import {localStorageReset} from "../utils"
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'
import UserInfo from '../LoginComponents/UserInfo'

const Signin = () => {

  const navigate  = useNavigate();

  const [pageFlag, setPageFlag] = useState(0);
  localStorageReset();

  return (
    <>
      {/* <div className="fixed top-12 right-12">
        <MenuModal></MenuModal>
      </div> */}
      <div className='flex p-8 justify-center'>
        <div className='w-full border border-slate-600 rounded'>
          {pageFlag === 0 && <Login setPageFlag={setPageFlag}/>}
          {pageFlag === 1 && <Register setPageFlag={setPageFlag}/>}
          {pageFlag === 2 && <UserInfo setPageFlag={setPageFlag}/>}

          <div className='flex pb-4 justify-center'>
            <Button variant="outlined"
              onClick={()=>navigate('/')}>
              トップに戻る
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signin
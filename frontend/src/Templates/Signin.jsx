import React, { useState } from 'react'
import Login from '../LoginComponents/Login'
import Register from '../LoginComponents/Register'

const Signin = () => {


  const [pageFlag, setPageFlag] = useState(0);

  return (
    <>
      <div className='flex p-8 justify-center'>
        <div className='w-full border border-slate-600 rounded'>
          {pageFlag === 0 && <Login setPageFlag={setPageFlag}/>}
          {pageFlag === 1 && <Register setPageFlag={setPageFlag}/>}
        </div>
      </div>
    </>
  )
}

export default Signin
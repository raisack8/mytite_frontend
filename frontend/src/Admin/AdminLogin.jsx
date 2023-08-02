import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { OperateList } from './OperateList';
import OperateDataBase from './OperateDataBase';
import Toriisogi from './Toriisogi';

const AdminLogin = () => {
  
  // pageCount=0:管理者ログイン
  // pageCount=1:オペレーションリスト
  const [pageCount, setPageCount] = useState(9);


  const setPassword = (input) => {
    if(input==='wakei'){
      setPageCount(1);
    }
  };

  return (
    <div className='p-8'>
      {pageCount === 0 && 
      <div className='flex justify-center'>
        <TextField
          id="outlined-password-input"
          label="パスワード"
          type="password"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)} 
        />
      </div>
      }
      {pageCount === 1 && 
        <OperateList setPageCount={setPageCount}/>
      }
      {pageCount === 2 && 
        <OperateDataBase setPageCount={setPageCount}/>
      }
      {pageCount === 9 && 
        <Toriisogi setPageCount={setPageCount}/>
      }
    </div>
  )
}


export default AdminLogin
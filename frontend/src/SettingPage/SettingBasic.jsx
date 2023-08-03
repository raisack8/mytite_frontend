import Button from '@mui/material/Button';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import PlivacyPolicy from './PlivacyPolicy';

const SettingBasic = () => {
  const navigate  = useNavigate();
  const [pageFlag, setPageFlag] = useState(0);
  return (
    <div className='p-8'>
      <div>
        まだ準備中です。。。
      </div>
      <div className='p-2'>
        <Button variant="outlined"
          onClick={()=>navigate('/')}>
          トップに戻る
        </Button>
      </div>
      <div className='p-2'>
        <Button variant="outlined"
          onClick={()=>setPageFlag(1)}>
          プライバシーポリシー
        </Button>
      </div>
      <div className='p-2'>
        <Button variant="outlined"
          onClick={()=>navigate('/admin')}>
          管理者ページ
        </Button>
      </div>

    {pageFlag === 1 && <PlivacyPolicy setPageFlag={setPageFlag}/>}
    {/* {pageFlag === 2 && <UserInfo setPageFlag={setPageFlag}/>} */}


    </div>
  )
}

export default SettingBasic
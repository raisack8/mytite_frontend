import Button from '@mui/material/Button';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import PlivacyPolicy from './PlivacyPolicy';

const SettingBasic = () => {
  const navigate  = useNavigate();
  const [pageFlag, setPageFlag] = useState(0);
  return (
    <div>
      <Button variant="outlined"
        onClick={()=>navigate('/')}>
        トップに戻る
      </Button>
      <Button variant="outlined"
        onClick={()=>setPageFlag(1)}>
        プライバシーポリシー
      </Button>

    {pageFlag === 1 && <PlivacyPolicy setPageFlag={setPageFlag}/>}
    {/* {pageFlag === 2 && <UserInfo setPageFlag={setPageFlag}/>} */}


    </div>
  )
}

export default SettingBasic
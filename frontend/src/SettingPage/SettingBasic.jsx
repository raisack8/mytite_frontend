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

      <div className='text-red-500'>
        <div>フェスに間に合わせようと横着して簡易的なデータベース、sqliteにてDBを保管してしまっています。</div>
        <div>デブロイするとデータ飛んでしまうんですね。</div>
        <div>なのでフェスが終わったら保存したデータは消えてしまいます。</div>
      </div>
    </div>
  )
}

export default SettingBasic
import React, { useContext, useEffect, useRef, useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {inputLengthValid, passwordValid} from '../methods/signup/register'
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';
import MyContext from '..';

const UserInfo = (props) => {
  const contextData = useContext(MyContext)

  const { setPageFlag } = props;
  const navigate  = useNavigate();
  
  // ログインID、パスワード、確認用パスワードの状態を管理するためのuseState
  const [username, setUsername] = useState('');

  const userRegister=async()=>{
    try {
      let userid = localStorage.getItem('userid');
      const dataToSend = {
        id: userid,
        username: username,
        change_flag: username!=''
      };
      // POSTリクエストを送信
      const response = await axios.post(
        process.env.REACT_APP_DJANGO_API_URL+'/api/userinfo_registration/',
        dataToSend
      );
      console.log(response)
      if(response.data.error!==""){
        alert(response.data.error)
        return;
      }
      // statusOKだったらトップ画面に遷移
      localStorage.setItem('loginFlag', true);
      localStorage.setItem('userid', response.data.id);
      if(response.data.username!=''){
        localStorage.setItem('username', response.data.username);
      }

      // トップに戻る前にユーザー情報を決めてしまう
      navigate('/');
    } catch (error) {
      alert("システムエラーが発生しました")
      console.error('Error sending POST request:', error);
    }
  };

  return (
    <>
      <div className='pt-8 px-4 text-xl'>
        <p className='pb-3 flex justify-center'>
          ユーザー情報登録
        </p>
        <div className='mb-2 text-xs text-red-600 flex justify-center'>
          ログイン情報が登録されました！
        </div>
        <div className='mb-2 text-xs text-red-600 flex justify-center'>
          ユーザー名を決めてください。(既に使われている名前は使えません。)
        </div>
        <div className='mb-2 text-xs flex justify-center'>
          入力しない場合はデフォルト名が設定されます。
        </div>
        <div className='p-2 flex justify-center'>
          <div>
            <TextField
              id="outlined-password-input"
              label="ユーザー名"
              autoComplete="current-password"
              value={username}
              onChange={(e) => setUsername(e.target.value)} 
           />
          </div>
        </div>
        </div>
        <div className='flex justify-center'>
          <div className='p-2 flex justify-center'>
            <Button variant="contained"
            onClick={()=>userRegister()}>
              ユーザー情報登録
            </Button>
          </div>
        </div>
    </>

  )
}

export default UserInfo
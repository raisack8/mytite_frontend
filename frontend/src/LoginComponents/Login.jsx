import React, { useContext, useRef, useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import {inputLengthValid} from '../methods/signup/register'
import axios from 'axios';
import MyContext from '..';

const Login = (props) => {
  const contextData = useContext(MyContext)
  
  const { setPageFlag } = props;
  const navigate  = useNavigate();
  
  // ログインID、パスワード、確認用パスワードの状態を管理するためのuseState
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');

  const [loginIdError, setLoginIdError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // useStateでは内部の値が即座に変わらないのでRef
  const loginIdErrorRef = useRef('');
  const passwordErrorRef = useRef('');

  // 新規登録ボタンがクリックされたときの処理
  const handleLogin = () => {
    // useStateでは内部の値が即座に変わらないのでRefを使用して即座に値を変更する
    setLoginIdError(inputLengthValid(loginId));
    loginIdErrorRef.current = inputLengthValid(loginId);
    setPasswordError(inputLengthValid(password));
    passwordErrorRef.current = inputLengthValid(password);
    
    if(loginIdErrorRef.current===''&&passwordErrorRef.current===''){
      // APIに処理を流す
      userLogin();
    }
  };

  const userLogin=async()=>{
    try {
      const dataToSend = {
        id: loginId,
        password: password,
      };
      console.log("POST : " + loginId);
      // POSTリクエストを送信
      const response = await axios.post(
        process.env.REACT_APP_DJANGO_API_URL+'/api/user_login/',
        dataToSend
      );
      console.log(response)
      if(response.data.error!==""){
        alert(response.data.error)
        return;
      }
      // statusOKだったらトップ画面に遷移
      contextData.loginFlag = true
      contextData.userid = response.data.id
      contextData.username = response.data.username
      
      navigate('/');
    } catch (error) {
      alert("システムエラーが発生しました")
      console.error('Error sending POST request:', error);
    }
  };


  return (
    <>
      <div className='p-8 text-xl'>
        <p className='p-2 flex justify-center'>
          ログイン
        </p>
        <div className='p-2 flex justify-center'>
          <TextField
            id="outlined-password-input"
            label="ログインID"
            autoComplete="current-password"
            value={loginId}
            onChange={(e) => setLoginId(e.target.value)} 
            helperText={loginIdError}
            error={loginIdError? true:false}
          />
        </div>
        <div className='p-2 flex justify-center'>
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            helperText={passwordError}
            error={passwordError? true:false}
          />
        </div>
        <div className='flex justify-center'>
          <div className='p-2 flex justify-center'>
            <Button variant="outlined"
             onClick={()=>setPageFlag(1)}>
              新規登録
            </Button>
          </div>
          <div className='p-2 flex justify-center'>
            <Button variant="contained"
            onClick={()=>handleLogin()}>
              ログイン
            </Button>
          </div>
        </div>
        <p className='p-2 text-xs flex justify-center'>
          パスワードを忘れた場合
        </p>
      </div>
    </>
  )
}

export default Login
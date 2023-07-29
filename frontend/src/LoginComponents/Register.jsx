import React, { useContext, useEffect, useRef, useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {inputLengthValid, passwordValid} from '../methods/signup/register'
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';
import MyContext from '..';

const Register = (props) => {
  const contextData = useContext(MyContext)

  const { setPageFlag } = props;
  const navigate  = useNavigate();
  
  // ログインID、パスワード、確認用パスワードの状態を管理するためのuseState
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [loginIdError, setLoginIdError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  // useStateでは内部の値が即座に変わらないのでRef
  const loginIdErrorRef = useRef('');
  const passwordErrorRef = useRef('');
  const confirmPasswordErrorRef = useRef('');

  // 新規登録ボタンがクリックされたときの処理
  const handleRegister = () => {
    // useStateでは内部の値が即座に変わらないのでRefを使用して即座に値を変更する
    setLoginIdError(inputLengthValid(loginId));
    loginIdErrorRef.current = inputLengthValid(loginId);
    setPasswordError(inputLengthValid(password));
    passwordErrorRef.current = inputLengthValid(password);
    setConfirmPasswordError(passwordValid(password,confirmPassword));
    confirmPasswordErrorRef.current = inputLengthValid(confirmPassword);
    
    
    setTimeout(() => {
      if(
        loginIdErrorRef.current===''&&
        passwordErrorRef.current===''&&
        confirmPasswordErrorRef.current===''
        ){
          // APIに処理を流す
          userRegistration();
      }
    }, 200); 
  };

  const userRegistration=async()=>{
    try {
      const dataToSend = {
        id: loginId,
        password: password,
      };
      console.log("POST : " + loginId);
      // POSTリクエストを送信
      const response = await axios.post(
        process.env.REACT_APP_DJANGO_API_URL+'/api/user_registration/',
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
      localStorage.setItem('username', response.data.username);

      navigate('/');
    } catch (error) {
      alert("システムエラーが発生しました")
      console.error('Error sending POST request:', error);
    }
  };

  return (
    <>
      <div className='py-8 px-4 text-xl'>
        <p className='p- flex justify-center'>
          新規登録
        </p>
        <div className='mb-2 text-xs flex justify-center'>
          それぞれ半角英数字6~20文字で入力してください
        </div>
        <div className='p-2 flex justify-center'>
          <div>
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
        </div>
        <div className='p-2 flex justify-center'>
          <TextField
            id="outlined-password-input"
            label="ご希望のパスワード"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            helperText={passwordError}
            error={passwordError? true:false}
          />
        </div>
        <div className='p-2 flex justify-center'>
          <TextField
            id="outlined-password-input"
            label="確認用パスワード"
            type="password"
            autoComplete="current-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)} 
            helperText={confirmPasswordError}
            error={confirmPasswordError? true:false}
          />
        </div>
        <p className='flex py-1 justify-center text-xs'>
          ※ベータ版でセキュリティはそこまで高くないので個人情報などは使用しないことをお勧めします。。すみません。。
        </p>
        <div className='flex justify-center'>
          <div className='p-2 flex justify-center'>
            <Button variant="outlined"
            onClick={()=>setPageFlag(0)}>
              戻る
            </Button>
          </div>
          <div className='p-2 flex justify-center'>
            <Button variant="contained"
            onClick={()=>handleRegister()}>
              新規登録
            </Button>
          </div>
        </div>
      </div>
    </>

  )
}

export default Register
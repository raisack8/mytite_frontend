import React, { useRef, useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MySectionDetail = () => {
  const { id } = useParams();

  // ログインID、パスワード、確認用パスワードの状態を管理するためのuseState
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [title, setTitle] = useState('');
  const [explain, setExplain] = useState('');

  const [startTimeError, setStartTimeError] = useState('');
  const [endTimeError, setEndTimeError] = useState('');
  const [titleError, setTitleError] = useState('');
  const [explainError, setExplainError] = useState('');

  // useStateでは内部の値が即座に変わらないのでRef
  const startTimeErrorRef = useRef('');
  const endTimeErrorRef = useRef('');
  const titleErrorRef = useRef('');
  const explainErrorRef = useRef('');

  const ERROR_NO_INPUT = '入力してください。'
  // 新規登録ボタンがクリックされたときの処理
  const checkInput = () => {
    if(startTime==''){
      setStartTimeError(ERROR_NO_INPUT);
      startTimeErrorRef.current = ERROR_NO_INPUT;
    }else{startTimeErrorRef.current = ''}
    if(endTime==''){
      setEndTimeError(ERROR_NO_INPUT);
      endTimeErrorRef.current = ERROR_NO_INPUT;
    }else{endTimeErrorRef.current = ''}
    if(title==''){
      setTitleError(ERROR_NO_INPUT);
      titleErrorRef.current = ERROR_NO_INPUT;
    }else{titleErrorRef.current = ''}

    if(
      startTimeErrorRef.current==''&&
      endTimeErrorRef.current==''&&
      titleErrorRef.current==''
      ){
      // 登録APIrun
      setStartTimeError('');
      setEndTimeError('');
      setTitleError('');
      setExplainError('');
      mySectionRegistry();
    }  
  };

  const mySectionRegistry=async()=>{
    try {
      let userid = localStorage.getItem('userid');
      const dataToSend = {
        startTime: startTime,
        endTime: endTime,
        title: title,
        explain: explain,
        userid: userid,
        fesId: id,
      };
      // POSTリクエストを送信
      const response = await axios.post(
        process.env.REACT_APP_DJANGO_API_URL+'/api/my_section_add/',
        dataToSend
      );
      if(response.data.error!==""){
        alert(response.data.error)
        return;
      }
      if(response.data.success!==""){
        alert(response.data.success)
        return;
      }
      // navigate('/');
    } catch (error) {
      alert("システムエラーが発生しました")
      console.error('Error sending POST request:', error);
    }
  };

  return (
    <div className='flex justify-center'>
      <div>
        <div className='text-xl p-4'>追加したい予定を登録してください</div>

        <div className='flex p-2'>
        <div className='pr-2'>時間</div>

          <TextField
            id="outlined-password-input"
            label=""
            autoComplete="current-password"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)} 
            type='time'
            helperText={startTimeError}
            error={startTimeError? true:false}
            required
            step='300'
            />
          <TextField
            id="outlined-password-input"
            label=""
            autoComplete="current-password"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)} 
            type='time'
            helperText={endTimeError}
            error={endTimeError? true:false}
            required
            step='300'
            />
        </div>
        <div className='p-2'>

          <TextField
            id="outlined-password-input"
            label="予定名"
            autoComplete="current-password"
            value={title}
            onChange={(e) => setTitle(e.target.value)} 
            type='text'
            helperText={titleError}
            error={titleError? true:false}
            required
            />
        </div>
        <div className='p-2'>
          <TextField
            id="outlined-multiline-static"
            label="説明(任意)"
            multiline
            rows={4}
            value={explain}
            onChange={(e) => setExplain(e.target.value)} 
            helperText={explainError}
            error={explainError? true:false}
          />
        </div>
        <div className='p-2 flex justify-center text-lg'>
          <Button variant="outlined"
          onClick={()=>checkInput()}>
            登録
          </Button>
        </div>
      </div>
    </div>
  )
}

export default MySectionDetail
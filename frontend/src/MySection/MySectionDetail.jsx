import React, { useRef, useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';

const MySectionDetail = () => {
  const { id } = useParams();
  let userid = localStorage.getItem('userid');

  // ログインID、パスワード、確認用パスワードの状態を管理するためのuseState
  const [startTimeHour, setStartTimeHour] = useState('');
  const [startTimeMinute, setStartTimeMinute] = useState('');
  const [endTimeHour, setEndTimeHour] = useState('');
  const [endTimeMinute, setEndTimeMinute] = useState('');
  const [title, setTitle] = useState('');
  const [explain, setExplain] = useState('');

  const [startTimeHourError, setStartTimeHourError] = useState('');
  const [startTimeMinuteError, setStartTimeMinuteError] = useState('');
  const [endTimeHourError, setEndTimeHourError] = useState('');
  const [endTimeMinuteError, setEndTimeMinuteError] = useState('');
  const [titleError, setTitleError] = useState('');
  const [explainError, setExplainError] = useState('');

  // useStateでは内部の値が即座に変わらないのでRef
  const startTimeHourErrorRef = useRef('');
  const startTimeMinuteErrorRef = useRef('');
  const endTimeHourErrorRef = useRef('');
  const endTimeMinuteErrorRef = useRef('');
  const titleErrorRef = useRef('');
  const explainErrorRef = useRef('');

  const ERROR_NO_INPUT = '入力してください。'
  // 新規登録ボタンがクリックされたときの処理
  const checkInput = () => {

    if(startTimeHour==''){
      setStartTimeHourError(ERROR_NO_INPUT);
      startTimeHourErrorRef.current = ERROR_NO_INPUT;
    }else{startTimeHourErrorRef.current = ''}
    if(startTimeMinute==''){
      setStartTimeMinuteError(ERROR_NO_INPUT);
      startTimeMinuteErrorRef.current = ERROR_NO_INPUT;
    }else{startTimeMinuteErrorRef.current = ''}

    if(endTimeHour==''){
      setEndTimeHourError(ERROR_NO_INPUT);
      endTimeHourErrorRef.current = ERROR_NO_INPUT;
    }else{endTimeHourErrorRef.current = ''}
    if(endTimeMinute==''){
      setEndTimeMinuteError(ERROR_NO_INPUT);
      endTimeMinuteErrorRef.current = ERROR_NO_INPUT;
    }else{endTimeMinuteErrorRef.current = ''}

    if(title==''){
      setTitleError(ERROR_NO_INPUT);
      titleErrorRef.current = ERROR_NO_INPUT;
    }else{titleErrorRef.current = ''}

    if(
      startTimeHourErrorRef.current==''&&
      startTimeMinuteErrorRef.current==''&&
      endTimeHourErrorRef.current==''&&
      endTimeMinuteErrorRef.current==''&&
      titleErrorRef.current==''
      ){
      // 登録APIrun
      setStartTimeHourError('');
      setStartTimeMinuteError('');
      setEndTimeHourError('');
      setEndTimeMinuteError('');
      setTitleError('');
      setExplainError('');
      mySectionRegistry();
    }  
  };

  const mySectionRegistry=async()=>{
    try {
      const dataToSend = {
        startTimeHour: startTimeHour,
        startTimeMinute: startTimeMinute,
        endTimeHour: endTimeHour,
        endTimeMinute: endTimeMinute,
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

  const hour = [{value: 'Null',label: '時',},];
  const minute = [{value: 'Null',label: '分',},];

  // 時オブジェクトに追加(9時～21時)
  for (let i = 9; i <= 21; i++) {
    const formattedValue = i.toString().padStart(2, '0');
    const item = {
      value: i.toString(),
      label: formattedValue,
    };
    hour.push(item);
  }
  // 分オブジェクトに追加
  for (let i = 5; i <= 55; i += 5) {
    const paddedLabel = i.toString().padStart(2, '0');
    minute.push({
      value: i.toString(),
      label: paddedLabel,
    });
  }

  return (
    <div className='flex justify-center'>
      <div>
        <div className='text-xl p-4'>追加したい予定を登録してください</div>
        {!userid && <p className='py-3 text-red-600'>
          予定を追加するには
          <Link to="/signin" className='font-bold'>
              こちら
            </Link>
            からログインをしてください！
          </p>}
        <div className='flex p-2'>
          <div className='flex'>
            <div className='pr-2'>時間</div>
            <TextField
              id="outlined-select-currency"
              select
              label="時"
              value={startTimeHour}
              onChange={(e) => setStartTimeHour(e.target.value)} 
              type='time'
              helperText={startTimeHourError}
              error={startTimeHourError? true:false}
              required
              sx={{ width: 'auto', maxWidth: '8ch' }}
            >
              {hour.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <span className='p-3 text-center'>:</span>
            <TextField
              id="outlined-select-currency"
              select
              label="分"
              value={startTimeMinute}
              onChange={(e) => setStartTimeMinute(e.target.value)} 
              type='time'
              helperText={startTimeMinuteError}
              error={startTimeMinuteError? true:false}
              required
              sx={{ width: 'auto', maxWidth: '8ch' }}
            >
              {minute.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className='flex'>
            <span className='p-3 text-center'>～</span>
            <TextField
              id="outlined-select-currency"
              select
              label="時"
              value={endTimeHour}
              onChange={(e) => setEndTimeHour(e.target.value)} 
              type='time'
              helperText={endTimeHourError}
              error={endTimeHourError? true:false}
              required
              sx={{ width: 'auto', maxWidth: '8ch' }}
            >
              {hour.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <span className='p-3 text-center'>:</span>
            <TextField
              id="outlined-select-currency"
              select
              label="分"
              value={endTimeMinute}
              onChange={(e) => setEndTimeMinute(e.target.value)} 
              type='time'
              helperText={endTimeMinuteError}
              error={endTimeMinuteError? true:false}
              required
              sx={{ width: 'auto', maxWidth: '8ch' }}
            >
              {minute.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
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
            sx={{ width: 'auto', maxWidth: '40ch' }}
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
            sx={{ width: 'auto', maxWidth: '40ch' }}
          />
        </div>
        <div className='p-2 flex justify-center'>
          <Button variant="contained"
          onClick={()=>checkInput()}
          sx={{ width: '15ch', height: '7ch' }}
          disabled={!userid}
          >
            登録
          </Button>
        </div>
      </div>
    </div>
  )
}

export default MySectionDetail
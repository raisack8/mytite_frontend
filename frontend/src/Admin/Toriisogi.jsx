import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

const Toriisogi = (props) => {
  const {setPageCount} = props
  const [name, setName] = useState();
  const [year, setYear] = useState();
  const [eventDate, setEventDate] = useState();

  const runApi=()=>{
    console.log(name);
    console.log(year);
    console.log(eventDate);
    sendData();
  }

  const sendData=async()=>{
    try {
      const dataToSend = {
        name: name,
        year: year,
        eventDate: eventDate,
      };
      // POSTリクエストを送信
      const response = await axios.post(
        process.env.REACT_APP_DJANGO_API_URL+'/api/operate_db_fes_create/', 
        dataToSend
        );
      console.log(response)
    } catch (error) {
      alert("システムエラーが発生しました")
    }
  };


  return (
    <div>
      <div>fesモデル用</div>
      <TextField label="name"
        onChange={(e) => setName(e.target.value)} 
          />
      <TextField label="year"
        onChange={(e) => setYear(e.target.value)} 
        />
      <TextField label="event_date"
        onChange={(e) => setEventDate(e.target.value)} 
        />
      <Button variant="outlined"
        onClick={runApi}>
        登録
      </Button>
    </div>
  )
}

export default Toriisogi
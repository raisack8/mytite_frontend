import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ArtistEditPass = (props) => {
  const{setModalDisplayMode,section} = props;

  const setPassword = (input) => {
    if(input==='wakei'){
      setModalDisplayMode(2);
    }
  };

  const handleReturnClick = () => {
    setModalDisplayMode(0);
  };

  return (
    <div className='flex justify-center'>
      <TextField
        id="outlined-password-input"
        label="パスワード"
        type="password"
        autoComplete="current-password"
        onChange={(e) => setPassword(e.target.value)} 
      />
      <Button onClick={handleReturnClick}>戻る</Button>
    </div>
  )
}

export default ArtistEditPass
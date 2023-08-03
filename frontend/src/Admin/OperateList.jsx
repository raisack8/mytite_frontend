import React from 'react'
import Button from '@mui/material/Button';

export const OperateList = (props) => {

  const {setPageCount} = props

  const dbButtonClick=()=>{
    setPageCount(9);
  }

  return (
    <div>
      <Button variant="outlined"
        onClick={dbButtonClick}>
        DB操作
      </Button>
    </div>
  )
}

import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router-dom';
import MyContext from '..';

const MySectionList = (props) => {
  const { setPageFlag, wholeTime,  setOpen } = props;
  const contextData = useContext(MyContext)
  const navigate  = useNavigate();
  const[mySecData, setMySecData] = useState([]);

  useEffect(() => {
    // Update the document title using the browser API
    postMySecIdList()
  },[]);
  const { id } = useParams();

  useEffect(() => {
    // Update the document title using the browser API
    postMySecIdList()
  },[setPageFlag]);

  // ++++++++++++++++++++++++++
  // 予定新規追加API
  // ++++++++++++++++++++++++++
  const postMySecIdList=async()=>{
    try {
      const dataToSend = {
        my_sec_list: localStorage.getItem('orgMySectionList'),
      };
      console.log("===========")
      console.log(localStorage.getItem('orgMySectionList'))

      // POSTリクエストを送信
      const response = await axios.post(
        process.env.REACT_APP_DJANGO_API_URL+'/api/my_section_get/',
        dataToSend
      );
      if(response.data.error!==""){
        alert(response.data.error)
        return;
      }
      setMySecData(response.data.data);
      return;
      // navigate('/');
    } catch (error) {
      alert("システムエラーが発生しました")
      console.error('Error sending POST request:', error);
    }
  };

  // ++++++++++++++++++++++++++
  // 予定をタイテに組み込むAPI
  // ++++++++++++++++++++++++++
  const createMyTitePlusMySec=async(event)=>{
    try {

      const my_sec_id = event.target.id;
      let mySecList = localStorage.getItem('displayedSectionList');
      // let splitList = mySecList.split(',');
      if (mySecList === "") {
        mySecList = my_sec_id;
      } else {
        mySecList += "," + my_sec_id;
      }
      
      let userid = localStorage.getItem('userid');
      const dataToSend = {
        id: localStorage.getItem('orgSectionList'),
        fes_id: id,
        user_id: userid,
        my_sec_list: mySecList,
        delete_flag: true,
      };
      // POSTリクエストを送信
      const response = await axios.post(
        process.env.REACT_APP_DJANGO_API_URL+'/api/api/', 
        dataToSend
        );
      console.log(response)
      // 1つも選択していなかったらエラー
      if(Object.keys(response.data.message.myTiteSections).length===0){
        alert(response.data.message.errorMsg)
        return;
      }
      // エラーメッセージが返されたら表示してreturn
      if(response.data.message.errorMsg!==""){
        alert(response.data.message.errorMsg)
        return;
      }
      localStorage.setItem('orgSectionList', response.data.message.orgSectionList);
      localStorage.setItem('displayedSectionList', response.data.message.displayedSectionList);
      localStorage.setItem('orgMySectionList', response.data.message.orgMySectionList);

      setOpen(false);
      navigate('/mytite/'+id,{state: {
        'data':response.data,
        'wholeTime':wholeTime,
      }});

    } catch (error) {
      alert("システムエラーが発生しました")
      console.error('Error sending POST request:', error);
    }
  };


  return (
    <div className='flex justify-center text-xl'>
      <div className='w-full'>
        <span>追加したい予定を選択してください</span>
        <div className='w-full h-80 overflow-y-scroll border border-gray-300 rounded'>
          <ul>
            {mySecData.length === 0 && (<li>データはありません。</li>)}
            {Object.keys(mySecData).length !== 0 && (
                mySecData.map((item, index) => (
                  <li key={index} className='py-2 px-4 border-b border-gray-300 cursor-pointer'
                    id={item.id}
                    onClick={createMyTitePlusMySec}>
                    {item.display_end_time}~{item.display_start_time} {item.title} {item.id}
                  </li>
                ))
              )}

          </ul>
        </div>
        <div className='p-2 flex justify-center'>
          <Button variant="contained"
          onClick={()=>setPageFlag(1)}>
            予定を追加
          </Button>
        </div>
      </div>
    </div>
  )
}

export default MySectionList
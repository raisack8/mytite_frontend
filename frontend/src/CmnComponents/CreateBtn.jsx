import React, { useContext } from 'react';
import MyContext from '..';
import axios from 'axios';
import { useNavigate, useParams  } from 'react-router-dom';

const CreateBtn = ({wholeTime}) => {

  const contextData = useContext(MyContext)
  const navigate  = useNavigate();
  const { id } = useParams();
  console.log(id)
  const createMyTite=async()=>{
    try {
      let userid = localStorage.getItem('userid');
      const dataToSend = {
        id: contextData.sectionData,
        fes_id: id,
        user_id: userid,
        my_sec_id: []
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
      localStorage.setItem('orgMySectionList', response.data.message.orgMySectionList);
      
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
    <div>
      <button type="button" 
        className="border border-blue-500 bg-blue-500 text-white 
          hover:bg-blue-700  
          focus:ring-4 focus:outline-none focus:ring-blue-300 
          font-medium rounded-full text-sm p-5 text-center 
          inline-flex items-center"
        onClick={()=>createMyTite()}>
        <span className='p-2 text-xl'>GO</span>
      </button>
    </div>
  );
};


export default CreateBtn;

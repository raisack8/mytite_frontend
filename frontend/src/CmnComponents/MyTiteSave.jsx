import React, { useContext } from 'react';
import MyContext from '..';
import axios from 'axios';
import { useNavigate, useParams  } from 'react-router-dom';

const MyTiteSave = ({wholeTime}) => {

  const contextData = useContext(MyContext)
  const navigate  = useNavigate();
  const { id } = useParams();
  let userid = localStorage.getItem('userid');

  const saveMyTite=async()=>{
    try {
      if(userid===null){
        alert("ログインしてください")
        return;
      }
      let orgSectionList = localStorage.getItem('orgSectionList');
      let dispMySecList = localStorage.getItem('displayedSectionList');
      
      const dataToSend = {
        id: contextData.sectionData,
        fes_id: id,
        user_id: userid,
        sec_list: orgSectionList,
        my_sec_list: dispMySecList,
      };
      // POSTリクエストを送信
      const response = await axios.post(
        process.env.REACT_APP_DJANGO_API_URL+'/api/my_tite_save/', 
        dataToSend
        );
      console.log(response)
      // 1つも選択していなかったらエラー
      // if(Object.keys(response.data.message.myTiteSections).length===0){
      //   alert(response.data.message.errorMsg)
      //   return;
      // }
      // エラーメッセージが返されたら表示してreturn
      if(response.data.error!==""){
        alert(response.data.error)
        return;
      }
      let list = []
      let myTiteList = localStorage.getItem('myTiteList');
      if(myTiteList!=null){
        if(myTiteList.includes(",")){
          list = myTiteList.split(',')
        }else{
          if(myTiteList!==undefined && myTiteList!==null){
            list.push(myTiteList)
          }
        }
      }
      list.push(response.data.modelid)
      localStorage.setItem('myTiteList', list);
      
      // navigate('/mytite',{state: {
      //   'data':response.data,
      //   'wholeTime':wholeTime,
      // }});
      alert("保存が完了しました。")
      navigate('/');

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
          font-medium rounded-full text-sm p-4 text-center 
          inline-flex items-center"
        onClick={()=>saveMyTite()}>
        <span className='p-2 text-xl'>SAVE</span>
      </button>
    </div>
  );
};


export default MyTiteSave;

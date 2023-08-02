import React, { useContext, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import MyContext from '..';
import axios from 'axios';
import { wholeTime } from '../utils'


const MenuDetail = (props) => {
  const { setOpen } = props;
  const contextData = useContext(MyContext)
  const navigate  = useNavigate();
  const { id } = useParams();
  const menuItemStyle = {
    marginBottom: '5px',
  };
  
  const logout = () => {
    localStorage.removeItem('loginFlag');
    localStorage.removeItem('userid');
    localStorage.removeItem('username');
    localStorage.removeItem('myTiteList');
    navigate('/signin');
  };

  let loginFlag = localStorage.getItem('loginFlag');
  let username = localStorage.getItem('username');
  let myTiteList = localStorage.getItem('myTiteList');
  if (myTiteList === undefined || myTiteList === null) {
    myTiteList = ""; // データが存在しない場合は空文字列として初期化する
  }
  const myTiteArray = myTiteList.split(","); 

  const getMyTite=async(myTiteId)=>{
    try {
      let userid = localStorage.getItem('userid');
      let myTiteList = localStorage.getItem('myTiteList');
      const dataToSend = {
        my_tite_id: myTiteId,
        user_id: userid,
      };
      // POSTリクエストを送信
      const response = await axios.post(
        process.env.REACT_APP_DJANGO_API_URL+'/api/my_tite_get/', 
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
      localStorage.setItem('displayedSectionList', response.data.message.displayedSectionList);
      
      navigate('/mytiteslot/',{state: {
        'data':response.data,
        'wholeTime':wholeTime,
      }});
      setOpen(false);
      
    } catch (error) {
      alert("システムエラーが発生しました")
      console.error('Error sending POST request:', error);
    }
  };


  return (
    <>
     <div className='p-4 text-left w-full text-2xl'>
      <ul className='d-none py-3'>
      
        <li className='py-3'>
          {loginFlag !== 'true' &&      
            <Link to="/signin">
              ログイン
            </Link>
            }
          {loginFlag === 'true' &&      
            <p className='font-bold text-3xl'>ようこそ！{username}さん</p>
            }
        </li>
        <li className='py-1'>
          <Link to="/">
            トップメニュー
          </Link>
        </li>
        <li className="text-slate-400">オススメタイテ(準備中)</li>
        <li className='py-1'>
          {myTiteArray[0] === '' && (
          <p className='text-slate-400'>マイタイテ(登録されていません)</p>
          )}
          {myTiteArray[0] !== '' && (<p>マイタイテ</p>)}
        </li>
        <div>
          <ul>
            {myTiteArray[0] === '' && (<li></li>)}
            {myTiteArray[0] !== '' && (
                myTiteArray.map((myTite, index) => (
                  <li key={myTite} className='py-1 pl-6 cursor-pointer'
                    onClick={() => getMyTite(myTite)}>
                    スロット{index + 1}
                  </li>
                ))
              )}
          </ul>
        </div>
        <li className=""
        onClick={()=>navigate('/setting')}>設定(準備中)</li>
        {loginFlag === 'true' &&      
          <li onClick={()=>logout()}
            className='cursor-pointer py-2'>
            ログアウト
          </li>
          }
      </ul>
    </div>
    </>
  )
}

export default MenuDetail
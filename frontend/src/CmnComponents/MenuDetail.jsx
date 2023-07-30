import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MyContext from '..';


const MenuDetail = () => {
  const navigate  = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuItemStyle = {
    marginBottom: '5px',
  };
  
  const logout = () => {
    localStorage.removeItem('loginFlag');
    localStorage.removeItem('userid');
    localStorage.removeItem('username');
    setMenuOpen(false)
    navigate('/');
  };

  let loginFlag = localStorage.getItem('loginFlag');
  let username = localStorage.getItem('username');

  return (
    <>
     <div className='p-4 text-left w-full'>
      <ul className='d-none py-3'>
      
        <li className='py-3'>
          {loginFlag !== 'true' &&      
            <Link to="/signin">
              ログイン
            </Link>
            }
          {loginFlag === 'true' &&      
            <p className='font-bold'>ようこそ！{username}さん</p>
            }
        </li>
        <li className='py-1'>
          <Link to="/">
            トップメニュー
          </Link>
        </li>
        <li className="text-slate-400">オススメタイテ</li>
        <li className='py-1'>
          <p>
            マイタイテ
          </p>
        </li>
        <div>
          <li className='py-1 pl-6 text-slate-400'>スロット1</li>
          <li className='py-1 pl-6 text-slate-400'>スロット2</li>
          <li className='py-1 pl-6 text-slate-400'>スロット3</li>
        </div>
        <li className="text-slate-400">設定</li>
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
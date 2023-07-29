import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MyContext from '..';

const MenuComponent = () => {
  const contextData = useContext(MyContext)
  const navigate  = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const menuContentStyle = {
    position: 'fixed',
    top: '10vw',
    right: isMenuOpen ? '0' : '-75vw',
    width: '80vw',
    transition: 'right 0.5s ease',
  };

  const menuItemStyle = {
    marginBottom: '5px',
  };

  const logout = () => {
    contextData.loginFlag = false
    contextData.userid = null
    contextData.username = ''
    
    navigate('/');
  };


  return (
    <div>
      <div style={menuContentStyle} className='flex'>
        <span className='h-12 flex items-center rounded-tl rounded-bl bg-gray-200 shadow-xl'>
          <p onClick={toggleMenu} className='pr-4 m-1 ' > 
            {isMenuOpen ? '×' : '＜'}
          </p>
        </span>
        <div className='bg-gray-200 pl-8 text-left w-full rounded-bl shadow-xl'>
          <ul className='d-none py-3'>
          
            <li style={menuItemStyle}>
              {contextData.loginFlag === false &&      
                <Link to="/signin">
                  ログイン
                </Link>
                }
              {contextData.loginFlag === true &&      
                <p>ようこそ！{contextData.username}さん</p>
                }
            </li>
            <li style={menuItemStyle}>
              <Link to="/">
                トップメニュー
              </Link>
            </li>
            <li style={menuItemStyle} className="text-slate-400">オススメタイテ</li>
            <li style={menuItemStyle}>
              <Link to="/mytite/1">
                マイタイテ
              </Link>
            </li>
            <li style={menuItemStyle} className='pl-6 text-slate-400'>スロット1</li>
            <li style={menuItemStyle} className='pl-6 text-slate-400'>スロット2</li>
            <li style={menuItemStyle} className='pl-6 text-slate-400'>スロット3</li>
            <li style={menuItemStyle} className="text-slate-400">設定</li>
            <li style={menuItemStyle} onClick={()=>logout()}
              className='cursor-pointer'>
              ログアウト
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuComponent;

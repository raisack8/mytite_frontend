import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MenuComponent = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const menuButtonStyle = {
    position: 'fixed',
    top: '20px',
    right: '20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const menuContentStyle = {
    position: 'fixed',
    top: '2rem',
    right: isMenuOpen ? '0' : '-74%',
    width: '80%',
    transition: 'right 0.5s ease',
  };

  const menuItemStyle = {
    marginBottom: '5px',
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
          
            <li style={menuItemStyle} className="text-slate-400">ログイン</li>
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
            <li style={menuItemStyle} className="text-slate-400">ログアウト</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuComponent;

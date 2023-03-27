import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu } from 'antd';
import { AvatarDropdown } from '../AvatarDropdown';
import './MenuTop.scss';

export const MenuTop = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate(e.key);
  };

  const menuItems = [
    {
      key: '/',
      label: 'Home',
    },
    {
      key: '/admin',
      label: 'AdminHome',
    },
    {
      key: '/contact',
      label: 'Contact',
    },
  ];

  return (
    <div className='menu-top-cont'>
      <img 
      className='menu-top__left-logo' 
      src={require('../../../assets/img/png/Logos_UAM-09.png')}
      >      
      </img>
      <Menu
        theme="dark"
        className='menu-top'
        mode="horizontal"
        selectedKeys={[location.pathname]}
        items={menuItems.map((item) => {
          return {
            ...item,
            onClick: handleClick,
        };
        })}
      />
      <AvatarDropdown />
    </div>
  )
}

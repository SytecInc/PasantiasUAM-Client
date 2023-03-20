import React from 'react';
import { Menu } from 'antd';
import { AvatarDropdown } from '../AvatarDropdown';
import './MenuTop.scss';

export const MenuTop = () => {
  return (
    <>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={new Array(5).fill(null).map((_, index) => {
          const key = index + 1;
          return {
            key,
            label: `nav ${key}`,
          };
        })}
      />
      <AvatarDropdown />
    </>
  )
}

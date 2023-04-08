import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import './MenuSider.scss';
const { Sider } = Layout;

export const MenuSider = (props) => {
  const items = [
    {
      key: '1',
      icon: <UserOutlined />,
      label: 'nav 1',
      children: [
        {
          key: '1-1',
          label: 'option 1',
        },
        {
          key: '1-2',
          label: 'option 2',
        },
      ],
    },
    {
      key: '2',
      icon: <LaptopOutlined />,
      label: 'nav 2',
    },
    {
      key: '3',
      icon: <NotificationOutlined />,
      label: 'nav 3',
    },
  ];

  return (
    <Sider
      className='sider'
      width={200}
      collapsed={props.menuCollapsed}
    >
      <Menu
        className='menu-sider'
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        items={items}
      />
    </Sider>
  )
}

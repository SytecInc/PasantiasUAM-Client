import React from 'react';
import { Layout } from 'antd';
import './FooterElem.scss';
const { Footer } = Layout;

export const FooterElem = () => {
  return (
    <Footer
        className='footer'
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
  )
}

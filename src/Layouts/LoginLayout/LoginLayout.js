import React from 'react'
import { Layout } from 'antd';
import { FooterElem } from '../../components/Footer/FooterElem';
import './LoginLayout.scss';
const { Content } = Layout;

export const LoginLayout = ({children}) => {
  return (
    <Layout className='login-layout'>
        <Content className='login-content'>
            {children}
        </Content>
        <FooterElem />
    </Layout>
  );
};

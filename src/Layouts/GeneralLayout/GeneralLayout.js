
import { Layout } from 'antd';
import { MenuTop } from '../../components/MenuComponents/MenuTop';
import { FooterElem } from '../../components/Footer/FooterElem';
import { MenuSider } from '../../components/MenuComponents/MenuSider/MenuSider';
import './GeneralLayout.scss';
const { Header, Content} = Layout;

export const GeneralLayout = ({children}) => {
  

  return (
    <Layout className='layout'>
      <Header className='general-header'>
        <MenuTop />
      </Header>
      <Layout>
        <MenuSider />
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          <Content className='content'>
            {children}
          </Content>
        </Layout>
      </Layout>
      <FooterElem />
    </Layout>
  );
};

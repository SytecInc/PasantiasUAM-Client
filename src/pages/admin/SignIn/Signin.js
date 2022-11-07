import React from "react";
import { Layout, Tabs } from "antd";
import Login from  "../../../components/MenuComponents/Login";
import Register from  "../../../components/MenuComponents/Register";

export default function SignIn() {
    const { Content } = Layout;
    const { TabPane } = Tabs;
    return (
        <Layout>
            <Content>
                <Tabs>
                    <TabPane tab={<span>Iniciar Sesion</span>} key="1">
                        <Login />
                    </TabPane>
                    <TabPane tab={<span>Registro</span>} key="2">
                        <Register />
                    </TabPane>
                </Tabs>
            </Content>
        </Layout>
    );
}
import React from "react";
import { Layout, Tabs } from "antd";
import { Routes, Route } from "react-router-dom";
import Login from  "../../components/MenuComponents/Login";
import Register from  "../../components/MenuComponents/Register";
import Logo from "../../assets/brand/img/Logo.png";
import "./SignIn.scss";
import { getAccessToken } from "../../api/auth";

export default function SignIn() {
    const { Content } = Layout;
    const { TabPane } = Tabs;

    if (getAccessToken()) {
        return (
            <>
                <Routes>
                    <Route path="/login" />
                </Routes>;
            </>
        );
        
    }

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
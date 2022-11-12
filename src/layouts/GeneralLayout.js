import React, { useState } from "react";
import { Routes, Route} from "react-router-dom";
import { Layout, Button } from "antd";
import MenuSider from "../components/MenuComponents/MenuSider";
import MenuTop from "../components/MenuComponents/MenuTop";
import { GithubOutlined } from "@ant-design/icons";
import SignIn from "../pages/SignIn/Signin";
import { getAccessToken, getRefreshToken } from "../api/auth";
import useAuth from "../hooks/useAuth";

import "./GeneralLayout.scss";

export default function GeneralLayout(props) {
    const [menuCollapsed, setMenuCollapsed] = useState(false);
    const { Header, Content, Footer} = Layout;
    const { children } = props;
    const { user, isLoading } = useAuth();
    const accessToken = getAccessToken();
    const refreshToken = getRefreshToken();

    if (!user && !isLoading) {
        return (
            <>
                <SignIn />
                <Routes>
                    <Route path="/login" element={<SignIn />}/>
                </Routes>
            </>
        );
    }

    if (user && !isLoading) {
        return (
            <Layout>
                <MenuSider menuCollapsed={menuCollapsed} />
                <Layout 
                    className="layout-general"
                    style={{ marginLeft: menuCollapsed ? "80px" : "200px" }}
                >
                    <Header className="layout-general__header">
                        <MenuTop
                            menuCollapsed={menuCollapsed}
                            setMenuCollapsed={setMenuCollapsed}
                        />
                    </Header>
                    <Content className="layout-general__content">{children}</Content>
                    <Footer className="layout-general__footer">
                        <Button type="link">
                            <GithubOutlined style={{ fontSize: "17px" }} /> Universidad Autonoma de Manizales
                        </Button>
                    </Footer>
                </Layout>
            </Layout>
        );
    }
    return null;
}
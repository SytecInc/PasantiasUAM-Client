import React, { useState } from "react";
// import { Routes, Route} from "react-router-dom";
import { Layout } from "antd";
import MenuSider from "../components/MenuComponents/MenuSider";
import MenuTop from "../components/MenuComponents/MenuTop";
import { GithubOutlined } from "@ant-design/icons";
// import SignIn from "../pages/Admin/SignIn";
import "./GeneralLayout.scss";

export default function GeneralLayout(props) {
    const [menuCollapsed, setMenuCollapsed] = useState(false);
    const { Header, Content, Footer} = Layout;
    const { children } = props;
    // const user = null;
    
    // if (!user) {
    //     return (
    //         <>
    //         <SignIn />
    //         <Routes>
    //             <Route path="/admin/login/" element={<SignIn />} />
    //         </Routes>
    //         {}
    //         </>
    //     );
    // }
    
    return (
        <Layout>
            <MenuSider menuCollapsed={menuCollapsed} />
            <Layout className="layout-admin" style={{ marginLeft: menuCollapsed ? "80px" : "200px" }}>
                <Header className="layout-admin__header">
                    <MenuTop 
                        menuCollapsed={menuCollapsed}
                        setMenuCollapsed={setMenuCollapsed}
                    />
                </Header>
                <Content className="layout-admin__content">{children}</Content>
                <Footer className="layout-admin__footer">
                    <GithubOutlined style={{ fontSize: "17px" }} /> JuanFe
                </Footer>
            </Layout>
        </Layout>
    );
}
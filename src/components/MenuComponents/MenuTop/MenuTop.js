import React from "react";
import { Button } from "antd";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    LogoutOutlined,
} from "@ant-design/icons";
import "./MenuTop.scss";
import { logout } from "../../../api/auth";

export default function MenuTop(props) {
    const { menuCollapsed, setMenuCollapsed } = props;
    const userLogout = () => {
        logout();
        window.location.reload();
    };
    return (
        <div className="menu-top">
            <div className="menu-top__left">
                <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
                    {menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </Button>
            </div>
            <div className="menu-top__right">
            <Button type="link" onClick={userLogout}>
                    <LogoutOutlined />
                </Button>
            </div>
        </div>
    );
}

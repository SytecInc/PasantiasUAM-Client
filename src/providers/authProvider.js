import React, { useEffect, useState, createContext } from "react";
import {
    getAccessToken,
    getRefreshToken,
    refreshAccessToken,
    logout,
} from "../api/auth";
import jwtDecode from "jwt-decode";

export const AuthContext = createContext();

export default function AuthProvider(props) {
    const { children } = props;
    const [user, setUser] = useState({
        user: null,
        isLoading: true,
    });

    useEffect(() => {
        checkUserLogin(setUser);
    }, []);

    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

const checkUserLogin = (setUser) => {
    const accessToken = getAccessToken();

    if (accessToken === null) {
        const refreshToken = getRefreshToken();

        if (refreshToken === null) {
            logout();
            setUser({
                user: null,
                isLoading: false,
            });
        } else refreshAccessToken(refreshToken);
    } else {
        setUser({
            user: jwtDecode(accessToken),
            isLoading: false,
        });
    }
};
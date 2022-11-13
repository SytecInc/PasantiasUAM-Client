import { ACCESS_TOKEN, REFRESH_TOKEN } from "./constants";
import jwtDecode from "jwt-decode";
import { serverPath, apiVersion } from "./config";

const validateToken = (token) => {
    if (!token || token === null) {
        return null;
    } else if (isTokenExpired(token)) {
        return null;
    } else {
        return token;
    }
}

const isTokenExpired = (token) => {
    const seconds = 60;
    const metaToken = jwtDecode(token);
    const { exp } = metaToken;
    const now = (Date.now() + seconds) / 1000;

    return now > exp;
}

export function getAccessToken() {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    return validateToken(accessToken);
}

export function getRefreshToken() {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);
    return validateToken(refreshToken);
}

export function logout() {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
}

export function refreshAccessToken(refreshToken) {
    const url = `${serverPath}/${apiVersion}/refresh-token`;
    const bodyObj = {
        refreshToken: refreshToken,
    };

    const params = {
        method: "POST",
        body: JSON.stringify(bodyObj),
        headers: {
            "Content-Type": "application/json",
        },
    };
    fetch(url, params)
    .then((response) => {
        if (response.status !== 200) {
            return null;
        }
        return response.json();
    })
    .then((result) => {
        if (!result) {
            logout();
        } else {
            const { accessToken, refreshToken } = result;
            localStorage.setItem(ACCESS_TOKEN, accessToken);
            localStorage.setItem(REFRESH_TOKEN, refreshToken);
        }
    });
}
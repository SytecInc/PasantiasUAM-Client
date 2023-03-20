import { apiCall } from "./http";
import jwt_decode from "jwt-decode";

export async function verifyToken(token) {
    let decoded = null;
    try {
        decoded = jwt_decode(token);
        if (decoded.exp < Date.now() / 1000) {
            console.log("Token expired.");
            decoded = null;
        }
    } catch (error) {
        console.log("Invalid token: ", error);
    }
    return decoded;
}

export async function getToken() {
    const token = localStorage.getItem("token");
    return token;
}

export async function logIn(values) {
    const loginPayload = {
        email: values.username,
        password: values.password,
    };
    apiCall("post", "/login", loginPayload)
    .then(async response => {
        const token = response.data.accessToken;
        const decoded = await verifyToken(token)
        if (decoded !== null) {
            localStorage.setItem("token", token);
            if (decoded.role === "admin") {
                window.location.href = "/admin";
            } else {
                window.location.href = "/";
            }
        } else {
            console.log("Cannot log in.");
        }
    });
}

export async function logOut() {
    localStorage.removeItem("token");
    window.location.href = "/signin";
}

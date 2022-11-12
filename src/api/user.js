import { Result } from "antd";
import { basePath, apiVersion, modelName } from "./config";

export async function signUp(data) {
    const url = `${basePath}/${apiVersion}/${modelName}/signup`;

    const params = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
    };

    return fetch(url, params)
    .then((response) => {
        return response.json();
    })
    .then((result) => {
        if (result.user) {
            return {
                user_created: true,
                message: "User created successfully",
            };
        } else {
            return {
                user_created: false,
                message: result.message,
            }
        }
    })
    .catch((err) => {
        return {
            user_created: false,
            message: err.message,
        }
    });
}

export async function signIn(data) {
    const urL = `${basePath}/${apiVersion}/${modelName}/signin`;
    const params = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    };

    return fetch(urL, params)
    .then((response) => {
        return response.json();
    })
    .then((result) => {
        return result;
    })
    .catch((err) => {
        return err.message;
    });
}
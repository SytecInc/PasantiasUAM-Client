import { Result } from "antd";
import { basePath, apiVersion, modelName } from "./config";

export async function signUpApi(data) {
    const url = `${basePath}/${apiVersion}/${modelName}/signup`;

    console.log(url);

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
                user_creado: true,
                message: "Usuario creado correctamente",
            };
        }
        return {
            user_creado: false,
            message: result.message,
        }
    })
    .catch((err) => {
        return {
            user_creado: false,
            message: result.message,
        }
    });
}
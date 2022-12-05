import { serverPath, apiVersion, modelName } from "./config";

export async function signUp(data) {
    const url = `${serverPath}/${apiVersion}/${modelName}`;

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
        if (result.data) {
            return {
                user_created: true,
                message: "User created successfully",
            };
        } else if (result.errors) {
            return result
        }
    })
}

export async function signIn(data) {
    const urL = `${serverPath}/${apiVersion}/login`;
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
        return err;
    });
}
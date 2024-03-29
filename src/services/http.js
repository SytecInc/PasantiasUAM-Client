import {
    clientConfig
} from "../config";
const baseUrl = `${clientConfig.SERVER_URL}${clientConfig.SERVER_API}`;

export async function apiCall(method, url, data={}){
    const token = localStorage.getItem('token');

    const options = {
        method: method,
        mode: "cors",
        body: data !== {} ? JSON.stringify(data) : null,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': !token ? null : token,
        },
    }
    
    return await fetch(baseUrl+url, options)
    .then(response => {
        return response.json();
    });
}

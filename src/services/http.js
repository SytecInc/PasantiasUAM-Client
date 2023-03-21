import {
    SERVER_URL,
    SERVER_API,
    timeout
} from "../config";
const baseUrl = `${SERVER_URL}${SERVER_API}`;
const controller = new AbortController();

export async function apiCall(method, url, data={}){
    
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    const token = localStorage.getItem('token');
    
    const options = {
        method: method,
        signal: controller.signal,
        mode: "cors",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': !token ? null : token,
        },
    }
    return fetch(baseUrl+url, options)
    .then(response => {
        if (response.ok) {
            clearTimeout(timeoutId);
            return response.json();
        } else {
            throw new Error(response.status);
        }
    })
    .then(data => {
        return data;
    })
}

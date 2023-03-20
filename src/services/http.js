import {
    SERVER_URL,
    SERVER_API,
    timeout
} from "../config";
const baseUrl = `${SERVER_URL}${SERVER_API}`;
const controller = new AbortController();

export async function apiCall(method, url, data={}){
    
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    
    const options = {
        method: method,
        signal: controller.signal,
        mode: "cors",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': localStorage.getItem('token'),
        },
    }
    try {
        const promise = await fetch(baseUrl+url, options);
        clearTimeout(timeoutId);
        return promise.json()
    } catch (error) {
        console.log("HTTP Request Timeout Error. ", error);
    }
    
    
    
}

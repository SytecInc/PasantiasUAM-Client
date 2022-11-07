export const basePath = "http://localhost:3977/api";
export const apiVersion = "v1";
export const modelName = "user";

export function minLengthValidation(inputData, minLength) {
    const { value } = inputData;
    removeClassErrorSuccess(inputData);
    if (value.lenght >= minLength) {
        inputData.classList.add("Success");
        return true;
    } else {
        inputData.classList.add("Error");
        return false;
    }
}

export function emailValidation(inputData) {
    const emailValid = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
    const {  value } = inputData;
    removeClassErrorSuccess(inputData);
    const resultValidation = emailValid.test(value);
    if (resultValidation) {
        inputData.classList.add("Success");
        return true;
    } else {
        inputData.classList.add("Error");
        return false;
    }
}

function removeClassErrorSuccess(inputData) {
    inputData.classList.remove("Success");
    inputData.classList.remove("Error");
}
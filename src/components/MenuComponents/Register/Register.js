import React, { useState } from "react";
import { Form, Button, Input, Checkbox, notification } from "antd";
import { UserOutlined, LockOutlined  } from "@ant-design/icons";
import { signUp } from "../../../api/user.js"
import "./Register.scss";
import { emailValidation, minLengthValidation } from "../../../validations/FormValidations";

export default function RegisterForm() {
    const [inputs, setInputs] = useState({
        name: "",
        lastname: "",
        govId: "",
        email: "",
        phone: "",
        password: "",
        repeatPassword: "",
        privacyPolicy: false,
    });

    const [formValid, setFormValid] = useState({
        email: false,
        password: false,
        repeatPassword: false,
        privacyPolicy: false,
    })

    const changeForm = (e) => {
        if (e.target.name === "privacyPolicy") {
            setInputs({
                ...inputs,
                [e.target.name]: e.target.checked,
            });
        } else {
            setInputs({
                ...inputs,
                [e.target.name]: e.target.value,
            });
        }
    };

    const inputValidation = (e) => {
        const { type, name } = e.target;

        if (type === "email") {
            setFormValid({ ...formValid, [name]: emailValidation(e.target) });
        }
        if (type === "password") {
            setFormValid({ ...formValid, [name]: minLengthValidation(e.target, 6) 
        });
        }
        if (type === "checkbox") {
            setFormValid({ ...formValid, [name]: e.target.checked });
        }
    };

    const register = async (e) => {
        e.preventDefault();
        
        const nameVal = inputs.name;
        const lastnameVal = inputs.lastname;
        const govIdVal = inputs.govId;
        const emailVal = inputs.email;
        const phoneVal = inputs.phone;
        const passwordVal = inputs.password;
        const repeatPasswordVal = inputs.repeatPassword;
        const privacyPolicyVal = inputs.privacyPolicy;

        if (!nameVal || !lastnameVal || !govIdVal || !emailVal || !phoneVal || !passwordVal || !repeatPasswordVal || !privacyPolicyVal) {
            notification["error"]({
                message: "Todos los campos son obligatorios",
            });
        } else {
            if (passwordVal !== repeatPasswordVal) {
                notification["error"]({
                    message: "Las contraseñas tienen que ser iguales.",
                });
            } else {
                const result = await signUp(inputs);
                if (!result.user_created) {
                    notification["error"]({
                        message: result.message,
                    });
                } else {
                    notification["success"]({
                        message: result.message,
                    });

                    resetForm();
                }
            }
        }
    };

    const resetForm = () => {
        const inputs = document.getElementsByTagName("input");

        for (let i = 0; i < inputs.length; i++) {
            inputs[i].classList.remove("success");
            inputs[i].classList.remove("error");
        }
        
        setInputs({
            name: "",
            lastname: "",
            govId: "",
            email: "",
            phone: "",
            password: "",
            repeatPassword: "",
            privacyPolicy: false,
        });

        setFormValid({
            email: false,
            password: false,
            repeatPassword: false,
            privacyPolicy: false,
        });
    };
        
                
    return (
        <Form className="register-form" onChange={changeForm}>
            <Form.Item>
                <Input
                    prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    className="register-form__input"
                    value={inputs.name}
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                    type="text"
                    name="lastname"
                    placeholder="Apellido"
                    className="register-form__input"
                    value={inputs.lastname}
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                    type="text"
                    name="govId"
                    placeholder="Cédula"
                    className="register-form__input"
                    value={inputs.govId}
                />
            </Form.Item>
            <br />
            <Form.Item>
                <Input
                    prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="email"
                    name="email"
                    placeholder="Correo electronico"
                    className="register-form__input"
                    onChange={inputValidation}
                    value={inputs.email}
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                    type="text"
                    name="phone"
                    placeholder="Teléfono"
                    className="register-form__input"
                    value={inputs.phone}
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }}/>
                    }
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    className="register-form__input"
                    onChange={inputValidation}
                    value={inputs.password}
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }}/>
                    }
                    type="password"
                    name="repeatPassword"
                    placeholder="Repetir contraseña"
                    className="register-form__input"
                    onChange={inputValidation}
                    value={inputs.repeatPassword}
                />
            </Form.Item>
            <Form.Item> 
                <Checkbox name="privacyPolicy" onChange={inputValidation} checked={inputs.privacyPolicy}>
                    He leído y acepto la política de privacidad.
                </Checkbox>
            </Form.Item>

            <Button onClick={register} className="register-form__button">
            Crear cuenta
            </Button>
        </Form>
    );
}
import { useState } from "react";

import { useHistory } from "react-router-dom";
import validation from "./Validation"

function Register() {
    const history = useHistory()
    const [values, setValues] = useState({
        username:"",
        password: "",
        email:"",
        phoneNumber:"",
    })
    const [errors, setErrors] = useState({})
    const handleChange = (event) => {
        setValues({
        ...values, [event.target.name]: event.target.value
        });
    }

    const handleRegisterForm = (event) => {
        event.preventDefault();

    }
    
    return (
        <div className="container">
            <div className="auth-form">
                <div className="text-top">
                    <h2>Register Beer Bar App</h2>
                </div>
                <div className="switch_button">
                    <div className="btn_login"><button>Đăng nhập</button></div>
                    <div className="btn_or"> <span>Hoặc</span></div>
                </div>
                <div className="auth-form__form">
                    <div className="auth-form__group">
                        <input value={values.username} name="userName" type="text" 
                            onChange={handleChange}
                        className="auth-form__input" placeholder="Tên đăng nhập" />
                        <p className="text-error">{validationMsg.username}</p>
                    </div>
                    <div className="auth-form__group">
                        <input value={values.password} name="password" type="password" 
                        onChange={handleChange}
                        className="auth-form__input" placeholder="Mật khẩu" />
                        <p className="text-error">{validationMsg.password}</p>
                    </div>
                    <div className="auth-form__group">
                        <input value={values.email} name="mailAddress" type="text" 
                        onChange={handleChange}
                        className="auth-form__input" placeholder="Địa chỉ Email" />
                        <p className="text-error">{validationMsg.email}</p>
                    </div>
                    <div className="auth-form__group">
                        <input value={values.phoneNumber} name="phoneNumber" type="text" 
                        onChange={handleChange}
                        className="auth-form__input" placeholder="Số điện thoại" />
                        <p className="text-error">{validationMsg.phoneNumber}</p>
                    </div>

                </div>
                <div className="footer_btn">
                    <button onClick={handleRegisterForm} className="register">Đăng ký</button>
                </div>
            </div>
        </div>
    );
}

export default Register;
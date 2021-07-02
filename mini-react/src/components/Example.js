

function Example(){
    const handleClick = () =>{
            console.log('abc');
    } 
    const type = () => {
        console.log('demo')
    }
    return (
        <div className = "container">
            <div className = "auth-form">
                <div className="text-top">
                    <h2>Register Beer Bar App</h2>
                </div>
                <div className= "switch_button">
                    <div className="btn_login"><a>Đăng nhập</a></div>
                    <div className= "btn_or"> <span>Hoặc</span></div>
                </div>
                <div className = "auth-form__form">
                    <div className = "auth-form__group">
                        <input onChange={type} name="userName" type = "text" className = "auth-form__input" placeholder = "Tên đăng nhập"/>
                    </div>
                    <div className = "auth-form__group">
                        <input name= "mailAddress" type = "text" className = "auth-form__input" placeholder = "Địa chỉ Email"/>
                    </div>
                    <div className = "auth-form__group">
                        <input name="phoneNumber" type = "text" className = "auth-form__input" placeholder = "Số điện thoại"/>
                    </div>
                    <div className = "auth-form__group">
                        <input name="password" type = "password" className = "auth-form__input" placeholder = "Mật khẩu"/>
                    </div>
                </div>
                <div className = "footer_btn">
                    <button onClick={handleClick} className = "register">Đăng ký</button>
                </div>
            </div>
        </div>
    );
}

export default Example;
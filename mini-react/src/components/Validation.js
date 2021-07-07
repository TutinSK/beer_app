


const validation = (values) => {
    const errors = {};
    if(!values.username){
        errors.username = "Mời bạn nhập vào tên đăng nhập";
    }
    if(!values.email) {
        errors.email = "Mời bạn nhập vào Email";
    }
    if(!values.phoneNumber) {
        errors.phoneNumber = "Mời bạn nhập vào số điện thoại";
    }
    if(!values.password) {
        errors.password = "Mời bạn nhập vào mật khẩu";
    }
    else if(values.password.length < 6) {
        errors.password = "Mật khẩu phải lớn hơn 6 ký tự";
    }

    return errors;
}


export default validation;
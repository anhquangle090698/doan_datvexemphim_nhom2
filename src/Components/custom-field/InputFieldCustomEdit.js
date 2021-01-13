import React, { useState } from "react";
import "../../assets/scss/main.scss";

export default function InputFieldCustomEdit(props) {
  const [passwordShown, setPasswordShown] = useState(false);

  const {
    // properties of FastField (Formik)
    field,
    form,

    //properties of input tag
    placeholder,
    disabled,
    type,
  } = props;

  // const { name, value, onChange, onBlur} = field;

  const { name } = field;

  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  const togglePasswordVisibility = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <div className="form__group--edit">
      
      <label htmlFor={name} className="label--edit">
            {placeholder === 'Tài khoản' ? <i className="fa fa-user label--icon"></i> 
            : placeholder === 'Họ tên' ? <i className="fa fa-address-card label--icon"></i>
            : placeholder === 'Email' ?  <i className="fa fa-envelope label--icon"></i>
            : placeholder === 'Số điện thoại' ? <i className="fa fa-mobile label--icon"></i>
            : placeholder === 'Mật khẩu hiện tại' || placeholder === 'Mật khẩu mới' || placeholder === 'Xác nhận mật khẩu' ? <i className="fa fa-lock label--icon"></i> : ''
            }
             
            {placeholder}
      </label>

      <input
        type={type === "password" ? (passwordShown ? "text" : "password") : ""}
        disabled={disabled}
        placeholder={placeholder}

        id={name}
        {...field}

        className={
          showError && showError ? "form__control--edit invalid" : "form__control--edit"
        }

      >
      </input>

      {type === 'password' ? <i className="fa fa-eye" onClick={ () => {
                togglePasswordVisibility();
      }}></i> : null}

      {showError && <i className="fa fa-info"></i>}

      {showError && <span className="form__error--edit">{errors[name]}</span>}
    </div>
  );
}

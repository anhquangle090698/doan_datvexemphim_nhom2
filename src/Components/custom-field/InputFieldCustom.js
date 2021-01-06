import { ErrorMessage } from 'formik';
import React, { useState } from 'react';
import "../../assets/scss/main.scss";

export default function InputFieldCustom(props) {

    const [passwordShown, setPasswordShown] = useState(false);

    const {
        // properties of FastField (Formik)
        field, form,
        
        //properties of input tag
        placeholder, disabled,type
    } = props;

    // const { name, value, onChange, onBlur} = field;
        
    const { name } = field;

    const { errors, touched } = form;
    const showError = errors[name] && touched[name];

    const togglePasswordVisibility  = () => {
        setPasswordShown(passwordShown ? false : true);
    }

    return (
        
        
        <div className="form__group">

            <input 

            type={type === 'password' ? passwordShown ? 'text' : 'password' : ''}
            disabled={disabled}
            placeholder={placeholder}

            id={name}
            { ...field }

            className={showError && showError ? 'form__control invalid' : 'form__control'}
            
            >
            </input>

            {type === 'password' ? <i className="fa fa-eye" onClick={ () => {
                togglePasswordVisibility();
            }}></i> : null}
            {showError && <i className="fa fa-info" ></i>}
            
            { showError && <span className="form__error">{errors[name]}</span>}
        </div>
        
    )
}

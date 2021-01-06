import { FastField, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import * as Yup from 'yup';

import { postSignInApiAction } from "../redux/actions/ManageUserReducerAction";
import InputFieldCustom from "./custom-field/InputFieldCustom";

export default function SignIn(props) {

  const dispatch = useDispatch();

  const initialValues = {
    accountNameSignIn: "",
    passWordSignIn: "",
  };

  const validationSchema = Yup.object().shape({
    accountNameSignIn : Yup.string().required('Vui lập nhập tài khoản')
    .matches(/^(?=.*[a-zA-Z])[a-zA-Z0-9]+$/, {  excludeEmptyString : true, message : 'Vui lòng không nhập kí tự đặc biệt'})
    .min(7, 'Tài khoản phải có ít nhất 7 kí tự')
    .max(50, 'Tài khoản có tối đa 50 kí tự'),

    passWordSignIn : Yup.string().required('Vui lòng nhập mật khẩu')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{1,}$/, 'Mật khẩu có ít nhất 1 kí tự hoa, 1 kí tự số, 1 kí tự đặc biệt')
    .min(10, 'Mật khẩu phải có ít nhất 10 kí tự'),

  })

  return (
    <>
      <Formik 
      initialValues={initialValues}
      validationSchema={validationSchema} 
      onSubmit = {async (values) => {

        // alert(JSON.stringify(values, null, 2));

        const informationUser = {
          taiKhoan : values.accountNameSignIn,
          matKhau : values.passWordSignIn,
        }

        dispatch(await postSignInApiAction(informationUser));
        
      }}>

        {(formikProps) => {

          // const { values, errors, touched, isSubmitting } = formikProps; //attribute offered by formik
          // console.log({ values, errors, touched, isSubmitting });

          return (
            <Form>
              <FastField
                type="text"
                name="accountNameSignIn"
                component={InputFieldCustom}
                placeholder="Tài khoản"

              ></FastField>

              <FastField
                type="password"
                name="passWordSignIn"
                component={InputFieldCustom}
                placeholder="Mật khẩu"

              ></FastField>

              <div className="form__button--block">
                <button className="button__signInUp" type="submit">
                  Đăng Nhập
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

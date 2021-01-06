import { FastField, Form, Formik } from "formik";
import React from "react";
import InputFieldCustom from "./custom-field/InputFieldCustom";
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { postSignUpApiAction } from "../redux/actions/ManageUserReducerAction";

export default function SignUp(props) {

  const dispatch = useDispatch();

  const initialValues = {
    accountName: "",
    passWord: "",
    userName: "",
    email: "",
    numberPhone: "",
  };

  const validationSchema = Yup.object().shape({
    accountName : Yup.string().required('Vui lập nhập tài khoản')
    .matches(/^(?=.*[a-zA-Z])[a-zA-Z0-9]+$/, {  excludeEmptyString : true, message : 'Vui lòng không nhập kí tự đặc biệt'})
    .min(7, 'Tài khoản phải có ít nhất 7 kí tự')
    .max(50, 'Tài khoản có tối đa 50 kí tự'),

    passWord : Yup.string().required('Vui lòng nhập mật khẩu')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{1,}$/, 'Mật khẩu có ít nhất 1 kí tự hoa, 1 kí tự số, 1 kí tự đặc biệt')
    .min(10, 'Mật khẩu phải có ít nhất 10 kí tự'),

    userName : Yup.string().required('Vui lòng nhập họ tên')
    .matches(/^(?=.*[a-zA-Z\S])[ a-zA-Z0-9]+$/, {  excludeEmptyString : true, message : 'Vui lòng không nhập kí tự đặc biệt'})
    // .matches(/^(\b[a-z](?!\s))$/, 'Vui lòng viết hoa chữ cái đầu mỗi từ')
    .min(5, 'Họ và tên phải có ít nhất 5 kí tự'),

    email : Yup.string().required('Vui lòng nhập email')
    .email('Vui lòng nhập đúng định dạng email'),

    numberPhone: Yup.string().required('Vui lòng nhập số điện thoại')
    .matches(/^(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})$/,'Vui lòng nhập đúng định dạng số điện thoại'),
  })

  return (
    <>
      <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit = {async (values) => {

            const informationUser = {
              taiKhoan: values.accountName,
              matKhau: values.passWord,
              email: values.email,
              soDt: values.numberPhone,
              maNhom : "GP02",
              maLoaiNguoiDung : "KhachHang",
              hoTen : values.userName
            }

            alert(JSON.stringify(informationUser, null, 2));
            dispatch(await postSignUpApiAction(informationUser));
        }}
      >
        {(formikProps) => {
          const { values, errors, touched, isSubmitting } = formikProps; //attribute offered by formik
          console.log({ values, errors, touched, isSubmitting });

          return (
            <Form>
              {/* FastField equal to pure component will non re-render during field other changed.  */}
              {/* Else <Field></Field>. Important fast field exactly independent with fast field other. */}
              <FastField
                type="text"
                name="accountName"
                component={InputFieldCustom}
                placeholder="Tài khoản"

              ></FastField>

              <FastField
                type="password"
                name="passWord"
                component={InputFieldCustom}
                placeholder="Mật khẩu"

              ></FastField>

              <FastField
                type="text"
                name="userName"
                component={InputFieldCustom}
                placeholder="Họ tên"

              ></FastField>

              <FastField
                type="email"
                name="email"
                component={InputFieldCustom}
                placeholder="Email"

              ></FastField>

              <FastField
                type="text"
                name="numberPhone"
                component={InputFieldCustom}
                placeholder="Số điện thoại"

              ></FastField>

              <p className="form__policy">Tôi đã đọc và đồng ý với CHÍNH SÁCH của chương trình.</p>

              <div className="form__button--block">
                <button
                    className="button__signInUp"
                    type="submit"
                >
                    Đăng Ký
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

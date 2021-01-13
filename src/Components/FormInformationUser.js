import React, { useEffect } from "react";
import { FastField, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import InputFieldCustomEdit from "./custom-field/InputFieldCustomEdit";
import "../assets/scss/main.scss";
import {
  postInformationAccountApiAction,
  putUpdateUserApiAction,
} from "../redux/actions/ManageUserReducerAction";

export default function FormInformationUser(props) {
  const { informationAccount, informationUserSignIn } = useSelector(
    (state) => state.StateManageUser
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDataSCinema = async () => {
      dispatch(
        await postInformationAccountApiAction({
          taiKhoan: informationUserSignIn.taiKhoan,
        })
      );
    };

    fetchDataSCinema();
  }, []);

  // console.log(informationAccount);

  const initialValues = {
    accountNameEdit: informationAccount.taiKhoan,
    passWord: informationAccount.matKhau,
    passWordEdit : "",
    passWordEditConfirm : "",
    userNameEdit: informationAccount.hoTen,
    emailEdit: informationAccount.email,
    numberPhoneEdit: informationAccount.soDT,
    toggle : false,
  };

  const validationSchema = Yup.object().shape({
    toggle: Yup.boolean(),
    accountNameEdit: Yup.string()
      .required("Vui lập nhập tài khoản")
      .matches(/^(?=.*[a-zA-Z])[a-zA-Z0-9]+$/, {
        excludeEmptyString: true,
        message: "Vui lòng không nhập kí tự đặc biệt",
      })
      .min(7, "Tài khoản phải có ít nhất 7 kí tự")
      .max(50, "Tài khoản có tối đa 50 kí tự"),

    userNameEdit: Yup.string()
      .required("Vui lòng nhập họ tên")
      .matches(/^(?=.*[a-zA-Z\S])[ a-zA-Z0-9]+$/, {
        excludeEmptyString: true,
        message: "Vui lòng không nhập kí tự đặc biệt",
      })
      // .matches(/^(\b[a-z](?!\s))$/, 'Vui lòng viết hoa chữ cái đầu mỗi từ')
      .min(5, "Họ và tên phải có ít nhất 5 kí tự"),

    emailEdit: Yup.string()
      .required("Vui lòng nhập email")
      .email("Vui lòng nhập đúng định dạng email"),

    numberPhoneEdit: Yup.string()
      .required("Vui lòng nhập số điện thoại")
      .matches(
        /^(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})$/,
        "Vui lòng nhập đúng định dạng số điện thoại"
      ),

    passWordEdit: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{1,}$/,
        "Mật khẩu có ít nhất 1 kí tự hoa, 1 kí tự số, 1 kí tự đặc biệt"
      )
      .min(10, "Mật khẩu phải có ít nhất 10 kí tự"),

    passWordEditConfirm: Yup.string().oneOf(
      [Yup.ref("passWordEdit")],
      "Mật khẩu mới không khớp!"
    ),
  });

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit= {async (values) => {
          
          const informationUserEdit = {
            taiKhoan: values.accountNameEdit,
            matKhau:  values.passWordEdit,
            email: values.emailEdit,
            soDt: values.numberPhoneEdit,
            maNhom: "GP02",
            maLoaiNguoiDung: "KhachHang",
            hoTen: values.userNameEdit,
          } 

          dispatch(await putUpdateUserApiAction(informationUserEdit));
        }}
      >
        {(formikProps) => {
          const { values, errors, touched, isSubmitting } = formikProps; //attribute offered by formik
          console.log({ values, errors, touched, isSubmitting });

          return (
            <div className="information">
              <Form className="form__edit">
                {/* FastField equal to pure component will non re-render during field other changed.  */}
                {/* Else <Field></Field>. Important fast field exactly independent with fast field other. */}

                <FastField
                  type="text"
                  name="accountNameEdit"
                  component={InputFieldCustomEdit}
                  placeholder="Tài khoản"
                  disabled="disabled"
                ></FastField>

                <FastField
                  type="text"
                  name="userNameEdit"
                  component={InputFieldCustomEdit}
                  placeholder="Họ tên"
                ></FastField>

                <FastField
                  type="email"
                  name="emailEdit"
                  component={InputFieldCustomEdit}
                  placeholder="Email"
                  disabled="disabled"
                ></FastField>

                <FastField
                  type="text"
                  name="numberPhoneEdit"
                  component={InputFieldCustomEdit}
                  placeholder="Số điện thoại"
                ></FastField>

                <div className="form__button--block">
                  <label className="checkbox path">
                    <FastField
                      type="checkbox"
                      name="toggle"
                    />
                    <svg viewBox="0 0 21 21">
                      <path d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186"></path>
                    </svg> 
                  </label>
                  <span className="checkbox__title">Đổi mật khẩu</span>
                </div>

                <div className={values.toggle ? "form__password--edit show" : "form__password--edit"}>
                  <div className="form__button--block">
                    <FastField
                      type="password"
                      name="passWord"
                      component={InputFieldCustomEdit}
                      placeholder="Mật khẩu hiện tại"
                      // disabled="disabled"
                    ></FastField> 
                  </div>

                  <div className="form__button--block">
                    <FastField
                      type="password"
                      name="passWordEdit"
                      component={InputFieldCustomEdit}
                      placeholder="Mật khẩu mới"

                    ></FastField>
                  </div>

                  <div className="form__button--block">
                    <FastField
                      type="password"
                      name="passWordEditConfirm"
                      component={InputFieldCustomEdit}
                      placeholder="Xác nhận mật khẩu"

                    ></FastField>
                  </div>
                </div>
                
                <div className="form__button--block">
                  <button className="button__edit" type="submit">
                    Lưu Lại
                  </button>
                </div>
              </Form>
            </div>
          );
        }}
      </Formik>
    </>
  );
}

import React, { useEffect } from "react";
import { FastField, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import InputFieldCustomEdit from "./custom-field/InputFieldCustomEdit";
import "../assets/scss/main.scss";
import {
  postInformationAccountApiAction,
  putUpdateUserApiAction,
  putUpdateUserApiAction1,
} from "../redux/actions/ManageUserReducerAction";

export default function FormInformationUser(props) {
  const { informationUserSignIn } = useSelector(
    (state) => state.StateManageUser
  );

  const dispatch = useDispatch();

  // useEffect(() => {
  //   const fetchDataSCinema = async () => {
  //     dispatch(
  //       await postInformationAccountApiAction({
  //         taiKhoan: informationUserSignIn.taiKhoan,
  //       })
  //     );
  //   };

  //   fetchDataSCinema();
  // }, []);

  // console.log(informationAccount);

  const initialValues = {
    accountNameEdit: informationUserSignIn.taiKhoan,
    userNameEdit: informationUserSignIn.hoTen,
    emailEdit: informationUserSignIn.email,
    numberPhoneEdit: informationUserSignIn.soDT,
  };

  const validationSchema = Yup.object().shape({
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
  });

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit= {async (values) => {
          
          const informationUserEdit = {
            taiKhoan: values.accountNameEdit,
            matKhau: "!Qq0919173852",
            email: values.emailEdit,
            soDt: values.numberPhoneEdit,
            maNhom: "GP02",
            maLoaiNguoiDung: "KhachHang",
            hoTen: values.userNameEdit,
          } 

          alert(JSON.stringify(informationUserEdit, null, 2));
          dispatch(await putUpdateUserApiAction1(informationUserEdit));
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
                ></FastField>

                <FastField
                  type="text"
                  name="numberPhoneEdit"
                  component={InputFieldCustomEdit}
                  placeholder="Số điện thoại"
                ></FastField>

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

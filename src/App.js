import './App.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useState } from "react";
import Select from 'react-select';

function App() {
  const [val, setVal] = useState(null);
  return (
    <div className="form">
      <Formik
        initialValues={{ fullname: "", address: "", gender: "", nationality: ""}}
        validate={(values) => {
          const errors = {};
          if (!values.fullname) {
            errors.fullname = "Enter full name";
          }

          if (!values.address) {
            errors.address = "Enter your address";
          }

          if (!values.gender) {
            errors.gender = "Enter your gender";
          }

          if (!values.nationality) {
            errors.nationality = "Enter your nationality";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 100);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field className="input" type="text" name="fullname" placeholder="Enter your fullname" />
            <ErrorMessage className="err" name="fullname" component="div" />
            <Field className="input" as="textarea" name="address" placeholder="Enter address" />
            <ErrorMessage className="err" name="address" component="div" />
            <br />
            <label>
              <Field className="exp" type="radio" name="gender" value="male" />
              Male
            </label>
            <label>
              <Field type="radio" name="gender" value="female" />
              Female
            </label>
            <label>
              <Field type="radio" name="gender" value="others" />
              Others
            </label>
            <label>
              <Field type="radio" name="gender" value="prefer not to say" />
              Prefer not to say
            </label>
            <ErrorMessage className="err" name="gender" component="div" />
            <br />
            <Field className="input" as="select" name="nationality" placeholder="Enter your country">
              <option value="">Select your country</option>
              <option value="India">India</option>
              <option value="Canada">Canada</option>
              <option value="Europe">Europe</option>
              <option value="Singapore">Singapore</option>
              <option value="USA">USA</option>
            </Field>
            <ErrorMessage className="err" name="nationality" component="div" />
            <br />
            <button className="but" type="submit" disabled={isSubmitting}>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;

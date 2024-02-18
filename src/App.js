import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import * as Yup from 'yup';
import Form from 'react-bootstrap/Form'
import FormField from './components/FormField';
import { useFormik } from 'formik';
import FormButton from './components/Button';
import { Col, Row } from 'react-bootstrap';
function App() {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      street1: '',
      street2: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string("").min(4).required(),
      lastName: Yup.string("").min(4).required(),
      email: Yup.string("").min(4).required(),
      street1: Yup.string("").min(4).required(),
      street2: Yup.string("").min(4).required(),
      dob: Yup.date().max(new Date(), "Date must be less than today").required()
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      alert("Form Submitted !")
      resetForm();
    }
  });
  return (
    <div className="App">
      <h3>Signup Form</h3>
      <Form onSubmit={formik.handleSubmit} className='container'>
        <Row>
          <Col sm="6">
            <FormField name={'firstName'} label={"First Name"} formik={formik} type={"text"} />
          </Col>
          <Col sm="6">
            <FormField name={'lastName'} label={"Last Name"} formik={formik} type={"text"} />
          </Col>
          <Col sm="6">
            <FormField name={'email'} label={"Email"} formik={formik} type={"text"} />
          </Col>
          <Col sm="6">
            <FormField name={'street1'} label={"Street Address 1"} formik={formik} type={"text"} />
          </Col>
          <Col sm="6">
            <FormField name={'street2'} label={"Street Address 2"} formik={formik} type={"text"} />
          </Col>
          <Col sm="6">
            <FormField name={'dob'} label={"Date of Birth"} formik={formik} type={"date"} />
          </Col>
        </Row>
        <FormButton type={"submit"} label={"submit"} />
      </Form>
    </div>
  );
}

export default App;

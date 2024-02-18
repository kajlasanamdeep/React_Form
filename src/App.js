import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import * as Yup from 'yup';
import Form from 'react-bootstrap/Form'
import FormField from './components/FormField';
import { useFormik } from 'formik';
import FormButton from './components/Button';
function App() {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
      email: "",
      contact: "",
      dob: "",
      image: null,
      image2: null
    },
    validationSchema: Yup.object({
      name: Yup.string("").min(4).required(),
      dob: Yup.date().max(new Date(), "Date must be less than today").required(),
      time: Yup.string().required(),
      image: Yup.mixed().required(),
      image2: Yup.mixed().required(),
      email: Yup.string().email("email is not correct").required(),
      contact: Yup.string().max(10).min(8).required()
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    }
  });
  const handleChangeImage = (e) => {
    let files = e.target.files;
    formik.setFieldValue(e.target.name, files?.[0]);
  }
  return (
    <div className="App">
      <h3>FORM</h3>
      <Form onSubmit={formik.handleSubmit}>
        <FormField label={"name"} onChange={formik.handleChange} value={formik.values.name} type={"text"} error={formik.touched.name && formik.errors.name} onBlur={formik.handleBlur} />
        <FormField label={"email"} onChange={formik.handleChange} value={formik.values.email} type={"text"} error={formik.touched.email && formik.errors.email} onBlur={formik.handleBlur} />
        <FormField label={"contact"} onChange={formik.handleChange} value={formik.values.contact} type={"text"} error={formik.touched.contact && formik.errors.contact} onBlur={formik.handleBlur} />
        <FormField label={"dob"} onChange={formik.handleChange} value={formik.values.dob} type={"date"} error={formik.touched.dob && formik.errors.dob} onBlur={formik.handleBlur} />
        <FormField label={"time"} onChange={formik.handleChange} value={formik.values.time} type={"time"} error={formik.touched.time && formik.errors.time} onBlur={formik.handleBlur} />
        <FormField label={"image"} accept={'image/png'} onChange={handleChangeImage} type={"file"} error={formik.touched.image && formik.errors.image} onBlur={formik.handleBlur} image={formik.values.image} />
        <FormField label={"image2"} accept={'image/gif'} onChange={handleChangeImage} type={"file"} error={formik.touched.image2 && formik.errors.image2} onBlur={formik.handleBlur} image={formik.values.image2} />
        <FormButton type={"submit"} label={"submit"} />
      </Form>
    </div>
  );
}

export default App;

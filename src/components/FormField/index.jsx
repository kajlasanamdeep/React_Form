import React from 'react'
import Form from 'react-bootstrap/Form';
import { Row } from 'react-bootstrap';
function FormField({
    label,
    type,
    name,
    formik
}) {
    return (
        <Form.Group as={Row} className="mb-3 me-1">
            <Form.Label style={{textAlign:"left"}}>
                {label}
            </Form.Label>
            <Form.Control name={name} value={formik.values?.[name]} placeholder={`Enter Your ${name}`} onChange={formik.handleChange} type={type} onBlur={formik.handleBlur} />
            <Form.Text style={{ color: "red" }}>{formik.touched?.[name] && formik.errors?.[name]}</Form.Text>
        </Form.Group>
    )
}

export default FormField

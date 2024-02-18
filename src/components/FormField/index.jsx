import React from 'react'
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';
function FormField({
    label,
    type,
    name,
    onChange,
    value,
    error,
    onBlur,
    image,
    accept
}) {
    return (
        <>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                    {label}
                </Form.Label>
                <Col sm="10">
                    <Form.Control accept={accept} name={label} value={value} onChange={onChange} type={type} onBlur={onBlur} />
                </Col>
            </Form.Group>
            {image && <>
                <img height={30} width={30} src={URL.createObjectURL(image)} alt=''></img>
            </>}
            <p style={{ color: "red" }}>{error}</p>
        </>
    )
}

export default FormField

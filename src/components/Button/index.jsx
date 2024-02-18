import React from 'react'
import Button from 'react-bootstrap/Button'
function FormButton({ onClick, type, label }) {
    return (
        <Button variant='success' type={type} onClick={onClick}>{label}</Button>
    )
}

export default FormButton

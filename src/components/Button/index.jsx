import React from 'react'
import Button from 'react-bootstrap/Button'
function FormButton({ onClick, type, label }) {
    return (
        <Button className='w-50' variant='success' type={type} onClick={onClick}>{label}</Button>
    )
}

export default FormButton

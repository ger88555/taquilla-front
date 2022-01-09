import React from 'react'
import { useCallback } from 'react'
import { Col, Button as BaseButton } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export const Button = ({ label = '', to = '', onClick, variant = 'success' }) => {
    const navigate = useNavigate()

    const clickHandler = useCallback(() => to?.length ? navigate(to) : onClick())

    return (
        <Col className='col-auto'>
            <BaseButton onClick={clickHandler} size='lg' variant={variant}>{label}</BaseButton>
        </Col>
    )
}
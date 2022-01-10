import React, { useCallback, useEffect, useState } from 'react'
import { Container, Row, Col, Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap'
import { connect } from 'react-redux'
import { cartActions } from '../../../_actions'
import { BottomNavigation } from '../../_common/BottomNavigation'

const Checkout = ({ get, pay }) => {
    const [id] = useState(localStorage.getItem('cart_id') || null)
    const reload = useCallback(() => get(id), [])

    const [nombre_cliente, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const [no_tarjeta, setTarjeta] = useState('')

    const [validated, setValidated] = useState(false)
    const handleSubmit = () => {
        setValidated(true)
        console.log(id, {no_tarjeta, nombre_cliente,correo})
        pay(id, {no_tarjeta, nombre_cliente, correo}) 
    }

    useEffect(() => {
        reload()
    }, [])

    return (
        <Container>

            <Row>
                <Col className='text-start'>
                    <h1 className="display-1">Pago de Boletos</h1>
                </Col>
            </Row>

            <Row className="justify-content-md-center">
                <Col className='text-center' sm = {3}>
                    <Form noValidate validated={validated}>
                        <FormGroup controlId="validationCustom01">
                            <FormLabel>Introduzca su nombre</FormLabel>
                            <FormControl 
                                type="text" 
                                onChange={e => setNombre(e.target.value)} 
                                placeholder="introduzca nombre" required>
                            </FormControl>
                        </FormGroup>
                        <FormControl.Feedback type = "invalid"> Introduzca Nombre</FormControl.Feedback>
                    </Form>
                </Col>   
            </Row>
            <Row className="justify-content-md-center">
                <Col className='text-center' sm = {3}>
                    <Form noValidate validated={validated}>
                        <FormGroup controlId="validationCustom02">
                            <FormLabel>Introduzca su numero de Tarjeta</FormLabel>
                            <FormControl 
                                type="number" 
                                onChange={e => setTarjeta(e.target.value)} 
                                placeholder="introduzca numero de tarjeta" required >
                            </FormControl>
                        </FormGroup>
                        <FormControl.Feedback type = "invalid"> Introduzca Tarjeta</FormControl.Feedback>
                    </Form>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col className='text-center' sm = {3}>
                    <Form noValidate validated={validated}>
                        <FormGroup controlId="validationCustom03">
                            <FormLabel>Introduzca su correo</FormLabel>
                            <FormControl 
                                type="text"  
                                onChange={e => setCorreo(e.target.value)} 
                                placeholder="introduzca su correo" required >
                            </FormControl>
                        </FormGroup>
                        <FormControl.Feedback type = "invalid"> introduzca correo</FormControl.Feedback>
                    </Form>
                </Col>
            </Row>

            <BottomNavigation prev={{ label: 'Regresar', to: '/carrito' }} next={{ label: 'Pagar', onClick: () => {handleSubmit()} }} />

        </Container>
    )
}

const connectedCheckout = connect((state) => (state.cart.data), { ...cartActions })(Checkout)

export { connectedCheckout as Checkout }
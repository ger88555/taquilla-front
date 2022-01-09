import React, { useCallback, useEffect, useState } from 'react'
import { Container, Row, Col, Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap'
import { connect } from 'react-redux'
import { cartActions } from '../../../_actions'
import { BottomNavigation } from '../../_common/BottomNavigation'

const Checkout = ({ get }) => {
    const [id] = useState(localStorage.getItem('cart_id') || null)

    const reload = useCallback(() => get(id), [])

    const [validated, setValidated] = useState(false)
    const handleSubmit = (event) => {
        if (Form.checkValidity() === false){
            event.preventDefualt()
            event.stopPropagation
        }
        setValidated(true)
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
                            <FormControl type="text" placeholder="introduzca nombre" required>
                            </FormControl>
                        </FormGroup>
                        <FormControl.Feedback type = "invalid"> introduzca nombre</FormControl.Feedback>
                    </Form>
                </Col>   
            </Row>
            <Row className="justify-content-md-center">
                <Col className='text-center' sm = {3}>
                    <Form noValidate validated={validated}>
                        <FormGroup controlId="validationCustom02">
                            <FormLabel>Introduzca su numero de Tarjeta</FormLabel>
                            <FormControl type="number" placeholder="introduzca numero de tarjeta" required >
                            </FormControl>
                        </FormGroup>
                        <FormControl.Feedback type = "invalid"> introduzca tarjeta</FormControl.Feedback>
                    </Form>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col className='text-center' sm = {3}>
                    <Form noValidate validated={validated}>
                        <FormGroup controlId="validationCustom03">
                            <FormLabel>Introduzca su correo</FormLabel>
                            <FormControl type="text" placeholder="introduzca su correo" required >
                            </FormControl>
                        </FormGroup>
                        <FormControl.Feedback type = "invalid"> introduzca correo</FormControl.Feedback>
                    </Form>
                </Col>
            </Row>

            <BottomNavigation prev={{ label: 'Regresar', to: '/carrito' }} next={{ label: 'Pagar', onClick: () => {handleSubmit} }} />

        </Container>
    )
}

const connectedCheckout = connect((state) => (state.cart.data), { ...cartActions })(Checkout)

export { connectedCheckout as Checkout }
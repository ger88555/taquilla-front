import React, { useCallback, useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { cartActions } from '../../../_actions'
import { BottomNavigation } from '../../_common/BottomNavigation'

const Checkout = ({ get }) => {
    const [id] = useState(localStorage.getItem('cart_id') || null)

    const reload = useCallback(() => get(id), [])

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

            <Row>
                <Col className='text-center'>
                    (Sin Implementar)
                </Col>
            </Row>

            <BottomNavigation prev={{ label: 'Regresar', to: '/carrito' }} next={{ label: 'Pagar', onClick: () => {} }} />

        </Container>
    )
}

const connectedCheckout = connect((state) => (state.cart.data), { ...cartActions })(Checkout)

export { connectedCheckout as Checkout }
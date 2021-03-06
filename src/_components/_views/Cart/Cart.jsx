import React, { useCallback, useEffect, useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { connect} from 'react-redux'
import { cartActions } from '../../../_actions'
import { BottomNavigation } from '../../_common/BottomNavigation'
import { CartItems } from '../../_common/CartItems'

const Cart = ({ get }) => {
    const [id] = useState(localStorage.getItem('cart_id') || null)

    const reload = useCallback(() => get(id), [])

    useEffect(() => {
        reload()
    }, [])

    return (
        <Container>

            <Row>
                <Col className='text-start'>
                    <h1 className="display-1">Mi Carrito</h1>
                </Col>
            </Row>

            <Row>
                <Col className='text-center'>
                    <CartItems />
                </Col>
            </Row>

            <BottomNavigation next={{ label: 'Ir a pagar', to: '/pago' }} />

        </Container>
    )
}

const connectedCart = connect( (state) => (state.cart.data), { ...cartActions } )(Cart)

export {connectedCart as Cart}
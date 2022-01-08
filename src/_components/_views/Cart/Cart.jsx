import React, { useCallback, useEffect, useState} from 'react'
import { Container, Row, Col, Button} from 'react-bootstrap'
import { connect} from 'react-redux'
import { cartActions } from '../../../_actions'
import { CartItems } from '../../_common/CartItems'

const Cart = ({ get }) => {
    const [id] = useState(localStorage.getItem('cart_id') || null)
    console.log(id)

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
            <Button onClick={()=> window.location.href='/pago'}>Ir a pagar</Button>

        </Container>
    )
}

const connectedCart = connect( (state) => (state.cart.data), { ...cartActions } )(Cart)

export {connectedCart as Cart}
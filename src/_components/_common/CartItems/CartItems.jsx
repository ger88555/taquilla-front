import React, { useEffect } from 'react'
import { Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { cartActions, exhibitionActions } from '../../../_actions'
import { CartItem } from '../CartItem'
import { Error, Loading } from '../Messages'

const CartItems = ({ data = [], loading, error, listExhibitions }) => {
    useEffect(() => {
        listExhibitions({ available: true })
    }, [])

    if (error) {
        return <Error>{error}</Error>
    }

    if (loading) {
        return <Loading />
    }

    return (
        <Row>
            {data.map((item, i) => <CartItem key={i} {...item} />)}
        </Row>
    )
}

const connectedCartItems = connect( (state) => ({ data: state.cart.data.items }), { ...cartActions, listExhibitions: exhibitionActions.list } )(CartItems)

export {connectedCartItems as CartItems}
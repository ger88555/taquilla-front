import React, { useEffect } from 'react'
import { useCallback } from 'react'
import { connect } from 'react-redux'
import { itemActions, exhibitionActions } from '../../../_actions'
import { CartItem } from '../CartItem'
import { Error, Loading } from '../Messages'

const CartItems = ({ cart_id, data = [], loading, error, list, listExhibitions }) => {
    const reload = useCallback(() => list(cart_id), [cart_id])

    useEffect(() => {
        reload()
    }, [cart_id])

    useEffect(() => {
        listExhibitions({ available: true })
    }, [])

    if (error) {
        return <Error>{error}</Error>
    }

    if (loading) {
        return <Loading />
    }

    return data.map((item, i) => <CartItem key={i} {...item} />)
}

const connectedCartItems = connect( (state) => ({ cart_id: state.cart.data.id, data: state.items.data }), { ...itemActions, listExhibitions: exhibitionActions.list } )(CartItems)

export {connectedCartItems as CartItems}
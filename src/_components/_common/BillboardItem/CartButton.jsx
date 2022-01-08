import React, { useCallback } from 'react'
import { Button, Image } from 'react-bootstrap'
import addCartIcon from '../../../_assets/add-cart.svg'

export const CartButton = ({ id, promocion_id = null, label = '', variant = 'success' }) => {

    const clickHandler = useCallback(() => {
        // TODO: add to cart logic

        console.log('exhibition:', id,'promo:',promocion_id)
    })

    return (
        <Button data-testid={`${id}-add-to-cart`} className="btn-block fw-bold" variant={variant} onClick={clickHandler} title="Añadir al carrito">
            {label} <Image src={addCartIcon} />
        </Button>
    )
}
import React, { useState } from 'react'
import { Button, Image } from 'react-bootstrap'
import addCartIcon from '../../../_assets/add-cart.svg'
import { ConfirmationModal } from './ConfirmationModal'

export const CartButton = ({ exhibition = {}, promo = {}, label = '', variant = 'success' }) => {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <ConfirmationModal show={showModal} onHide={setShowModal} exhibition={exhibition} promo={promo} />

            <Button data-testid={`${exhibition.id}-add-to-cart`} className="btn-block fw-bold" variant={variant} onClick={() => setShowModal(true)} title="Añadir al carrito">
                {label} <Image src={addCartIcon} />
            </Button>
        </>
    )
}
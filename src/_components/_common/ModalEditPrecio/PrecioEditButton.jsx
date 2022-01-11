/* eslint-disable linebreak-style */
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

import { ModalEditPrecio } from './ModalEditPrecio'

export const PrecioEditButton = ({ exhibition = {}, variant = 'primary' }) => {

    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <ModalEditPrecio show={showModal} onHide={() => setShowModal(false)} exhibition={exhibition} />

            <Button data-testid={`${exhibition.id}-add-to-cart`} className="btn-block " variant={variant} onClick={() => setShowModal(true)} >
                Edit precio
            </Button>
        </>
    )
}
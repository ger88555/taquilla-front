/* eslint-disable linebreak-style */
import React, { useState } from 'react'
import { Button, Image } from 'react-bootstrap'
import pencil from '../../../_assets/pencil.svg'
import { ModalEditPrecio } from './ModalEditPrecio'

export const PrecioEditButton = ({ exhibition = {}, label = '', variant = 'primary' }) => {

    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <ModalEditPrecio show={showModal} onHide={() => setShowModal(false)} exhibition={exhibition} />

            <Button data-testid={`${exhibition.id}-add-to-cart`} className="btn-block fw-bold" variant={variant} onClick={() => setShowModal(true)} >
                {label} <Image src={pencil} style={{maxWidth:'50px', maxHeight:'50px'}} />
            </Button>
        </>
    )
}
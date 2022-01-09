/* eslint-disable linebreak-style */
import React, { useState } from 'react'
import { Button, Image } from 'react-bootstrap'
import pencil from '../../../_assets/pencil.svg'
import { ModalPrecio } from './ModalPrecio'

export const PrecioButton = ({ exhibition = {}, promo = {}, label = '', variant = 'primary' }) => {

    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <ModalPrecio show={showModal} onHide={setShowModal} exhibition={exhibition} promo={promo} />

            <Button data-testid={`${exhibition.id}-add-to-cart`} className="btn-block fw-bold" variant={variant} onClick={() => setShowModal(true)} >
                {label} <Image src={pencil} style={{maxWidth:'20px', maxHeight:'20px'}} />
            </Button>
        </>
    )
}
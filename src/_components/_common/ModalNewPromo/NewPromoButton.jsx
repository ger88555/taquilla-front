/* eslint-disable linebreak-style */
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { ModalNewPromo } from './ModalNewPromo'
import '../../../_assets/style.css'

export const NewPromoButton = ({ variant = 'success' }) => {

    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <ModalNewPromo show={showModal} onHide={() => setShowModal(false)}  />

            <Button 
                className="float-end btn-esquina" 
                variant={variant} 
                onClick={() => setShowModal(true)}
            >
                Nueva promo
            </Button>
        </>
    )
}
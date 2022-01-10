/* eslint-disable linebreak-style */
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { ModalNewExhibicion } from './ModalNewExhibicion'

export const NewExhibicionButton = ({ variant = 'success' }) => {

    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <ModalNewExhibicion show={showModal} onHide={() => setShowModal(false)}  />

            <Button className="btn-block " variant={variant} onClick={() => setShowModal(true)} >
                Nueva exhibicion
            </Button>
        </>
    )
}
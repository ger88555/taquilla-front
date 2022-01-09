import React, { useEffect, useState } from 'react'
import { Alert, Card, Col, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { customerConstants } from '../../../_constants'
import { TicketsRange } from '../TicketstRange'

const CartItem = ({ id, exhibicion_id, promocion_id, cantidad_boletos, exhibitions }) => {
    const [exhibition, setExhibition] = useState(null)
    const [promo, setPromo] = useState(null)

    useEffect(() => {
        if (exhibitions.loading === false) {
            setExhibition(exhibitions.data.find(e => e.id == exhibicion_id) || null)
        }
    }, [exhibicion_id, exhibitions.loading])

    useEffect(() => {
        if (exhibition && promocion_id) {
            setPromo(exhibition.promos.find(e => e.id == promocion_id))
        }
    }, [exhibition, promocion_id])

    return (
        <Row className='mb-1'>
            <Col>
                <Card bg="light">
                    {exhibition?.id && (
                        <>
                            <Card.Body>

                                <Card.Title><span className='display-6'>{exhibition.nombre}</span></Card.Title>

                                <Card.Text>{exhibition.descripcion}</Card.Text>

                                <Card.Text className="text-end">

                                    <small className="text-muted">
                                        Del <strong>{exhibition.desde}</strong> hasta el <strong>{exhibition.hasta}</strong>
                                    </small>

                                </Card.Text>

                                {promo?.id && (
                                    <Alert className='text-center mb-0' variant='warning'>
                                        <strong>Promoción: {customerConstants[promo.tipo_de_cliente_id]} {promo.discount_text}</strong>
                                    </Alert>
                                )}

                            </Card.Body>

                            <TicketsRange id={id} defaultValue={cantidad_boletos} exhibition={exhibition} promo={promo} />
                        </>
                    )}
                </Card>
            </Col>
        </Row>
    )
}

const connectedCartItem = connect((state) => ({ exhibitions: state.exhibitions }))(CartItem)

export { connectedCartItem as CartItem }
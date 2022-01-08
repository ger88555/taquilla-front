import React, { useCallback, useEffect, useState } from 'react'
import { Alert, Card, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { customerConstants } from '../../../_constants'

const CartItem = ({ exhibicion_id, promocion_id, cantidad_boletos, exhibitions }) => {
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

    const getPriceTotal = useCallback(
        () => cantidad_boletos * exhibition.precio * (promo?.porcentaje || 1),
        [cantidad_boletos, exhibition?.precio, promo?.porcentaje]
    )

    return (
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

                        <Card.Footer className='text-end'>

                            <Card.Text>
                                <strong>$ {getPriceTotal()} MXN</strong> x <strong>{cantidad_boletos} boletos</strong>
                            </Card.Text>

                        </Card.Footer>
                    </>
                )}
            </Card>
        </Col>
    )
}

const connectedCartItem = connect((state) => ({ exhibitions: state.exhibitions }))(CartItem)

export { connectedCartItem as CartItem }
import React, { useState } from 'react'
import { Card, Col } from 'react-bootstrap'
import { connect } from 'react-redux'

const CartItem = ({ exhibicion_id, cantidad_boletos, exhibitions }) => {
    const [exhibition, setExhibition] = useState({})

    useState(() => {
        if (exhibitions.loading) return
        
        setExhibition(exhibitions.data.find(e => e.id == exhibicion_id))
    }, [exhibitions.loading])

    console.log('state:',exhibitions, exhibition)

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

                        </Card.Body>
                        <Card.Footer className='text-end'>
                            
                            <Card.Text>
                                <strong>$ {exhibition.precio} MXN</strong> x <strong>{cantidad_boletos} boletos</strong>
                            </Card.Text>

                        </Card.Footer>
                    </>
                )}
            </Card>
        </Col>
    )
}

const connectedCartItem = connect( (state) => ({ exhibitions: state.exhibitions }) )(CartItem)

export { connectedCartItem as CartItem }
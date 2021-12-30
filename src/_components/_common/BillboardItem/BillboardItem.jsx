import React from 'react'
import { Card, Button, Col } from 'react-bootstrap'

export const BillboardItem = ({ id, nombre, descripcion, desde, hasta, precio }) => {

    const addToCart = () => {
        //
    }

    return (
        <Col>
            <Card bg="light">
                <Card.Body>

                    <Card.Title><span className='display-6'>{nombre}</span></Card.Title>

                    <Card.Text>{descripcion}</Card.Text>

                    <Card.Text className="text-end">
                        <strong>$ {precio} MXN</strong>
                    </Card.Text>

                </Card.Body>
                <Card.Footer className='text-end'>

                    <small className="text-muted">
                        Del <strong>{desde}</strong> hasta el <strong>{hasta}</strong>
                    </small>

                </Card.Footer>
                <Card.Footer className='text-end'>

                    <Button data-testid={`${id}-add-to-cart`} className="btn-block" variant='success' onClick={addToCart}>
                        Añadir al carrito
                    </Button>

                </Card.Footer>
            </Card>
        </Col>
    )
}
import React from 'react'
import { Card, Button } from 'react-bootstrap'

export const BillboardItem = ({ id, nombre, descripcion, desde, hasta, precio }) => {

    const addToCart = () => {
        //
    }

    return (
        <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>

                <Card.Title>{nombre}</Card.Title>

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

                <Button data-testid={`${id}-add-to-cart`} variant='success' onClick={addToCart}>
                    Añadir al carrito
                </Button>

            </Card.Footer>
        </Card>
    )
}
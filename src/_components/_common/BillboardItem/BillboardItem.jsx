import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { PromoList } from './PromoList'
import { CartButton } from './CartButton'

export const BillboardItem = ({ id, nombre, descripcion, desde, hasta, precio, promos = [] }) => {
    return (
        <Col sm="12" md="auto" className="mb-4">
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

                    <CartButton id={id} label={`$ ${precio}`} />

                </Card.Footer>
                
                <PromoList data={promos} />
            </Card>
        </Col>
    )
}
import React, { useCallback, useLayoutEffect, useState } from 'react'
import { Button, Card, Col, InputGroup, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { itemActions } from '../../../_actions'

const TicketsRange = ({ id, defaultValue = 1, exhibition, promo, updateTickets }) => {
    const [value, setValue] = useState(defaultValue)

    const getPriceTotal = useCallback(
        () => value * exhibition.precio * (promo?.porcentaje || 1),
        [value, exhibition?.precio, promo?.porcentaje]
    )

    useLayoutEffect(() => {
        if (value != defaultValue) {
            updateTickets(id, value)
        }
    }, [value, defaultValue])

    return (
        <Card.Footer>
            <Row>
                <Col className='text-end'>
                    <Row>
                        <Col className='me-auto' />
                        <Col className='col-auto px-0 d-none d-md-block'>
                            <div className="mx-2 display-6">
                                <strong>Boletos:</strong>
                            </div>
                        </Col>
                        <Col className='col-auto px-0'>
                            <InputGroup size='lg'>
                                <Button onClick={() => setValue( value === 1 ? 1 : (value - 1) )} disabled={value === 1}>-</Button>
                                <div className="mx-2">
                                    <span className='display-6'>{value}</span>
                                </div>
                                <Button onClick={() => setValue(value + 1)}>+</Button>
                            </InputGroup>
                        </Col>
                    </Row>
                </Col>
                <Col className='text-start display-6'>
                    x <strong>$ {getPriceTotal()} MXN</strong>
                </Col>
            </Row>
        </Card.Footer>
    )
}

const connectedTicketsRange = connect(null, { ...itemActions })(TicketsRange)

export { connectedTicketsRange as TicketsRange }
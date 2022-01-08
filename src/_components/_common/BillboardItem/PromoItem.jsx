import React, { useEffect, useState } from 'react'
import { Badge, Card, Col, Container, Row } from 'react-bootstrap'
import { customerConstants } from '../../../_constants'
import { hasCurrentDayOfWeek, toHumanReadable } from '../../../_helpers/weekdays'
import { CartButton } from './CartButton'

export const PromoItem = ({ id, exhibicion_id, porcentaje, cantidad, vigencia, dias_semana, tipo_de_cliente_id }) => {
    const [discountMessage, setDiscountMessage] = useState('')
    const [weekdaysMessage, setWeekdaysMessage] = useState('')
    const [forToday, setForToday] = useState(false)

    useEffect(() => {
        if (dias_semana) {
            const weekdays = dias_semana.split(',')

            setForToday(hasCurrentDayOfWeek(weekdays))

            setWeekdaysMessage(
                toHumanReadable(weekdays)
            )
        } else {
            setForToday(true)
        }
    }, [dias_semana])

    useEffect(() => setDiscountMessage(`${cantidad} x ${porcentaje * 100}%`), [cantidad, porcentaje])


    return (
        <Card.Footer className='bg-warning'>

            <div className='d-flex flex-row'>
                {!!dias_semana && (
                    <div className='d-flex me-1'>
                        <Badge bg={forToday ? 'success' : 'danger'}>
                            <small>
                                {weekdaysMessage}
                            </small>
                        </Badge>
                    </div>
                )}

                {!!tipo_de_cliente_id && (
                    <div className='d-flex'>
                        <Badge bg='primary'>
                            <small>
                                {customerConstants[tipo_de_cliente_id]}
                            </small>
                        </Badge>
                    </div>
                )}
            </div>

            <Container>

                <Row className="px-2">

                    <Col sm="12" xl="4" className="offset-none offset-xl-4">
                        <Card.Text>
                            <span className="h4">
                                {discountMessage}
                            </span>
                        </Card.Text>
                    </Col>

                    <Col sm="12" xl="4">
                        {forToday && <CartButton id={exhibicion_id} promocion_id={id} variant='dark' label="%" />}
                    </Col>

                </Row>

            </Container>

            {!!vigencia && (
                <div className='d-flex text-end'>
                    <small className="text-dark">
                        Disponible hasta <strong>{vigencia}</strong>
                    </small>
                </div>
            )}

        </Card.Footer>
    )
}
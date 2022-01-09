import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { BottomNavigation } from '../../_common/BottomNavigation'

const Printout = () => {
    return (
        <Container>

            <Row>
                <Col className='text-start'>
                    <h1 className="display-1">Recibo y Boletos</h1>
                </Col>
            </Row>

            <Row>
                <Col className='text-center'>
                    (Sin Implementar)
                </Col>
            </Row>

            <BottomNavigation next={{ label: 'Volver a la Cartelera', to: '/' }} />

        </Container>
    )
}

const connectedPrintout = connect(null, null)(Printout)

export { connectedPrintout as Printout }
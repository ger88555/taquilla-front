import React, { useCallback, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { cartActions } from '../../../_actions'
import { cartService } from '../../../_services'
import { BottomNavigation } from '../../_common/BottomNavigation'
import { PrintCard } from '../../_common/PrintCard'

const Printout = ({ get }) => {
    const { id } = useParams()
    const reload = useCallback(() => get(id), [id])
    useEffect(() => reload(), [])

    return (
        <Container>

            <Row>
                <Col className='text-start'>
                    <h1 className="display-1">Mis Boletos</h1>
                </Col>
            </Row>

            <Row className='my-3 justify-content-around'>
                
                <PrintCard title='Imprime tus boletos' printHandler={async () => await cartService.getTickets(id)} />

                {/* <PrintCard title='Imprime tu recibo' /> */}

            </Row>

            <BottomNavigation next={{ label: 'Volver a la Cartelera', to: '/' }} />

        </Container>
    )
}

const connectedPrintout = connect(state => state.cart, { get: cartActions.get })(Printout)

export { connectedPrintout as Printout }
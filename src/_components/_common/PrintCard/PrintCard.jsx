import React, { useCallback, useState } from 'react'
import { Row, Col, Card, Button, Image } from 'react-bootstrap'
import { connect } from 'react-redux'
import { cartActions } from '../../../_actions'

import download from '../../../_assets/download.svg'
import loading from '../../../_assets/hourglass.png'

const PrintCard = ({ title, printHandler = async () => { } }) => {
    const [printing, setPrinting] = useState(false)

    const clickHandler = useCallback(() => {
        setPrinting(true)

        printHandler().finally(() => setPrinting(false))
    })

    return (
        <Col className='text-center' xs='12' md='6'>
            <Row>
                <Col>
                    <Card className='my-2 my-md-0'>
                        <Card.Header>
                            <Card.Title>
                                <h2 className='display-6'>{title}</h2>
                            </Card.Title>
                        </Card.Header>

                        <Card.Body>
                            <Button size='lg' className='d-block w-100' onClick={clickHandler} disabled={printing}>
                                {printing ? (<span>
                                    <Image src={loading} height={64} style={{ maxHeight: '2.4em' }} /> Imprimiendo...
                                </span>) : (<>
                                    <Image src={download} /> Imprimir
                                </>)}
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </Col>
    )
}

const connectedPrintCard = connect(state => state.cart, { get: cartActions.get })(PrintCard)

export { connectedPrintCard as PrintCard }
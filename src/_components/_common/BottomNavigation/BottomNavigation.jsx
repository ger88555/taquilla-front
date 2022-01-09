import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { Button } from './Button'

export const BottomNavigation = ({ prev = { label: '', to: '', onClick: () => {} }, next = { label: '', to: '', onClick: () => {} } }) => {

    return (
        <Row>
            <Col>
                <Card className='mb-3'>
                    <Card.Footer>
                        <Row>

                            {!!prev?.label && <Button {...prev} variant='secondary' />}

                            <Col />

                            {!!next?.label && <Button {...next} />}

                        </Row>
                    </Card.Footer>
                </Card>
            </Col>
        </Row>
    )
}
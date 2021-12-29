import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { BillboardList } from '../../_common/BillboardList'

export const Billboard = () => {
    return (
        <Container>

            <Row>
                <Col className='text-start'>
                    <h1 className="display-1">Cartelera</h1>
                </Col>
            </Row>

            <Row>
                <Col className='text-center'>
                    <BillboardList />
                </Col>
            </Row>

        </Container>
    )
}
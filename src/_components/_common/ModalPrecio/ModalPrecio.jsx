import React, { useCallback } from 'react'
import { Alert, Button, Col, Container, Modal, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import { customerConstants } from '../../../_constants'
import { connect } from 'react-redux'
import { cartActions } from '../../../_actions'
import { useNavigate } from 'react-router-dom'

const ModalPrecio = ({ exhibition = {}, promo = {}, show = false, onHide = () => {  }, error, add }) => {

    const navigate = useNavigate()

    const getDealTickets = useCallback(() => promo?.cantidad_boletos || 1, [promo?.cantidad_boletos])
    
    const getDealPrice = useCallback(
        () => getDealTickets() * exhibition.precio * (promo?.porcentaje || 1),
        [promo?.cantidad_boletos, exhibition.precio, promo?.porcentaje]
    )

    const submitHandler = useCallback(() => {
        add(exhibition.id, promo?.id)

        navigate('/carrito')
    })

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header>
                <Container>
                    <Row>
                        <Col>
                            <Modal.Title>
                                <h1>{exhibition.nombre}</h1>
                            </Modal.Title>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <span className='text-muted'>Del <strong>{exhibition.desde}</strong> hasta el <strong>{exhibition.hasta}</strong></span>
                        </Col>
                    </Row>

                </Container>
            </Modal.Header>

            {error?.length && (
                <Modal.Body>
                    <Row>
                        <Col>
                            <Alert className='text-center h6' variant='danger'>
                                <strong>Hubo un error:</strong> {error}
                            </Alert>
                        </Col>
                    </Row>
                </Modal.Body>
            )}

            <Modal.Body className={promo?.id ? 'bg-warning' : ''}>
                <Container>
                    {promo?.id && (
                        <Row>
                            <Col>
                                <Alert className='text-center h4' variant='success'>
                                    <strong>Promoción: {customerConstants[promo.tipo_de_cliente_id]} {promo.discount_text}</strong>
                                </Alert>
                            </Col>
                        </Row>
                    )}

                    <Row >
                        <Col md='12'>
                            <Form onSubmit={null} className='d-flex'>
                                <Form.Group >
                                    <Form.Label >{getDealTickets()} boleto(s) x $ </Form.Label>
                                    <Form.Control                                
                                        name='precio'
                                        type='text'
                                        value={getDealPrice()}
                                        onChange={null}
                                        style={{width:'50px'}}>
                                    </Form.Control>MXN
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>

            <Modal.Footer>
                <Button variant='danger' onClick={onHide} className='me-auto'>
                    Cancelar
                </Button>

                <Button variant='success' onClick={submitHandler}>
                    <strong>Editar precio</strong>
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

const connectedPrecioModal = connect(state => ({ error: state.cart.error }), { ...cartActions })(ModalPrecio)

export { connectedPrecioModal as ModalPrecio }
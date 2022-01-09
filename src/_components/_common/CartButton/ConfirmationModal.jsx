import React, { useCallback } from 'react'
import { Alert, Button, Col, Container, Image, Modal, Row } from 'react-bootstrap'
import { customerConstants } from '../../../_constants'
import addCartIcon from '../../../_assets/add-cart.svg'
import { connect } from 'react-redux'
import { cartActions } from '../../../_actions'
import { useNavigate } from 'react-router-dom'

const ConfirmationModal = ({ exhibition = {}, promo = {}, show = false, onHide = () => { }, error, add }) => {
    const navigate = useNavigate()

    const getDealTickets = useCallback(() => promo?.cantidad_boletos || 1, [promo?.cantidad_boletos])
    const getDealPrice = useCallback(
        () => getDealTickets() * exhibition.precio * (promo?.porcentaje || 1),
        [promo?.cantidad_boletos, exhibition.precio, promo?.porcentaje]
    )

    const submitHandler = useCallback(() => {
        (async () => {
            await add(exhibition.id, promo?.id)
    
            navigate('/carrito')
        })()
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

                    <Row>
                        <Col className="text-center display-6">
                            {getDealTickets()} boleto(s) x $ {getDealPrice()} MXN
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>

            <Modal.Footer>
                <Button variant='danger' onClick={onHide} className='me-auto'>
                    Cancelar
                </Button>

                <Button variant='success' onClick={submitHandler}>
                    <strong>Añadir al carrito</strong> <Image src={addCartIcon} />
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

const connectedConfirmationModal = connect(state => ({ error: state.cart.error }), { ...cartActions })(ConfirmationModal)

export { connectedConfirmationModal as ConfirmationModal }
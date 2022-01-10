import React, { 
    // useCallback, 
    useEffect,
    useState} from 'react'
import { Alert, Button, Col, Container, Modal, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
// import { customerConstants } from '../../../_constants'
import { useDispatch } from 'react-redux'
// import { Navigate, useNavigate } from 'react-router-dom'
import { exhibitionActions } from '../../../_actions'
import { useNavigate } from 'react-router-dom'

export const ModalEditPrecio = ({ exhibition = {}, onHide = () => {  }, show = false, error}) => {
    const [precio, setPrecio] = useState(exhibition.precio)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const editPrice = () =>  useEffect(
        dispatch(exhibitionActions.editPrice(exhibition.id, {precio})), [precio])
    // const getDealPrice = useCallback(
    //     () => getDealTickets() * exhibition.precio * (promo?.porcentaje || 1),
    //     [promo?.cantidad_boletos, exhibition.precio, promo?.porcentaje]
    // )

    const submitHandler = () => {
        editPrice()
        navigate('/admin')
    }

    return (
        <Modal show={show}>
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

            <Modal.Body>
                <Container>
                    <Row >
                        <Col md='12'>
                            <Form className='d-flex'>
                                <Form.Group >
                                    <Form.Label >Precio $ </Form.Label>
                                    <input                                
                                        name='precio'
                                        type='number'
                                        value={precio}
                                        onChange={e => setPrecio(e.target.value)}
                                        style={{width:'80px', marginLeft:'5px', marginRight:'5px' }}>
                                    </input>MXN
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


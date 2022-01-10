import React, { 
    // useCallback, 
    useEffect,
    useState} from 'react'
import { Alert, Button, Col, Container, Modal, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
// import { customerConstants } from '../../../_constants'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { exhibitionActions } from '../../../_actions'


export const ModalNewExhibicion = ({ onHide = () => {  }, show = false, error}) => {
    const initialForm = {
        nombreEx:'',
        descripcion:'',
        fechaInicial:'',
        fechaFinal:'',
        precio:''
    }
    const [form, setForm] = useState(initialForm)

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const addExh = () =>  useEffect(
        dispatch(exhibitionActions.addNewExhibicion({form})), [form])
    
    // const getDealPrice = useCallback(
    //     () => getDealTickets() * exhibition.precio * (promo?.porcentaje || 1),
    //     [promo?.cantidad_boletos, exhibition.precio, promo?.porcentaje]
    // )

    const submitHandler = () => {
        addExh()
        navigate('/admin')
    }

    return (
        <Modal show={show}>
            <Form>
                <Modal.Header>
                    <Container>
                    
                        <Row>
                            <Col>
                                <Modal.Title>
                                    <h1>Nueva Exhibición</h1>
                                </Modal.Title>
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
                        <Row>
                            <Col>
                                <Form.Label>Nombre de la exhibición</Form.Label>
                                <Form.Control
                                    name='nombreEx'
                                    type='text'
                                    value={form.nombreEx}
                                    onChange={handleChange}
                                />
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Label>Descripción</Form.Label>
                                <Form.Control 
                                    name='descripcion'
                                    type='text'
                                    value={form.descripcion}
                                    onChange={handleChange}
                                />
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Label>Fecha inicial</Form.Label>
                                <Form.Control 
                                    name='fechaInicial'
                                    type='date'
                                    value={form.fechaInicial}
                                    onChange={handleChange}
                                />
                            </Col>

                            <Col>
                                <Form.Label>Fecha final</Form.Label>
                                <Form.Control 
                                    name='fechaFinal'
                                    type='date'
                                    value={form.fechaFinal}
                                    onChange={handleChange}
                                />
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Label>Precio</Form.Label>
                                <Form.Control 
                                    name='precio'
                                    type='number'
                                    value={form.precio}
                                    onChange={handleChange}
                                />
                            </Col>
                        </Row>

                    </Container>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant='danger' onClick={onHide} className='me-auto'>
                    Cancelar
                    </Button>

                    <Button variant='success' onClick={submitHandler}>
                        <strong>Confirmar</strong>
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}


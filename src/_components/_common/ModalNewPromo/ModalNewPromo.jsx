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


export const ModalNewPromo = ({ onHide = () => {  }, show = false, error}) => {
    const initialForm = {
        vigencia:'',
        dscto:'',

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
                                    <h1>Nueva promoción</h1>
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
                                <Form.Label>Descuento %</Form.Label>
                                <Form.Control
                                    name='dscto'
                                    type='number'
                                    value={form.dscto}
                                    onChange={handleChange}
                                />
                            </Col>
                            <Col>
                                <Form.Label>Vigencia </Form.Label>
                                <Form.Control 
                                    name='vigencia'
                                    type='date'
                                    value={form.vigencia}
                                    onChange={handleChange}
                                />
                            </Col>

                        </Row>

                        <Row>
                            <Col>
                                <Form.Label>Dias vigentes </Form.Label>
                                <Form.Control 
                                    name='vigencia'
                                    type='text'
                                    value={form.vigencia}
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


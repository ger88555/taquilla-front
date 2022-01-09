import React, { useCallback, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'

import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { userActions } from '../../../_actions'
import { Alert, Card, Col, Row } from 'react-bootstrap'


const LoginForm = ({ error, loggedIn, login }) => {
    const navigate = useNavigate()

    /**
     * Redirect authenticated users
     */
    useEffect(() => { loggedIn && navigate('/') }, [loggedIn])

    const [credentials, setCredentials] = useState({
        usuario: '',
        password: ''
    })

    const { usuario, password } = credentials

    const handleChange = (e) => {
        const { name, value } = e.target
        setCredentials(credentials => ({ ...credentials, [name]: value }))
    }

    const handleSubmit = useCallback((e) => {
        e.preventDefault()

        if (usuario && password) {
            login(usuario, password)
        }
    }, [usuario, password])

    return (
        <div className='Login' style={{ marginTop: '10%' }}>
            <Row className='flex-row justify-content-center'>
                <Col md='3'>
                    <Card className='p-4'>
                        <Card.Body>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className='mb-3' controlId='email' >
                                    <Form.Label>Usuario</Form.Label>
                                    <Form.Control
                                        autoFocus
                                        placeholder='Escriba su nombre de usuario aquí.'
                                        name='usuario'
                                        type='text'
                                        value={usuario}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group className='mb-3' controlId='password'>
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control
                                        name='password'
                                        placeholder='Contraseña'
                                        type='password'
                                        value={password}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                {error && (
                                    <Row>
                                        <Col>
                                            <Alert variant='danger'>{error}</Alert>
                                        </Col>
                                    </Row>
                                )}
                                <Row>
                                    <Col>
                                        <Button variant="primary" type='submit' className='d-grip gap-2 col-6 mx-auto'>
                                            Iniciar Sesión
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

const connectedLoginForm = connect(state => state.authentication, { ...userActions })(LoginForm)

export { connectedLoginForm as LoginForm }
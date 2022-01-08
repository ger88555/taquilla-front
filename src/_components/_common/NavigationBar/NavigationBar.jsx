import React from 'react'

import { 
    Navbar,
    Nav,
    Container,
    Form,
    Button,
} from 'react-bootstrap'
        
import { 
    useSelector, 
    useDispatch,
} from 'react-redux'

import {useNavigate} from 'react-router-dom'
import { userActions } from '../../../_actions'

function NavigationBar(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const loggedIn = useSelector(state => state.authentication.loggedIn)
    const label = loggedIn ? 'Cerrar Sesión': 'Iniciar Sesión'
    const sessionAction = 
        loggedIn ? 
            () => dispatch(userActions.logout()):
            () => navigate('/login')
    console.log(sessionAction)

    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Museo ITH</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Cartelera</Nav.Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="me-2">
                        <Nav.Link href="/carrito">Carrito</Nav.Link>
                    </Nav>
                    <Form onSubmit={sessionAction}>
                        <Button 
                            variant="primary" 
                            size='lg' 
                            type='submit'>
                            {label}
                        </Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export {NavigationBar}

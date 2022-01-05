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
    const {loggedIn, user} = useSelector(state => state.authentication)
    const roleID = loggedIn ? user.rol_id : 0
    const label = loggedIn ? 'Cerrar Sesión': 'Iniciar Sesión'
    const sessionAction = 
        loggedIn ? 
            () => dispatch(userActions.logout()):
            () => navigate('/login')
    console.log(sessionAction)

    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Museo ITH</Navbar.Brand>

                {roleID === 2 &&
                    <Nav className="me-auto">
                        <Nav.Link href="/admin">Cartelera</Nav.Link>
                    </Nav>
                } 
                {roleID === 1 &&
                    <Nav className="me-auto">
                        <Nav.Link href="/worker">Exhibiciones</Nav.Link>
                    </Nav>
                } 

                <Navbar.Collapse className="justify-content-end">
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

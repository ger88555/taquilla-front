import React from 'react'

import { 
    Navbar,
    Nav,
    Container,
    Form,
    Button,
    Col,
    Image
} from 'react-bootstrap'
        
import { 
    useSelector, 
    useDispatch,
} from 'react-redux'

import {useNavigate} from 'react-router-dom'
import { userActions } from '../../../_actions'
import shopcart from '../../../_assets/shopcart.svg'

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
                    <Col xs sm={2} style={{ marginLeft:'-55px', marginRight:'-70px' }} >
                        <a href='/carrito'> 
                            <Image src={shopcart} />
                        </a>
                    </Col>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export {NavigationBar}

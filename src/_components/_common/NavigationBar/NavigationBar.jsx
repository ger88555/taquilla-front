import React, { useCallback } from 'react'

import {
    Navbar,
    Nav,
    Container,
    Col,
    Image
} from 'react-bootstrap'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import shopcart from '../../../_assets/shopcart.svg'
import { AuthButton } from '../AuthButton'

function NavigationBar() {
    const { loggedIn, user } = useSelector(state => state.authentication)
    const getRoleId = useCallback(() => loggedIn ? user.rol_id : 0, [loggedIn])
    const navigate = useNavigate()

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand onClick={() => navigate('/')}>Museo ITH</Navbar.Brand>

                {getRoleId() === 2 &&
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => navigate('/admin')}>Administración de Exhibiciones</Nav.Link>
                    </Nav>
                }
                {getRoleId() === 1 &&
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => navigate('/worker')}>Exhibiciones</Nav.Link>
                    </Nav>
                }

                <Navbar.Collapse className="justify-content-end">

                    <AuthButton />

                    <Col xs sm={2} style={{ marginLeft: '-55px', marginRight: '-70px' }} >
                        <a onClick={() => navigate('/carrito')}>
                            <Image src={shopcart} />
                        </a>
                    </Col>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export { NavigationBar }

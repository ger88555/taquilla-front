import React from 'react'
import Form from 'react-bootstrap/Form'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'

import {useNavigate} from 'react-router-dom'
/* import { connect } from 'react-redux' */
import { userActions } from '../../../_actions'
import {
    /* useStore, */
    useDispatch,
} from 'react-redux'
import { Card, Col, Row } from 'react-bootstrap'

/* class LoginForm extends React.Component { */
/*     constructor(props){ */
/*         super(props) */
/*         this.state = { */
/*             usuario: '', */
/*             password: '', */
/*             submited: false, */
/*         } */
/*         this.handleSubmit = this.handleSubmit.bind(this) */
/*         this.handleChange = this.handleChange.bind(this) */
/*     } */

/*     handleChange(event){ */
/*         event.preventDefault() */
/*         const target = event.target */
/*         this.setState({ */
/*             [target.name]: target.value, */ 
/*         }) */
/*     } */

/*     handleSubmit(event){ */
/*         event.preventDefault() */
        
/*         this.setState({value: event.target.value}) */
/*         this.setState({submited: true}) */
/*         const {usuario, password} =  this.state */ 
/*         this.props.login(usuario, password) */
/*     } */ 

/*     //TODO: Validate form */
/*     validateForm() { */
/*         return 0 */
/*     } */

/*     render() { */
/*         return( */
/*             <div className='Login'> */
/*                 <Form onSubmit={this.handleSubmit}> */
/*                     <Form.Group className='mb-3' controlId='email'> */
/*                         <Form.Label>Usuario</Form.Label> */
/*                         <Form.Control */
/*                             autoFocus */
/*                             placeholder='Escriba su nombre de usuario aquí.' */
/*                             name='usuario' */
/*                             type='text' */
/*                             value={this.state.usuario} */
/*                             onChange={this.handleChange} */
/*                         /> */
/*                     </Form.Group> */
/*                     <Form.Group className='mb-3' controlId='password'> */
/*                         <Form.Label>Contraseña</Form.Label> */
/*                         <Form.Control */
/*                             name='password' */ 
/*                             placeholder='Contraseña' */
/*                             type='password' */
/*                             value={this.state.password} */
/*                             onChange={this.handleChange} */
/*                         /> */
/*                     </Form.Group> */
/*                     <Button variant="primary" size='lg' type='submit'> */
/*                         Iniciar Sesión */
/*                     </Button> */
/*                 </Form> */                       
/*             </div> */
/*         ) */
            
/*     } */
/* } */

/* function mapStateToProps(state){ */
/*     const { loggingIn } = state.authentication */
/*     return { loggingIn } */
/* } */

/* const actionCreators = { */
/*     login: userActions.login, */
/*     logout: userActions.logout */
/* } */

/* const connectedLoginForm = connect(mapStateToProps, actionCreators)(LoginForm) */

/* export {connectedLoginForm as LoginForm} */

function LoginForm(){
    const [credentials, setCredentials] = useState({
        usuario: '', 
        password: ''
    })

    /* let location = useLocation(); */
    
    const navigate = useNavigate()
    /* const [submitted, setSubmitted] = useState(false) */

    /* const loggingIn = useSelector(state => state) */

    const dispatch = useDispatch()
    const { usuario, password } = credentials

    function handleChange(e){
        const {name, value} = e.target
        setCredentials(credentials => ({...credentials, [name]: value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        /* setSubmitted(true) */

        if (usuario && password){
            dispatch(userActions.login(usuario, password))
        }

        navigate('/')
    }

    return(
        <div className='Login' style={{marginTop:'10%'}}>
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

export {LoginForm}
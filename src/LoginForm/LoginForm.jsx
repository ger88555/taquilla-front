import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'
import { userActions } from '../_actions'

class LoginForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            usuario: '',
            password: '',
            submited: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }


    handleChange(event){
        event.preventDefault()
        const target = event.target
        this.setState({
            [target.name]: target.value, 
        })
    }

    handleSubmit(event){
        event.preventDefault()
        this.setState({value: event.target.value})
        this.setState({submited: true})
        const {usuario, password} =  this.state 
        this.props.login(usuario, password)
    } 

    //TODO: Validate form
    validateForm() {
        return 0
    }

    render() {
        return(
            <div className='Login'>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className='mb-3' controlId='email'>
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control
                            autoFocus
                            placeholder='Escriba su nombre de usuario aquí.'
                            name='usuario'
                            type='text'
                            value={this.state.usuario}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='password'>
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control
                            name='password' 
                            placeholder='Contraseña'
                            type='password'
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Button variant="primary" size='lg' type='submit'>
                        Iniciar Sesión
                    </Button>
                </Form>                       
            </div>
        )
            
    }
}

function mapStateToProps(state){
    const { loggingIn } = state.authentication
    return { loggingIn }
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
}

const connectedLoginForm = connect(mapStateToProps, actionCreators)(LoginForm)

export {connectedLoginForm as LoginForm}
import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class LoginForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            usuario: '',
            password: '',
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
        const state = this.state
        console.log(state)
        fetch('http://localhost:3000/users/login', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(state),
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.error(error))
    } 
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
                        Login
                    </Button>
                </Form>                       
            </div>
        )
            
    }
}

export default LoginForm

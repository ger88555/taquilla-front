import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class LoginForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
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
    }
    
    validateForm() {
        return 0

    }

    render() {
        return(
            <div className='Login'>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group size='lg' controlId='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            autoFocus
                            name='email'
                            type='text'
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group size='lg' controlId='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            name='password' 
                            type='password'
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Button block size='lg' type='submit'>
                        Login
                    </Button>
                </Form>                       
            </div>
        )
            
    }
}

export default LoginForm
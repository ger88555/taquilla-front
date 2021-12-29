import React from 'react'
import { Alert, Button } from 'react-bootstrap'

export const Error = ({ onReload = null, children }) => (
    <Alert variant='danger' className='lead'>
        <strong className='font-weight-bold'>Error: </strong>{children}
        <br/>
        {onReload && <Button onClick={onReload} size='lg' className='mt-3' data-testid="reload-button" >Reintentar</Button>}
    </Alert>
)
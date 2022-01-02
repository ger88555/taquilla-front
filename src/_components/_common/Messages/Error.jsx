import React from 'react'
import { Alert, Button, Image } from 'react-bootstrap'
import empty from '../../../_assets/empty.svg'
import retry from '../../../_assets/retry.svg'

export const Error = ({ onReload = null, children }) => (
    <Alert variant='danger' className='lead' style={{ fontSize: '2em' }}>
        <strong>No se pudo conseguir la cartelera.</strong>
        <br/>
        <Image src={empty} style={{ opacity: '50%', maxHeight: '40vh' }} />
        <br/>
        <strong>Error: </strong>{children}
        <br/>
        {onReload && <Button onClick={onReload} size='lg' className='mt-3' data-testid="reload-button">
            <Image src={retry} /> Reintentar
        </Button>}
    </Alert>
)
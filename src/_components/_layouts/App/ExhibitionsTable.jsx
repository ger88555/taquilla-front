import React, { useCallback, useEffect } from 'react'
import { exhibitionActions } from '../../../_actions'

import {Table} from '../../_common/Table'
import { 
    useSelector,
    useDispatch,
} from 'react-redux'
// import { ModalEditPrecio } from '../../_common/ModalEditPrecio'
import { PrecioEditButton } from '../../_common/ModalEditPrecio/PrecioEditButton'
import { Button, Col, Row, Image, Container } from 'react-bootstrap'
import retry from '../../../_assets/retry.svg'
export const ExhibitionsTable = () => {
    //id  | nombre                          | descripcion | desde      | hasta      | precio
    const dispatch = useDispatch()
    const reload = useCallback(() => dispatch(exhibitionActions.list()), [])
    const rows = useSelector(state => state.exhibitions.data)
    useEffect(() => {
        reload()
    }, [])
    
    const columns = React.useMemo(
        () => [
            {
                Header: 'Todas las Exhibiciones',
                columns: [
                    {
                        Header: 'ID',
                        accessor: 'id',
                    },
                    {
                        Header: 'Nombre',
                        accessor: 'nombre',
                    },
                    {
                        Header: 'Descripción',
                        accessor: 'descripcion',
                    },
                    {
                        Header: 'Desde',
                        accessor: 'desde',
                    },
                    {
                        Header: 'Hasta',
                        accessor: 'hasta'
                    },
                    {
                        Header: 'Precio',
                        accessor: 'precio'
                    },
      
                ],
            },
            {
                Header: 'Editar',
                accessor: 'actions',
                Cell: (props) => {
                    const exhibitionFields = props.row.original
                
                    return (
                        <>
                            <PrecioEditButton
                                exhibition={exhibitionFields}
                            />
                        </>
                    )
                },
            }
        ],
        []
    )

    return (
        <>
            <Container>
                <Row>
                    
                    <Col>
                        <h1>Exhibiciones</h1>
                    </Col>
                    
                    <Col sm="auto">
                        <Button onClick={reload} size='lg' className='my-1' title='Recargar listado.'>
                            <Image src={retry} style={{ height: '1.2em' }} /> Recargar
                        </Button>
                    </Col>

                </Row>
            </Container>
            <Table columns={columns} data={rows} />
        </>
        
    )
    
}

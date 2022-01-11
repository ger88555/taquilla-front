import React, { useCallback, useEffect } from 'react'
import { exhibitionActions } from '../../../_actions'

import {Table} from '../../_common/Table'
import { 
    useSelector,
    useDispatch,
} from 'react-redux'
// import { ModalEditPrecio } from '../../_common/ModalEditPrecio'
import { PrecioEditButton } from '../../_common/ModalEditPrecio/PrecioEditButton'
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
                Header: 'Exhibiciones',
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

    const data = React.useMemo(() => rows, [])

    return (
        <>
            <Table columns={columns} data={data} />
        </>
        
    )
    
}

import React, { useCallback, useEffect } from 'react'
import { promoActions } from '../../../_actions'
import { NewPromoButton } from '../../_common/ModalNewPromo/NewPromoButton'

import {Table} from '../../_common/Table'
import { 
    useSelector,
    useDispatch,
} from 'react-redux'
// import { ModalEditPrecio } from '../../_common/ModalEditPrecio'
// import { PrecioEditButton } from '../../_common/ModalEditPrecio/PrecioEditButton'
// import { NewExhibicionButton } from '../../_common/ModalNewExhibicion/NewExhibicionButton'
export const PromotionsTable = () => {
    //id  | nombre                          | descripcion | desde      | hasta      | precio
    const dispatch = useDispatch()
    const reload = useCallback(() => dispatch(promoActions.list()), [])
    const rows = useSelector(state => state.promos.data)
    useEffect(() => {
        reload()
    }, [])
    
    const columns = React.useMemo(
        () => [
            {
                Header: 'Promociones',
                columns: [
                    {
                        Header: 'ID',
                        accessor: 'id',
                    },
                    {
                        Header: 'Exhibición ID',
                        accessor: 'exhibicion_id',
                    },
                    {
                        Header: 'Porcentaje',
                        accessor: 'porcentaje',
                    },
                    {
                        Header: 'Vigencia',
                        accessor: 'desde',
                    },
                    {
                        Header: 'Días',
                        accessor: 'dias_semana'
                    },
                    {
                        Header: 'Tipo de Clieente',
                        accessor: 'tipo_de_cliente_id'
                    },
      
                ],
            },

        ],
        []
    )

    const data = React.useMemo(() => rows, [])

    return (
        <>
            <NewPromoButton/>
            <Table columns={columns} data={data}/>

            {/* <NewExhibicionButton /> */}
        </>
        
    )
    
}

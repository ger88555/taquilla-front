import React, { useCallback, useEffect } from 'react'
import { CardGroup } from 'react-bootstrap'
import { connect } from 'react-redux'
import { exhibitionActions } from '../../../_actions'
import { BillboardItem } from '../BillboardItem'
import { Error, Loading } from '../Messages'

const BillboardList = ({ data = [], loading, error, list }) => {

    const reload = useCallback(() => list({ available: true }), [])

    useEffect(() => {
        reload()
    }, [])

    if (error) {
        return <Error onReload={reload}>{error}</Error>
    }

    if (loading) {
        return <Loading />
    }

    return (
        <CardGroup>
            {data.map(BillboardItem)}
        </CardGroup>        
    )
}

const connectedBillboardList = connect( (state) => (state.exhibitions), { ...exhibitionActions } )(BillboardList)

export {connectedBillboardList as BillboardList}
import React from 'react'
import { Card } from 'react-bootstrap'
import { PromoItem } from './PromoItem'

export const PromoList = ({ exhibition, data = [] }) => {

    if (!data.length) return null

    return (
        <>
            <Card.Footer className='text-start'>
                <strong>Promociones:</strong>
            </Card.Footer>

            {data.map((p, i) => <PromoItem key={i} {...p} exhibition={exhibition} />)}
        </>
    )
}
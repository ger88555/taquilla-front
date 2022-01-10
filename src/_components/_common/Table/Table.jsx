import React from 'react'
import BTable from 'react-bootstrap/Table'
import { useTable } from 'react-table'

function Table({ columns, data }) {
    const { getTableProps, headerGroups, rows, prepareRow } = useTable({
        columns,
        data,
    })

    return (
        <BTable striped bordered hover size='sm' {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr key={headerGroup} {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th key={column} {...column.getHeaderProps()}>
                                {column.render('Header')}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody>
                {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                        <tr key={i} {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return (
                                    <td key={cell} {...cell.getCellProps()}>
                                        {cell.render('Cell')}
                                    </td>
                                )
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </BTable>
    )
}
export { Table }

import { Column, TableOptions, useTable } from "react-table"

function TableHOC<T extends object>(columns:Column<T>[], data:T[], containerClassname: string, heading: string) {
    return function HOC() {

        const option:TableOptions<T> = {
            columns, data
        }
        const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable(option);

        return <div className={containerClassname}>
            <h2 className="heading">{heading}</h2>

            <table className="table" {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map(column => (
                                        <th {...column.getHeaderProps()}>
                                            {column.render("Header")}
                                        </th>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        rows.map(row => {
                            prepareRow(row);

                            return <tr {...row.getRowProps()}>
                                {
                                    row.cells.map(cell => (
                                        <td {...cell.getCellProps()}>
                                            {cell.render("Cell")}
                                        </td>
                                    ))
                                }
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    };
};

export default TableHOC

const TableHeader = ({ columns, sortColumn }) => {
    return (
        <thead>
            <tr className="">
                {
                    columns.map( column => <th>{column.label} { sortColumn.path ===column.path ? sortColumn.order ==='asc' ? <i className="bi bi-sort-down"> </i> : <i className="bi bi-sort-up"></i> : null }</th> )
                }
            </tr>
        </thead>
    )
}

export default TableHeader;
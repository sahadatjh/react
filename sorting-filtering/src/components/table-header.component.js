const TableHeader = ({ columns, onSort, sortColumn }) => {

    const handleSort = (path) => {
        if (sortColumn.path===path) {
            if (sortColumn.order === 'asc') {
                onSort({path, order:'desc'})
            } else {
                onSort({path, order:'asc'})
            }
        } else {
            onSort({path, order:'asc'})
        }
    }

    return (
        <thead>
            <tr className="">
                {
                    columns.map( column => <th onClick={()=>handleSort(column.path)}>{column.label} { sortColumn.path ===column.path ? (sortColumn.order ==='asc' ? <i className="bi bi-sort-down"> </i> : <i className="bi bi-sort-up"></i> ): null }</th> )
                }
            </tr>
        </thead>
    )
}

export default TableHeader;
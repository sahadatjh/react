const TableHeader = ({ columns }) => {
    return (
        <thead>
            <tr className="bg-secondary">
                {
                    columns.map( column => <th>{column.label}</th> )
                }
            </tr>
        </thead>
    )
}

export default TableHeader;
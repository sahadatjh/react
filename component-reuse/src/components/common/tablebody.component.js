const TableBody = ({ columns, info: rows }) => {
    return ( 
        <tbody>
            {
                rows.map( row => (
                    <tr>
                        {
                            columns.map( column => column.content(row, column.path) )
                        }
                    </tr>
                ))
            }
        </tbody>
     );
}
 
export default TableBody;
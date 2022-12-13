const TableBody = ({ columns, info: rows }) => {
    return ( 
        <tbody>
            {
                rows.map( row => (
                    <tr>
                        {
                            columns.map( column => (
                                <td>{column.content(row[column.path])}</td>
                            ))
                        }
                    </tr>
                ))
            }
        </tbody>
     );
}
 
export default TableBody;
const TableHeader = ({ columns }) => {
    return ( 
        <thead>
            <tr>
                {
                    columns.map( item => <th>{item.label}</th> )
                }
            </tr>
        </thead>
     );
}
 
export default TableHeader;
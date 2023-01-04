import TableBody from './table-body.component';
import TableHeader from './table-header.component';

const Table = ({ movies, columns, onSort, sortColumn }) => {
    return ( 
        <div className='table-responsive'>
            <table className='table table-striped table-hoer table-bordered'>
                <TableHeader columns={columns} onSort={onSort} sortColumn={sortColumn}/>
                <TableBody movies={movies} columns={columns}/>
            </table>
        </div>
    );
}
 
export default Table;
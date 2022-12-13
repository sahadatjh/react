import TableBody from "./tablebody.component";
import TableHeader from "./tableheader.component";

const Table = ({ columns, info }) => {
    return ( 
        <table className="table table-bordered table-striped table-hover">
            <TableHeader columns={ columns } />
            <TableBody columns={ columns } info={ info } /> 
        </table>
     );
}
 
export default Table;
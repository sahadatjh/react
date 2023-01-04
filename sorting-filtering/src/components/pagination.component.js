import _ from 'lodash';

const Pagination = ({ totalItems, pageCount, activePage, ClickedPage }) => {

    const totalPages = Math.ceil(totalItems/pageCount);
    const pages = _.range(1, totalPages, 1);

    return ( 
        <nav aria-label="...">
            <ul className="pagination">
                <li className="page-item disabled">
                    <span className="page-link">Previous</span>
                </li>
                {
                    pages.map(page=>(
                        <li className={activePage===page?'page-item active':'page-item'} onClick={ ()=>ClickedPage(page) }>
                            <span className="page-link">{page}</span>
                        </li>
                    ))
                }
                <li className="page-item">
                    <a className="page-link">Next</a>
                </li>
            </ul>
        </nav>
     );
}
 
export default Pagination;
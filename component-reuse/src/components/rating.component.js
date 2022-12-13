const Rating = ({ isRated }) => {
    return ( <i className={ isRated ? 'bi bi-star-fill' : 'bi bi-star'}></i> );
}
 
export default Rating;
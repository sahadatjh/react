const Dislike = ({ info, handleDislike }) => {
    return ( 
        <span className="h3" title={info.dislike ? "Disliked" : "Dislike"}>
            <i 
                className={ info.dislike ? 'bi bi-hand-thumbs-down-fill' : 'bi bi-hand-thumbs-down'}
                onClick={ () => handleDislike(info.id) }
            ></i>
        </span>
     );
}
 
export default Dislike;
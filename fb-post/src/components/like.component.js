const Like = ({ info, handleLike }) => {
    return (  
        <span className="h3 mx-2" title={info.like ? "Liked" : "Like"}>
            <i 
                className={ info.like ? 'bi bi-hand-thumbs-up-fill' : 'bi bi-hand-thumbs-up'}
                onClick={ () => handleLike(info.id) }
            ></i>
        </span>
     );
}
 
export default Like;
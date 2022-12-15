const Like = ({ info, handleToggleClick }) => {
    return (  
        <span className="h3" title={info.like ? "Liked" : "Like"}>
            <i 
                className={ info.like ? 'bi bi-hand-thumbs-up-fill' : 'bi bi-hand-thumbs-up'}
                onClick={ () => handleToggleClick(info.id) }
            ></i>
        </span>
     );
}
 
export default Like;
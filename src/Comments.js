import Comment from "./Comment";
import Form from "./Forms";
const Comments=(props)=>{
   // console.log(props)
    return (<div className="wraper">
        <div className="comment-con">
            {
                props.comments.map(comment=><Comment onLike={props.onLike} onReply={props.onReply} onEdit={props.onEdit} key={comment.id} onDelete={props.onDelete} auth={props.auth} commentC={comment}/>)
            }
       
       
      </div>
    <Form formCon={props.formCon} formMgt={props.formMgt} onAdd={props.onAdd} auth={props.auth} />
    </div>
)}
export default Comments;
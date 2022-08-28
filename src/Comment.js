import Replies from "./Replies";
import plus from './images/icon-plus.svg'
import minus from './images/icon-minus.svg'
const Comment =(props)=>{
 
    return(
        <div>
        <div className="comment-wraper">
        <div className="like-wraper">
          <div onClick={()=>props.onLike(props.commentC.id,"inc")}> <img src={plus} alt=""/></div>
          <div style={{color: "hsl(238, 40%, 52%)",fontWeight:500}}>{props.commentC.score}</div>
          <div onClick={()=>props.onLike(props.commentC.id,"s")}><img src={minus} alt=""/></div>
        </div>
        <div className="content-wraper">
          <div className="top">
            <span className="dp">
              <span className="pic">
                <img src={props.commentC.user.image.png} alt=""/>
              </span>
              <b>{props.commentC.user.username}</b>
              <span className='created'>{props.commentC.createdAt}</span>
            </span>
            <span style={{display:"flex",gap:"0.3rem",alignItems:"center"}} className="">
            {props.auth.username ===props.commentC.user.username&&<span style={{display:"flex",gap:"0.3rem",alignItems:"center"}} onClick={()=>props.onDelete(props.commentC.id)} className="del"><svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" fill="currentColor"/></svg>
              Delete</span>}
      <a className="destop-reply" href="#form">
            <span style={{display:"flex",gap:"0.3rem",alignItems:"center"}}  onClick={()=>props.onReply(props.commentC.id)} className="rpy">
              <svg  className="s" width="14" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" fill="currentColor"/></svg>
              <small className="s">reply</small>
            </span>
            </a>
            </span>
          </div>
          <div className="comment-body">
            <p>{props.commentC.content}</p>
          </div>
  
          <div className="mobile-l-r">
            <div className="mobi-like">
              <div onClick={()=>props.onLike(props.commentC.id,"inc")}> <img src={plus} alt=""/></div>
              <div style={{color: "hsl(238, 40%, 52%)",fontWeight:500}}>{props.commentC.score}</div>
              <div onClick={()=>props.onLike(props.commentC.id,"s")}><img src={minus} alt=""/></div>
            </div>
<a href="#form">
            <span onClick={()=>props.onReply(props.commentC.id)} className="mobile-rpy">
              <svg className="s" width="14" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" fill="currentColor"/></svg>
              <small className="s">reply</small>
            </span>
            </a>
          </div>
      
        </div>
      </div>
      <div className="reply-con my-2">
        {props.commentC.replies.map(reply=><Replies onDelete={props.onDelete} parent={props.commentC.id} onLike={props.onLike} onEdit={props.onEdit} onReply={props.onReply} auth={props.auth} key={reply.id} replies={reply}/>)}
      </div>
      
        </div>
    )
}
export default Comment;
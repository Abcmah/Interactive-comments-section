const Form =(props)=>{
  function formSy(){
    if(props.formCon.replyMode){
      return {textIndent:"7rem"}
    }
  }
  function getID(){
    return (Math.floor(Math.random()*20)+1)
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!props.replyMode&&!props.editMode){

      let newComment={
        id:getID(),
        content:e.target.form.value,
        createdAt:"1 minute ago",
        score:0,
        user:{
          image:{
            png:props.auth.image.png
          },
          username:props.auth.username
        },
        replies:[]
      }
      props.onAdd(newComment);
    }
    if(props.formCon.replyMode){
      let reply={
        id:getID(),
        content:e.target.form.value,
        createdAt:"1 minute ago",
        replyingTo:props.formCon.replyingTo,
        score:0,
        user:{
          image:{

            png:props.auth.image.png,
          },
          username:props.auth.username
        }

      }
      props.onAdd(reply);
    }
   if(props.formCon.editMode){
    let edit={
      content:e.target.form.value,
      user:{
        image:{

          png:props.auth.image.png,
        },
        username:props.auth.username
      }

    }
    props.onAdd(edit);
   }
  }
  return(
      
          <form onSubmit={handleSubmit}  className="form-wraper">
        <span className="dp">
           <span className="pic">
              <img src={props.auth.image.png} alt=""/>
            </span>
        </span>
        <span style={{position:"relative",width:"100%"}}>
        {props.formCon.replyMode&&<span className="replyName" style={{position:"absolute"}}>@{props.formCon.replyingTo}</span>}
        <textarea style={formSy()} id="form" onChange={(e)=>props.formMgt((pre)=>({...pre,content:e.target.value}))} placeholder="add a comment" value={props.formCon.content}className="form-control" name="form" cols="30" rows="3">
          
        </textarea>
        </span>
        <span><button style={{backgroundColor:"hsl(238, 40%, 52%)"}} className="btn btn-primary">{props.formCon.btnName}</button></span>
        </form>
    )
}
export default Form;
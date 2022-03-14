import "./buttons.scss";
import { useContext } from "react";
import { PostContext } from "../App";

export function ButtonPrimary({text}) {
  return (
    <div className="button-wrapper">
      <input type="submit" className="button-primary" value={text}/>
    </div>
  );
}

export function ButtonSecondary({index, post, text, feedback, setFeedback}) {
    const { savePostData,database, setDatabase } = useContext(PostContext);

  function closeButton(){
    console.log(post);
    post.feedback = text; 
    const arr = [...database]
    arr[index] = post;
    savePostData(arr)
    setDatabase(arr)
    setTimeout(()=>setFeedback(false),1000)
  }
  return (
    <div className="button-wrapper">
      <input type="button" className="button-secondary" value={text} onClick={closeButton} />
    </div>
  );
}

export function SmallButton({post, text, setFeedback}){
  function feedbackClick(){
  setFeedback(true)
}
console.log(post?.feedback);
  return (
    <div className="button-container">
      <button className="button-small" onClick={feedbackClick}>
        {post? post.feedback : "Feedback"}
      </button>
    </div>
  );
}
export function ButtonMenu({text}){

  return (
    <div className="button-container">
      <button className="button-small">
        {text}
      </button>
    </div>
  );
}


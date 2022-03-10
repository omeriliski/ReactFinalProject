import { useContext } from "react";
import { PostContext } from "../App";
import VotingUp from "./img/votingUp.svg";
import VotingDown from "./img/votingDown.svg";
import ArrowDown from "./img/arrowDown.svg";
import "./users-interactions.scss";
import { SmallButton } from "./Buttons";
import { ButtonPrimary } from "./Buttons";
import { ButtonSecondary } from "./Buttons";
import { useRef } from "react";


const votingNumber = 4;
const commentsNumber = 9;
const userName = "Johanna";
const userComment =
  "Eos tempora ipsum iusto eius maxime perspiciatis voluptas magnam quidem accusamus repudiandae!.";

export function UsersInteractions() {
  return (
    <div className="interactions-container">
      <div className="voting">
        <img className="voting-up" src={VotingUp} />{" "}
        <a className="typo-extras">{votingNumber}</a>
        <img className="voting-up" src={VotingDown} />{" "}
      </div>
      <div className="feedback">
 <SmallButton text="Feedback"/>
        </div>
    </div>
  );
}

export function UserComments({ post,setShowComments,showComments }) {
  const showAllComments=()=>{
    setShowComments(!showComments)
  }
  return (
    <div className="comments-container">
      <button className="show-comments" onClick={showAllComments}>
        Alle {post?.comments?.length} Kommentare anzeigen{" "}
        <img className="arrow-down" src={ArrowDown}/>
      </button>
    </div>
  );
}

export function ActualComments({ comment }) {
  //question: if there is no comment what happens?
  if(comment==undefined) return <div>no comment</div>;
  else {
    return (
      <div className="actual-comment-container">
        <p className="user-name">{comment.userName}</p>
        <p className="user-comment">{comment.userComment}</p>
        <p className="user-comment yellowtxt">{comment.datum}</p>
      </div>
    );
  }
}

export function NewComment({ post, index }) {
  const { currentUser, database, savePostData } = useContext(PostContext);
  const commentText = useRef();

  const eventHandler = (e) => {
    e.preventDefault();
    const comment = {
      //we should fix email
      userName: currentUser.email,
      userComment: commentText.current.value,
      datum: new Date().toDateString(),
    };

    const tempDatabase = [...database];
    tempDatabase[index].comments.push(comment);
    savePostData(tempDatabase);
  };
  return (
    <div className="interactions-overlay">
      <form onSubmit={eventHandler}>
        <input type="comment-text" ref={commentText} />     
        <input type="submit" value="Submit" className="button-small"/>
      </form>
    </div>
  );
}


export function ShareAFeedback(text){

  return (
    <div className="interactions-overlay">
      <p className="txt-title">Feedback</p>
      <ButtonSecondary text="Super Informativ!" />
      <ButtonSecondary text="Wie Krass!" />
      <ButtonSecondary text="Du erhellst meinen Tag." />
    </div>
  );
}



import { useContext } from "react";
import { PostContext } from "../App";
import VotingUp from "./img/votingUp.svg";
import VotingDown from "./img/votingDown.svg";
import ArrowDown from "./img/arrowDown.svg";
import "./users-interactions.scss";
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
        <button className="button-feedback">Feedback</button>
      </div>
    </div>
  );
}

export function UserComments() {
  return (
    <div className="comments-container">
      <button className="show-comments">
        Alle {commentsNumber} Kommentare anzeigen{" "}
        <img className="arrow-down" src={ArrowDown} />
      </button>
    </div>
  );
}

export function ActualComments() {
  return (
    <div className="actual-comment-container">
      <p className="user-name">{userName}</p>
      <p className="user-comment">{userComment}</p>
      <p className="user-comment yellowtxt">2 days ago</p>
    </div>
  );
}

export function NewComment({ post, index }) {
  const { currentUser, getPostData, savePostData } = useContext(PostContext);
  const commentText = useRef();
  
  const eventHandler = (e) => {
    e.preventDefault();
    const comment = {
      //we should fix email
      userName: currentUser.email,
      userComment: commentText.current.value,
      datum: new Date().toDateString(),
    };
    // postData.find(item=>item==post).comments.push(comment);

    // setPostData(postData);

    // const newPostData = {
    //   userSettings:{
    //         userId:currentUser.uid,
    //         userEmail:currentUser.email
    //     },
    //   postList:postData
    // };
    

    // savePostData(newPostData);
    // const data = database.find(data=>data.postUserId===post.uid);
    // console.log('data :>> ', data);
    // const postFound = data.postList.find(item=>item==post)
    // console.log('post :>> ', post);
    // console.log('postFound :>> ', postFound);

    getPostData(post.postUserId)
    .then(res=>{
      res.postList[index].comments.push(comment)
      console.log('res :>> ', res);
      savePostData(res,post.postUserId);
    })
  };
  return (
    <div className="actual-comment-container">
      <form onSubmit={eventHandler}>
        <input type="text" ref={commentText} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

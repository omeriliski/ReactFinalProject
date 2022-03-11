import "./Posttypes.scss";
import More from "./img/more.svg"
import { ActualComments, UsersInteractions,UserComments,NewComment, ShareAFeedback } from "./UsersInteractions";
import { ButtonPrimary, ButtonSecondary } from "./Buttons";
import Image from "./img/postbild.jpg"
import { useState } from "react";


export function TextPost() {
  const [feedback, setFeedback] = useState(false)
  return (
    <div className="card-div">
      <div className="card-header">
        {" "}
        <div className="user-header">
          <div className="user-pic"></div>{" "}
          <p className="user-name">Lauras Konig</p>
        </div>
        <img className="more" src={More} />
      </div>
      <div className="post-text-content">
        <div className="txt-title">
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="body-txt">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            laborum labore natus quam deleniti quae repellat officiis eius
            mollitia totam, asperiores saepe! Magnam saepe quaerat sit ut ab,
            delectus quae error ratione ea minus perferendis deleniti incidunt
            nam voluptates et aliquam iure necessitatibus illo. Ipsam optio
            inventore totam doloribus unde.
          </p>
        </div>
      </div>
      {feedback && (
        <ShareAFeedback setFeedback={setFeedback} feedback={feedback} />
      )}
      <UsersInteractions setFeedback={setFeedback} feedback={feedback} />
      <UserComments />
      <ActualComments />
    </div>
  );}
export function ShortTextPost() {
    const [feedback, setFeedback] = useState(false);

  return (
    <div className="card-div">
      <div className="card-header">
        {" "}
        <div className="user-header">
          <div className="user-pic"></div>{" "}
          <p className="user-name">Laura Konig</p>
        </div>
        <img className="more" src={More} />
      </div>
      <div className="post-text-content">
        <div className="card-headline">
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="txt-title">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      {feedback && (
        <ShareAFeedback setFeedback={setFeedback} feedback={feedback} />
      )}
      <UsersInteractions setFeedback={setFeedback} feedback={feedback} />
      <UserComments />
      <ActualComments />
    </div>
  );}

export function UmfragePost() {
    const [feedback, setFeedback] = useState(false);

  return (
    <div className="card-div">
      <div className="card-header">
        {" "}
        <div className="user-header">
          <div className="user-pic"></div>{" "}
          <p className="user-name">Laura Konig</p>
        </div>
        <img className="more" src={More} />
      </div>
      <div className="post-text-content">
        <div className="card-headline">
          <p>Lorem ipsum dolor sit amet?</p>
        </div>
        <div className="txt-title">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      {feedback && (
        <ShareAFeedback setFeedback={setFeedback} feedback={feedback} />
      )}
      <UsersInteractions setFeedback={setFeedback} feedback={feedback} />
      <UserComments />
      <ActualComments />
    </div>
  );}


export function BildTextPost({post,index}) {
    const [feedback, setFeedback] = useState(false);

  const [showComments,setShowComments] = useState(false);
  return (
    <div className="card-div">
      <div className="card-header">
        {" "}
        <div className="user-header">
          <div className="user-pic"></div>{" "}
          <p className="user-name">Laura Konig</p>
        </div>
        <img className="more" src={More} />
      </div>
      <div className="post-text-content">
        <div className="picture-wrapper">
          <img className="image-src" src={post.imgUrl} />
        </div>
        <div className="txt-title">
          <p>{post.postTitle}</p>
        </div>
        <div className="body-txt">
          <p>{post.postText}</p>
        </div>
      </div>
      {feedback && (
        <ShareAFeedback setFeedback={setFeedback} index={index} post={post} feedback={feedback} />
      )}
      <UsersInteractions post={post} setFeedback={setFeedback} feedback={feedback} />
      <UserComments
        post={post}
        setShowComments={setShowComments}
        showComments={showComments}
      />
      <div className="comments-newcomments-container">
        <div className="comments-container">
          {showComments ? (
            post.comments.map((comment) => <ActualComments comment={comment} />)
            ) : (
              <ActualComments comment={post.comments[post.comments.length - 1]} />
          )}
        </div>
        {showComments &&<div className="newcomments-container">
           <NewComment post={post} index={index} />
        </div>}
      </div>
    </div>
  );}


  export function VideoPost({post,index}) {
    const [feedback, setFeedback] = useState(false);

  const [showComments,setShowComments] = useState(false);
  return (
    <div className="card-div">
      <div className="card-header">
        {" "}
        <div className="user-header">
          <div className="user-pic"></div>{" "}
          <p className="user-name">Laura Konig</p>
        </div>
        <img className="more" src={More} />
      </div>
      <div className="post-text-content">
        <div className="picture-wrapper">
          {/* <img className="image-src" src={post.imgUrl} /> */}
          <video width="320" height="240" controls>
            <source src={post.imgUrl} type="video/mp4"/>
            <source src={post.imgUrl} type="video/ogg"/>
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="txt-title">
          <p>{post.postTitle}</p>
        </div>
        <div className="body-txt">
          <p>{post.postText}</p>
        </div>
      </div>
      {feedback && (
        <ShareAFeedback setFeedback={setFeedback} index={index} post={post} feedback={feedback} />
      )}
      <UsersInteractions post={post} setFeedback={setFeedback} feedback={feedback} />
      <UserComments
        post={post}
        setShowComments={setShowComments}
        showComments={showComments}
      />
      <div className="comments-newcomments-container">
        <div className="comments-container">
          {showComments ? (
            post.comments.map((comment) => <ActualComments comment={comment} />)
            ) : (
              <ActualComments comment={post.comments[post.comments.length - 1]} />
          )}
        </div>
        {showComments &&<div className="newcomments-container">
           <NewComment post={post} index={index} />
        </div>}
      </div>
    </div>
  );}


export function AwardPost() {
    const [feedback, setFeedback] = useState(false)

  return (
    <div className="card-div">
      <div className="card-headline">
        Exzellent! Du hast 5.000 Punkte erhalten.
      </div>
      <div className="card-text">
        Diskutiere weiter und sammle Badges, mit denen Du bis zur Kurator*in
        werden kannst. Verschenke mit Deinen Punkten Awards, um andere
        User*innen auszuzeichnen!
      </div>

      <ButtonPrimary text="Schlissen" />
    </div>
  );}


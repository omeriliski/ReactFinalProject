import "./Posttypes.scss";
import More from "./img/more.svg"
import { ActualComments, UsersInteractions } from "./UsersInteractions";
import { UserComments } from "./UsersInteractions";
import { ButtonPrimary, ButtonSecondary } from "./Buttons";
import Image from "./img/postbild.jpg"


export function TextPost() {
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
        <div className="txt-title">
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="body-txt">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa laborum labore natus quam deleniti quae repellat officiis eius mollitia totam, asperiores saepe! Magnam saepe quaerat sit ut ab, delectus quae error ratione ea minus perferendis deleniti incidunt nam voluptates et aliquam iure necessitatibus illo. Ipsam optio inventore totam doloribus unde.
          </p>
        </div>
      </div>
      <UsersInteractions/>
      < UserComments/>
      <ActualComments/>
    </div>
  )}
export function ShortTextPost() {
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
      <UsersInteractions />
      <UserComments />
      <ActualComments />
    </div>
  );}

export function UmfragePost() {
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
      <UsersInteractions />
      <UserComments />
      <ActualComments />
    </div>
  );}


export function BildTextPost() {
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
<img className="image-src" src={Image} />
        </div>
        <div className="txt-title">
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="body-txt">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sapiente quidem accusantium maxime unde autem, quasi, illo cumque blanditiis, molestias eaque laboriosam iure ea aliquam ipsum minima! Itaque debitis maiores commodi, magnam recusandae, modi iste deleniti maxime, molestiae expedita omnis?
          </p>
        </div>
      </div>
      <UsersInteractions/>
      < UserComments/>
      <ActualComments/>
    </div>
  )}

export function AwardPost() {
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


      <ButtonPrimary props={"Schlissen"} />
      <ButtonSecondary />
    </div>
  );}


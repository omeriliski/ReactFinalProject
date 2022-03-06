import "./Posttypes.scss";
import More from "./img/more.svg"
import { UsersInteractions } from "./UsersInteractions";


export default function TextPost() {
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
            tempora ipsum iusto eius maxime perspiciatis voluptas magnam quidem
            accusamus repudiandae!.
          </p>
        </div>
      </div>
      <UsersInteractions/>
    </div>
  );
}

import "./Posttypes.scss";
import VotingUp  from "./src/votingUp.svg";

export function UsersInteractions(){
return (
  <div className="interactions-container">
    <div className="voting-feedback">
      <i className="voting-up" src={VotingUp}></i>{" "}
    </div>
  </div>
);
}

export default function TextPost() {
  return (
    <div className="card-div">
      <div className="card-header">
        {" "}
        <div className="user-pic"></div>{" "}
        <p className="user-name">Laura Konig</p>
        <i
          className="more"
          src="/Users/VelVogel/www/DCI/React/react-final-project/src/posts/src/more.svg"
        ></i>
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
    </div>
  );
}

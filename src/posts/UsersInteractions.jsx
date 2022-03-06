import VotingUp from "./img/votingUp.svg";
import VotingDown from "./img/votingDown.svg";
import ArrowDown from "./img/arrowDown.svg";
import "./users-interactions.scss";
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

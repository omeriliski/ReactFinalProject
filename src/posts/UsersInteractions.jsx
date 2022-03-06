import VotingUp from "./img/votingUp.svg";
import VotingDown from "./img/votingDown.svg";
import "./users-interactions.scss";


export function UsersInteractions() {
  return (
    <div className="interactions-container">
      <div className="voting">
        <img className="voting-up" src={VotingUp}/>{" "}
        <img className="voting-up" src={VotingDown}/>{" "}
      </div>
      <div className="feedback"><button className="button-feedback">Feedback</button></div>
    </div>
  );
}

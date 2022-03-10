import "./buttons.scss";


export function ButtonPrimary({text}) {
  return (
    <div className="button-wrapper">
      <input type="submit" className="button-primary" value={text}/>
    </div>
  );
}

export function ButtonSecondary({text, feedback, setFeedback}) {
  function closeButton(){
    setTimeout(()=>setFeedback(false),1000)
  }
  return (
    <div className="button-wrapper">
      <input type="button" className="button-secondary" value={text} onClick={closeButton} />
    </div>
  );
}

export function SmallButton({text, setFeedback}){
  function feedbackClick(){
  setFeedback(true)
}
  return (
    <div className="button-container">
      <button className="button-small" onClick={feedbackClick}>{text}</button>
    </div>
  );
}


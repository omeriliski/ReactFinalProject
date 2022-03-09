import "./buttons.scss";


export function ButtonPrimary({text}) {
  return (
    <div className="button-wrapper">
      <input type="submit" className="button-primary" value={text}/>
    </div>
  );
}

export function ButtonSecondary({text}) {
  return (
    <div className="button-wrapper">
      <input type="button" className="button-secondary" value={text} />
    </div>
  );
}

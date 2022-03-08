import "./buttons.scss";


export function ButtonPrimary() {
  return (
    <div className="button-wrapper">
      <button className="button-primary">
        <p className="txt">Zum Profile</p>
      </button>
    </div>
  );
}

export function ButtonSecondary() {
  return (
    <div className="button-wrapper">
      <button className="button-secondary">
        <p className="txt">Schliessen</p>
      </button>
    </div>
  );
}

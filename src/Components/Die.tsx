export default function Die(props: any) {
  let style = {
    backgroundColor: props.isHeld === true ? "#59E391" : "white",
  };

  return (
    <div className="die-Face" style={style} onClick={props.holdDice}>
      <h2>{props.value}</h2>
    </div>
  );
}

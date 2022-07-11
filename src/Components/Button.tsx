export default function button(props: any) {
  let buttonText = "Roll";

  if (props.win) {
    buttonText = "Play Again";
  } else if (props.increment > 0) {
    buttonText = `Score: ${props.increment}`;
  } else {
    buttonText = "Roll";
  }

  return (
    <button
      className="rerollButton"
      onClick={props.win ? props.restart : props.reroll}
    >
      {buttonText}
    </button>
  );
}

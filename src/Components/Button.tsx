export default function button(props: any) {
  return (
    <button className="rerollButton" onClick={props.reroll}>
      Roll
    </button>
  );
}

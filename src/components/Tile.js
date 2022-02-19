function Tile(props) {
  const { letter, status } = props

  let color = "";
  if (status === "correct") color = "bg-lime-500";
  else if (status === "wrong") color = "bg-rose-400";
  else if (status === "misplaced") color = "bg-yellow-500";

  color += " w-12 h-12 rounded flex justify-center items-center text-3xl"
  
  return (
    <div className={color}>
        <p>{letter.toUpperCase()}</p>
    </div>
  );
}

export default Tile;

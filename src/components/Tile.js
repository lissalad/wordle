function Tile({letter, status}) {

  let style = "";
  if (status === "correct"){ style = "bg-lime-500";}
  else if (status === "wrong"){ style = "bg-rose-400";}
  else if (status === "misplaced") {style = "bg-yellow-500";}
  else {style = "bg-slate-400 text-transparent"; letter=""}

  style += " w-12 h-12 rounded flex justify-center items-center text-3xl"
  
  return (
    <div className={style}>
        <p>{letter.toUpperCase()}</p>
    </div>
  );
}

export default Tile;

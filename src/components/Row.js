import Tile from "./Tile";
import SecretWord from "./Tile";
import data from "../word-bank"
import Guess from "./Guess";

function Row(props) {
  // const { letter, status } = props;
  const guess = "fishy"
  let row = guess.split("");

  const rowMarkup = row.map((letter, i) => {
    return (
      <Tile key={i} letter={letter} status="wrong"/>
    )
  })

  return(
    <div className="flex flex-row justify-center space-x-1 w-full">
      { rowMarkup }
    </div>
    
  );
}

export default Row;
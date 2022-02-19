import Tile from "./Tile";
import SecretWord from "./Tile";
import data from "../word-bank"

function Row(props) {
  const { secret } = props;
  let row = secret.split("")
  // for(let letter = 0; letter < secret.length; letter += 1) {
console.log(row)
  // }
  const rowMarkup = row.map((letter) => {
    return (
      <Tile letter={letter} status="wrong"/>
    )
  })

  return(
    <div className="flex flex-row justify-center space-x-1 w-full">
      { rowMarkup }
    </div>
  );
}

export default Row;
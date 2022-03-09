import Tile from "./Tile";
import SecretWord from "./Tile";
import data from "../word-bank"
import Guess from "./Guess";

function Row({ attempt }) {
  if (attempt === undefined) {
    attempt =  [[''],[''],[''],[''],['']];
  }

  const rowMarkup = attempt.map(([letter, status], i) => {
    return (
      <Tile key={i} letter={letter} status={status}/>
    )
  })

  return(
    <div className="flex flex-row justify-center space-x-1 w-full mb-3">
      { rowMarkup }
    </div>
    
  );
}

export default Row;


// const array = ['f', 'correct'];


// const [letter, status] = array

 
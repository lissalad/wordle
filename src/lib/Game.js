export function evaluate(guess, answer) {
  let results = [];

  if (guess === answer) {
    // won = true;
    console.log("win");
  } else {
    for (let i = 0; i < answer.length; i += 1) {
      let status = "";
      let letter = guess[i];

      // wrong ?
      if (!answer.includes(letter)) {
        status = "wrong";
        console.log(letter + " is wrong");
      }
      // correct ?
      else if (letter === answer[i]) {
        status = "correct";
        console.log(letter + " is correct");

      // misplaced ! 
      } else {
        status = "misplaced";
        console.log(letter + " is misplaced");
      }
      results.push([letter, status]);
    }
  }
  console.log(results)
  return results;
}

export function generateWord() {
  return "fishy";
}

function game(trial) {
  const alea = Math.round(Math.random() * 10);
  // alert(alea);

  while (trial > 0) {
    let x = parseInt(prompt("Donner un nombre:  "));
    if (x === alea) {
      alert(" Good Game Well Played! ");
      break;
    } else {
      trial--;
      alert("wrong! " + trial + " trial(s) left");
    }
  }

  if (trial == 0) {
    alert("try next time, the answer was : " + alea);
  }
  const verif = parseInt(prompt("Wanna play again ?"));
  if (verif == 1) {
    alert("here the new game begins!!!");
    globalGame();
  } else {
    alert("thank u come again!");
  }
}

// game()

function globalGame() {
  alert(
    "Hello! Here is a game of guess! \nChoose the level of difficulty to start. For each level you have a certain number of trials to guess the hidden number: \n level1 => 5 trials \n level2 => 4 trials \n level3 => 3 trials \n Good luck!"
  );

  const diff = parseInt(prompt("Choose the level : "));
  // let trial = 0;
  switch (diff) {
    case 1:
      trial = 5;
      break;

    case 2:
      trial = 4;
      break;

    case 3:
      trial = 3;
      break;

    default:
      alert("choose an available level!");
      return;
  }

  game(trial);
}

globalGame();

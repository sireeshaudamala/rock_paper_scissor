function scissor(computer) {
  if (computer === 1) {
    console.log("👎🏻you lose...");
    console.log("scissor✂️ is smashed by rock🪨");
    return askForPlay();
  }

  console.log("👍🏻you win 🏆🥇...");
  console.log("scissor✂️ is tored the paper ");
  return askForPlay();
}

function paper(computer) {
  if (computer === 1) {
    console.log("👍🏻you win 🏆🥇...");
    console.log("paper📑 is folded rock🪨");
    return askForPlay();
  }

  console.log("👎🏻you lose...");
  console.log("paper is tore by scissor✂️ ");
  return askForPlay();
}

function rock(computer) {
  if (computer === 2) {
    console.log("👎🏻you lose...");
    console.log("rock🪨 is folded by paper📑");
    return askForPlay();

  }

  console.log("👍🏻you win 🏆🥇...");
  console.log("rock🪨 is smashed scissor✂️");
  return askForPlay();
}

function askForPlay() {
  console.log("\n\n------------****-------------");
  if (confirm("do you want to play again")) {
    console.clear()
    return playGame();
  }

  return "thanks for playing";
}

function playGame() {
  console.log("-- rock🪨, paper, scissor✂️, shoot! On shoot --- ");
  const user = +prompt("enter number: ");
  const computer = Math.ceil(Math.random() * 3);

  if (user === computer) {
    console.log("the game is tied let's play again to break the tie");
    return playGame();
  }
  console.log("computer number " + computer);

  if (user === 1) {
    return rock(computer);
  }

  if (user === 2) {
    return paper(computer);
  }

  if (user === 3) {
    return scissor(computer);
  }

  console.log("Invalid input! Please enter a number ");
  return playGame();
}

function askHelp() {
  const help = prompt("if you don't know my rules type help😣:");

  if (help === "help") {
    console.log("1 for rock🪨 \n2 for paper📑\n3 for scissor✂️");
  }

  return playGame()
}

function greetings() {
  const name = prompt("enter name :");
  console.log("hello! " + name);

  if (confirm("do you want to play game")) {
    console.log("--welcome to rock🪨 paper📑 scissor✂️ game ----");
    return askHelp();
  }

  if (confirm("don't you have courage to play?")) {
    return "you don't have luck to play get out from here '" + name + "'";
  }

  console.log("then play🤦‍♂️");
  return askHelp();
}

console.log(greetings());

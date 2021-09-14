
var readlineSync=require("readline-sync");
var userName=readlineSync.question("Enter your Name \n");
console.log("HEY WELCOME TO THE QUIZ MADE BY ARPIT PATNI \n");

var score=0;

function play(question,answer)
{
  var userAnswer=readlineSync.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase())
  {
    console.log("RIGHT !! ");
    score++;
  }else
  {
    console.log("WRONG !!");
  }

}

var  highestScore={
  name:"Arpit",
  score:"3" 
}

question1={
  question:"Which one is the tallest animal from the options ?\n a.Giraffe \n b.Dog \n c.Cow\n",
  answer:'a'
}

question2={
  question:"Who can fly from the given options ? \n a.Sparrow \n b.Dog \n c.Cat\n",
  answer:'a'
}
question3={
  question:"Who is the Prime Minister of India ?\n a.Narendra Modi \n b.Manmohan Singh \n c.Rahul Gandhi \n",
  answer:'a'
}

var questions=[question1,question2,question3];

for(var i=0;i<questions.length;i++)
{
  var currentQuestion=questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}

console.log("Your Final Score is ", score);

if(score>highestScore.score)
{
  console.log("WOW you answered all correct");

}


console.log("Check out the names of the people who answered all correct \n");
console.log("Name-",highestScore.name);
console.log("Score-",highestScore.score);

console.log("If you also answered all correct take a screenshot and send it to me I will update your name in the list");
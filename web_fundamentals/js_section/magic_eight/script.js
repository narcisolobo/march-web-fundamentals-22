var lifesAnswers = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes – definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful."
];

// grab that text input and put it in a variable
var question = document.querySelector('#question');
console.log('text input: ', question);
// grab the output div and put it in a variable
var userQuestion = document.querySelector('#user-question')
console.log('user question div: ', userQuestion);

// grab the fortune div and put it in a variable
var fortune = document.querySelector('#fortune');

//Generates the daily Algo
function tellFortune(){
  if (!question.value) {
    userQuestion.innerText = "Please ask a question!"
  }
  else {
    console.log(question.value);
    userQuestion.innerText = question.value;
    let num = Math.random();
    num = Math.floor((num * lifesAnswers.length));
    console.log(lifesAnswers[num]);
    fortune.innerText = lifesAnswers[num];
  }
}
var readlineSync = require('readline-sync')
var chalk = require('chalk')

var score=0;


console.log(chalk.bgBlue.bold("Welcome to The Office Trivia!"));
var userName = readlineSync.question(chalk.bgBlue.bold('Whats your name?\n\n'))

console.log(chalk.bgBlue.bold("\n*******RULES******"))
console.log('\n1. There are 10 Questions \n2. Each Question gives you 1 point \n3. Each wrong answer gives you -1 point')


console.log(chalk.bgBlue.bold("\n Let's get started",userName,""))

var questionOne = {
  question : 'In S2E1 "The Dundies": What Dundie award does Phyllis take home? \n a. The Busiest Beaver Dundie \n b. The Bushiest Beaver Dundie \n c. Spicy Curry Dundie \n d. Whitest Sneakers Dundie \n',
  answer : 'b'
}

var questionTwo = {
  question : 'In S2E6 "The Fight": What is Dwight\'s Sensei\'s name?? \n a. Ira\n b. George  \n c.Stuart \n d. My.Miyagi\n',
  answer : 'a'
}

var questionThree = {
  question : 'In S2E9 "E-Mail Surveillance" Who hosts a barbecue that is Michael NOT invited to?? \n a. Pam \n b.Andy \n c.Jim \n d.Stanley \n',
  answer : 'c'
}

var questionFour = {
  question : 'In S2E11 "Booze Cruise": Who breaks up? \n a. Pam and Roy \n b.Jim and Katy \n c. Kelly and Ryan \n d. Phyllis and Bob \n',
  answer : 'b'
}

var questionFive = {
  question : 'In S2E16 "Valentine\'s Day": Who rocked the house and got their lover the best gift they\'d ever received? \n a.Angela \n b. Kelly \n c.Pam \n d. Dwight \n' ,
  answer : 'a'
}

var questionSix = {
  question : 'In S2E10 "Christmas Party": Who ends up with the Video iPod at the end of the episode? \n a. Dwight \n b. Pam \n c. Ryan \n d. Micheal  \n',
  answer : 'a'
}

var questionSeven = {
  question : 'In S5E4 "Crime Aid" Who finds out Michael and Holly are dating at the end of the episode?\n a. Jan  \n b.The Office \n c. David Wallace \n d.AJ  \n',
  answer : 'c'
}

var questionEight = {
  question : 'In S5E14 "Lecture Circuit Part One" Which coworker do we find out previously did some time in Juvy? \n a. Meredith \n b. Kelly  \n c. Creed \n d. Ryan \n',
  answer : 'b'
}

var questionNine = {
  question : 'In S6E11 "Scott\'s Tots" How many years have passed since Michael promised to pay for the Scott\'s Tots college educations? \n a.5  \n b.15  \n c.10  \n d.25 \n',
  answer : 'c'
}

var questionTen = {
  question : 'In S7E17 "Todd Packer" What Office rivals join forces to prank and get rid of Todd Packer? \n a.Micheal and Toby \n b.Angela and Pam \n c.Angela and Kevin \n d. Jim and Dwight \n',
  answer : 'd'
}

var questionArr = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen]

function checkAnswer(question, answer){
  var userAnswer = readlineSync.question(question).toLowerCase()
  if(userAnswer === answer){
    console.log(chalk.bgCyan.bold('Correct Answer !'))
    score +=1
  }else{
    console.log(chalk.bgRed.bold('Incorrect Answer :/'))
    score -=1
  }
  console.log(chalk.bgMagenta.bold('Current Score '+score))
  console.log('--------------------------------------------------')
}

for(i =0; i<questionArr.length;i++){
  checkAnswer(questionArr[i].question, questionArr[i].answer)
}

var highScore  = 9;
console.log(chalk.bgBlue('Final Score '+score))
if(score>highScore){
  console.log(chalk.bgwhite.bold('Congratulations, you have set a new highScore '+score))  
}else{
  console.log(chalk.bgRed('You were only '+ (highScore-score) +' away from the highScore'))
  console.log(chalk.bgRed.bold("Better luck next time!"))
}  

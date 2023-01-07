const quizData =[
  {
    question :"Which Language runs in a web browser?",
    a:"Java",
    b:"C",
    c:"Python",
    d:"JavaScript",
    correct:"d"
  },
  
  {
    question :"What does CSS stands for?",
    a:"Centeral Style Sheet",
    b:"Cascading Style Sheets",
    c:"Cascading Simple Sheets",
    d:"Cars Suvs Sutable",
    correct:"b"
  },
  {
    question :"What does HTML stands for?",
    a:"HyperText Markup Language",
    b:"HyperText Markdown Language",
    c:"HyperText Machine Language",
    d:"Hyperloop Machine Language",
    correct:"a"
  },
  {
    question :"What year does JavaScript Launched?",
    a:"1998",
    b:"1995",
    c:"1997",
    d:"1992",
    correct:"b"
  }

]

const quiz = document.getElementById("quiz");
const answerEl = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitBtn = document.getElementById("submit")

let  currentQuiz = 0;
let score = 0

loqdQuiz()

function loqdQuiz(){
  deselectAnswer()

  const currentQuizData = quizData[currentQuiz]
  questionEl.innerHTML = currentQuizData.question
  a_text.innerHTML = currentQuizData.a
  b_text.innerHTML = currentQuizData.b

  c_text.innerHTML = currentQuizData.c

  d_text.innerHTML = currentQuizData.d

}

function deselectAnswer(){
  answerEl.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
  let answer;
  answerEl.forEach(answerEl =>{
    if(answerEl.checked){
      answer = answerEl.id
    }
  })
  return answer
}

submitBtn.addEventListener('click', ()=>{
  const answer = getSelected()
  if(answer){
    if(answer === quizData[currentQuiz].correct){
      score++
    }

    currentQuiz++
    if(currentQuiz < quizData.length){
      loqdQuiz()
    }else {
      quiz.innerHTML= `<h2>You answerd ${score}/${quizData.length}question correctly </h2>
      <button onclick="location.reload()">Reload</button>`
    }
  }
})
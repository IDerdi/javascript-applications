const quizData = [
    {
        question : 'How old is Rihanna?',
        a: '10',
        b: '18',
        c: '35',
        d: '110',
        correct:'c'
    },
    {
        question : 'What is the most used programming language in 2023?',
        a: 'java',
        b: 'C',
        c: 'Python',
        d: 'Javascript',
        correct:'d'
    },
    {
        question : 'Who is he President of US?',
        a: 'Rihanna',
        b: 'Biden',
        c: 'you',
        d: 'Trump',
        correct:'b'
    },
    {
        question : 'What does HTML stand for?',
        a: 'Heyper Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Jason Object Notation',
        d: 'Rihanna',
        correct:'a'
    },
    {
        question : 'What year was Javascript launched?',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'none of the above',
        correct:'d'
    },
]


const questionEl=document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const next = document.getElementById("next")


let currentQuiz = 0;
let answer = undefined;


loadQuiz();

function loadQuiz(){
    let currentQuizData= quizData[currentQuiz];

    questionEl.innerText=currentQuizData.question;
    a_text.innerText=currentQuizData.a;
    b_text.innerText=currentQuizData.b;
    c_text.innerText=currentQuizData.c;
    d_text.innerText=currentQuizData.d;
   
}



function getSelected(){
    const answersEl = document.querySelectorAll(".answer");

    answersEl.forEach((answerEl) => {
        if (answerEl.checked) {
           return answerEl.id
        }
        
    });
}



next.addEventListener("click",function(){  
    currentQuiz++
    getSelected()

    // if (currentQuiz < quizData.length) {
    //     loadQuiz()
    // }else{
    //     alert("finish")
    // }

    
})
const quizDB=[

    {
    question:"Q1: Html Abbreviated as ",
    a:"Hello to my land",
    b:"Hyper test Markup language",
    c:"Hyper text Marker language",
    d:"Hyper text Markup language",
    ans:"ans4"
    },
    {
    question:"Q2: CSS Abbreviated as ?",
    a:"Cascading style sheet",
    b:"Colour Styling Sheet",
    c:"Capacity Style Marker language",
    d:"Copy Style Sheet ",
    ans:"ans1"
    },
    {
    question:"Q3: HTTP Abbreviated as ?",
    a:"Hello to my land",
    b:"Hyper test Markup language",
    c:"Hyper text transfer protocol",
    d:"Hyper text Markup language",
    ans:"ans3"
    },
    {
    question:"Q4: JS Abbreviated as ?",
    a:"Java Style",
    b:"Java Script ",
    c:"JSON Script",
    d:"JQuery Scripting ",
    ans:"ans2"
    },
    {
    question:"Q5: What is the name of third caliph in Islam after the death of Hazrat Muhammad (S.A.W)?",
    a:"Hazrat Ali (R.A)",
    b:"Hazrat Abu Bakar (R.A)",
    c:"Hazrat Umar (R.A)",
    d:"Hazrat Usman (R.A)",
    ans:"ans4"
    },
    {
    question:"Q6:  In the beginning, to which Arab tribe Prophet Muhammad (PBUH) worked as a shepherd?",
    a:"Banu Saad",
    b:"Banu Asad",
    c:"Banu Ummayya",
    d:"Banu Makhzoom",
    ans:"ans1"
    },
    {
    question:"Q7: Which Prophet was able to talk with animals and jinns?",
    a:"Prophet Adam (A.S)",
    b:"Prophet Ibraheem (A.S)",
    c:"Prophet Sulaiman (A.S)",
    d:"Prophet Daniyal (A.S)",
    ans:"ans3"
    },
    {
    question:"Q8: Which Prophet is called the “Father of Muslims?",
    a:"Prophet Adam (A.S)",
    b:"Prophet Ibraheem (A.S)",
    c:"Prophet Sulaiman (A.S)",
    d:"Prophet Daniyal (A.S)",
    ans:"ans2"
    },
    {
    question:"Q9: The heads of Zakat are:?",
    a:"7",
    b:"8",
    c:"9",
    d:"10",
    ans:"ans2"
    },
    {
    question:"Q10: Jabal-e-Noor is situated in:?",
    a:"Arafat",
    b:"Ghar-i-Hira",
    c:"Ghar-i-Saur",
    d:"Madina",
    ans:"ans1"
    }
];

const question=document.querySelector(".question");
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#submit');
const answers=document.querySelectorAll('.answer');
const showScore=document.querySelector('#showScore');
let questCount=0;
let score=0;

const loadQuestion=()=>{
  const questionList=quizDB[questCount];
  question.innerText=questionList.question
  
  option1.innerText=questionList.a;
  option2.innerText=questionList.b;
  option3.innerText=questionList.c;
  option4.innerText=questionList.d;

}


loadQuestion();
const getCheckAnswer=()=>{
    let answer
    answers.forEach(curAnsElem => {
        if(curAnsElem.checked)
        {
            answer=curAnsElem.id;
        }
        
    });
    return answer;
}

submit.addEventListener('click',()=>{
    const CheckedAnswer=getCheckAnswer();
    if(CheckedAnswer== quizDB[questCount].ans){
        score++;
    }
    questCount++;
if(questCount<quizDB.length)
{
    loadQuestion();
    deSelctall();
}
else{
    showScore.innerHTML=`
    <h3> Your Score ${score} / ${quizDB.length}  </h3>
    <button class="btn" onClick="location.reload()">PLAY AGAIN</button>
    `
    showScore.classList.remove('scoreArea');
}
   
});

const deSelctall=()=>{
    answers.forEach(curAnsElem => {
        curAnsElem.checked=false;
        
        
    });
}




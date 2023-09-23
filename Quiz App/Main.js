//questions object
const questions = [{
    'que': "HTML stands for ",
    'a': "Hypermark Language",
    'b': " Hypermix language",
    'c': " Hypertext Markup Language",
    'd': " Hypertension Language",
    'correct': "c"
  },
  {
    'que': "Which tag is used to create a check box?",
    'a': "<checkbox>",
    'b': "<Input type='checkbox'>",
    'c': " <type='checkbox'",
    'd': " None of the above",
    'correct': "b"
  },
  {
    'que': "Which is not valid data type in Javascript ",
    'a': "Undefinded",
    'b': "Boolean",
    'c': " float",
    'd': "Number",
    'correct': "c",
  },

  {
    'que': "Which type of language is Javascript ",
    'a': " Programming",
    'b': " Scripting",
    'c': " Markup",
    'd': " None of the above",
    'correct': "b",
  },

  {
    'que': "Original Name of Javascript is ",
    'a': "Mocha",
    'b': "Livescript",
    'c': "Escript",
    'd': "JavaScript",
    'correct': "a",
  },

  {
    'que': "Which type of HTML language is ? ",
    'a': " Scripting language",
    'b': "Programming language",
    'c': "Markup language",
    'd': "Network language",
    'correct': "d",
  },

  {
    'que': "How can we change the background color of an element?",
    'a': "background-color",
    'b': "color",
    'c': "Both A and B",
    'd': "None of these",
    'correct': "a",
  },

  {
    'que': "In how many ways CSS can be written ?",
    'a': "1",
    'b': "2",
    'c': "3",
    'd': "4",
    'correct': "c",
  },

  {
    'que': "Which frontend language is responsible for structuring the web page?",
    'a': "HTML",
    'b': "CSS",
    'c': "JavaScript",
    'd': "PHP",
    'correct': "a",
  },

  {
    'que': "JavaScript is which type of language?",
    'a': "Interpreted",
    'b': "Compiled",
    'c': "Both",
    'd': "None",
    'correct': "a",
  }
];

let index = 0; //question index
let total=questions.length;
let right=0, wrong=0;

const quesbox = document.getElementById("question");
const option_input = document.querySelectorAll('.options');
const loadQuestion = () => {
  if(index==total){
   endQuiz();
   return;
  }
  reset();
  const data = questions[index];

  quesbox.innerText= `${index+1}) ${data.que}`;
  option_input[0].nextElementSibling.innerText= data.a;

  option_input[1].nextElementSibling.innerText= data.b;
  option_input[2].nextElementSibling.innerText= data.c;
  option_input[3].nextElementSibling.innerText= data.d;


};


// submit button functionality
const SubmitQuiz = () => {
  const ans = getAnswer();
  const currentQuestion = questions[index]; // Get the current question data
  if (ans === currentQuestion.correct) {
    right++;
  } else {
    wrong++;
  }

  index++;
  loadQuestion();
  return;
}

//to check answer
const getAnswer=()=> {
  let selectedAnswer;
  option_input.forEach(input => {
    if (input.checked) {
      selectedAnswer = input.value;
    }
  });
  return selectedAnswer;
}
 
// To reset the questions
const reset=() =>{
  option_input.forEach(input => {
      input.checked=false;
    }
  )}

  //to show when the quiz has ended
  const endQuiz = () => {
    const boxElement = document.querySelector(".box");
    boxElement.innerHTML = ` 
      <div class="center-content">
      <h3> Thank you for playing the quiz </h3>
      <h2> ${right} / ${total} are correct </h2>
      </div>
    `;
  }
  
loadQuestion();

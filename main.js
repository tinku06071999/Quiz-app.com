const scoreText = document.getElementById('score');
var questionBank = [
  {
    question:
      'Which of the following sorting algorithms can be used to sort a random linked list with minimum time complexity?',
    option: ['insertion Sort', 'Quick Sort', 'Heap Sort', 'Merge Sort'],
    answer: 'Merge Sort',
  },
  {
    question: 'Which one of the following is an application of Queue Data Structure?',
    option: [
      ' When a resource is shared among multiple consumers.',
      'When data is transferred asynchronously (data not necessarily received at same rate as sent) between two processes',
      'Load Balancing',
      'All of the above',
    ],
    answer: 'All of the above',
  },
  {
    question: 'Trie is also known as _____',
    option: [
      'Treap',
      'Binomial Tree',
      '2-3 Tree',
      'Digital Tree',
    ],
    answer: 'Digital Tree',
  },
  {
    question: 'What is the worst case possible height of AVL tree?',
    option: ['2Logn (assume base of  log is 2)', '1.44logn (assume base of log is 2)', 'Depends upon implement', 'Theta(n)'],
    answer: '1.44logn (assume base of log is 2)',
  },
  {
    question:
      'Given a hash table T with 25 slots that stores 2000 elements, the load factor α for T is __________',
    option: ['80', '0.0125', '8000', '1.25'],
    answer: '80',
  }
];

var question = document.getElementById('question');
var quizContainer = document.getElementById('quiz-container');
var scorecard = document.getElementById('scorecard');
var option0 = document.getElementById('option0');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var next = document.querySelector('.next');
var prev = document.querySelector('.prev');
var span = document.querySelectorAll('span');
var questionCounter = 0;
var score = 0;

//function to display questions
function displayQuestion() {
  for (var a = 0; a < span.length; a++) {
    span[a].style.background = 'none';
  }
  question.innerHTML =
    'Q.' + (questionCounter + 1) + ' ' + questionBank[questionCounter].question;
  option0.innerHTML = questionBank[questionCounter].option[0];
  option1.innerHTML = questionBank[questionCounter].option[1];
  option2.innerHTML = questionBank[questionCounter].option[2];
  option3.innerHTML = questionBank[questionCounter].option[3];
  stat.innerHTML = `Question ${questionCounter + 1} of ${questionBank.length}`;
}

//function to calculate scores
function calcScore(e) {
  if (
    e.innerHTML === questionBank[questionCounter].answer &&
    score < questionBank.length
  ) {
    incrementScore(1);
    document.getElementById(e.id).style.background = 'green';
  } else if (
    e.innerHTML !== questionBank[questionCounter].answer &&
    score < questionBank.length
  ) {
    decrementScore(1);
    document.getElementById(e.id).style.background = 'red';
  }
  setTimeout(nextQuestion, 300);
}

//function to display next question
function nextQuestion() {
  if (questionCounter < questionBank.length - 1) {
    questionCounter++;
    displayQuestion();
    questionCounterText.innerText = `${questionCounter + 1}/${questionBank.length
      }`;

  }
  else if (questionCounter === questionBank.length - 1) {
    localStorage.setItem('mostRecentScore', score)
    return window.location.assign('end.html')
  }
}
//function to display previos question
function prevQuestion() {
  if (questionCounter > 0) {
    questionCounter--;
    displayQuestion();
    questionCounterText.innerText = `${questionCounter + 1}/${questionBank.length
      }`;

  }
  else if (questionCounter == 0) {
    alert("There is no question before it!!");
  }
}
//click events to next button
next.addEventListener('click', nextQuestion);
//click event to previous question
prev.addEventListener('click', prevQuestion);

//Back to Quiz button event
function backToQuiz() {
  location.reload();
}

// function two increment the score
incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
};
// function to decrement the score
decrementScore = (num) => {
  score -= num;
  scoreText.innerText = score;
};
displayQuestion();

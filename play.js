const question = document.getElementById('question');

const choices = Array.from(document.getElementsByClassName("choice-text"));



let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let worng_answer = 0;
let questionCounter = 0;
let availableQuestions = {};


const queTion = [
    {
        que :"1.What is the capital of Madhya Pradesh.",
        option1 :"Indore",
        option2 :"Jabalpur",
        option3 :"Bhopal",
        option4 :"Ujjain",
        rightAns : 3
    },
    {
        que :"2.What is the capital of Chattisgarh.",
        option1 :"Raipur",
        option2 :"Uslapur",
        option3 :"Bilaspur",
        option4 :"Bhilai",
        rightAns : 1
    },
    {
        que :"3.What is the capital of Rajasthan.",
        option1 :"Jodhpur",
        option2 :"Udaipur",
        option3 :"Ajmer",
        option4 :"Jaipur",
        rightAns : 4
    },
    {
        que :"4.What is the capital of Uttarakhand.",
        option1 :"Haldwani",
        option2 :"Rishikesh",
        option3 :"Haridwar",
        option4 :"Dehradun",
        rightAns : 4
    },
    {
        que :"5.What is the capital of Mizoram .",
        option1 :"Aizawl",
        option2 :"Agartala",
        option3 :"Champai",
        option4 :"Silchar",
        rightAns : 1
    },
    {
        que :"6.What is the capital of Karnataka .",
        option1 :"Mysuru",
        option2 :"Bengaluru",
        option3 :"Coimbtore",
        option4 :"Manglore",
        rightAns : 2
    },
   {
        que :"7.What is the capital of Tripura.",
        option1 :"Agartala",
        option2 :"Shilong",
        option3 :"Guwahati",
        option4 :"Kohima",
        rightAns : 1
    },
    {
        que :"8.What is the capital of Andhra Pradesh.",
        option1 :"Vishakhapatnam",
        option2 :"Kurnool",
        option3 :"Chennai",
        option4 :"Amravati",
        rightAns : 4
    },
    {
        que :"9.What is the capital of Jammu & Kashmir.",
        option1 :"Srinagar",
        option2 :"Summer:Jammu",
        option3 :"Summer:Srinagar",
        option4 :"Jammu",
        rightAns : 3
    },
    
    {
        que :"10.What is the capital of Himachal Pradesh.",
        option1 :"Kasol",
        option2 :"Summer:Shimla",
        option3 :"Summer:Dharamshala",
        option4 :"Winter:Manali",
        rightAns : 2
    },
]


const points = 10;
const total_question = 10;


startGame = () =>{
    questionCounter = 0;
    score = 0;
    worng_answer =0;
    availableQuestions = [...queTion];
    // console.log(choices);
    // console.log(availableQuestions);
    getNewQuestion();
};


getNewQuestion =() => {
    if(availableQuestions.length === 0 || questionCounter >= total_question){
        alert("Your score is :" + score + "  You have given : " + worng_answer + " worng answer.");
        return window.location.assign("./index.html");
    }
    // console.log(questionCounter == (total_question-1))
    if (questionCounter ==(total_question - 1)){
        alert("This is your last quetion. Press OKAY to continue.")
    }
    currentQuestion = availableQuestions[questionCounter];
    question.innerText = currentQuestion.que;

    
    
    questionCounter++;
    choices.forEach(opno => {

        const number = opno.dataset['number'];
        // console.log(number);

        opno.innerText = currentQuestion["option" + number];
    });

    acceptingAnswers = true;
    // console.log(score,worng_answer);
};
choices.forEach(choice =>{
    choice.addEventListener("click" , e =>{
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];


        if(selectedAnswer == currentQuestion.rightAns){
            score = score+ points;
        }
        else{
            worng_answer++;
        }
    });
})


nextbutton = () =>{
    if(acceptingAnswers){
        alert("You didn't choose any option !!! Please select your Answer");  
    };
    if(!acceptingAnswers){
        getNewQuestion();}
}

startGame();
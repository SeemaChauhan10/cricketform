const questionBank = [
    {
        question: "Who won the first Cricket World Cup in 1975?",
        options: ["Australia", "India", "West Indies", "England"],
        correctAnswer: "West Indies"
    },
    {
        question: "Who is known as the 'God of Cricket'?",
        options: ["Ricky Ponting", "Virat Kohli", "Sachin Tendulkar", "Muttiah Muralitharan"],
        correctAnswer: "Sachin Tendulkar"
    },
    {
        question: "What does LBW stand for in cricket?",
        options: ["Leg Before Wicket", "Leg By Wicket", "Long Ball Wide", "Leg Bat Wicket"],
        correctAnswer: "Leg Before Wicket"
    },
    {
        question: "How many players are there in a cricket team?",
        options: ["9", "10", "11", "12"],
        correctAnswer: "11"
    },
    {
        question: "Which cricketer has scored 100 international centuries?",
        options: ["Virat Kohli", "Sachin Tendulkar", "Jacques Kallis", "Brian Lara"],
        correctAnswer: "Sachin Tendulkar"
    },
    {
        question: "What is the maximum number of overs allowed in an ODI match?",
        options: ["40", "50", "60", "45"],
        correctAnswer: "50"
    },
    {
        question: "Which country is known as the inventor of cricket?",
        options: ["India", "Australia", "England", "South Africa"],
        correctAnswer: "England"
    },
    {
        question: "Who was the first player to score a double century in ODI cricket?",
        options: ["Virender Sehwag", "Chris Gayle", "Rohit Sharma", "Sachin Tendulkar"],
        correctAnswer: "Sachin Tendulkar"
    },
    {
        question: "What is the term for a bowler taking three wickets in three consecutive balls?",
        options: ["Double Hat-Trick", "Hat-Trick", "Triple Wicket", "Clean Sweep"],
        correctAnswer: "Hat-Trick"
    },
    {
        question: "Which country has won the most ICC Cricket World Cups?",
        options: ["India", "West Indies", "Australia", "England"],
        correctAnswer: "Australia"
    },
    {
        question: "Which cricketer is nicknamed 'The Wall'?",
        options: ["Rahul Dravid", "MS Dhoni", "Jacques Kallis", "Ricky Ponting"],
        correctAnswer: "Rahul Dravid"
    },
    {
        question: "Who holds the record for the fastest century in ODI cricket?",
        options: ["Chris Gayle", "Shahid Afridi", "AB de Villiers", "Virat Kohli"],
        correctAnswer: "AB de Villiers"
    },
    {
        question: "Which cricketer has taken the most wickets in Test cricket?",
        options: ["Muttiah Muralitharan", "Shane Warne", "James Anderson", "Anil Kumble"],
        correctAnswer: "Muttiah Muralitharan"
    },
    {
        question: "Who captained India to its first World Cup victory in 1983?",
        options: ["Kapil Dev", "Sunil Gavaskar", "Mohammad Azharuddin", "Sourav Ganguly"],
        correctAnswer: "Kapil Dev"
    },
    {
        question: "Which team won the IPL 2023 title?",
        options: ["Mumbai Indians", "Chennai Super Kings", "Gujarat Titans", "Rajasthan Royals"],
        correctAnswer: "Chennai Super Kings"
    },
    {
        question: "What is the term for scoring six runs by hitting the ball over the boundary without touching the ground?",
        options: ["Boundary", "Sixer", "Over-the-Fence", "Home Run"],
        correctAnswer: "Sixer"
    },
    {
        question: "Who is the first cricketer to score 10,000 runs in Test cricket?",
        options: ["Sunil Gavaskar", "Allan Border", "Sachin Tendulkar", "Ricky Ponting"],
        correctAnswer: "Sunil Gavaskar"
    },
    {
        question: "Which cricketer is famous for hitting six sixes in an over in T20 cricket?",
        options: ["Yuvraj Singh", "Chris Gayle", "Rohit Sharma", "Kieron Pollard"],
        correctAnswer: "Yuvraj Singh"
    },
    {
        question: "Which format of cricket is played over five days?",
        options: ["ODI", "T20", "Test", "First-Class"],
        correctAnswer: "Test"
    },
    {
        question: "What is the maximum number of players allowed on the fielding team at one time?",
        options: ["10", "11", "12", "9"],
        correctAnswer: "11"
    }
];

// Random function to select the function

function RandomQuestion(){
    //  const data = new Set();
    
    //  while(data.size!=5){
    //     const index = Math.floor(Math.random()*20);
    //     data.add(questionBank[index]);


    //  }
    //  return Array.from(data);

    /////////DSA////////////////////
    // questionBank.sort(()=>Math.random()-0.5);
    // return questionBank.slice(0,5);

    //more optimise solution

    const arr =[];
    let length = questionBank.length;

    for(let i=0;i<5;i++){
        const index = Math.floor(Math.random()*length);
        arr.push(questionBank[index]);

        /// swap 
        [questionBank[index],questionBank[length-1]] =[ questionBank[length-1],questionBank[index]];
        length--;
    }
    return arr;


}
// select the form and insert the question in it


 const form =  document.querySelector('form');
 const problem = RandomQuestion();
 const question_answer = {};
   
 problem.forEach((obj,index)=>{
    
    const div_element = document.createElement('div');
    div_element.className = 'question';
    question_answer[`q${index+1}`] = obj.correctAnswer;
    const para = document.createElement('p');
    para.textContent = `${index+1}.${obj.question}`;

    div_element.appendChild(para);
    
    // create four options
   // options: ["Kapil Dev", "Sunil Gavaskar", "Mohammad Azharuddin", "Sourav Ganguly"],
   obj.options.forEach((data)=>{
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.type = "radio";
    input.name = `q${index+1}`;
    input.value = data;
    label.appendChild(input);
    label.appendChild(document.createTextNode(data));
    div_element.appendChild(label);
    div_element.appendChild(document.createElement('br'));
    


   })
  
   form.appendChild(div_element);


 })

 const button = document.createElement('button');
 button.type = 'submit';
 button.className = 'submit-btn';
 button.textContent = "Submit";
 form.appendChild(button);



 ///////check the answer
 
 
 form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const data = new FormData(form);
    

    let result=0;

    const answer = Array.from(data.entries());
    for(let[key,value] of answer){
        if(value===question_answer[key])
            result++;
    }


    
   
   const out =  document.getElementById('out');
   out.innerHTML = `${result}  out of 5 is correct`;
//    const container =  document.getElementsByClassName('container');
//    form.append(out);

 });
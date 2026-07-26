/*Testing*/
// console.log("Hello programmer!");
// console.log('Welcome home!')
// console.log("I've read "+(1+2) +" books this year!")



/*Add your JavaScript here*/
var analyticalScore= 0;
var creativeScore= 0;
var answerdQuestions=0;
var videoContainer= document.getElementById("videoContainer");
var result= document.getElementById('result');
var moreInfoTXT= document.getElementById('moreInfoTXT');

var resetButton= document.getElementById('resetButton');



/*Question one*/
var q1a1=document.getElementById("q1a1");
var q1a2=document.getElementById("q1a2");

/*Question two*/
var q2a1=document.getElementById("q2a1");
var q2a2=document.getElementById("q2a2");


/*Question three*/
var q3a1=document.getElementById("q3a1");
var q3a2=document.getElementById("q3a2");

/*Functions*/

function updateResult(){
  if (analyticalScore>=2){
    console.log("You are mostly an analytical artist!");

    result.innerHTML= "Your result is an analytical artist!!!!";
    
    
    videoContainer.innerHTML= ` <iframe width="560" height="315" src="https://www.youtube.com/embed/RmMv6ipjYMI?si=kb3WqUngWmlZVEcD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    moreInfoTXT.innerHTML = "For info about your mindset look at this!"


  }
    
  else if (creativeScore>=2){
    console.log("You are mostly a creative artist!");
    
    result.innerHTML= "Your result is a creative artist!!!!";
    
    videoContainer.innerHTML=`<iframe width="560" height="315" src="https://www.youtube.com/embed/t2nfOHqc35w?si=UjyMZ5gK0ajJXsS8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    
    moreInfoTXT.innerHTML = "For info about your mindset look at this!"
    


  }
}






function analyticalArtist(){
  analyticalScore+=1;
  answerdQuestions+=1;
  console.log("Answered questions = "+ answerdQuestions + ",Analytical artist score = " + analyticalScore);
  
/*if statement*/
  if (answerdQuestions==3){
    console.log("You're done with the question! good job");
    updateResult()
  }
}

function creativeArtist(){
  creativeScore+=1;
  answerdQuestions+=1;
  console.log("Answered questions = "+ answerdQuestions + ",Creative artist score = " + creativeScore);

  /*if statement*/
  if (answerdQuestions==3){
    console.log("You're done with the question! good job");
    updateResult()
  }
  
}


function resetResults() {
  result.innerHTML= "Your result is...";

  videoContainer.innerHTML= `<p></p>`;
    moreInfoTXT.innerHTML = "<p><p/>"

    answerdQuestions=0;
    creativeScore=0;
    analyticalScore=0;
  q1a1.disabled = false;
  q1a2.disabled = false;
  q2a1.disabled = false;
  q2a2.disabled = false;
  q3a1.disabled = false;
  q3a2.disabled = false;
}




function disableQuestionButtons(btn1, btn2) {
  btn1.disabled = true;
  btn2.disabled = true;
}






/*Question one eventlistener*/
q1a1.addEventListener("click", function() {
  analyticalArtist();
  disableQuestionButtons(q1a1, q1a2); 
});

q1a2.addEventListener("click", function() {
  creativeArtist();
  disableQuestionButtons(q1a1, q1a2); 
});

/*Question two eventlistener*/
q2a1.addEventListener("click", function() {
  analyticalArtist();
  disableQuestionButtons(q2a1, q2a2); 
});

q2a2.addEventListener("click", function() {
  creativeArtist();
  disableQuestionButtons(q2a1, q2a2); 
});

/*Question three eventlistener*/
q3a1.addEventListener("click", function() {
  analyticalArtist();
  disableQuestionButtons(q3a1, q3a2); // Disables both Q1 buttons
});

q3a2.addEventListener("click", function() {
  creativeArtist();
  disableQuestionButtons(q3a1, q3a2); // Disables both Q1 buttons
});


/*Reset button*/
resetButton.addEventListener("click", resetResults)
var triviaQuestions = [{
	question: "How old is Rutgers compared to other universities?",
	answerList: ["4th oldest", "6th oldest", "8th oldest", "9th oldest"],
	answer: 2},{
	question: "How big is Rutgers University-New Brunswick?",
	answerList: ["Over 2500 acres", "Over 4000 acres", "over 3500 acres", "over 9000 acres"],
	answer: 0},{
	question: "The first intercollegiate footgame was played by Rugers and which other university in 1869?",
	answerList: ["Yale University", "Trump University", "Princeton University", "Harvard University"],
	answer: 2},{
	question: "How old is the Daily Targum exactly (in terms of oldest college newspapers)",
	answerList: ["8th oldest", "3rd oldest", "4th oldest", "2nd oldest"],
	answer: 3},{
	question: "What the heck is a fatsandwich?",
	answerList: ["a sandwich made by some phat guy", "a large water-dwelling beast", "a sandwich composed of any number or combination of grilled and fried foods", "a sandwich that weighs 3.3 pounds or more"],
	answer: 2},{
	question: "What animal was once a Rutgers mascot",
	answerList: ["Deer/Stag", "Rooster", "Bulldog", "American Red Robin"],
	answer: 1},{
	question: "Scott Hall and Alexander Library are located along which street?",
	answerList: ["Easton Avenue", "New Brunswick Avenue", "College Avenue", "Livingston Avenue"],
	answer: 2},{
	question: "Which vegetable actually exists?",
	answerList: ["Rutgers grapefruit", "Rutgers tomato", "Rutgers eggplant", "Rutgers lettuce"],
	answer: 1},{
	question: "How many women versus men attend Rutgers University (as undergraduates) in 2019?",
	answerList: ["60 men/40 women", "55 men/45 women", "50/50 even", "55 women/45 men"],
	answer: 2},{
	question: "Roughly what percentage of students come from out-of-state?",
	answerList: ["9%", "31%", "24%", "16%"],
	answer: 3},{
	question: "Rutgers has many well renowned programs: which one is consistently rated top 3 in the world",
	answerList: ["Philosophy", "Music/Arts", "Food Science and Technology", "Oceanography"],
	answer: 0},{
	question: "When year was Rutgers founded?",
	answerList: ["1766", "1786", "1756", "1796"],
	answer: 0},{
	question: "Roughly what percentage of undergraduate students recieve financial aid?",
	answerList: ["50%", "65%", "85%", "78%"],
	answer: 3},{
	question: "Which one of these famous people attended Rutgers University?",
	answerList: ["Tom Cruise", "James Gandolfini", "Idris Elba", "Rooster"],
	answer: 1},{
	question: "and another one... which other famous person attended Rutgers University?",
	answerList: ["Meryl Streep", "Jon Bon Jovi", "Buzz Aldrin", "Marc Ecko"],
    answer: 3},{
    question: "What were the grease trucks?",
    answerList: ["A truck for all your greasing needs", "Rooster", "A group of stationary food trucks that famously sold fat sandwiches", "A type of outlawed football maneuver"],
    answer: 2},{
    question: "Where were the grease trucks located?",
    answerList: ["College Avenue across from Scott Hall", "College Avenue across from Alexander Library", "Easton Avenue", "Busch Campus"],
    answer: 0},{
    question: "What was Rutgers University originally founded as?",
    answerList: ["Rutgers College", "Queens College", "College of New Jersey", "Kings College"],
    answer: 1},{
    question: "In what year were women admitted to Rutgers College? (women were previously segregated in Douglass college)",
    answerList: ["1865", "1927", "1972", "1953"],
    answer: 2},{
	question: "Who is the great Rutgers graduate who was a renowned concert musician, political activist and accomplished athlete?",
	answerList: ["Jerry Rice", "Tom Cruise", "Lawrence Taylor", "Paul Robeson"],
	answer: 3},{
	question: "Which country began Rutgers University as Queens college with theological roots?",
	answerList: ["England", "France", "China", "Netherlands"],
	answer: 3},{
	question: "Who was Rutgers University named after?",
	answerList: ["General Francis Rutgers", "Colonel Henry Rutgers", "Lieutenant John B. Rutgers", "Rutgers tomato"],
	answer: 1},{
	question: "When was the NJ college for Women founded (and women allowed into the university) ?",
	answerList: ["1918", "1874", "1895", "1955"],
	answer: 0},{
	question: "How many seperate campuses are there in Rutgers-New Brunswick/Piscataway?",
	answerList: ["4", "5", "3", "6"],
  answer: 1},{
	question: "In what year was the New Brunswick railroad station built? (the current standing NJ-Transit New Brunswick Train Station) ",
	answerList: ["1878", "1903", "1924", "1952"],
  answer: 1}]

var currentQuestion; var correctAnswer; var incorrectAnswer; var unanswered; var seconds; var time; var answered; var userSelect;
var messages = {
	correct: "That's the right answer!",
	incorrect: "Sorry, that's the wrong answer",
	endTime: "End of time",
	finished: "SCORE"
}


$("#hideDirections").click(function() {
    $("#hidden").slideToggle("slow");
  });
  
  $("#start").click(function () {
    $("#hidden").slideToggle("slow"); newgame();
  });

$('#startOverBtn').on('click', function(){
	$(this).hide();
	newgame();
});




function newgame(){
    $("#finalMessage").empty();
    $("#correctAnswer").empty();
    $("#incorrectAnswers").empty();
    $("#unanswered").empty();
    currentQuestion = 0;
    correctAnswer = 0;
    incorrectAnswer = 0;
    unanswered = 0;
    newQuestion();
}

function newQuestion (){
    $("#message").empty();
    $("#correctAnswer").empty();
    answered = true;


    $("#currentQuestion").html("Question " +(currentQuestion+1)+"/"+triviaQuestions.length);
	$(".question").html("<h2>" + triviaQuestions[currentQuestion].question + "</h2>");
	for(var i = 0; i < 4; i++){
		var choices = $("<div>");
		choices.text(triviaQuestions[currentQuestion].answerList[i]);
		choices.attr({"data-index": i });
		choices.addClass("thisChoice");
		$(".answerList").append(choices);
	
}

countdown();

$(".thisChoice").on("click",function(){
    userSelect = $(this).data("index");
    clearInterval(time);
    answerPage();
});

}


function countdown(){
    seconds = 15;
    $("#timeLeft").html("<h3>Time Left: " + seconds + "</h3>")
    answered = true;

    time = setInterval(showCountdown, 1000)
}

function showCountdown(){
    seconds--;
    $("#timeLeft").html("<h3>Time Left: " + seconds + "</h3>");
    if(seconds < 1){
        clearInterval(time);
        answered = false;
        answerPage();
    }
}

function answerPage(){
    $("#currentQuestion").empty();
    $(".thisChoice").empty();
    $(".question").empty();
    var rightAnswerText= triviaQuestions[currentQuestion].answerList[triviaQuestions[currentQuestion].answer];
    var rightAnswerIndex = triviaQuestions[currentQuestion].answer;
	
	if((userSelect == rightAnswerIndex) && (answered == true)){
		correctAnswer++;
		$('#message').html(messages.correct);
	} else if((userSelect != rightAnswerIndex) && (answered == true)){
		incorrectAnswer++;
		$('#message').html(messages.incorrect);
		$('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
	} else{
		unanswered++;
		$('#message').html(messages.endTime);
		$('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
		answered = true;
	}
	if(currentQuestion == (triviaQuestions.length-1)){
		setTimeout(scoreboard, 2800)
	} else{
		currentQuestion++;
		setTimeout(newQuestion, 2800);
	}
}
function scoreboard(){
	$('#timeLeft').empty();
	$('#message').empty();
	$('#correctedAnswer').empty();thisCh

	$('#finalMessage').html(messages.finished);
	$('#correctAnswers').html("Correct Answers: " + correctAnswer);
	$('#incorrectAnswers').html("Incorrect Answers: " + incorrectAnswer);
	$('#unanswered').html("Unanswered: " + unanswered);
	$('#startOverBtn').addClass('reset');
	$('#startOverBtn').show();
	$('#startOverBtn').html('Start Over?');
};

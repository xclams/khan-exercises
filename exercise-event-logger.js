/* This is a Curriki specific document and listens to events
 * of exercsies which are bound to the Khan exercise interface 
 * in "interface.js" around line 45.
 */

$(document).ready(function(){
	$(Exercises).on("problemTemplateRendered", function(event){
    var iframeId = $.getUrlVar('iframeId');
    $(window.parent.document.getElementById(iframeId)).height(document.body.scrollHeight+50);
	});


	$(Exercises).on("newProblem", function(event){
//		alert("Event triggered: newProblem \n" +
//			  "UserActivityLog: \n" + stringifyUserActivityLog());
	});


	$(Exercises).on("problemDone", function(event){
    var log = Exercises.userActivityLog;
    var lastActivty = log[log.length - 1][0];
    var emptyCheckIcons = $("#check-icons").children(".icon-check-empty");
    var isComplete = (emptyCheckIcons.length == 1 && lastActivty == "correct-activity") || emptyCheckIcons.length == 0;
    var hasNotified = $("#exerciseDone").css("display") != "none";

    if(isComplete && !hasNotified){
      alert("You got 5 correct in a row. Good job!");
      $("#doExercise").css("display","none")
      $("#exerciseDone").css("display","inline")
    }

    var nextEmptyCheckIcon = emptyCheckIcons[0];
    if(nextEmptyCheckIcon != undefined){
      nextEmptyCheckIcon.setAttribute("class","icon-check");
    }
	});


	$(Exercises).on("checkAnswer", function(event){
    var log = Exercises.userActivityLog;
    var lastActivty = log[log.length - 1][0];
    var hasNotified = $("#exerciseDone").css("display") != "none";

    if(lastActivty == "incorrect-activity" && !hasNotified){
      $("#check-icons").children(".icon-check").each(function(element){
        this.setAttribute("class","icon-check-empty");
      });
    }
	});



	$(Exercises).on("hintShown", function(event){
    var iframeId = $.getUrlVar('iframeId');
		$(window.parent.document.getElementById(iframeId)).height(document.body.scrollHeight+50);
	});


	$(Exercises).on("readyForNextProblem", function(event){
//		alert("Event triggered: readyForNextProblem \n" +
//			  "UserActivityLog: \n" + stringifyUserActivityLog());
	});


	$(Exercises).on("warning", function(event){
//		alert("Event triggered: warning \n" +
//			  "UserActivityLog: \n" + stringifyUserActivityLog());
	});


	$(Exercises).on("upcomingExercise", function(event){
//		alert("Event triggered: upcomingExercise \n" +
//			  "UserActivityLog: \n" + stringifyUserActivityLog());
	});


	$(Exercises).on("gotoNextProblem", function(event){
//		alert("Event triggered: gotoNextProblem \n" +
//			  "UserActivityLog: \n" + stringifyUserActivityLog());
	});


	$(Exercises).on("updateUserExercise", function(event){
//		alert("Event triggered: updateUserExercise \n" +
//			  "UserActivityLog: \n" + stringifyUserActivityLog());
	});


	$(Exercises).on("clearExistingProblem", function(event){
//		alert("Event triggered: clearExistingProblem \n" +
//			  "UserActivityLog: \n" + stringifyUserActivityLog());
	});

	function stringifyUserActivityLog(){
		var log = Exercises.userActivityLog;
		if(log == undefined || log.length == 0) return "Empty";
		var result = "";
		for(var i = 0; i < log.length; i++){
			result += "Type: " + log[i][0];
			result += "\t\t Input: " + log[i][1];
			result += "\t\t Time since last check: " + log[i][2] + "\n";
		}
		return result;
	}
});
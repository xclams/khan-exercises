/* This is a Curriki specific document and listens to events
 * of exercsies which are bound to the Khan exercise interface 
 * in "interface.js" around line 45.
 */

$(document).ready(function(){
	$(Exercises).on("problemTemplateRendered", function(event){
		alert("Event triggered: problemTemplateRendered \n" +
			  "UserActivityLog: \n" + stringifyUserActivityLog());
	});


	$(Exercises).on("newProblem", function(event){
		alert("Event triggered: newProblem \n" +
			  "UserActivityLog: \n" + stringifyUserActivityLog());
	});


	$(Exercises).on("problemDone", function(event){
		alert("Event triggered: problemDone \n" +
			  "UserActivityLog: \n" + stringifyUserActivityLog());
	});


	$(Exercises).on("checkAnswer", function(event){
		alert("Event triggered: checkAnswer \n" +
			  "UserActivityLog: \n" + stringifyUserActivityLog());
	});



	$(Exercises).on("hintShown", function(event){
		alert("Event triggered: hintShown \n" +
			  "UserActivityLog: \n" + stringifyUserActivityLog());
	});


	$(Exercises).on("readyForNextProblem", function(event){
		alert("Event triggered: readyForNextProblem \n" +
			  "UserActivityLog: \n" + stringifyUserActivityLog());
	});


	$(Exercises).on("warning", function(event){
		alert("Event triggered: warning \n" +
			  "UserActivityLog: \n" + stringifyUserActivityLog());
	});


	$(Exercises).on("upcomingExercise", function(event){
		alert("Event triggered: upcomingExercise \n" +
			  "UserActivityLog: \n" + stringifyUserActivityLog());
	});


	$(Exercises).on("gotoNextProblem", function(event){
		alert("Event triggered: gotoNextProblem \n" +
			  "UserActivityLog: \n" + stringifyUserActivityLog());
	});


	$(Exercises).on("updateUserExercise", function(event){
		alert("Event triggered: updateUserExercise \n" +
			  "UserActivityLog: \n" + stringifyUserActivityLog());
	});


	$(Exercises).on("clearExistingProblem", function(event){
		alert("Event triggered: clearExistingProblem \n" +
			  "UserActivityLog: \n" + stringifyUserActivityLog());
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
var subgoalArray = [];

//Creates a new subgoal object
//Call using var x = addSubgoal(id, name, numActions);
function saveSubgoal (id, name, numActions) {
	var subgoal = {
		id: id,
		name: name,
		numActions: numActions,
		actions: []
	};
	console.log("incoming subgoal", subgoal);
	subgoalArray.push(subgoal);
	console.log("Array 1: ", subgoalArray);
	chrome.storage.local.set({'subgoalArray': subgoalArray});
}

//Creates a new idealAction object
function saveIdealAction (id, name, idOfSubgoal, el) {
	var idealAction = {
		id: id,
		name: name,
		idOfSubgoal: idOfSubgoal
		//Begin props for answers
		/* YNMyes:
		whyYes:
		YNMno:
		whyNo:
		YNMmaybe:
		whyMaybe:
		motiv:
		info:
		self:
		risk:
		tinker: */
	};
	console.log("incoming action", idealAction);
	subgoalArray[(idOfSubgoal-1)].actions.push(idealAction);
	console.log("array 2: ", subgoalArray);
}


//Save the entire HTML of the page to local storage
function saveHTML () {   //hot male lol
	
	var currentHTML = sidebarBody().find("body").html();
    console.log("saving HTML");
	
	//Save to local storage
	chrome.storage.local.set({'lastSavedHTML': currentHTML}, function() {
		console.log("HTML saved");
	});
	chrome.storage.local.get(function(result){console.log(result)});
	
	//Begin test of code - empties the body then puts it back
	/* sidebarBody().find("body").empty();
	alert("putting code back");
	sidebarBody().find("body").html(currentHTML); */
	
}





//Save the team name
function saveTeamNameLocal () {
	var teamName = sidebarBody().find("#teamInput").val();
	chrome.storage.local.set({'teamName': teamName}, function() {
		  // Notify that we saved.
		  //console.log('teamName saved');
	});
	return teamName;
}

//Save the persona name
function savePersonaNameLocal () {
	var personaName = sidebarBody().find("#personaSelection").val();
	chrome.storage.local.set({'personaName': personaName}, function() {
		  // Notify that we saved.
		  //console.log('personaName saved');
	});
	return personaName;
}

//Save scenario name
function saveScenarioNameLocal () {
	var scenarioName = sidebarBody().find("#scenarioInput").val();
	chrome.storage.local.set({'scenarioName': scenarioName}, function() {
		  // Notify that we saved.
		  //console.log('scenarioName saved');
	});
	return scenarioName;
}
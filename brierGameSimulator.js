function addEvent (obj, type, fn)
{
	if(obj.addEventListener){
		obj.addEventListener(type, fn, false);
	}
	else if(obj.attachEvent){
		obj.attachEvent("on"+type, fn);
	}
}

function init (){
	teamButtons = [ document.getElementById("canada"), document.getElementById("alberta"), document.getElementById("britishcolumbia"), document.getElementById("manitoba"), 
					document.getElementById("newbrunswick"), document.getElementById("newfoundlandandlabrador"), document.getElementById("northernontario"), document.getElementById("novascotia"), 
					document.getElementById("ontario"), document.getElementById("princeedwardisland"), document.getElementById("quebec"), document.getElementById("saskatchewan"),
					document.getElementById("northwestterritories"), document.getElementById("nunavut"), document.getElementById("yukon"), document.getElementById("wildcard1"),
					document.getElementById("wildcard2"), document.getElementById("wildcard3") ];
					
	team1 = [null, 0, null, null];
	team2 = [null, 0, null, null];
	
	for(var i=0; i<teamButtons.length; i++){
		addEvent(teamButtons[i], "click", teamSelect);
	}
	
	addEvent(document.getElementById("reset-btn"), "click", resetAll);
}

function teamSelect(e){
	var evt = e || window.event;
	var t = evt.target || evt.srcElement;
	
	var buttonCounter = 0;
	
	/*Get the teams ready! Team 1 is away and Team 2 is home*/
	/*Check how many buttons are still open*/
	for(var i=0; i<teamButtons.length; i++){
		if(teamButtons[i].disabled == false)
		{
			buttonCounter++;
		}
	}
	
	/*One team is ready*/
	if (buttonCounter == teamButtons.length)
	{
		team1[0] = t.id;
		team1[1] = 0;
		
		/*Team 1 Roster*/
		switch (team1[0])
		{
			case "canada":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[0] = team1[0].toUpperCase();
				team1[3] = "Brendan Bottcher";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "alberta":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[0] = team1[0].toUpperCase();
				team1[3] = "Kevin Koe";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "britishcolumbia":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[0] = "british columbia".toUpperCase();
				team1[3] = "Brent Pierce";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "manitoba":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[0] = team1[0].toUpperCase();
				team1[3] = "Mike McEwen";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "newbrunswick":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[0] = "new brunswick".toUpperCase();
				team1[3] = "James Grattan";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "newfoundlandandlabrador":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[0] = "newfoundland and labrador".toUpperCase();
				team1[3] = "Nathan Young";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "northernontario":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[0] = "northern ontario".toUpperCase();
				team1[3] = "Brad Jacobs";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "novascotia":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[0] = "nova scotia".toUpperCase();
				team1[3] = "Paul Flemming";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "ontario":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[0] = team1[0].toUpperCase();
				team1[3] = "Scott Howard";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "princeedwardisland":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[0] = "prince edward island".toUpperCase();
				team1[3] = "Tyler Smith";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "quebec":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[0] = team1[0].toUpperCase();
				team1[3] = "Mike Fournier";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "saskatchewan":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[0] = team1[0].toUpperCase();
				team1[3] = "Colton Flasch";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "northwestterritories":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[0] = "northwest territories".toUpperCase();
				team1[3] = "Jamie Koe";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "nunavut":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[0] = team1[0].toUpperCase();
				team1[3] = "Peter Mackey";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "yukon":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[0] = team1[0].toUpperCase();
				team1[3] = "Thomas Scoffin";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "wildcard1":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[0] = "wild card 1".toUpperCase();
				team1[3] = "Brad Gushue";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "wildcard2":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[0] = "wild card 2".toUpperCase();
				team1[3] = "Matt Dunstone";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
			case "wildcard3":
			{
				team1[2] = "logos/"+team1[0]+".png";
				team1[0] = "wild card 3".toUpperCase();
				team1[3] = "Jason Gunnlaugson";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume1, 1000);
				break;
			}
		}
		t.disabled = true;
	}
	//document.getElementById("header-text").innerHTML = "<p>Select Team 2 (Home)</p>";
	
	/*Both teams are ready! Game On!*/
	else
	{
		team2[0] = t.id;
		team2[1] = 0;
		
		switch (team2[0])
		{
			case "canada":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[0] = team2[0].toUpperCase();
				team2[3] = "Brendan Bottcher";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "alberta":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[0] = team2[0].toUpperCase();
				team2[3] = "Kevin Koe";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "britishcolumbia":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[0] = "british columbia".toUpperCase();
				team2[3] = "Brent Pierce";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "manitoba":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[0] = team2[0].toUpperCase();
				team2[3] = "Mike McEwen";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "newbrunswick":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[0] = "new brunswick".toUpperCase();
				team2[3] = "James Grattan";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "newfoundlandandlabrador":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[0] = "newfoundland and labrador".toUpperCase();
				team2[3] = "Nathan Young";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "northernontario":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[0] = "northern ontario".toUpperCase();
				team2[3] = "Brad Jacobs";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "novascotia":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[0] = "nova scotia".toUpperCase();
				team2[3] = "Paul Flemming";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "ontario":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[0] = team2[0].toUpperCase();
				team2[3] = "Scott Howard";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "princeedwardisland":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[0] = "prince edward island".toUpperCase();
				team2[3] = "Tyler Smith";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "quebec":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[0] = team2[0].toUpperCase();
				team2[3] = "Mike Fournier";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "saskatchewan":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[0] = team2[0].toUpperCase();
				team2[3] = "Colton Flasch";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "northwestterritories":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[0] = "northwest territories".toUpperCase();
				team2[3] = "Jamie Koe";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "nunavut":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[0] = team2[0].toUpperCase();
				team2[3] = "Peter Mackey";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "yukon":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[0] = team2[0].toUpperCase();
				team2[3] = "Thomas Scoffin";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "wildcard1":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[0] = "wild card 1".toUpperCase();
				team2[3] = "Brad Gushue";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "wildcard2":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[0] = "wild card 2".toUpperCase();
				team2[3] = "Matt Dunstone";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
			case "wildcard3":
			{
				team2[2] = "logos/"+team2[0]+".png";
				team2[0] = "wild card 3".toUpperCase();
				team2[3] = "Jason Gunnlaugson";
				document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Please wait...</p>";
				setTimeout(resume2, 1000);
				break;
			}
		}
	
		t.disabled = true;
		/*document.getElementById("header-text").innerHTML = "<p>Select Team 2 (Home)</p>";*/
		
		/*DISABLE EVERYTHING ELSE*/
		for(var i=0; i<teamButtons.length; i++){
			teamButtons[i].disabled = true;
		}
	}
}

function resume1(){
	document.getElementById("header-text").innerHTML = "<p>Select Team 2 (Home)</p>";
}

function resume2(){
	end01(team1, team2);
}

/*GAME ON! IN CURLING, ONLY ONE TEAM CAN SCORE PER END AT A TIME.*/
function end01(team1, team2){
	document.getElementById("simulation").innerHTML += "<p><b><span style=\"color: darkblue\">SKIPS</span><br/>"+team1[0]+": "+team1[3]+", "+team2[0]+": "+team2[3]+"<br/><br/><span style=\"color: darkblue\">POINTS SCORED WITHIN THE FIRST 10 ENDS AND EXTRAS</span></b><br/><b><span style=\"color: darkblue\">1ST END</span></b></p>";
	picker = Math.floor(Math.random() * 3);
	
	/*AWAY SCORES*/
	if(picker == 0){
		pointsScored = (Math.floor(Math.random() * 3))+1;
		team1[1] = team1[1] + pointsScored;
		document.getElementById("simulation").innerHTML += "<p><b>"+team1[0]+" scores "+pointsScored+". "+team1[0]+": "+team1[1]+", "+team2[0]+": "+team2[1]+"</b></p>";
	}
	/*HOME SCORES*/
	else if(picker == 1){
		pointsScored = (Math.floor(Math.random() * 3))+1;
		team2[1] = team2[1] + pointsScored;
		document.getElementById("simulation").innerHTML += "<p><b>"+team2[0]+" scores "+pointsScored+". "+team1[0]+": "+team1[1]+", "+team2[0]+": "+team2[1]+"</b></p>";
	}
	/*NOBODY SCORES*/
	else{
		team1[1] = team1[1];
		team2[1] = team2[1];
	}
	end02(team1, team2);
}
function end02(team1, team2){
	document.getElementById("simulation").innerHTML += "<p style=\"color: darkblue\"><b>2ND END</b></p>";
	picker = Math.floor(Math.random() * 3);
	
	/*AWAY SCORES*/
	if(picker == 1){
		pointsScored = (Math.floor(Math.random() * 3))+1;
		team1[1] = team1[1] + pointsScored;
		document.getElementById("simulation").innerHTML += "<p><b>"+team1[0]+" scores "+pointsScored+". "+team1[0]+": "+team1[1]+", "+team2[0]+": "+team2[1]+"</b></p>";
	}
	/*HOME SCORES*/
	else if(picker == 0){
		pointsScored = (Math.floor(Math.random() * 3))+1;
		team2[1] = team2[1] + pointsScored;
		document.getElementById("simulation").innerHTML += "<p><b>"+team2[0]+" scores "+pointsScored+". "+team1[0]+": "+team1[1]+", "+team2[0]+": "+team2[1]+"</b></p>";
	}
	/*NOBODY SCORES*/
	else{
		team1[1] = team1[1];
		team2[1] = team2[1];
	}
	end03(team1, team2);
}
function end03(team1, team2){
	document.getElementById("simulation").innerHTML += "<p style=\"color: darkblue\"><b>3RD END</b></p>";
	picker = Math.floor(Math.random() * 3);
	
	/*AWAY SCORES*/
	if(picker == 0){
		pointsScored = (Math.floor(Math.random() * 3))+1;
		team1[1] = team1[1] + pointsScored;
		document.getElementById("simulation").innerHTML += "<p><b>"+team1[0]+" scores "+pointsScored+". "+team1[0]+": "+team1[1]+", "+team2[0]+": "+team2[1]+"</b></p>";
	}
	/*HOME SCORES*/
	else if(picker == 1){
		pointsScored = (Math.floor(Math.random() * 3))+1;
		team2[1] = team2[1] + pointsScored;
		document.getElementById("simulation").innerHTML += "<p><b>"+team2[0]+" scores "+pointsScored+". "+team1[0]+": "+team1[1]+", "+team2[0]+": "+team2[1]+"</b></p>";
	}
	/*NOBODY SCORES*/
	else{
		team1[1] = team1[1];
		team2[1] = team2[1];
	}
	end04(team1, team2);
}
function end04(team1, team2){
	document.getElementById("simulation").innerHTML += "<p style=\"color: darkblue\"><b>4TH END</b></p>";
	picker = Math.floor(Math.random() * 3);
	
	/*AWAY SCORES*/
	if(picker == 1){
		pointsScored = (Math.floor(Math.random() * 3))+1;
		team1[1] = team1[1] + pointsScored;
		document.getElementById("simulation").innerHTML += "<p><b>"+team1[0]+" scores "+pointsScored+". "+team1[0]+": "+team1[1]+", "+team2[0]+": "+team2[1]+"</b></p>";
	}
	/*HOME SCORES*/
	else if(picker == 0){
		pointsScored = (Math.floor(Math.random() * 3))+1;
		team2[1] = team2[1] + pointsScored;
		document.getElementById("simulation").innerHTML += "<p><b>"+team2[0]+" scores "+pointsScored+". "+team1[0]+": "+team1[1]+", "+team2[0]+": "+team2[1]+"</b></p>";
	}
	/*NOBODY SCORES*/
	else{
		team1[1] = team1[1];
		team2[1] = team2[1];
	}
	end05(team1, team2);
}
function end05(team1, team2){
	document.getElementById("simulation").innerHTML += "<p style=\"color: darkblue\"><b>5TH END</b></p>";
	picker = Math.floor(Math.random() * 3);
	
	/*AWAY SCORES*/
	if(picker == 0){
		pointsScored = (Math.floor(Math.random() * 3))+1;
		team1[1] = team1[1] + pointsScored;
		document.getElementById("simulation").innerHTML += "<p><b>"+team1[0]+" scores "+pointsScored+". "+team1[0]+": "+team1[1]+", "+team2[0]+": "+team2[1]+"</b></p>";
	}
	/*HOME SCORES*/
	else if(picker == 1){
		pointsScored = (Math.floor(Math.random() * 3))+1;
		team2[1] = team2[1] + pointsScored;
		document.getElementById("simulation").innerHTML += "<p><b>"+team2[0]+" scores "+pointsScored+". "+team1[0]+": "+team1[1]+", "+team2[0]+": "+team2[1]+"</b></p>";
	}
	/*NOBODY SCORES*/
	else{
		team1[1] = team1[1];
		team2[1] = team2[1];
	}
	end06(team1, team2);
}
function end06(team1, team2){
	document.getElementById("simulation").innerHTML += "<p style=\"color: darkblue\"><b>6TH END</b></p>";
	picker = Math.floor(Math.random() * 3);
	
	/*AWAY SCORES*/
	if(picker == 1){
		pointsScored = (Math.floor(Math.random() * 3))+1;
		team1[1] = team1[1] + pointsScored;
		document.getElementById("simulation").innerHTML += "<p><b>"+team1[0]+" scores "+pointsScored+". "+team1[0]+": "+team1[1]+", "+team2[0]+": "+team2[1]+"</b></p>";
	}
	/*HOME SCORES*/
	else if(picker == 0){
		pointsScored = (Math.floor(Math.random() * 3))+1;
		team2[1] = team2[1] + pointsScored;
		document.getElementById("simulation").innerHTML += "<p><b>"+team2[0]+" scores "+pointsScored+". "+team1[0]+": "+team1[1]+", "+team2[0]+": "+team2[1]+"</b></p>";
	}
	/*NOBODY SCORES*/
	else{
		team1[1] = team1[1];
		team2[1] = team2[1];
	}
	end07(team1, team2);
}
function end07(team1, team2){
	document.getElementById("simulation").innerHTML += "<p style=\"color: darkblue\"><b>7TH END</b></p>";
	picker = Math.floor(Math.random() * 3);
	
	/*AWAY SCORES*/
	if(picker == 0){
		pointsScored = (Math.floor(Math.random() * 3))+1;
		team1[1] = team1[1] + pointsScored;
		document.getElementById("simulation").innerHTML += "<p><b>"+team1[0]+" scores "+pointsScored+". "+team1[0]+": "+team1[1]+", "+team2[0]+": "+team2[1]+"</b></p>";
	}
	/*HOME SCORES*/
	else if(picker == 1){
		pointsScored = (Math.floor(Math.random() * 3))+1;
		team2[1] = team2[1] + pointsScored;
		document.getElementById("simulation").innerHTML += "<p><b>"+team2[0]+" scores "+pointsScored+". "+team1[0]+": "+team1[1]+", "+team2[0]+": "+team2[1]+"</b></p>";
	}
	/*NOBODY SCORES*/
	else{
		team1[1] = team1[1];
		team2[1] = team2[1];
	}
	end08(team1, team2);
}
function end08(team1, team2){
	document.getElementById("simulation").innerHTML += "<p style=\"color: darkblue\"><b>8TH END</b></p>";
	picker = Math.floor(Math.random() * 3);
	
	/*AWAY SCORES*/
	if(picker == 1){
		pointsScored = (Math.floor(Math.random() * 3))+1;
		team1[1] = team1[1] + pointsScored;
		document.getElementById("simulation").innerHTML += "<p><b>"+team1[0]+" scores "+pointsScored+". "+team1[0]+": "+team1[1]+", "+team2[0]+": "+team2[1]+"</b></p>";
	}
	/*HOME SCORES*/
	else if(picker == 0){
		pointsScored = (Math.floor(Math.random() * 3))+1;
		team2[1] = team2[1] + pointsScored;
		document.getElementById("simulation").innerHTML += "<p><b>"+team2[0]+" scores "+pointsScored+". "+team1[0]+": "+team1[1]+", "+team2[0]+": "+team2[1]+"</b></p>";
	}
	/*NOBODY SCORES*/
	else{
		team1[1] = team1[1];
		team2[1] = team2[1];
	}
	end09(team1, team2);
}
function end09(team1, team2){
	document.getElementById("simulation").innerHTML += "<p style=\"color: darkblue\"><b>9TH END</b></p>";
	picker = Math.floor(Math.random() * 3);
	
	/*AWAY SCORES*/
	if(picker == 0){
		pointsScored = (Math.floor(Math.random() * 3))+1;
		team1[1] = team1[1] + pointsScored;
		document.getElementById("simulation").innerHTML += "<p><b>"+team1[0]+" scores "+pointsScored+". "+team1[0]+": "+team1[1]+", "+team2[0]+": "+team2[1]+"</b></p>";
	}
	/*HOME SCORES*/
	else if(picker == 1){
		pointsScored = (Math.floor(Math.random() * 3))+1;
		team2[1] = team2[1] + pointsScored;
		document.getElementById("simulation").innerHTML += "<p><b>"+team2[0]+" scores "+pointsScored+". "+team1[0]+": "+team1[1]+", "+team2[0]+": "+team2[1]+"</b></p>";
	}
	/*NOBODY SCORES*/
	else{
		team1[1] = team1[1];
		team2[1] = team2[1];
	}
	end10(team1, team2);
}
function end10(team1, team2){
	document.getElementById("simulation").innerHTML += "<p style=\"color: darkblue\"><b>10TH END</b></p>";
	picker = Math.floor(Math.random() * 3);
	
	/*AWAY SCORES*/
	if(picker == 1){
		pointsScored = (Math.floor(Math.random() * 3))+1;
		team1[1] = team1[1] + pointsScored;
		document.getElementById("simulation").innerHTML += "<p><b>"+team1[0]+" scores "+pointsScored+". "+team1[0]+": "+team1[1]+", "+team2[0]+": "+team2[1]+"</b></p>";
	}
	/*HOME SCORES*/
	else if(picker == 0){
		pointsScored = (Math.floor(Math.random() * 3))+1;
		team2[1] = team2[1] + pointsScored;
		document.getElementById("simulation").innerHTML += "<p><b>"+team2[0]+" scores "+pointsScored+". "+team1[0]+": "+team1[1]+", "+team2[0]+": "+team2[1]+"</b></p>";
	}
	/*NOBODY SCORES*/
	else{
		team1[1] = team1[1];
		team2[1] = team2[1];
	}
	
	if(team1[1] == team2[1]){
		extraEnd(team1, team2);
	}
	else{
		document.getElementById("header-text").innerHTML = "<p>Projected Result</p>";
			
		document.getElementById("header-text").innerHTML += "<ul><li>" + "<img src=\"" + team1[2] + "\"></img>" + "</li><li><b>" + team1[0].toUpperCase() + "</b><h1 style=\"font-family: Gotham Black\"> " + team1[1] + "</h1></li>" + 
													"<li><b>" + team2[0].toUpperCase() + "</b><h1 style=\"font-family: Gotham Black\"> " + team2[1] + "</h1></li><li><img src=\"" + team2[2] + "\"></img>" + "</li></ul></div>";
		
		document.getElementById("reset-btn").disabled = false;
	}
}
function extraEnd(team1, team2){
	/*FIRST TEAM TO SCORE IN EXTRAS WINS.*/
	document.getElementById("simulation").innerHTML += "<p style=\"color: darkblue\"><b>EXTRA END</b></p>";
	picker = Math.floor(Math.random() * 2);
	
	if(picker == 0){
		pointsScored = (Math.floor(Math.random() * 3))+1;
		team1[1] = team1[1] + pointsScored;
		document.getElementById("simulation").innerHTML += "<p><b>"+team1[0]+" scores "+pointsScored+". "+team1[0]+": "+team1[1]+", "+team2[0]+": "+team2[1]+"</b></p>";
	}
	else{
		pointsScored = (Math.floor(Math.random() * 3))+1;
		team2[1] = team2[1] + pointsScored;
		document.getElementById("simulation").innerHTML += "<p><b>"+team2[0]+" scores "+pointsScored+". "+team1[0]+": "+team1[1]+", "+team2[0]+": "+team2[1]+"</b></p>";
	}
	
	document.getElementById("header-text").innerHTML = "<p>Projected Result</p>";
			
	document.getElementById("header-text").innerHTML += "<ul><li>" + "<img src=\"" + team1[2] + "\"></img>" + "</li><li><b>" + team1[0].toUpperCase() + "</b><h1 style=\"font-family: Gotham Black\"> " + team1[1] + "</h1></li>" + 
													"<li><b>" + team2[0].toUpperCase() + "</b><h1 style=\"font-family: Gotham Black\"> " + team2[1] + "</h1></li><li><img src=\"" + team2[2] + "\"></img>" + "</li></ul></div>";
	
	document.getElementById("reset-btn").disabled = false;
}

function resetAll(e){
	var evt = e || window.event;
	var t = evt.target || evt.srcElement;
	
	document.getElementById("reset-btn").disabled = true;
	
	//HIDE THE BOX SCORE
	document.getElementById("box-score").innerHTML = "";
	document.getElementById("box-score").style.visibility = "hidden";
	
	team1 = [null, 0, null, null];
	team2 = [null, 0, null, null];
	
	//CLEAR SIMULATION AREA
	document.getElementById("simulation").innerHTML = "<p id=\"simulation\"></p>";
	document.getElementById("header-text").innerHTML = "<p id=\"header-text\">Select Team 1 (Away)</p>";
	
	for(var i=0; i<teamButtons.length; i++){
		teamButtons[i].disabled = false;
	}
}

window.onload = init;

/*SCORING VARIABLES*/
/*DO NOT DECLARE VALUES DOWN HERE*/
var team1;
var team2;
var teamButtons;

/*VARIABLES TO DETERMINE WHO SCORES*/
var picker;
var pointsScored;

/*MUSIC PLAYLIST*/
var bgMusic;
var musicPlaylist;
var song;
var songTime;
var songPicker;
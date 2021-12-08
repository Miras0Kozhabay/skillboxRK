var username;
function signup(e){
event.preventDefault();

var email = document.getElementById('email').value;
var username = document.getElementById('username').value;
var pass = document.getElementById('password').value;
var courses = ".";
var toPay = "0"
var user = {
	email: email,
	username: username,
	password: pass,
	courses: courses,
	toPay: toPay,
};
var json = JSON.stringify(user);
localStorage.setItem(username, json);

}


 
function signin(e){
	event.preventDefault();
	var username = document.getElementById('username').value;
	var pass = document.getElementById('password').value;
	var result = document.getElementById('result');
	var user = localStorage.getItem(username);
	var data = JSON.parse(user);
	console.log(data);

	if(user==null){
		result.innerHTML = 'wrong username';
	}else if((username == data.username)&&(pass == data.password)){
		window.confirm("Logged in");
		window.open("skillbox.html","_self");
		
	}else{
		result.innerHTML = 'wrong password';
	}
	
}

var username = "rakhat";

function dataScientist(e){
	console.log(username);
	let cost = 30027;
	let pay = parseInt(JSON.parse(localStorage.getItem(username)).toPay, 10);
	let total = cost + pay;
	var user = {
		email: JSON.parse(localStorage.getItem(username)).email,
		username: JSON.parse(localStorage.getItem(username)).username,
		password: JSON.parse(localStorage.getItem(username)).password,
		courses: JSON.parse(localStorage.getItem(username)).courses + " Data Scientist PRO,",
		toPay: total,
	}
	var json = JSON.stringify(user);
	localStorage.setItem(username, json);

}
function architecture(e){
	console.log(username);
	let cost = 24200;
	let pay = parseInt(JSON.parse(localStorage.getItem(username)).toPay, 10);
	let total = cost + pay;
	var user = {
		email: JSON.parse(localStorage.getItem(username)).email,
		username: JSON.parse(localStorage.getItem(username)).username,
		password: JSON.parse(localStorage.getItem(username)).password,
		courses: JSON.parse(localStorage.getItem(username)).courses + " Software architecturer,",
		toPay: total,
	}
	var json = JSON.stringify(user);
	localStorage.setItem(username, json);

}

function profile(e){

	document.getElementById("profileUsername").innerHTML=username;
	document.getElementById("profileEmail").innerHTML=JSON.parse(localStorage.getItem(username)).email;
	document.getElementById("profilePassword").innerHTML=JSON.parse(localStorage.getItem(username)).password;
	document.getElementById("profileCourses").innerHTML=JSON.parse(localStorage.getItem(username)).courses;
	document.getElementById("profileToPay").innerHTML=JSON.parse(localStorage.getItem(username)).toPay;


}


function changeEmail(){
           
            let newEmail = prompt("Write a new email adress")
         
                        var user = {
		email: newEmail,
		username: JSON.parse(localStorage.getItem(username)).username,
		password: JSON.parse(localStorage.getItem(username)).password,
		courses: JSON.parse(localStorage.getItem(username)).courses,
		toPay: JSON.parse(localStorage.getItem(username)).toPay,
	}
                        localStorage.setItem(username, JSON.stringify(user));
                       
                  
          
        }

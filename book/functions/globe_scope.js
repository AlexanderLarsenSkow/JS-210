let greetingMessage = 'Good Morning!';

function greetPeople() {
	console.log(greetingMessage);
}

function changeGreeting() {
	greetingMessage = 'Good evening!';
}

changeGreeting();
greetPeople();
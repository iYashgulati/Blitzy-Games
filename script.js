let darkMode = false;

var menu = document.querySelector(".menu");

var lineOne = document.querySelector(".menu-line-one");
var lineTwo = document.querySelector(".menu-line-two");
var lineThree = document.querySelector(".menu-line-three")

var links = document.querySelector(".links");

function menuToggle() {
    
    links.classList.toggle("open");
    lineOne.classList.toggle("line-one-anim");
    lineTwo.classList.toggle("line-two-anim");
    lineThree.classList.toggle("line-three-anim");
}

function closeNav() {
    
    links.classList.toggle("open");
    lineOne.classList.toggle("line-one-anim");
    lineTwo.classList.toggle("line-two-anim");
    lineThree.classList.toggle("line-three-anim");
}
    

// List of sentences
var _CONTENT = [ "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet" ];

// Current sentence being processed
var _PART = 0;

// Character number of the current sentence being processed 
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector("#text");

// Implements typing effect
function Type() { 
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if(text === _CONTENT[_PART]) {
		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 50);
		}, 1000);
	}
}

// Implements deleting effect
function Delete() {
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;

	// If sentence has been deleted then start to display the next sentence
	if(text === '') {
		clearInterval(_INTERVAL_VAL);

		// If last sentence then display the first one, else move to the next
		if(_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;
		_PART_INDEX = 0;

		// Start to display the next sentence after some time
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Type, 100);
		}, 200);
	}
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 100);

const nav = document.querySelector('.nav');
const chk = document.getElementById('chk');
const ball = document.querySelector(".label .ball");

const blitzyHeadline = document.querySelector('.blitzy-headline');
const blitzyDescription = document.querySelector('.blitzy-description');

const gameHeadline = document.querySelector('.games-headline');
const gameDescription = document.querySelector('.games-description');

const blogHeadline = document.querySelector('.blog-headline');
const blogDescription = document.querySelector('.blog-description');

const gameCircOne = document.querySelector(".games-circ-one");
const gameCircTwo = document.querySelector(".games-circ-two");
const gameCircThree = document.querySelector(".games-circ-three");
const gameCircFour = document.querySelector(".games-circ-four");

const gameInfo = document.querySelector('.game-info');

const footerAngle = document.querySelector(".footer-angle");
const footer = document.querySelector("#footer");
const footerText = document.querySelector(".footer-inks");

const copyrightText = document.querySelector(".copyright-text");

const label = document.querySelector('.label');

chk.addEventListener('change', () => {
	DarkModeFunction();
})

function saveSettings() {
	localStorage.setItem('darkmode', darkMode)
}

function loadSettings() {
	if(localStorage.getItem('darkmode') === 'true') {
		DarkModeFunction();
	}
}

function DarkModeFunction() {
	darkMode = !darkMode;

	document.body.classList.toggle('dark');
	
	label.classList.toggle('dark');
	nav.classList.toggle('dark');
	links.classList.toggle('dark');
	ball.classList.toggle('dark');

	blitzyHeadline.classList.toggle('dark');
	blitzyDescription.classList.toggle('dark');
	gameHeadline.classList.toggle('dark');
	gameDescription.classList.toggle('dark');
	blogHeadline.classList.toggle('dark');
	blogDescription.classList.toggle('dark');

	gameCircOne.classList.toggle('dark');
	gameCircTwo.classList.toggle('dark');
	gameCircThree.classList.toggle('dark');
	gameCircFour.classList.toggle('dark');

	footerAngle.classList.toggle('dark');
	footer.classList.toggle('dark');
	footerText.classList.toggle('dark');

	copyrightText.classList.toggle('dark');

	document.querySelectorAll(".fas").forEach(i => {
        i.classList.toggle('dark');
	})
		
	document.querySelectorAll("h3").forEach(h3 => {
		h3.classList.toggle('dark');
	});

	document.querySelectorAll(".blog-post").forEach(div => {
        div.classList.toggle('dark');
    });

	document.querySelectorAll(".blog-post-headline").forEach(h1 => {
        h1.classList.toggle('dark');
    });

	document.querySelectorAll(".blog-followup").forEach(h2 => {
        h2.classList.toggle('dark');
    });

	document.querySelectorAll(".game-info").forEach(div => {
		div.classList.toggle('dark');
	});

	document.querySelectorAll(".game-info-title").forEach(div => {
		div.classList.toggle('dark');
	});

	document.querySelectorAll(".game-info-hashtag").forEach(div => {
		div.classList.toggle('dark');
	});
}

window.addEventListener('beforeunload', saveSettings);
document.addEventListener('DOMContentLoaded', loadSettings);



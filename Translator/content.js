

const API_KEY = "937e3009e0mshb336e943651f798p136a82jsn2cba3964fc96",
	XHR = new XMLHttpRequest();
XHR.withCredentials = true;

var previousText = '',
	canTranslate,
	reqFinished,
	fromL='auto',
	keyl='',
	targetLanguage = 'ar',
	sourceLanguage = '',
	isAutodetectionEnabled = true,
	isLastSent,
	[translatedBlocks, detectedBlocks, coords] = [[], [], []];

const bubbleDOM = document.createElement('div').appendChild(document.createElement('div'));
bubbleDOM.setAttribute('class', 'tooltip_bubble');


cssProperties(bubbleDOM, {
	"font-family": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
	"font-family": "monospace",
	"visibility": "hidden",
	"font-style": "normal",
	"position": "fixed",
	"padding": "12px",
	"margin": "1em 0 3em",
	"color": "#3337E9",
	"background": "#EBEDF2",
	"font-weight": "600",
	"z-index": "1000",
	"-webkit-border-radius": "10px",
	"-moz-border-radius": "10px",
	"border-radius": "-50%"
});
document.body.appendChild(bubbleDOM);


var delay = function (elem, callback) {
	var timeout = null;
	elem.onmouseover = function () {
		timeout = setTimeout(callback, 3000);
	};

	elem.onmouseout = function () {
		clearTimeout(timeout);
	};
};




delay(document.getElementsByClassName('tooltip_bubble')[0], function () {
	copyToClipboard(previousText);
	let h=bubbleDOM.innerHTML;
	bubbleDOM.innerHTML='[COPIED TO CLIPBOARD]';
	let timeout = null;
	clearTimeout(timeout);
	timeout = setTimeout(function () {
		bubbleDOM.innerHTML=h;
	}, 600);
});



function showTranslation(mouseX, mouseY, input) {
	previousText = input;
	if (isAutodetectionEnabled) {
		bubbleDOM.innerHTML = `${input}<div><small><em>Autodetected ${detectedBlocks}`;
		bubbleDOM.getElementsByTagName('em')[0].style = 'color:rgb(172, 172, 172);';
	} else
		bubbleDOM.innerHTML = input;
	bubbleDOM.style.visibility = 'visible';
	bubbleDOM.style.left = mouseX + 'px';
	bubbleDOM.style.top = mouseY + 'px';

}
// API request
function apiRequest(text) {
	XHR.open("POST", "https://microsoft-translator-text.p.rapidapi.com/translate?to=" + targetLanguage + "&api-version=3.0&" + sourceLanguage + "profanityAction=NoAction&textType=plain");
	XHR.setRequestHeader("content-type", "application/json");
	XHR.setRequestHeader("x-rapidapi-key", API_KEY);
	XHR.setRequestHeader("x-rapidapi-host", "microsoft-translator-text.p.rapidapi.com");
	XHR.send(JSON.stringify([{
		"text": text
	}]));
}
// API response
XHR.addEventListener("readystatechange", async function () {
	if (this.readyState === this.DONE) {
		const responseData = JSON.parse(this.responseText)[0];

		let detectedLanguage = responseData.detectedLanguage && responseData.detectedLanguage.language || [],
			// accuracy = responseData.detectedLanguage && responseData.detectedLanguage.score || [],
			translation = responseData.translations[0].text;

		if (reqFinished && reqFinished.length > 0) {
			translatedBlocks += translation;
			if (!detectedBlocks.includes(detectedLanguage) && detectedLanguage !== []) {
				detectedBlocks.push(detectedLanguage);
			}

			showTranslation(coords[0], coords[1], translatedBlocks);
			// Last response received
			if (reqFinished.indexOf(false) === reqFinished.length - 1) {
				[translatedBlocks, detectedBlocks] = [[], []];
			}

			// Requests aborted
			if (reqFinished.indexOf(false) === -1) {
				// console.log('Aborted');
				[reqFinished, translatedBlocks, detectedBlocks] = [[], [], []];
				return;
			}
			reqFinished[reqFinished.indexOf(false)] = true;

		} else {
			if (isLastSent === true) {
				isLastSent = false;
				return;
			}
			detectedBlocks.push(detectedLanguage);
			showTranslation(coords[0], coords[1], translation);
			detectedBlocks = [];
		}
	}
});

window.addEventListener('wheel', function () {

	bubbleDOM.style.visibility = 'hidden';

	
});



window.addEventListener('mouseup', async function (e) {
	
	//!New Edit For Checkbox
	chrome.storage.sync.get(['checkvalue'],function(response){
		if(response['checkvalue']){
			keyl = response['checkvalue'];
		}
		else{
			chrome.storage.sync.set({'checkvalue' : false});
		}
	});

	chrome.storage.sync.get(['langFrom'],(response) => {
		if(response['langFrom']){
			fromL = response['langFrom'];
		}
		else{
			chrome.storage.sync.set({'langFrom' :'auto'});
		}
	});
	chrome.storage.sync.get(['langTo'],(response) => {
		
		if(response['langTo']){
			targetLanguage = response['langTo'];
		}
		else{
			chrome.storage.sync.set({'langTo' :'ar'});
		}
	});
	
	//!New Edit For Checkbox the if statement
	if(keyl === true){
		if (fromL === 'auto') {
			sourceLanguage = '';
			isAutodetectionEnabled = true;
		} else {
			sourceLanguage = 'from=' + fromL + '&';
			isAutodetectionEnabled = false;
		}

		if (canTranslate === false) return;
		let selection = (window.getSelection()).toString();
		if (selection.length < 1 || selection === '\n' || selection === '\r' || selection === ' ')
			bubbleDOM.style.visibility = 'hidden';
		else {
				
			let rect = window.getSelection().getRangeAt(0).getBoundingClientRect();
			coords = [e.x, e.y, rect.width, rect.height];
			[reqFinished, translatedBlocks] = [[], []];
			if (selection.length > 220) {
				let v = selection.match(/.*?\D[.!?]+|.*/gs);
				if (v[v.length - 1] === '') { 
					v.pop();
				}
				reqFinished = new Array(v.length).fill(false);
				loop1: for (let i = 0; i < v.length; i++) {
					apiRequest(v[i].toString());
					// wait until response is received
					while (reqFinished === [] || reqFinished[i] === false) {
						if (window.getSelection().isCollapsed.toString() === 'true') {
							[reqFinished, translatedBlocks, detectedBlocks] = [[], [], []];
							isLastSent = true;
							break loop1;
						}
					}

				}
			} else {
				apiRequest(selection);
			}
		}
	}
});


function cssProperties(elem, attrs) {
	for (let key in attrs) {
		elem.style.setProperty(key, attrs[key]);
	}
}

function copyToClipboard(text) {
	let copyFrom = document.createElement("textarea");
	copyFrom.textContent = text;
	document.body.appendChild(copyFrom);
	copyFrom.select();
	document.execCommand('copy');
	copyFrom.blur();
	document.body.removeChild(copyFrom);
}

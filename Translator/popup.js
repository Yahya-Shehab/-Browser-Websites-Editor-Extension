const API_KEY = "937e3009e0mshb336e943651f798p136a82jsn2cba3964fc96",
  XHR_TRANSLATE = new XMLHttpRequest(),
  XHR_DEFINITION = new XMLHttpRequest();

XHR_TRANSLATE.withCredentials = true;
XHR_DEFINITION.withCredentials = true;

const sourceLanguage = document.getElementById("source-langs"),
  targetLanguage = document.getElementById("target-langs"),
  liveTranslationInput = document.getElementById("live-translation-input"),
  // liveKeyInput = document.getElementById("live-key-input"),
  checkBox = document.getElementById("_checkbox"),
  setButton = document.getElementById("setButton"),
  liveTranslation = document.getElementById("live-translation"),
  // powerState = document.getElementById('power-state'),
  detectedLanguageLabel = document.getElementById("detected-language");

var isDictionaryModeEnabled,
  previousOptionIndex,
  previous,
  reqFinished,
  lastSent,
  [translatedBlocks, detectedBlocks, coords] = [[], [], []];

const container = document.getElementsByClassName("dictionary-container")[0];
const voiceOptions = [
  { name: "Microsoft George - English (United Kingdom)", lang: "en-GB" },
  { name: "Microsoft Hazel - English (United Kingdom)", lang: "en-GB" },
  { name: "Microsoft Susan - English (United Kingdom)", lang: "en-GB" },
  { name: "Google Deutsch", lang: "de-DE" },
  { name: "Google US English", lang: "en-US" },
  { name: "Google UK English Female", lang: "en-GB" },
  { name: "Google UK English Male", lang: "en-GB" },
  { name: "Google español", lang: "es-ES" },
  { name: "Google español de Estados Unidos", lang: "es-US" },
  { name: "Google français", lang: "fr-FR" },
  { name: "Google हिन्दी", lang: "hi-IN" },
  { name: "Google Bahasa Indonesia", lang: "id-ID" },
  { name: "Google italiano", lang: "it-IT" },
  { name: "Google 日本語", lang: "ja-JP" },
  { name: "Google 한국의", lang: "ko-KR" },
  { name: "Google Nederlands", lang: "nl-NL" },
  { name: "Google polski", lang: "pl-PL" },
  { name: "Google português do Brasil", lang: "pt-BR" },
  { name: "Google русский", lang: "ru-RU" },
  { name: "Google 普通话（中国大陆）", lang: "zh-CN" },
  { name: "Google 粤語（香港）", lang: "zh-HK" },
  { name: "Google 國語（臺灣）", lang: "zh-TW" },
];
const speaker_one = document.getElementById("speaker1");
const speaker_two = document.getElementById("speaker2");
speaker_one.onclick = () => {
  dictate(liveTranslationInput.value, sourceLanguage.value);
};
speaker_two.onclick = () => {
  dictate(liveTranslation.innerText, targetLanguage.value);
};
// window.onload = () => {
console.log("ahanda");
chrome.storage.sync.get(["langFrom"], function (response) {
  if (response["langFrom"]) {
    sourceLanguage.value = response["langFrom"];
  } else {
    chrome.storage.sync.set({ langFrom: "auto" });
  }
});
chrome.storage.sync.get(["langTo"], function (response) {
  if (response["langTo"]) {
    targetLanguage.value = response["langTo"];
  } else {
    chrome.storage.sync.set({ langTo: "ar" });
  }
});

//!New Edit For Checkbox
chrome.storage.sync.get(["checkvalue"], function (response) {
  if (response["checkvalue"]) {
    if (response["checkvalue"] == false) {
      checkBox.checked = false;
    } else if (response["checkvalue"] == true) {
      checkBox.checked = true;
    }
  } else {
    chrome.storage.sync.set({ checkvalue: false });
  }
});

//!New Edit For Checkbox
checkBox.addEventListener("click", function () {
  if (this.checked == true) {
    chrome.storage.sync.set({ checkvalue: true });
  } else {
    chrome.storage.sync.set({ checkvalue: false });
  }
});

// chrome.storage.sync.get(['keyset'],function(response){
// 	if(response['keyset']){
// 		liveKeyInput.value = response['keyset'];
// 	}
// 	else{
// 		// chrome.storage.sync.set({'langFrom' : 'auto'});
// 	}
// });
// };

// setButton.addEventListener('click', ()=>{
// 	var s = liveKeyInput.value;
// 	chrome.storage.sync.set({'keyset' : s});

// });

sourceLanguage.addEventListener("change", (event) => {
  chrome.storage.sync.set({ langFrom: event.target.value });
  console.log("hellooooooooooo");
});
targetLanguage.addEventListener("change", (event) => {
  chrome.storage.sync.set({ langTo: event.target.value });
  console.log("hellooooooooooo");
});

window.onload = function () {
  loadAttributes();
  liveTranslationInput.select();
};

// liveTranslation.onclick = () => { copyToClipboard(liveTranslation.innerText); };
document
  .querySelector("#live-translation-input")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      chrome.tabs.create({
        url: "https://www.google.com/search?q=" + liveTranslationInput.value,
        active: true,
      });
    }
  });

document.getElementById("google-link").onclick = () => {
  chrome.tabs.create({
    url: "https://www.google.com/search?q=" + liveTranslationInput.value,
    active: true,
  });
};
document.getElementById("github-link").onclick = () => {
  chrome.tabs.create({
    url: "https://github.com/search?q=" + liveTranslationInput.value,
    active: true,
  });
};
document.getElementById("google-translate-link").onclick = () => {
  chrome.tabs.create({
    url: "https://translate.google.com/?text=" + liveTranslationInput.value,
    active: true,
  });
};
document.getElementById("youtube-link").onclick = () => {
  let l =
    liveTranslationInput.value === ""
      ? "https://www.youtube.com"
      : "https://www.youtube.com//results?search_query=" +
        liveTranslationInput.value;
  chrome.tabs.create({ url: l, active: true });
};

document.getElementById("reverse").onclick = swap;

optionChange();
let timeout = null;

liveTranslationInput.addEventListener("keyup", () => {
  clearTimeout(timeout);
  timeout = setTimeout(function () {
    if (
      document.contains(
        document.getElementsByClassName("dictionary-container-row")[0]
      )
    ) {
      document
        .querySelectorAll(".dictionary-container-row")
        .forEach((e) => e.remove());
    }
    liveTranslationInput.value = liveTranslationInput.value.trim();
    translatorApiRequest(liveTranslationInput.value);
    dictionaryApiRequest(liveTranslationInput.value);
  }, 1200);
});
liveTranslationInput.addEventListener("wheel", (event) => {
  event.preventDefault(); // prevent the default action (scroll / move caret)
  let fontSize = parseInt(window.getComputedStyle(liveTranslation).fontSize),
    scale = 0;
  event.deltaY > 0 ? (scale += 2) : (scale -= 2);
  if ((fontSize <= 14 && scale < 0) || (fontSize >= 100 && scale > 0)) return;
  liveTranslation.style.fontSize = fontSize + scale + "px";
});

function createRow(firstColumn, secondColumn) {
  let row = document.createElement("div");
  let rowItem = document.createElement("div");
  row.classList.add("dictionary-container-row");
  rowItem.innerText = firstColumn;
  rowItem.classList.add("dictionary-container-row-title");
  row.appendChild(rowItem.cloneNode(true));
  rowItem.classList.remove("dictionary-container-row-title");
  rowItem.classList.add("dictionary-container-row-item");
  rowItem.title = "Click to Copy";
  row.onclick = () => {
    copyToClipboard(secondColumn);
  };
  rowItem.innerText = secondColumn;

  row.appendChild(rowItem.cloneNode(true));
  container.appendChild(row);
}

function saveAttributes() {}

function loadAttributes() {}

function optionChange() {
  liveTranslationInput.spellcheck =
    sourceLanguage.value === "en" ? true : false;
  if (sourceLanguage.selectedIndex - 1 === targetLanguage.selectedIndex) {
    [sourceLanguage.selectedIndex, targetLanguage.selectedIndex] = [
      previousOptionIndex[0],
      previousOptionIndex[1],
    ];
  }
  previousOptionIndex = [
    sourceLanguage.selectedIndex,
    targetLanguage.selectedIndex,
  ];
  saveAttributes();
  translatorApiRequest(liveTranslationInput.value);
  dictionaryApiRequest(liveTranslationInput.value);
}

function swap() {
  let [s, t] = [sourceLanguage.selectedIndex, targetLanguage.selectedIndex];
  if (sourceLanguage.selectedIndex === 0) {
    if (detectedLanguageLabel.innerText.length <= 0) return;
    sourceLanguage.value = detectedLanguageLabel.innerText;
    s = sourceLanguage.selectedIndex;
  }
  liveTranslationInput.value =
    liveTranslation.innerText === "..." ? "" : liveTranslation.innerText;
  sourceLanguage.selectedIndex = t + 1;
  targetLanguage.selectedIndex = s - 1;

  optionChange();
  translatorApiRequest(liveTranslationInput.value);
  dictionaryApiRequest(liveTranslationInput.value);
  return;
}

function translationApiRequest(text) {
  console.log("here ", text);
  let src =
    sourceLanguage.value === "auto" ? "" : "&from=" + sourceLanguage.value;
  XHR_TRANSLATE.open(
    "POST",
    `https://microsoft-translator-text.p.rapidapi.com/translate?
	to=${targetLanguage.value}&api-version=3.0${src}&profanityAction=NoAction&textType=plain`
  );
  XHR_TRANSLATE.setRequestHeader("content-type", "application/json");
  XHR_TRANSLATE.setRequestHeader("x-rapidapi-key", API_KEY);
  XHR_TRANSLATE.setRequestHeader(
    "x-rapidapi-host",
    "microsoft-translator-text.p.rapidapi.com"
  );
  XHR_TRANSLATE.send(JSON.stringify([{ text: text }]));
}

function dictionaryApiRequest(w) {
  if (w === undefined || w === "") {
    return;
  }
  XHR_DEFINITION.open(
    "GET",
    "https://api.dictionaryapi.dev/api/v2/entries/en/" + w
  );
  XHR_DEFINITION.send();
}

XHR_DEFINITION.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
    if (this.status === 404) {
      createRow(
        "Sorry",
        "no definitions found. We recommend you to stay calm."
      );
      return;
    }
    const responseData = JSON.parse(this.responseText);
    console.log(responseData);
    // console.log(responseData.toString());
    if (responseData[0]) {
      const { meanings } = responseData[0];
      let synonyms = [],
        definition = [];
      for (i in meanings) {
        for (key in meanings[i].definitions) {
          if (meanings[i].definitions[key].definition) {
            definition.push(meanings[i].definitions[key].definition);
          }
          if (meanings[i].definitions[key].synonyms.length > 0) {
            // spread operator to merge into one array
            synonyms.push(...meanings[i].definitions[key].synonyms);
          }
        }
      }
      console.log(synonyms);
      console.log(definition);
      let syn = "",
        def = "";
      synonyms.length > 0
        ? synonyms.forEach((el) => (syn += el + ";\n"))
        : (syn = "_ _ _");
      definition.length > 0
        ? definition.forEach((el) => (def += el + "\n\n"))
        : (def = "_ _ _");
      createRow("synonyms", syn);
      createRow("definition", def);
      return;
    }
  }
});

function hideDictionary() {
  cssProperties({
    "--left-side": "100%",
    "--right-side": "0%",
    "--width": "300px",
    "--right-side-visibility": "none",
  });
}

function showDictionary() {
  cssProperties({
    "--left-side": "50%",
    "--right-side": "50%",
    "--width": "500px",
    "--right-side-visibility": "visible",
  });
}

function rightSideVisibility() {
  // if (document.getElementsByClassName('glass-ui')[0].clientWidth === 500) {
  if (document.getElementsByClassName("glass-ui")[0].clientWidth === 500) {
    // hide dictionary
    hideDictionary();
    isDictionaryModeEnabled = false;
  } else {
    // show dictionary
    showDictionary();
    isDictionaryModeEnabled = true;
  }
}

function sendContent(arg1, arg2) {
  chrome.tabs.query({}, function (tabs) {
    let message = { target: "content", action: arg1, content: arg2 };
    for (let i = 0; i < tabs.length; ++i) {
      chrome.tabs.sendMessage(tabs[i].id, message);
    }
  });
}

function sendBackground(arg1, arg2, arg3 = "") {
  chrome.runtime.sendMessage({
    action: arg1,
    content: arg2,
    stateKey: arg3,
  });
}

function cssProperties(attrs) {
  for (let key in attrs) {
    document.documentElement.style.setProperty(key, attrs[key]);
  }
}

async function translatorApiRequest(t) {
  document
    .querySelectorAll(".dictionary-container-row")
    .forEach((e) => e.remove());
  if (t === "") {
    liveTranslation.innerText = "...";
    detectedLanguageLabel.innerText = "";
    createRow("---", "_ _ _");
    return;
  }

  [reqFinished, translatedBlocks] = [[], []];
  if (t.length > 220) {
    var v = t.match(/.*?\D[.!?]+|.*/gs);
    if (v[v.length - 1] === "") {
      v.pop();
    }
    // fill new boolean array to keep track of successful requests
    reqFinished = new Array(v.length).fill(false);
    loop1: for (var i = 0; i < v.length; i++) {
      translationApiRequest(v[i].toString());
      while (reqFinished === [] || reqFinished[i] === false) {
        if (t !== liveTranslationInput.value) {
          [reqFinished, translatedBlocks, detectedBlocks] = [[], [], []];
          lastSent = true;
        }
        if (lastSent === true) {
          break loop1;
        }
        await new Promise((r) => setTimeout(r, 500));
      }
    }
  } else {
    translationApiRequest(t);
  }
}

XHR_TRANSLATE.addEventListener("readystatechange", async function () {
  if (this.readyState === this.DONE) {
    const responseData = JSON.parse(this.responseText)[0];
    let language =
        (responseData.detectedLanguage &&
          responseData.detectedLanguage.language) ||
        [],
      translation = responseData.translations[0].text;

    if (reqFinished && reqFinished.length > 0) {
      translatedBlocks += translation;
      if (!detectedBlocks.includes(language) && language !== []) {
        detectedBlocks.push(language);
      }
      liveTranslation.innerText = translatedBlocks;
      if (reqFinished.indexOf(false) === reqFinished.length - 1) {
        [translatedBlocks, detectedBlocks] = [[], []];
      }
      if (reqFinished.indexOf(false) === -1) {
        [reqFinished, translatedBlocks, detectedBlocks] = [[], [], []];
        return;
      }
      reqFinished[reqFinished.indexOf(false)] = true;
    } else {
      if (lastSent === true) {
        lastSent = false;
        return;
      }
      detectedBlocks.push(language);
      liveTranslation.innerText = translation;
      detectedLanguageLabel.innerText = detectedBlocks;
      detectedBlocks = [];
    }
  }
});

function copyToClipboard(text) {
  var copyFrom = document.createElement("textarea");
  copyFrom.textContent = text;
  document.body.appendChild(copyFrom);
  copyFrom.select();
  document.execCommand("copy");
  copyFrom.blur();
  document.body.removeChild(copyFrom);
}

function dictate(t, l) {
  if (t.length <= 0 || t === "...") {
    var msg = new SpeechSynthesisUtterance();
    msg.text = 'Please fill "Ready to translate" input box';
    msg.lang = "en-US";
    window.speechSynthesis.speak(msg);
    return;
  }
  if (l === "auto" && detectedLanguageLabel.innerText.length > 0) {
    l = detectedLanguageLabel.innerText;
  }
  let languageFound = -1;
  voiceOptions.forEach((el, i) => {
    if (el.lang.indexOf(l) >= 0) {
      console.log(i + " " + voiceOptions[i].lang + " " + el.lang.indexOf(l));
      languageFound = voiceOptions[i].lang;
    }
  });
  var msg = new SpeechSynthesisUtterance();
  msg.text = t.toString();
  msg.lang =
    languageFound === -1 || languageFound === "en-GB" ? "en-US" : languageFound;
  window.speechSynthesis.speak(msg);
}

//back btn
const backBtn = document.getElementById("back_button");
backBtn.addEventListener("click", () => {
  chrome.runtime.sendMessage(
    {
      message: "back",
    },
    (response) => {}
  );
});

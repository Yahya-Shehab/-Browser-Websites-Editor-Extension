let user_signed_in = false;
chrome.storage.sync.get("user_signed_in", (data) => {
  if (data["user_signed_in"]) {
    if (data["user_signed_in"] === "true") {
      //to insure that the right popup opened
      chrome.storage.sync.get("lastPage", (data) => {
        if (data["lastPage"]) {
          chrome.action.setPopup({ popup: `${data["lastPage"]}` }, () => {});
        } else {
          chrome.action.setPopup({ popup: "../MainPage/index.html" }, () => {});
        }
      });
    }
  }
});
/**
 * to create the Auth2 URL
 * We need to send 7 URI encoded query parameters with the URL:
 * 1- client_id: this is the OAuth2 Client ID given by the Google Developer console
 * 2- response_type: we need an ‘id_token’ from Google
 * 3- redirect_uri: once the user has logged into their Google account, we need to tell Google where to redirect the user (back to our Chrome Extension)
 * 4- scope: we have to tell the endpoint what we want to do with the user
 * 5- state: a random string used for security purposes
 * 6- prompt: makes sure the user is “prompted” with the screen allowing them to login with a Google account
 * 7- nonce: a random string used for security purposes
 */
//we can get it from console developer google tool
const CLIENT_ID = encodeURIComponent(
  "1034214144503-eg8d91snihivk959gmo8pfqto5ohp3nc.apps.googleusercontent.com"
);
const RESPONSE_TYPE = encodeURIComponent("id_token");

//we can get it from console developer google tool
const REDIRECT_URI = encodeURIComponent(
  "https://bdfjochfgcpfokcplnlggfileanmopdb.chromiumapp.org"
);

/**
 * About STATE Param.
 * The state parameter is used to protect against Cross site request forgery(XSRF).
 * Your application generates a random string and sends it to the authorization server using the state parameter.
 * The authorization server sends back the state parameter.
 * If both state are the same => OK. If state parameters are different, someone else has initiated the request.
 */
const STATE = encodeURIComponent(
  "meet" + Math.random().toString(36).substring(2, 15)
);
const SCOPE = encodeURIComponent("openid");
const PROMPT = encodeURIComponent("consent");

function parseJwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}
function createOAuth2URLEndPoint() {
  let nonce = encodeURIComponent(
    Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
  );
  //just an api
  let openIdEndpointUrl = `https://accounts.google.com/o/oauth2/v2/auth
?client_id=${CLIENT_ID}
&response_type=${RESPONSE_TYPE}
&redirect_uri=${REDIRECT_URI}
&scope=${SCOPE}
&state=${STATE}
&nonce=${nonce}
&prompt=${PROMPT}`;
  return openIdEndpointUrl;
}
function isUserSignedIn() {
  return user_signed_in;
}
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === "login") {
    if (isUserSignedIn()) {
      console.log("User is already signed in");
    } else {
      //interactive : true --> to let the user to chose what account he/she want to login with
      chrome.identity.launchWebAuthFlow(
        {
          url: createOAuth2URLEndPoint(),
          interactive: true,
        },
        function (redirect_url) {
          //here we parse redirect_url to get just id_token
          let id_token = redirect_url.substring(
            redirect_url.indexOf("id_token=") + 9
          );
          id_token = id_token.substring(0, id_token.indexOf("&"));

          //in user_info after parse [sub] is always unique for each google account so if
          //i want to store anything related to the user then we use sub as an identifier for him/her
          const user_info = parseJwt(id_token);
          if (
            (user_info.iss === "https://accounts.google.com" ||
              user_info.iss === "accounts.google.com") &&
            user_info.aud === CLIENT_ID
          ) {
            console.log("User successfully signed in.");
            user_signed_in = true;
            chrome.storage.sync.set({
              user_signed_in: "true",
            });
            chrome.action.setPopup({ popup: "../MainPage/index.html" }, () => {
              chrome.storage.sync.set({
                lastPage: "../MainPage/index.html",
              });
              sendResponse("success");
            });
          } else {
            console.log("invalid credentials");
          }

          //to get the email for signedIn user
          //   chrome.identity.getProfileUserInfo((userInfo) => {
          //   });
        }
      );
    }

    return true;
  } else if (request.message === "darkTheme") {
    chrome.storage.sync.set({
      lastPage: "../DarkTheme/index.html",
    });
    chrome.action.setPopup({ popup: "../DarkTheme/index.html" }, () => {
      sendResponse("success");
    });
    return true;
  } else if (request.message === "darkThemeToggle") {
    chrome.alarms.clearAll();
    chrome.tabs.query({}, (tabs) => {
      tabs.forEach((tab) => {
        removeAllCSSFile(tab.id);

        if (tab.url.indexOf("twitter") != -1) {
          Valid(new URL(tab.url).hostname).then((notBlackList) => {
            if (notBlackList) {
              if (request.name === "light") {
                chrome.scripting
                  .removeCSS({
                    target: { tabId: tab.id },
                    files: ["/CSSTheme/twitter.css"],
                  })
                  .catch((e) => {});
              } else {
                chrome.scripting
                  .insertCSS({
                    target: { tabId: tab.id },
                    files: ["/CSSTheme/twitter.css"],
                  })
                  .catch((e) => {});
              }
            }
          });
        } else if (
          tab.url.indexOf("www.google") != -1 ||
          tab.url.indexOf("translate.google") != -1
        ) {
          Valid(new URL(tab.url).hostname).then((notBlackList) => {
            if (notBlackList) {
              if (request.name === "light") {
                chrome.scripting
                  .executeScript({
                    target: { tabId: tab.id },
                    files: ["js/injectedFiles/removeInjectionGoogle.js"],
                  })
                  .catch((e) => {});
              } else {
                chrome.scripting
                  .executeScript({
                    target: { tabId: tab.id },
                    files: ["js/injectedFiles/injectGoogle.js"],
                  })
                  .catch((e) => {});
              }
            }
          });
        } else if (tab.url.indexOf("amazon") != -1) {
          Valid(new URL(tab.url).hostname).then((notBlackList) => {
            if (notBlackList) {
              if (request.name === "light") {
                chrome.scripting
                  .executeScript({
                    target: { tabId: tab.id },
                    files: ["js/injectedFiles/removeInjectionAmazon.js"],
                  })
                  .catch((e) => {});
              } else {
                chrome.scripting
                  .executeScript({
                    target: { tabId: tab.id },
                    files: ["js/injectedFiles/injectAmazon.js"],
                  })
                  .catch((e) => {});
              }
            }
          });
        } else if (tab.url.indexOf("youtube") != -1) {
          Valid(new URL(tab.url).hostname).then((notBlackList) => {
            if (notBlackList) {
              if (request.name === "light") {
                chrome.scripting
                  .removeCSS({
                    target: { tabId: tab.id },
                    files: ["/CSSTheme/youtube.css"],
                  })
                  .catch((e) => {});
              } else {
                chrome.scripting
                  .insertCSS({
                    target: { tabId: tab.id },
                    files: ["/CSSTheme/youtube.css"],
                  })
                  .catch((e) => {});
              }
            }
          });
        } else {
          Valid(new URL(tab.url).hostname).then((notBlackList) => {
            if (notBlackList) {
              if (request.name === "light") {
                chrome.scripting
                  .removeCSS({
                    target: { tabId: tab.id },
                    files: ["/CSSTheme/backgroundStyle.css"],
                  })
                  .catch((e) => {});
              } else {
                chrome.scripting
                  .insertCSS({
                    target: { tabId: tab.id },
                    files: ["/CSSTheme/backgroundStyle.css"],
                  })
                  .catch((e) => {});
              }
            }
          });
        }
      });
    });
    return true;
  } else if (request.message === "back") {
    chrome.storage.sync.set({
      lastPage: "../MainPage/index.html",
    });
    chrome.action.setPopup({ popup: "../MainPage/index.html" }, () => {
      sendResponse("success");
    });
  } else if (request.message === "colorPicker") {
    chrome.storage.sync.set({
      lastPage: "../ColorPicker/index.html",
    });
    chrome.action.setPopup({ popup: "../ColorPicker/index.html" }, () => {
      sendResponse("success");
    });
    return true;
  } else if (request.message === "screenshotAndRecorder") {
    chrome.storage.sync.set({
      lastPage: "../Screenshot_Recorder/index.html",
    });
    chrome.action.setPopup(
      { popup: "../Screenshot_Recorder/index.html" },
      () => {
        sendResponse("success");
      }
    );
    return true;
  } else if (request.message === "translator") {
    chrome.storage.sync.set({
      lastPage: "../Translator/popup.html",
    });
    chrome.action.setPopup({ popup: "../Translator/popup.html" }, () => {
      sendResponse("success");
    });
    return true;
  } else if (request.message === "popup") {
    captureSelectedPart(request.tab);
    return true;
  } else if (request.message === "captured") {
    capture(request)
      .then((a) => save(a, sender.tab))
      .catch((e) => {
        console.warn(e);
      });
  } else if (request.message === "styleChanger") {
    chrome.storage.sync.set({
      lastPage: "../StyleChanger/index.html",
    });
    chrome.action.setPopup({ popup: "../StyleChanger/index.html" }, () => {
      sendResponse("success");
    });
    return true;
  }
  return true;
});
function captureSelectedPart(tab) {
  chrome.scripting.insertCSS(
    {
      target: { tabId: tab.id },
      files: ["js/injectCanvasScreenshot/inject.css"],
    },
    () => {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["js/injectCanvasScreenshot/inject.js"],
      });
    }
  );
}
function capture(request) {
  return new Promise((resolve, reject) => {
    chrome.tabs.captureVisibleTab(null, { format: "png" }, (dataUrl) => {
      const lastError = chrome.runtime.lastError;
      if (lastError) {
        return reject(lastError);
      }

      if (!request) {
        return fetch(dataUrl)
          .then((r) => r.blob())
          .then(resolve, reject);
      }

      const left = request.left * request.devicePixelRatio;
      const top = request.top * request.devicePixelRatio;
      const width = request.width * request.devicePixelRatio;
      const height = request.height * request.devicePixelRatio;

      const canvas = new OffscreenCanvas(width, height);
      const ctx = canvas.getContext("2d");

      fetch(dataUrl)
        .then((r) => r.blob())
        .then(async (blob) => {
          const img = await createImageBitmap(blob);

          if (width && height) {
            ctx.drawImage(img, left, top, width, height, 0, 0, width, height);
          } else {
            ctx.drawImage(img, 0, 0);
          }
          resolve(
            await canvas.convertToBlob({
              type: "image/png",
              quality: 0.95,
            })
          );
        })
        .catch(reject);
    });
  });
}

function save(blob, tab) {
  console.log(tab);
  let filename = tab.title;
  const reader = new FileReader();
  reader.onload = () => {
    // save to disk
    chrome.downloads.download(
      {
        url: reader.result,
        filename: filename + ".png",
      },
      () => {
        const lastError = chrome.runtime.lastError;
        if (lastError) {
          chrome.downloads.download(
            {
              url: reader.result,
              filename:
                filename.replace(
                  /[`~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\/]/gi,
                  "-"
                ) + ".png",
            },
            () => {
              const lastError = chrome.runtime.lastError;
              if (lastError) {
                chrome.downloads.download({
                  url: reader.result,
                  filename: "image.png",
                });
              }
            }
          );
        }
      }
    );
  };
  reader.readAsDataURL(blob);
}
//listen to change state of chrome storage
chrome.storage.onChanged.addListener(function (changes, namespace) {
  if (changes["whiteListWebsite"]) {
    chrome.tabs.query({}, (tabs) => {
      tabs.forEach((tab) => {
        removeAllCSSFile(tab.id);
      });
    });
    applyForTimer();
  }
});

async function Valid(currentUrl) {
  try {
    let a = chrome.storage.sync.get(["whiteListWebsite"]);
    let b = await a;
    let arr = JSON.parse(b["whiteListWebsite"]);
    for (let i = 0; i < arr.length; i++) {
      if (currentUrl == arr[i].hostName) return false;
    }
  } catch (e) {
    return true;
  }
  return true;
}
function removeAllCSSFile(tabId) {
  // we should remove what we injuct by click or update because we do not need any duplicate of injunction
  chrome.scripting
    .removeCSS({
      target: { tabId: tabId },
      files: ["/CSSTheme/twitter.css"],
    })
    .catch((e) => {});
  chrome.scripting
    .executeScript({
      target: { tabId: tabId },
      files: ["/js/injectedFiles/removeInjectionAmazon.js"],
    })
    .catch((e) => {});
  chrome.scripting
    .executeScript({
      target: { tabId: tabId },
      files: ["/js/injectedFiles/removeInjectionGoogle.js"],
    })
    .catch((e) => {});
  chrome.scripting
    .removeCSS({
      target: { tabId: tabId },
      files: ["/CSSTheme/youtube.css"],
    })
    .catch((e) => {});
  chrome.scripting
    .removeCSS({
      target: { tabId: tabId },
      files: ["/CSSTheme/backgroundStyle.css"],
    })
    .catch((e) => {});
}
let flag = true;
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete") {
    flag = true;
  }
  if (changeInfo.status === "loading" && flag) {
    removeAllCSSFile(tabId);
    chrome.storage.sync.get("data-toggle", (data) => {
      if (tab.url.indexOf("twitter") != -1) {
        Valid(new URL(tab.url).hostname).then((notBlackList) => {
          if (notBlackList) {
            if (data["data-toggle"] == "dark") {
              chrome.scripting
                .insertCSS({
                  target: { tabId: tabId },
                  files: ["/CSSTheme/twitter.css"],
                })
                .catch((e) => {});
            }
          }
        });
      } else if (
        tab.url.indexOf("www.google") != -1 ||
        tab.url.indexOf("translate.google") != -1
      ) {
        Valid(new URL(tab.url).hostname).then((notBlackList) => {
          if (notBlackList) {
            if (data["data-toggle"] == "dark") {
              chrome.scripting
                .executeScript({
                  target: { tabId: tabId },
                  files: ["/js/injectedFiles/injectGoogle.js"],
                })
                .catch((e) => {});
            }
          }
        });
      } else if (tab.url.indexOf("amazon") != -1) {
        Valid(new URL(tab.url).hostname).then((notBlackList) => {
          if (notBlackList) {
            if (data["data-toggle"] == "dark") {
              chrome.scripting
                .executeScript({
                  target: { tabId: tabId },
                  files: ["/js/injectedFiles/injectAmazon.js"],
                })
                .catch((e) => {});
            }
          }
        });
      } else if (tab.url.indexOf("youtube") != -1) {
        Valid(new URL(tab.url).hostname).then((notBlackList) => {
          if (notBlackList) {
            if (data["data-toggle"] == "dark") {
              chrome.scripting
                .insertCSS({
                  target: { tabId: tabId },
                  files: ["/CSSTheme/youtube.css"],
                })
                .catch((e) => {});
            }
          }
        });
      } else {
        Valid(new URL(tab.url).hostname).then((notBlackList) => {
          if (notBlackList) {
            if (data["data-toggle"] == "dark") {
              chrome.scripting
                .insertCSS({
                  target: { tabId: tabId },
                  files: ["/CSSTheme/backgroundStyle.css"],
                })
                .catch((e) => {});
            }
          }
        });
      }
    });
    flag = false;
  }
});
//timer
chrome.alarms.onAlarm.addListener((alarm) => {
  chrome.storage.sync.get("data-toggle", (data) => {
    if (alarm.name === "fromAlarm") {
      if (data["data-toggle"] === "light") {
        chrome.storage.sync.set({ "data-toggle": "dark" });
        applyForTimer();
      } else {
        chrome.alarms.clearAll();
        chrome.storage.sync.remove("fromInput");
        chrome.storage.sync.remove("toInput");
      }
    } else {
      if (data["data-toggle"] === "dark") {
        chrome.storage.sync.set({ "data-toggle": "light" });
        applyForTimer();
      }
    }
  });
});

function applyForTimer() {
  chrome.storage.sync.get("data-toggle", (data) => {
    chrome.tabs.query({}, (tabs) => {
      tabs.forEach((tab) => {
        if (tab.url.indexOf("twitter") != -1) {
          Valid(new URL(tab.url).hostname).then((notBlackList) => {
            if (notBlackList) {
              if (data["data-toggle"] === "light") {
                chrome.scripting
                  .removeCSS({
                    target: { tabId: tab.id },
                    files: ["/CSSTheme/twitter.css"],
                  })
                  .catch((e) => {});
              } else {
                chrome.scripting
                  .insertCSS({
                    target: { tabId: tab.id },
                    files: ["/CSSTheme/twitter.css"],
                  })
                  .catch((e) => {});
              }
            }
          });
        } else if (
          tab.url.indexOf("www.google") != -1 ||
          tab.url.indexOf("translate.google") != -1
        ) {
          Valid(new URL(tab.url).hostname).then((notBlackList) => {
            if (notBlackList) {
              if (data["data-toggle"] === "light") {
                chrome.scripting
                  .executeScript({
                    target: { tabId: tab.id },
                    files: ["/js/injectedFiles/removeInjectionGoogle.js"],
                  })
                  .catch((e) => {});
              } else {
                chrome.scripting
                  .executeScript({
                    target: { tabId: tab.id },
                    files: ["/js/injectedFiles/injectGoogle.js"],
                  })
                  .catch((e) => {});
              }
            }
          });
        } else if (tab.url.indexOf("amazon") != -1) {
          Valid(new URL(tab.url).hostname).then((notBlackList) => {
            if (notBlackList) {
              if (data["data-toggle"] === "light") {
                chrome.scripting
                  .executeScript({
                    target: { tabId: tab.id },
                    files: ["/js/injectedFiles/removeInjectionAmazon.js"],
                  })
                  .catch((e) => {});
              } else {
                chrome.scripting
                  .executeScript({
                    target: { tabId: tab.id },
                    files: ["/js/injectedFiles/injectAmazon.js"],
                  })
                  .catch((e) => {});
              }
            }
          });
        } else if (tab.url.indexOf("youtube") != -1) {
          Valid(new URL(tab.url).hostname).then((notBlackList) => {
            if (notBlackList) {
              if (data["data-toggle"] === "light") {
                chrome.scripting
                  .removeCSS({
                    target: { tabId: tab.id },
                    files: ["/CSSTheme/youtube.css"],
                  })
                  .catch((e) => {});
              } else {
                chrome.scripting
                  .insertCSS({
                    target: { tabId: tab.id },
                    files: ["/CSSTheme/youtube.css"],
                  })
                  .catch((e) => {});
              }
            }
          });
        } else {
          Valid(new URL(tab.url).hostname).then((notBlackList) => {
            if (notBlackList) {
              if (data["data-toggle"] === "light") {
                chrome.scripting
                  .removeCSS({
                    target: { tabId: tab.id },
                    files: ["/CSSTheme/backgroundStyle.css"],
                  })
                  .catch((e) => {});
              } else {
                chrome.scripting
                  .insertCSS({
                    target: { tabId: tab.id },
                    files: ["/CSSTheme/backgroundStyle.css"],
                  })
                  .catch((e) => {});
              }
            }
          });
        }
      });
      return true;
    });
  });
}
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "SearchByGoogle",
    title: "Search By Google ",
    type: "normal",
    contexts: ["selection"],
  });

  chrome.contextMenus.create({
    id: "SearchByYoutube",
    title: "Search By Youtube",
    type: "normal",
    contexts: ["selection"],
  });

  chrome.contextMenus.create({
    id: "GoogleTrans",
    title: "Translate By Google Translate",
    type: "normal",
    contexts: ["selection"],
  });

  chrome.contextMenus.create({
    id: "SearchByGithub",
    title: "Search By Github",
    type: "normal",
    contexts: ["selection"],
  });
});
chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === "SearchByGoogle") {
    chrome.tabs.create({
      url:
        "https://www.google.com/search?q=" +
        encodeURIComponent(info.selectionText),
    });
  }
  if (info.menuItemId === "SearchByYoutube") {
    chrome.tabs.create({
      url:
        "https://www.youtube.com//results?search_query=" +
        encodeURIComponent(info.selectionText),
    });
  }
  if (info.menuItemId === "GoogleTrans") {
    chrome.tabs.create({
      url:
        "https://translate.google.com/?text=" +
        encodeURIComponent(info.selectionText),
    });
  }
  if (info.menuItemId === "SearchByGithub") {
    chrome.tabs.create({
      url:
        "https://github.com/search?q=" + encodeURIComponent(info.selectionText),
    });
  }
});

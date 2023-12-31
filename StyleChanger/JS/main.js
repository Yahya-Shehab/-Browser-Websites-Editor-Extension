function pickAnElement() {
  var DomOutline = function (options) {
    "use strict";

    options = options || {};

    var pub = {},
      self = {
        opts: {
          namespace: options.namespace || "DomOutline",
          borderWidth: options.borderWidth || 2,
          onClick: options.onClick || false,
          border: options.border || false,
          realtime: options.realtime || false,
          label: options.label || false,
        },
        keyCodes: {
          BACKSPACE: 8,
          ESC: 27,
          DELETE: 46,
        },
        active: false,
        initialized: false,
        elements: {},
      };

    function writeStylesheet(css) {
      var element = document.createElement("style");
      element.type = "text/css";
      document.getElementsByTagName("head")[0].appendChild(element);

      if (element.styleSheet) {
        element.styleSheet.cssText = css; // IE
      } else {
        element.innerHTML = css; // Non-IE
      }
    }

    function initStylesheet() {
      var css = "";

      if (self.initialized !== true) {
        css +=
          "." +
          self.opts.namespace +
          " {" +
          "    background: rgba(0, 153, 204, 0.5);" +
          "    position: absolute;" +
          "    z-index: 1000000;" +
          "    pointer-events: none;" +
          "}" +
          "." +
          self.opts.namespace +
          "_label {" +
          "    background: #09c;" +
          "    border-radius: 2px;" +
          "    color: #fff;" +
          "    font: bold 12px/12px Helvetica, sans-serif;" +
          "    padding: 4px 6px;" +
          "    position: absolute;" +
          "    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);" +
          "    z-index: 1000001;" +
          "    pointer-events: none;" +
          "}" +
          "." +
          self.opts.namespace +
          "_box {" +
          "    background: rgba(0, 153, 204, 0.5);" +
          "    position: absolute;" +
          "    z-index: 1000000;" +
          "    pointer-events: none;" +
          "}";

        writeStylesheet(css);
        self.initialized = true;
      }
    }

    function createOutlineElements() {
      self.elements.label = jQuery("<div>")
        .addClass(self.opts.namespace + "_label")
        .appendTo("body");
      self.elements.top = jQuery("<div>")
        .addClass(self.opts.namespace)
        .appendTo("body");
      self.elements.bottom = jQuery("<div>")
        .addClass(self.opts.namespace)
        .appendTo("body");
      self.elements.left = jQuery("<div>")
        .addClass(self.opts.namespace)
        .appendTo("body");
      self.elements.right = jQuery("<div>")
        .addClass(self.opts.namespace)
        .appendTo("body");

      self.elements.box = jQuery("<div>")
        .addClass(self.opts.namespace + "_box")
        .appendTo("body");
    }

    function removeOutlineElements() {
      jQuery.each(self.elements, function (name, element) {
        element.remove();
      });
    }

    function compileLabelText(element, width, height) {
      var label = element.tagName.toLowerCase();
      if (element.id) {
        label += "#" + element.id;
      }
      if (element.className) {
        label += (
          "." + jQuery.trim(element.className).replace(/ /g, ".")
        ).replace(/\.\.+/g, ".");
      }
      return label + " (" + Math.round(width) + "x" + Math.round(height) + ")";
    }

    function getScrollTop() {
      if (!self.elements.window) {
        self.elements.window = jQuery(window);
      }
      return self.elements.window.scrollTop();
    }

    function stopOnEscape(e) {
      if (
        e.keyCode === self.keyCodes.ESC ||
        e.keyCode === self.keyCodes.BACKSPACE ||
        e.keyCode === self.keyCodes.DELETE
      ) {
        pub.stop();
      }

      return false;
    }

    function draw(e) {
      try {
        if (e.target.className.indexOf(self.opts.namespace) !== -1) {
          return;
        }
      } catch {}

      pub.element = e.target;
      var b = self.opts.borderWidth,
        scroll_top = getScrollTop(),
        pos = pub.element.getBoundingClientRect(),
        top = pos.top + scroll_top,
        label_text = "",
        label_top = 0,
        label_left = 0;

      if (self.opts.label) {
        label_text = compileLabelText(pub.element, pos.width, pos.height);
        label_top = Math.max(0, top - 20 - b, scroll_top);
        label_left = Math.max(0, pos.left - b);
        self.elements.label
          .css({ top: label_top, left: label_left })
          .text(label_text);
      }

      if (self.opts.border) {
        self.elements.top.css({
          top: Math.max(0, top - b),
          left: pos.left - b,
          width: pos.width + b,
          height: b,
        });
        self.elements.bottom.css({
          top: top + pos.height,
          left: pos.left - b,
          width: pos.width + b,
          height: b,
        });
        self.elements.left.css({
          top: top - b,
          left: Math.max(0, pos.left - b),
          width: b,
          height: pos.height + b,
        });
        self.elements.right.css({
          top: top - b,
          left: pos.left + pos.width,
          width: b,
          height: pos.height + b * 2,
        });
      } else {
        self.elements.box.css({
          top: pos.top,
          left: pos.left,
          width: pos.width,
          height: pos.height,
        });
      }
    }

    function clickHandler(e) {
      if (!self.opts.realtime) {
        draw(e);
      }

      self.opts.onClick(pub.element);
      if (!self.opts.dontStop) pub.stop();
      return false;
    }

    pub.start = function () {
      console.log("ahmad now");
      initStylesheet();
      if (self.active !== true) {
        self.active = true;
        createOutlineElements();

        jQuery("body").bind("keyup." + self.opts.namespace, stopOnEscape);
        if (self.opts.onClick) {
          setTimeout(function () {
            jQuery("body").bind("click." + self.opts.namespace, clickHandler);
          }, 50);
        }

        if (self.opts.realtime) {
          jQuery("body").bind("mousemove." + self.opts.namespace, draw);
        }
      }
    };

    pub.stop = function () {
      self.active = false;
      removeOutlineElements();
      jQuery("body")
        .off("mousemove." + self.opts.namespace)
        .off("keyup." + self.opts.namespace)
        .off("click." + self.opts.namespace);
    };

    return pub;
  };
  var selectedComponent = 0;
  var myExampleClickHandler = function (event) {
    document.getElementById("mainMenu").style.display = "flex";
    selectedComponent = event;
    // chrome.storage.local.set(event);
  };
  let deleteElement = document.getElementById("deleteElement");
  deleteElement.addEventListener("click", () => {
    selectedComponent.style.display = "none";
  });
  let fontfamilys = document.getElementById("selectFontFamily");
  fontfamilys.addEventListener("input", () => {
    selectedComponent.style.fontFamily = fontfamilys.value;
  });

  let fontSelect = document.getElementById("selectFontSize");
  fontSelect.addEventListener("input", () => {
    console.log(selectedComponent);
    console.log(fontSelect.value);
    selectedComponent.style.cssText = `font-size: ${fontSelect.value}px !important;`;
  });

  let boldFontBtn = document.getElementById("boldFontBtn");
  boldFontBtn.addEventListener("click", () => {
    selectedComponent.style.fontWeight = "bold";
  });

  let normalFontBtn = document.getElementById("normalFontBtn");
  normalFontBtn.addEventListener("click", () => {
    selectedComponent.style.fontWeight = "normal";
  });

  let capitalLetterFontBtn = document.getElementById("capitalLetterFontBtn");
  capitalLetterFontBtn.addEventListener("click", () => {
    selectedComponent.style.textTransform = "capitalize";
  });

  let uppercaseLetterFontBtn = document.getElementById(
    "uppercaseLetterFontBtn"
  );
  uppercaseLetterFontBtn.addEventListener("click", () => {
    selectedComponent.style.textTransform = "uppercase";
  });

  let lowercaseLetterFontBtn = document.getElementById(
    "lowercaseLetterFontBtn"
  );
  lowercaseLetterFontBtn.addEventListener("click", () => {
    selectedComponent.style.textTransform = "lowercase";
  });

  let textLineHeight = document.getElementById("text-line-height");
  textLineHeight.addEventListener("input", () => {
    selectedComponent.style.lineHeight = textLineHeight.value;
  });

  let letterSpacingFont = document.getElementById("letterSpacingFont");
  letterSpacingFont.addEventListener("input", () => {
    selectedComponent.style.letterSpacing = letterSpacingFont.value + "px";
  });

  let backgroundColor = document.getElementById("backgroundColor");
  backgroundColor.addEventListener("input", () => {
    selectedComponent.style.background = backgroundColor.value;
  });

  let fontColor = document.getElementById("fontColor");
  fontColor.addEventListener("input", () => {
    selectedComponent.style.color = fontColor.value;
  });
  let hideMenu = document.getElementById("hideMenu");
  hideMenu.addEventListener("click", () => {
    document.getElementById("mainMenu").style.display = "none";
  });

  var myDomOutline = DomOutline({
    onClick: myExampleClickHandler,
    border: true,
    realtime: true,
    label: true,
    stopOnClick: true,
  });
  myDomOutline.start();
}

//to begin outline mode
document.getElementById("selectionBtn").addEventListener("click", () => {
  console.log("ahmad here");
  chrome.tabs.query({ active: true, currentWindow: true }, (tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab[0].id },
      function: pickAnElement,
    });
  });
});

//back button
const backBtn = document.querySelector(".back");
backBtn.addEventListener("click", () => {
  chrome.runtime.sendMessage(
    {
      message: "back",
    },
    (response) => {}
  );
});

function injectAmazon() {
  try {
    let style = document.createElement("style");
    style.className = "darkThemeInject";
    let textNode = document.createTextNode(`:root {
  --background: #181818;
  --background-2: #202020;
  --background-3: #151518;
  --background-4: black;
  --background-5: #303030;
  --background-alert: #0c1827;
  --foreground: #fff;
  --foreground-2: #fff;
  --foreground-3: #fff;
  --foreground-disabled: #828282;
  --main: #3086b7;
  --main-dark: #9f540a;
  --red: #aeaeae;
  --error: #5cc1fc;
  --warn: #baba03;
  --link: #3086b7;
  --link-visited: #4280a4;
  --border: #303030;
  --border-2: #303030;
  --border-input: 1px solid #696969;
  --table-header: #3b311b;
  --table-border: #696969;
  --table-background: #292929;
}
body {
  font-size: 13px;
  line-height: 19px;
  color: var(--foreground) !important;
  font-family: "Open Sans", Arial, sans-serif;
  background-color: var(--background) !important;
}
.r4m-sou-container {
  border: 1px solid var(--border);
  color: var(--foreground-3);
}
.r4m-sou-comparison-header {
  border-bottom: 1px solid var(--border);
}
.r4m-sou-comparison-details {
  border-left: 1px solid var(--border);
}
.r4m-sou-comparison-header-price * {
  color: var(--red);
}
::-webkit-scrollbar {
  max-width: 14px !important;
  background-color: var(--background-2) !important;
}
::-webkit-scrollbar-thumb {
  min-height: 28px !important;
  background-color: var(--background) !important;
}
::-webkit-scrollbar-button {
  background-color: var(--background) !important;
}
::-webkit-scrollbar-track,
::-webkit-scrollbar-corner {
  background-color: var(--background-2) !important;
}
.atsTextButtonSelect,
.atsTextButtonSelect div,
.atsTextButtonSelect label,
.atsTextButtonSelect li,
.atsTextButtonSelect span,
.atsTextButtonSelect ul {
  color: #000 !important;
}
.custom-view-options {
  border-bottom: 1px solid var(--border);
}
a:active,
a:visited {
  text-decoration: none;
  color: var(--link-visited);
}
.ya-card__heading--rich {
  color: var(--link-visited);
}
.ifSloc,
.izLmw,
.cHqkgh {
  background: var(--background);
}
.iWywOi,
[data-creative-type="MultiCardCreativeDesktop"] .sb_3QcWmNyh {
  color: var(--foreground);
}
/* Move info hud scrolling arrows to center */
.hud-white-dashboard .feed-carousel-control.feed-right,
.hud-white-dashboard .feed-carousel-control.feed-left {
  top: 120px !important;
}
/* Darken info hud scrolling arrows */
.hud-white-dashboard .feed-carousel-control.feed-right,
.hud-white-dashboard .feed-carousel-control.feed-left {
  background: var(--background-2) !important;
}
.hud-profilecard-card {
  background-color: var(--border) !important;
}
#errorPageContainer .widgetLink-group a:hover,
#mapTracking-bottomSheet-container .widgetLink-group a:hover,
#pageContainer .widgetLink-group a:hover {
  background-color: var(--background-2);
}
#productDescription ul {
  color: var(--foreground-3);
}
#twister .swatches li {
  border: none;
}
.a-text-right {
  margin-right: 10px;
  background-color: var(--background) !important;
}
.a-button-disabled {
  border-color: var(--border) !important;
}
.a-button {
  background: transparent;
  border-color: transparent;
  border-radius: 5px;
}
.a-button:hover {
  border-color: transparent;
}
.list-address-selected {
  background-color: var(--background);
  border: 1px solid var(--border);
}
.address-row {
  padding: 9px;
  border: 1px solid var(--border);
}
.a-box-title .a-box-inner {
  box-shadow: none;
  background: var(--background);
}
.pay-desktop .payment-selected {
  background-color: var(--background);
  border: 1px solid var(--border);
}
.comparison_table tr:nth-child(even) td.comparison_baseitem_column {
  background-color: var(--background);
}
.aplus-v2 .apm-sidemodule,
.aplus-v2 .apm-tablemodule-image {
  background-color: var(--background-2) !important;
}
.aplus-v2 th.apm-tablemodule-keyhead {
  border-top: 1px solid var(--border);
  background-color: var(--background) !important;
}
.aplus-v2 .apm-tablemodule-keyhead {
  border-right: 1px solid var(--border);
}
.aplus-v2 .apm-hovermodule-slides {
  background-color: var(--background) !important;
}
.aplus-v2 .apm-tablemodule-valuecell.selected {
  background-color: var(--background-2);
}
.dv-dp-top-wrapper {
  background: var(--background-2) !important;
}
.nav-catFlyout .nav-promo {
  display: none;
}
.desktop #itemImages-container .imageRow-oneBoxLayout img,
.tablet #itemImages-container .imageRow-oneBoxLayout img {
  border: 4px solid var(--border-2);
}
#promise-container #primaryStatus.text-normal {
  color: var(--error);
}
#delivered-marker:before,
.milestone.reached .milestone-marker:before {
  background-color: var(--main-dark) !important;
  border: 3px solid var(--main) !important;
}
#cardsContainer .cardContainer {
  border: 4px solid var(--border-2);
  background: var(--background);
}
.milestone-bar_foreground {
  background-color: var(--main) !important;
}
#deliveredAddress-container .reached .milestone-primaryMessage,
#progressTracker-container .reached .milestone-primaryMessage {
  color: var(--foreground-3);
}
#errorPageContainer .widgetHeader,
#mapTracking-bottomSheet-container .widgetHeader,
#pageContainer .widgetHeader {
  color: var(--foreground-3);
}
.a-profile-name {
  color: var(--foreground-3) !important;
}
.bia-price {
  color: var(--red) !important;
}
.bia-header {
  color: var(--foreground-2);
}
.a-price[data-a-color="base"] {
  color: var(--red) !important;
}
.deals-shoveler.fresh-shoveler {
  background: none;
}
.deals-shoveler .dealPrice {
  color: var(--red);
}
.hud-white-dashboard .hud-feed-carousel {
  border: 1px solid var(--border);
  margin-top: 10px;
}
#nav-npm-header {
  color: var(--foreground) !important;
}
.black-text-color {
  color: var(--foreground) !important;
}
.a-color-tertiary {
  color: var(--foreground) !important;
}
/** quick look **/
#gw-asin-popover .title {
  color: var(--foreground) !important;
}
#gw-asin-popover {
  background: var(--background-2) !important;
}
#gw-asin-popover .pricing .price,
#gw-asin-popover .pricing .price .a-color-price {
  color: var(--red) !important;
}
.sims-wrapper {
  background: var(--background) !important;
}
/** adjust price colour here **/
.a-color-price {
  color: var(--red) !important;
}
/** New top area nightmare **/
#pageContent #gw-dashboard-grid #gw-dashboard-ad {
  display: none;
}
.hud-white-dashboard {
  background-color: var(--background-2) !important;
}
.a-fixed-right-flipped-grid .a-col-left {
  margin-top: 10px;
}
.hud-white-dashboard .hud-feed-carousel .feed-carousel-card {
  border-radius: 5px;
  background: var(--background) !important;
  -webkit-box-shadow: 2px 2px 5px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 2px 5px -1px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 2px 5px -1px rgba(0, 0, 0, 0.75);
}
.hud-profilecard-card {
  background: var(--foreground-3) !important;
  border-radius: 5px;
}
.hud-white-dashboard .hud-card-subtext-line1 {
  color: var(--link) !important;
}
/** END New top nightmare **/

/** New layout fixes WIP **/
#gw-content-grid-bottom > div,
#gw-content-grid-top > div {
  background: transparent !important;
  border: 0px solid var(--border) !important;
  padding-right: 0px !important;
  margin-top: 0px !important;
}
#pageContent .sidebar,
#sidebar {
  display: none !important;
}
.profile-v5-desktop-vis-background,
.profile-v5-desktop-own-background {
  background-color: var(--background-2) !important;
  background-size: 10px 10px !important;
  background-image: linear-gradient(
    45deg,
    rgba(100, 100, 100, 0.2) 25%,
    transparent 25%,
    transparent 50%,
    rgba(100, 100, 100, 0.2) 50%,
    rgba(100, 100, 100, 0.2) 75%,
    transparent 75%,
    transparent
  ) !important;
  min-height: 100% !important;
  height: 100% !important;
}
.profile-v5-desktop-vis,
.profile-v5-desktop-own {
  border-right: 10px solid var(--border-2) !important;
  border-left: 10px solid var(--border-2) !important;
  background-color: var(--border-2) !important;
  -webkit-box-shadow: 0px 0px 33px -5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 33px -5px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 33px -5px rgba(0, 0, 0, 0.75);
}
.card.desktop.sub-card {
  background: var(--background-2) !important;
  box-shadow: none !important;
}
.card.desktop {
  border: none !important;
  background: var(--background-2) !important;
}
.product-box {
  border: 0.1rem solid var(--border-2) !important;
  background-color: var(--background) !important;
}
.a-form-actions {
  background: transparent !important;
}
td[style$="background-color: rgb(255, 255, 222);"] {
  background-color: var(--background-2) !important;
}
.askInlineWidget .vote input[type="submit"] {
  background-color: transparent;
}
.a-expander-content-fade {
  display: none !important;
}
.fadeGradient {
  background: transparent !important;
}
p:last-child {
  color: var(--foreground) !important;
}
div[style$="background-color:#eff7fe;border:1px solid #0f3c6d;padding:10px;text-align:left;"] {
  background-color: var(--border-2) !important;
  border: none !important;
}
div[class$="a-box-inner a-alert-container"],
div[class="a-box-inner a-alert-container"],
div[class$="ewc-scroll-area"],
div[class="ewc-scroll-area"],
.a-accordion .a-accordion-active .a-accordion-row,
.a-accordion .a-accordion-active .a-accordion-inner,
.a-accordion .a-accordion-row {
  background-color: var(--border-2) !important;
  color: var(--error) !important;
}
#nav-flyout-accountList #nav-al-your-account {
  border-left: 1px solid var(--border-2) !important;
}
#nav-flyout-wl-alexa {
  border-bottom: 1px solid var(--border-2) !important;
}
#actionPanelWrapper.burj {
  background: transparent !important;
}
#actionPanel #merchant-info {
  color: var(--foreground);
}
form-actions {
  border-top: 1px solid var(--border-2) !important;
  background: var(--background-2) !important;
}
.custom-view-options a.item:active,
.custom-view-options a.item:link,
.custom-view-options a.item:visited {
  color: var(--foreground) !important;
}
#nav-programs #nav-link-prime .nav-line-2,
#nav-programs #nav-z-link-prime .nav-line-2,
#nav-programs #nav-z-link-tryprime .nav-line-2 {
  color: #3288c5 !important;
}
#nav-programs #nav-z-link-video .nav-line-2 {
  color: var(--border-2) !important;
}
#nav-programs #nav-z-link-music .nav-line-2 {
  color: var(--border-2) !important;
}
.cBoxTL,
.cBoxTR,
.cBoxBL,
.cBoxBR {
  display: none !important;
}
#navbar .nav-flyout-sidePanel {
  border: 1px solid var(--border-2) !important;
  background: var(--background-2) !important;
}
.s-result-card,
.s-result-card-for-container .s-item-container {
  border: 1px solid var(--border-2) !important;
  box-shadow: none !important;
  background-image: none !important;
  background: var(--background) !important;
}
.gcPagGradient,
.gcPagFooterGradient {
  display: none !important;
}
.gcNewBalanceBox .autoReload {
  background-color: transparent !important;
  color: #ddd !important;
}
.gcNewTopBox h3 {
  color: #ddd !important;
}
.gcYANavCurrent {
  color: #888;
}
.gcYASubnav li.selected {
  background-color: var(--background-2);
  border-left: none !important;
  border-right: none;
}
.gcYASubnav li {
  background-color: var(--background) !important;
  border-bottom: 1px solid var(--background);
  border-left: none !important;
}
.gcYASubnav li.first {
  border-top: solid 1px var(--background);
}
gcYASubnav li.first {
  border-top: solid 1px var(--border-2) !important;
}
.RBB1,
.RBB11,
.RBB12,
.RBB14,
.RBB2 {
  border: 1px solid var(--border-2) !important;
}
div.imageInformation {
  background-color: transparent !important;
}
.a-expander-partial-collapse-header {
  background-color: var(--background-2) !important;
}
.a-expander-content-fade {
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    var(--background)
  ) !important;
}
.stats-bar {
  background-color: var(--background) !important;
}
.public-name-text {
  color: var(--foreground-3) !important;
}
td[bgcolor="#ffffff"] {
  background-color: var(--background) !important;
}
td[bgcolor="#DDDDCC"] {
  background-color: var(--background) !important;
}
.grayborder {
  border: 1px var(--border-2) solid;
  background: var(--background-2) !important;
}
.quotes-bubble-arrow {
  border-color: #3288c5 rgba(238, 238, 238, 0) !important;
}
.wl-list.selected {
  background-color: var(--background-2);
}
.custom-view-options li.selected {
  border-bottom-color: #3288c5 !important;
}
.nav-flyout {
  background: var(--background) !important;
  border: 1px solid var(--border-2) !important;
}
.nav-flyout .nav-arrow-inner {
  border-bottom: 9px solid var(--background) !important;
}
.nav-tpl-itemList .nav-text {
  color: var(--foreground-3) !important;
}
.nav-catFlyout .nav-flyout-content .nav-hasPanel {
  background-image: none !important;
}
#pet_your_prime .pet_your_prime_header {
  color: var(--foreground-3);
}
.a-popover-inner {
  background-color: var(--border-2) !important;
}
.w-popover-header {
  background-color: var(--border-2) !important;
}
.w-box .w-box-inner {
  padding: 0px !important;
}
.a-popover-header {
  background: var(--background-2) !important;
  box-shadow: none !important;
}
.w-success-msg span {
  color: #3288c5 !important;
}
.merchbarW .shoveler-title .span,
.merchbarW .shovHeader {
  color: #3288c5 !important;
}
.w-uwl span {
  color: #3288c5 !important;
}
ul.a-pagination li {
  background-color: var(--border-2) !important;
}
ul.a-pagination li.a-selected a {
  background-color: #3288c5 !important;
  border: 0 !important;
}
ul.a-pagination li a:focus {
  box-shadow: none !important;
}
ul.a-pagination li.a-selected {
  background-color: #3288c5 !important;
}
ul.a-pagination li a {
  border-radius: 3px;
  box-shadow: none !important;
  background: var(--border-2) !important;
  border: 0 !important;
  border-color: transparent;
}
.a-ordered-list.a-nostyle,
.a-unordered-list.a-nostyle,
ol.a-nostyle,
ul.a-nostyle {
  color: #ececec !important;
}
.a-alert-error .a-alert-container {
  background-color: var(--background);
  box-shadow: none !important;
  padding-left: 63px;
}
.a-alert-warning .a-alert-container {
  background-color: var(--background);
  box-shadow: none !important;
  padding-left: 63px;
}
#pageContent #gw-hud-grid #gw-hud {
  width: 100% !important;
  border: 0 !important;
  padding: 0 !important;
}
#pageContent #gw-hud-grid #gw-hud-sidekick {
  display: none;
}
.smTabContentMain {
  width: 100%;
  background-color: var(--background-2) !important;
}
.smTabMnCenter {
  border-top: none !important;
  background-color: var(--background) !important;
}
.smTabMnBottom .smTabMnCenter {
  border-top: none !important;
  border-bottom: none !important;
}
.smTabCorner {
  display: none !important;
}
.dsv-cBoxR {
  background-color: var(--border-2) !important;
}
.dsv-cBoxB {
  border-bottom: 1px solid var(--background);
}
.dsv-cBoxTL,
.dsv-cBoxTR,
.dsv-cBoxBL,
.dsv-cBoxBR {
  display: none !important;
}
.dsv-cBoxB {
  position: absolute;
  display: block;
  width: 100%;
  height: 1px;
  bottom: -1px;
  background-color: var(--border-2) !important;
}
/* Additions for Seller Central */
table,
table thead,
table tr {
  background-color: transparent !important;
}
table td,
table tr {
  padding: 6px !important;
}
h4 {
  background-color: transparent !important;
  color: white !important;
}
table a,
table td,
table div {
  color: #e6e6e6 !important;
}
.a-alert-success .a-alert-container {
  background-color: var(--background);
  box-shadow: 0 0 0 4px var(--border) inset;
  padding-left: 60px;
}
.dsv-primary,
.dsv-secEyebrow h2 {
  background-color: var(--background-2) !important;
}
.dsv-secondary,
.dsv-secEyebrow,
.dsv-primary {
  border: 1px solid var(--border-2) !important;
}
.reason-header {
  text-align: left;
  padding-bottom: 6px;
  background-color: #151515 !important;
}
.info-data {
  color: #ececec !important;
}
div[style="background-color: white;padding-bottom:20px;"] {
  background: var(--background-2) !important;
}
#nav-upnav {
  display: none !important;
}
.ys-center {
  background-color: var(--background-2) !important;
  background-repeat: repeat !important;
  background-attachment: scroll !important;
}
.dv-ajax-page,
.dv-storefront-page {
  margin: 0 0 18px 0;
  padding: 0;
  background-color: var(--background-2) !important;
  color: var(--foreground-3) !important;
}
.huc-v2-pinned-order-row-with-divider {
  background-color: var(--background) !important;
}
#DP_IMAGE_GALLERY_BUTTON_CONTAINER .image-thumbnails {
  width: 22.5%;
  height: auto;
  padding: 11.25%;
  margin-right: 1.25%;
  display: inline-block;
  background-position: center;
  background-size: cover;
  cursor: pointer;
  border: 1px solid var(--border-2) !important;
}
:focus {
  outline: none !important;
  border: 0px solid var(--border-2) !important;
}
a:link:hover {
  color: var(--main) !important;
}
a:hover {
  text-decoration: underline;
  cursor: pointer;
  color: var(--main) !important;
}
a.no-link,
a.no-link:active,
a.no-link:link,
a.no-link:visited {
  color: var(--main) !important;
}
#productTitle {
  color: var(--link) !important;
  font-size: 19px !important;
}
.GB-SUPPLE .tallCellView {
  border-color: var(--border-2) !important;
}
.a-alert-info .a-alert-container {
  background-color: var(--background);
  padding-left: 60px;
}
.sc-list .sc-list-head {
  border-bottom: 1px solid var(--border);
}
#nav-subnav .nav-a:hover {
  color: var(--foreground) !important;
  border-bottom: 2px solid var(--border-2) !important;
}
.a-button-primary {
  background: #697184 !important;
  border: none !important;
  color: var(--foreground-3) !important;
}
.a-button .a-button-text {
  color: var(--foreground-3) !important;
}
#twister .swatches li.swatchSelect {
  border-color: #3288c5 !important;
  transform: scale(1.1);
}
.banner-border {
  border-color: #697184 !important;
  border-style: solid !important;
  border-width: 0 0 1px 0 !important;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABJCAIAAABEshTrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6REJDRDE1MDI5QjkxMTFFNjhFNDY5QUZCMjA5NTE1MTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6REJDRDE1MDM5QjkxMTFFNjhFNDY5QUZCMjA5NTE1MTEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEQkNEMTUwMDlCOTExMUU2OEU0NjlBRkIyMDk1MTUxMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEQkNEMTUwMTlCOTExMUU2OEU0NjlBRkIyMDk1MTUxMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ph3p0bwAAACBSURBVHja7NAxAQAwCACguWQ+FrB/GCv4CxGIrH7sfAWyZMmSJUuWAlmyZMmSJUuBLFmyZMmSpUCWLFmyZMlSIEuWLFmyZCmQJUuWLFmyFMiSJUuWLFkKZMmSJUuWLAWyZMmSJUuWAlmyZMmSJUuBLFmyZMmSpUCWLFmyZJ03AgwA6VUBaW9nHFAAAAAASUVORK5CYII=) !important;
  height: 60px;
  background-color: var(--border-2) !important;
}
.a-button-text {
  background-color: var(--background) !important;
  border: 0;
  display: block;
  font-family: Arial, sans-serif;
  font-size: 13px;
  line-height: 29px;
  margin: 0;
  outline: 0;
  padding: 0 10px 0 11px;
  text-align: center;
  white-space: nowrap;
}
#nav-subnav .nav-a {
  position: relative;
  float: left;
  height: 31px;
  line-height: 33px;
  color: var(--foreground-3) !important;
  font-size: 12px;
  padding: 0 11px;
}
.nav-tpl-discoveryPanelList .nav-title .nav-text,
.nav-tpl-discoveryPanelSummary .nav-title .nav-text,
.nav-tpl-itemList .nav-title .nav-text {
  font-size: 18px;
  line-height: 19px;
  color: var(--main) !important;
}
#siteDirectory h2,
#siteDirectory h2 a {
  font-family: Tahoma, sans-serif;
  font-size: 14px;
  font-weight: bold;
  color: #3288c5;
  text-decoration: none;
}
#thank-you-box-wrapper div.corner {
  background-image: none !important;
}
#thank-you-header {
  font-family: Arial;
  font-size: 24px;
  color: #3288c5;
}
.comparison_baseitem_column {
  background-color: #121212;
  border: 1px dotted var(--foreground-3);
  padding-left: 10px;
}
.comparison_attribute_name_column {
  background-color: #121212;
  border: 1px dotted var(--foreground-3);
  padding-left: 10px;
}
h1,
h2,
h3,
h4 {
  font-family: Arial, Verdana, Helvetica, sans-serif;
  font-weight: bold;
  color: var(--foreground-3);
}
.sc-list .sc-list-item-border {
  border: none !important;
}
.displayAddressDiv .displayAddressUL li {
  list-style-type: none;
  color: #3288c5 !important;
}
#navFooter.navLeftFooter .navFooterDescLine {
  background-color: var(--background-2) !important;
  padding: 30px 0;
  margin: 30px 0 0;
}
.kmd-paragraph-title {
  font-family: Arial, sans-serif;
  font-weight: 700;
  margin: 0 0 5px;
  font-size: 17px;
  color: var(--foreground-3) !important;
}
.kmd-text-paragraph-body {
  line-height: 19px;
  color: var(--foreground) !important;
  margin: 0 0 20px;
}
.dv-fs .dv-fs-list-wrapper {
  background-color: var(--border-2) !important;
  border-bottom: none !important;
  padding: 0 25px;
  font-weight: 400;
}
#thank-you-box-wrapper {
  background-color: var(--border-2) !important;
  font-family: Verdana;
  font-size: 11px;
  color: var(--foreground);
  text-align: left;
  border: 1px solid #697184 !important;
  position: relative;
  height: 100%;
}
#pet_pmp_desktop {
  color: black;
  font-family: arial, sans-serif;
  background-color: transparent !important;
  min-width: 1000px;
}
#pet_pmp_desktop .pet_card {
  background-color: var(--border-2) !important;
  box-shadow: none !important;
  border: 1px solid #697184 !important;
}
.ONETHIRTYFIVE-HERO * {
  box-sizing: content-box;
  color: #3288c5 !important;
}
.GB-M-COMMON {
  zoom: 1;
  overflow: hidden;
  background-color: transparent !important;
}
.GB-SUPPLE .filters {
  padding-top: 11px;
  padding-left: 21px;
  background-color: var(--border) !important;
  display: inline-block;
  vertical-align: top;
  padding-bottom: 32768px;
  margin-bottom: -32768px;
}
.GB-SUPPLE .tallCellView {
  height: 500px !important;
  min-width: 246px;
  border-left: solid 1px;
  border-bottom: solid 1px;
  border-color: #697184;
  float: left;
  padding-left: 1px;
  padding-bottom: 1px;
  padding-right: 2px;
  padding-top: 2px;
}
.vpc_coupon_bar {
  padding-top: 15px;
  border-bottom: 1px solid var(--border-2);
  min-width: 850px;
  height: 95px;
  width: 100%;
  background-color: var(--background);
  position: relative;
}
.dv-carousel-heading {
  background-color: #b0bcd7 !important;
  float: left;
  position: relative;
  margin: 0 10px 0 0;
  padding: 15px 20px;
  height: 200px;
  width: 200px;
}
.dv-carousel-heading.dv-facets-prime,
.dv-seed.dv-facets-prime {
  background-color: #b0bcd7 !important;
}
#navFooter.navLeftFooter .navFooterCopyright {
  background-color: var(--background) !important;
  max-width: 100%;
  border-top: 1px solid var(--border) !important;
  margin: 0;
  padding: 10px 0 30px;
}
.a-button-primary .a-button-inner {
  background: none !important;
}
.a-button .a-button-inner {
  background: var(--background) !important;
}
.a-button-inner {
  box-shadow: none !important;
}
.a-button-primary {
  background: #697184 !important;
  border: none !important;
  color: #111 !important;
}
.package-status.on-time {
  background: #3288c5 !important;
}
.ship-track-large-horizontal-widget .tracker-container .latest-event-dot {
  z-index: 10;
  background: #3288c5 !important;
  display: none;
}
.ship-track-large-horizontal-widget .bottom .original-estimate-status .marker,
.ship-track-large-horizontal-widget .bottom .shipped-status .marker {
  position: absolute;
  top: -14px;
  left: 50%;
  margin-left: -10px;
  border: 10px solid transparent;
  border-top-color: #3288c5 !important;
}
.ship-track-large-horizontal-widget .tracker-container .delivery-dot {
  background: 0 0;
  border: 1px solid #3288c5 !important;
  right: 0;
}
.ship-track-large-horizontal-widget .bottom .delivery-status {
  max-width: 400px;
  right: 0;
  text-align: right;
  color: #3288c5 !important;
}
.a-color-success {
  color: #3288c5 !important;
}
#s-result-info-bar.s-refinements-on-top {
  box-shadow: none;
  background: none !important;
  margin-bottom: 0 !important;
}
#refinementsOnTop {
  background: var(--background) !important;
  border-bottom: 1px solid var(--border) !important;
  padding-left: 8px;
}
.smart-promo-inner,
.smart-promo-confirmation-inner {
  display: none !important;
}
.cs-help-header {
  zoom: 1;
  background: var(--background) !important;
  min-width: 996px;
  padding: 8px 0 4px 10px;
}
div.dv-superhero-carousel {
  display: none !important;
}
#ysh-cards-container li.recs-grid-item {
  float: left;
  height: 370px;
  line-height: 1;
  width: 320px;
  border: 5px solid var(--border) !important;
  overflow: hidden;
  background: #697184 !important;
}
#ys-card .welcome-msg {
  display: table;
  color: #3288c5 !important;
  font-family: Arial, Sans-Serif;
  font-size: 27px;
  padding: 25px;
  margin: auto;
}
#ys-center #ysh-cards-container .recs-grid-container {
  border-top: none !important;
  overflow: auto;
  width: 100%;
}
#ys-card #hud-dashboard {
  background-color: var(--border) !important;
}
.s-border-right {
  border-right: 1px solid var(--border) !important;
}
.acs-ln-widget .acs-ln-nav-section {
  border: none !important;
}
.a-spacing-large,
.a-ws .a-ws-spacing-large {
  margin-bottom: 22px !important;
}
#navbar.nav-bluebeacon {
  background-color: var(--background-3) !important;
}
.fresh-shoveler .as-title-block-right a {
  color: #3288c5 !important;
}
a:link {
  text-decoration: none;
}
.ys .horizontalNavBar {
  background-color: var(--background) !important;
  border-top: 1px solid var(--border) !important;
  border-bottom: 1px solid var(--border) !important;
  margin: 3px 0 3px 0;
}
.ys .horizontalNavBar div {
  border-top: none !important;
}
.a-color-secondary {
  color: var(--foreground-3) !important;
}
.a-color-base {
  color: var(--foreground) !important;
}
.a-ordered-list .a-list-item,
.a-unordered-list .a-list-item,
ol .a-list-item,
ul .a-list-item {
  color: var(--foreground-3) !important;
}
.a-button-toggle.a-button-thumbnail.a-button-selected {
  border-color: #3288c5 !important;
}
.a-popover-wrapper {
  overflow: hidden;
  border: 1px solid var(--border-2) !important;
  height: 100%;
  width: 100%;
  border-radius: 4px;
  box-shadow: none;
  background-color: var(--background) !important;
}
#ivThumbs.noMediaSelection {
  margin-top: 15px;
  border-top: 1px solid var(--border) !important;
}
#ivThumbs {
  border-radius: 6px !important;
  border: 1px solid var(--border) !important;
}
.ivThumb.selected,
.ivThumb.selected:hover,
.ivThumbVideoListOuter.selected .ivThumbVideoList,
.ivThumbVideoListOuter.selected:hover .ivThumbVideoList {
  border: 1px solid #3288c5 !important;
  padding: 0;
}
.fullscreen {
  border-radius: 10px !important;
  max-width: none !important;
  border: 5px solid var(--border) !important;
}
.fullscreen:hover {
  opacity: 1 !important;
}
hr {
  background-color: transparent;
  display: block;
  height: 1px;
  border-width: 0;
  border-top: 1px solid var(--background) !important;
  line-height: 19px;
  margin-top: 0;
  margin-bottom: 14px;
}
#hero-quick-promo {
  margin-bottom: 0 !important;
  display: none !important;
}
#navbar.nav-bluebeacon #nav-main {
  background-image: none;
  background-color: var(--background-5) !important;
  border-bottom: 1px solid var(--border) !important;
  -webkit-box-shadow: 4px 10px 5px -8px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 4px 10px 5px -8px rgba(0, 0, 0, 0.5);
  box-shadow: 4px 10px 5px -8px rgba(0, 0, 0, 0.5);
}
#navbar.nav-bluebeacon {
  background-color: var(--background) !important;
}
#nav-search .nav-search-facade .nav-search-label {
  color: #ffffff !important;
}
#nav-search .nav-search-facade .nav-icon {
  border-width: 4px;
  border-color: transparent;
  border-top: 4px solid #000 !important;
  color: #ffffff !important;
}
#navbar.nav-bluebeacon #nav-cart-count,
#navbar.nav-bluebeacon #nav-ewc-cart-count {
  color: #3288c5 !important;
  top: 7px;
}
#nav-tools .nav-cart-count,
#navbar .nav-tools .nav-cart-count {
  color: #3288c5 !important;
  font-weight: 700;
  font-family: arial, sans-serif;
  position: absolute;
  line-height: 16px;
  width: 20px;
  text-align: center;
}
ul.a-tabs {
  margin: 0;
  list-style-type: none;
  border: none !important;
  padding: 0;
  background-color: var(--border-2) !important;
}
ul.a-tabs .a-tab-heading.a-active a,
ul.a-tabs li.a-active a {
  background-color: #3288c5 !important;
  color: var(--foreground-3) !important;
  font-weight: 700;
  border: none !important;
}
ul.a-tabs .a-tab-heading a,
ul.a-tabs li a {
  line-height: 1;
  padding: 15px 17px 15px 18px;
  display: block;
  border: none !important;
  border-bottom: 0;
  color: var(--foreground-3) !important;
}
.ship-track-large-horizontal-widget .tracker-container {
  border-radius: 12px;
  height: 24px;
  background: var(--background) !important;
  overflow: hidden;
  margin: 8.5px 0;
}
.gw-hud-t2 #hud-dashboard {
  margin-bottom: 0px !important;
  background-color: var(--background) !important;
  border-left: 1px solid var(--border) !important;
  border-right: 1px solid var(--border) !important;
  border-bottom: 0px solid var(--border) !important;
}
.a-fixed-right-flipped-grid .a-col-left {
  background-color: var(--background) !important;
  border: 1px solid var(--border) !important;
  padding: 5px !important;
}
#nav-subnav {
  position: relative;
  display: none;
  margin: 0;
  padding: 0 9px 0 15px;
  overflow: hidden;
  border-bottom: 1px solid var(--border) !important;
  border-top: 0px solid var(--border) !important;
  white-space: nowrap;
  height: 33px;
  background: var(--background) !important;
}
#automotiveStripe {
  background-color: var(--background) !important;
}
#automotiveStripeMain {
  position: relative;
  padding: 13px 8px 11px 24px;
  z-index: 100;
  border-top: 1px solid var(--border) !important;
  border-bottom: 1px solid var(--border) !important;
}
.fresh-shoveler .feed-carousel .feed-carousel-card .product-image {
  border: 1px solid var(--border) !important;
  padding: 5px;
  opacity: 1;
  border-radius: 5px;
  background: var(--background);
}
.a-dynamic-image.a-stretch-vertical,
.a-dynamic-image.a-stretch-horizontal {
  border: 1px solid var(--border-2) !important;
  padding: 5px;
}
.fresh-shoveler .feed-carousel .feed-carousel-card .product-image:hover {
  border: 1px solid var(--main) !important;
  padding: 5px;
  opacity: 1;
}
.a-dynamic-image.a-stretch-vertical:hover,
.a-dynamic-image.a-stretch-horizontal:hover {
  border: 1px solid var(--border-2) !important;
  padding: 5px;
  opacity: 1;
}
.feed-carousel .feed-scrollbar-track {
  background-color: #474b59 !important;
}
.feed-carousel .feed-scrollbar-thumb:hover,
.feed-carousel.scrolling .feed-scrollbar-thumb {
  background-color: #3288c5 !important;
}
.feed-carousel .feed-carousel-control {
  position: absolute;
  top: 75px;
  background-color: var(--foreground-3) !important;
  height: 40px;
  border: 1px solid var(--border) !important;
  line-height: 100px;
  -webkit-box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);
}
.fresh-shoveler .as-title-block .a-color-base {
  color: var(--foreground-3) !important;
}
#navFooter.navLeftFooter {
  margin-bottom: 0;
  padding-bottom: 0;
  background-color: var(--background) !important;
  min-width: 1000px;
  position: relative;
}
#navFooter.navLeftFooter .navFooterBackToTop:focus,
#navFooter.navLeftFooter .navFooterBackToTop:hover {
  background-color: var(--main) !important;
  border-top: none !important;
  border-bottom: none !important;
  transition: all 0.2s ease-in-out;
}
#navFooter.navLeftFooter .navFooterBackToTop {
  margin-bottom: 40px;
  background-color: var(--background-5) !important;
  border-top: none !important;
  border-bottom: none !important;
  transition: all 0.2s ease-in-out;
}
#navFooter.navLeftFooter .nav-footer-line {
  border-top: 0px solid var(--border) !important;
  margin-top: 40px;
  border-bottom: 0px solid var(--border) !important;
  background: var(--background-2);
}
#navFooter.navLeftFooter .navFooterDescLine {
  border-top: 1px solid var(--border) !important;
}
#nav-search .nav-search-field {
  color: var(--foreground-3) !important;
  position: relative;
  height: 35px;
  background: var(--border) !important;
  border-top: 1px solid var(--border) !important;
  border-bottom: 1px solid var(--border) !important;
}
#nav-search .nav-search-field .nav-input {
  color: #000 !important;
}
#navbar.nav-bluebeacon #nav-search .nav-search-scope.nav-focus,
#navbar.nav-bluebeacon #nav-search .nav-search-scope:focus,
#navbar.nav-bluebeacon #nav-search .nav-search-scope:hover {
  background-color: #3288c5 !important;
  border-left-color: #3288c5 !important;
  border-top-color: #3288c5 !important;
  border-bottom-color: #3288c5 !important;
  color: #000 !important;
}
.a-color-state {
  color: #5a7694 !important;
}
.a-alert-inline-info .a-alert-container {
  padding-left: 16px;
  color: var(--foreground);
}
#navbar.nav-bluebeacon #nav-search .nav-search-scope {
  background-color: var(--border) !important;
  background-image: none;
  border-left: 1px solid var(--border) !important;
  border-top: 1px solid var(--border) !important;
  border-bottom: 1px solid var(--border) !important;
  color: #000 !important;
}
#nav-search .nav-search-scope {
  border: none;
}
#navbar.nav-bluebeacon #nav-search .nav-searchbar.nav-active .nav-search-scope {
  border: none !important;
  border-radius: 0 !important;
}
.a-ordered-list .a-list-item,
.a-unordered-list .a-list-item,
ol .a-list-item,
ul .a-list-item {
  color: var(--foreground) !important;
}
.rhf-sign-in-title {
  color: white !important;
}
.rhf-sign-in-tooltip-new-customer {
  color: white !important;
}
#hud-dashboard .profile-image {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAFN%2B%2BnkAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167%2B3t%2B9f7vOec5%2FzOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP%2FwBr28AAgBw1S4kEsfh%2F4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv%2BCpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH%2BOD%2BQ5%2Bbk4eZm52zv9MWi%2FmvwbyI%2BIfHf%2FryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3%2FldM9sJoFoK0Hr5i3k4%2FEAenqFQyDwdHAoLC%2B0lYqG9MOOLPv8z4W%2Fgi372%2FEAe%2Ftt68ABxmkCZrcCjg%2F1xYW52rlKO58sEQjFu9%2Bcj%2FseFf%2F2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R%2BW%2FQmTdw0ArIZPwE62B7XLbMB%2B7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv%2FmPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5%2BASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1%2BTSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q%2B0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw%2BS3FDrFiOJMCaIkUqSUEko1ZT%2FlBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC%2FpdLoJ3YMeRZfQl9Jr6Afp5%2BmD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA%2BYb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV%2Bjvl%2F9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1%2BrTfaetq%2B2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z%2Bo%2B02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y%2FDMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS%2BKc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw%2BlXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r%2B00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle%2B70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l%2Bs7pAz7GPgKfep%2BHvqa%2BIt89viN%2B1n6Zfgf8nvs7%2Bsv9j%2Fi%2F4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww%2BFUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX%2BX0UKSoyqi7qUbRTdHF09yzWrORZ%2B2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY%2BybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP%2BWDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D%2BmiGT0Z1xjMJT1IreZEZkrkj801WRNberM%2FZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c%2FPbFWyFTNGjtFKuUA4WTC%2BoK3hbGFt4uEi9SFrUM99m%2Fur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl%2FVfPV5bdra3kq3yu3rSOuk626s91m%2Fr0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e%2B2Sba1r%2Fdd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q%2F5n7duEd3T8Wej3ulewf2Re%2FranRvbNyvv7%2ByCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9%2BmfHvjUOihzsPcw83fmX%2B39QjrSHkr0jq%2Fdawto22gPaG97%2BiMo50dXh1Hvrf%2Ffu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1%2F3yfPe549d8Lxw9CL3Ytslt0utPa49R35w%2FeFIr1tv62X3y%2B1XPK509E3rO9Hv03%2F6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r%2Fy%2B2v3qB%2FoP6n%2B0%2FrFlwG3g%2BGDAYM%2FDWQ%2FvDgmHnv6U%2F9OH4dJHzEfVI0YjjY%2BdHx8bDRq98mTOk%2BGnsqcTz8p%2BVv9563Or59%2F94vtLz1j82PAL%2BYvPv655qfNy76uprzrHI8cfvM55PfGm%2FK3O233vuO%2B638e9H5ko%2FED%2BUPPR%2BmPHp9BP9z7nfP78L%2FeE8%2Fsl0p8zAAAAIGNIUk0AAHolAACAgwAA%2Bf8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAeBSURBVHjaYvj%2F%2Fz%2FD%2F%2F%2F%2FGbb7eMAwHxKbgQFJwX8smAFF8tu3b%2F%2B%2Fffv2%2F8ayJTAFggzbfTxM0RV8%2B%2FYNbgrDdh%2BPvdt9PP6f6%2BrArgCbFcjuIKQAxRcvYAq%2Bfv36H%2BZNAAAAAP%2F%2FQg8DJYwwwOl%2FQl6jUBKbl%2BAOujh5Ik5JBjRj7bb7eDAAAAAA%2F%2F%2BCBwSSfz%2Fi8Nr%2F7T4eXkSlBWSb3j9%2BTDidYNOILRQwkggMf%2Fn4Eafmo0X5GJqN0E28MLGfoK0YSQsZ744Iwatxu48HD3po43Tyt2%2Ff%2Fn9%2B%2Fx4eWNt9PBgAAAAA%2F%2F9iwJI1YZh5u4%2BHDhZxhu0%2BHgz%2F%2F%2F9nQNfMhieO%2F%2BPTfJ%2BARhjmQNG83cdjF0pgRYURCmkUzQQTCbqa%2F%2F%2F%2FMzBs9%2FH4hSx4qqGWJM0ogifrqonSvN3H4xHR6RpX2qaeZmIDbLuPxwOG7T4eP9El7mxYh6Jxd0QI9gDDlTGwpGecmjfjc%2Fand29xJxKoATfR6wwc%2FmbFlTFY3ty8iVXjiapyjIwBAAAA%2F%2F9Cyc94sifrdh%2BPtURkmsfbfTyMcWVjYi3uIzKH4sPvibZ4u4%2FHc0IGHsxI%2FX9388b%2FL69c%2Fn99yaL%2FOwJ8iHEEG64ySBWfxl1hQXgTwLdv3%2F5%2F%2BfiRkOWn0YsgD7wa%2FLwIWkqoZkEOfrwZCqXa6uuhpsX%2Ft%2Ft4JDNs9%2FFoI6TwSEEutS3%2Bz7Ddx%2BMSPgWf378nyVIYPpSTQdDiFkKuw9fEwIavLZhH2MfExDEx9QC%2BAhYLjodZ7ESs5bh8f2%2FHNmItfY6ejxUJadoR4IPTt3e3bCLG0hP4Sq7H6HmY1Di%2BOm8ONkuZiS2rG%2B5t30pWikbqr7wip5JAxozbfTzmHCnI%2FX9%2F547%2Fn9%2B8QbHk%2Bbmz%2F891d%2F7f7uNxbbuPhzIxtRNAxFqMjsWgDXMlItRSZHHIdh%2BPr0QknonUsriKzHr4CrkWs2738fhHhYZAACkNATUqWIiM1xG0eLuPhwoxhl2ZNeP%2F05Mn%2Ft%2FdvBHWkCOE9%2BDrBTETMuDJ8WM48%2B2xkkJClqfisvgHPo2vb1wnWGgcryglZDkzetPHH5%2BGw3nZVGv24O32oeNPr14RbfGJmkpClvPAen2ilNbDyPjB7l2ELN4Ps3gnNS1%2BcvwYwVSOtZ9LqcX3d%2B4YGItvrVlFTL62wmvxrpBAsutjAhbnMVCzB0GCxVUM1AxmEhp%2B6QQtPlqUT23f%2Ft%2Fu42FNtTb1t2%2Ff%2Fr%2B%2BcZ0os2Cpegsxiu9u2UTQYmxDLfgsFqKGrz%2B9ekVs%2FXyQ6LIaho%2BVFVPUQ4RiTuI75gQqDGKDeLuPxxts9fFXSuKZyHEQZmwWM%2BL16bu3BBPXxckT8Vkaja%2FNJYOu4eq8OSTl4S8fP%2F7f7ueFbulGYlqZCpSOBnz79u3%2Fua4OmKWLSGlXM2%2F38fhDrqXfvn37f23h%2FP%2FbfTzcyO1J5CBP8RCDH%2B3fB%2B8HU6PvZLfdx%2BPt5RnT%2Fr%2B6ehXFog9Pn%2F6%2Fs2Hd%2F%2F2Jcf%2B3%2B3jUEtt3AjBvfiFNRXEcHxUlvQSSQYTv9VCP0Xs%2B%2FIgfA6VGCWMpZo2IwKgkKBooSfQShYhEJPTHpB7K4peL%2FbFwlTWnqQ9biM1kjmXibPWmv17OYs677d57zp0%2BfF%2FvuZ977j3n9%2F3%2BztUc2KSDzFUFIRwmhGsifJ0oUT4viKf0gBDOEcJ%2BMy60FKwq4EoBllRsufIj0FpC2LRewDWEELUQUI%2F%2FrLYaeDchfFhHSC2tiDbCZmXA4ntKbTBQLQUJYbtpYELYSQjfZG8k3NG%2BZoUtVK5N3r%2FHXkedLHiPYWBCaJUZ1Oes54V43HwCmslwuKNdBvovIRzQBZzfwzaq6YE3LFM55CqdTBopXbXkLgosln%2FTA%2BixN0a1lErxQK1dBtqjCSwqT9MXHjxzSjlsXr0oo4ZVwIRwVnZxity6aRnwbGhIFniZEKqzpnirzqy%2F5GpsFfCPd4Mqtq2HWWCnin2wmFGX1VT%2FC1V7dZWNEJ7KXGSiu4sXEwmeDQ1ZBvzr%2BzQvpVJ6W5bFdMJGCMMy%2B61VkIU0fP2qDHCrjRA%2ByTw1K2d2TQt%2Bfl4r1zCiCzZCeCL1mtiP6CodZZVJpznY1CD7SjtsIm6SXhA%2BXrnMsWd9nPw6phQ02vuYx7s6VS1alTZC2EIIGVWuxeuok0rDcqUQlAmhJ7fwOK3SqgWbGvhPJiM3s329KmGXCWFPfmn5XCX02%2BNHTTumnMxTlU4WMg9Dqo355zaP7tmeCQZkV2EtXSplD%2FtVDhj3%2B3TPbNzvUw3r1hsAnJcZKNDo4rmRsOnvd24kzIFGlwzob0LYazTi2VHqpOIqe%2Bhu5uRoRPn%2BmxyN8KC72QjsXdkQbx8hJApBlqPoyCo1OVkM%2FjUhbFMZ01YRgp8QeLy7q%2Bw1dL6%2B3GjLbjce0Qu0NIg%2FRAiRsTu3%2BWcsWjZIcXRmRSSTu9ar1VIhEpOp0MUWnnr10tDBo4JnCmLR7AHhFfEvU81G6S0V%2BsHoICG0EMIjQogQwuJArZ19znoONLrY56xn77H%2FGXSCEN4TQichuETT1pJm2r8BAJlJpQfGgRyqAAAAAElFTkSuQmCC) !important;
}
#asVehicleIdentifierStripe .asVehicleIdenifierTextInput {
  font-size: 20px;
  font-weight: 700;
  height: 24px;
  margin: 0;
  padding: 3px 7px;
  text-align: center;
  text-transform: uppercase;
  zoom: 1;
  background-color: #697184 !important;
  width: 200px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  font-family: Arial, sans-serif;
  border: 1px solid var(--background-2) !important;
  outline: 0;
  box-shadow: none !important;
  outline-width: 0;
}
#leftNav .seeMore,
#leftNav li .boldRefinementLink {
  color: var(--foreground-3) !important;
}
#leftNav h2 {
  color: var(--foreground-3) !important;
  font-size: 12px;
  font-weight: 700;
  padding-bottom: 6px;
}
#leftNav .expander {
  font-size: 10px;
  vertical-align: text-top;
  color: var(--foreground-3);
}
#leftNavContainer {
  border-right: 1px solid var(--border) !important;
  margin-bottom: 20px;
}
.a-ws .s-result-list-hgrid.s-col-ws-1 li:nth-child(1n + 2) .s-item-container,
.a-ws .s-result-list-hgrid.s-col-ws-10 li:nth-child(1n + 11) .s-item-container,
.a-ws .s-result-list-hgrid.s-col-ws-11 li:nth-child(1n + 12) .s-item-container,
.a-ws .s-result-list-hgrid.s-col-ws-12 li:nth-child(1n + 13) .s-item-container,
.a-ws .s-result-list-hgrid.s-col-ws-2 li:nth-child(1n + 3) .s-item-container,
.a-ws .s-result-list-hgrid.s-col-ws-3 li:nth-child(1n + 4) .s-item-container,
.a-ws .s-result-list-hgrid.s-col-ws-4 li:nth-child(1n + 5) .s-item-container,
.a-ws .s-result-list-hgrid.s-col-ws-5 li:nth-child(1n + 6) .s-item-container,
.a-ws .s-result-list-hgrid.s-col-ws-6 li:nth-child(1n + 7) .s-item-container,
.a-ws .s-result-list-hgrid.s-col-ws-7 li:nth-child(1n + 8) .s-item-container,
.a-ws .s-result-list-hgrid.s-col-ws-8 li:nth-child(1n + 9) .s-item-container,
.a-ws .s-result-list-hgrid.s-col-ws-9 li:nth-child(1n + 10) .s-item-container {
  border-top: 1px solid var(--border) !important;
}
#s-result-info-bar {
  border-top: 1px solid var(--border) !important;
  border-bottom: 1px solid var(--border) !important;
  box-shadow: 0 0 10px #3288c5 !important;
  -webkit-box-shadow: 0 0 10px var(--border-2) !important;
  -moz-box-shadow: 0 0 10px #3288c5 !important;
}
div.pagnHy {
  background-color: transparent;
  height: 36px;
  line-height: 36px;
  text-align: center;
  font-size: 16px;
}
.a-box {
  margin-left: 10px;
  border-radius: 15px !important;
  border: 1px var(--border-2) solid !important;
  background-color: var(--background) !important;
}
div#poweredByEmpty {
  display: none !important;
}
.reviews .drkgry {
  color: var(--foreground-3) !important;
}
hr {
  border: none !important;
  color: var(--border) !important;
  margin: 3px 0px;
  border-style: dashed none none none;
  background-color: var(--border) !important;
}
.parseasinTitle {
  color: #3288c5 !important;
}
.dp-main {
  background: var(--background-2) !important;
  position: relative;
  margin-bottom: 20px;
  -webkit-font-smoothing: antialiased;
}
.carousel-progress-bar-scrubber {
  background: transparent !important;
}
table.a-keyvalue td,
table.a-keyvalue th {
  border-top: 1px solid var(--border) !important;
}
table.a-keyvalue th {
  background-color: var(--background) !important;
  font-weight: 400;
  color: var(--foreground-3) !important;
}
.carousel-progress-bar-track {
  background: var(--border) !important;
  height: 2px;
  position: relative;
  top: 17px;
  overflow: hidden;
}
.carousel-progress-bar {
  background-color: var(--border-2) !important;
}
table.a-keyvalue {
  margin-bottom: 22px;
  border-bottom: 1px solid var(--border) !important;
}
.a-button-toggle .a-button-inner {
  box-shadow: none;
  border: 1px solid #3288c5 !important;
  background-color: var(--border-2) !important;
  background-image: none;
  height: auto;
}
.a-box .a-divider.a-divider-section .a-divider-inner,
.a-color-base-background .a-divider.a-divider-section .a-divider-inner,
.a-divider.a-divider-section .a-divider-inner {
  display: none !important;
}
.a-box .a-divider.a-divider-section .a-divider-inner:after,
.a-color-base-background .a-divider.a-divider-section .a-divider-inner:after,
.a-divider.a-divider-section .a-divider-inner:after {
  display: none !important;
}
#dv-product-details #dv-customer-reviews h2,
#dv-product-details .carousel-header h2 {
  color: #3288c5 !important;
}
#ivMediaSelection {
  width: 235px;
  border: 1px solid var(--background-2) !important;
  background-color: var(--background) !important;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-top: 15px;
  display: none;
}
#ivTitle {
  cursor: pointer;
  color: var(--foreground-3) !important;
  text-align: left;
  margin-top: 10px;
  font-family: verdana, arial, helvetica, sans-serif;
  font-size: 14px;
  font-weight: 700;
  word-wrap: break-word;
  width: 235px;
}
hr.bucketDivider,
hr.bucketDivider:after {
  display: none !important;
}
#AUI_A9AdsMiddleBoxTop h2,
#CustomerDiscussions h2,
#customer-discussions_feature_div h2,
#customer-reviews_feature_div h2,
#customerReviewsHeader,
#detailpage-click2call-header,
#hmdFormDiv h2,
#need-help-deciding .secHeader,
#pf-fitment-wrapper h2,
#revMHLContainer h2,
#reviewBucketHeader,
#rhfMainHeading,
#sponsored-products-dp_feature_div h2,
.bucket h2,
.cdInlineAskBoxTitle,
.cdQuestionAnswerHeader,
.pa_componentTitleTest h2,
h2.amtcmp,
h2.featureHeading {
  color: var(--foreground-3) !important;
  font-size: 16px !important;
  font-family: verdana, arial, helvetica, sans-serif !important;
}
#prodDetails h2,
#product-details-old b.h1 {
  margin: 3px 0 7px 0;
  color: #3288c5 !important;
  font-size: 16px !important;
  font-family: verdana, arial, helvetica, sans-serif !important;
}
#productDescription_feature_div > h2.default {
  color: #3288c5 !important;
  font-size: medium;
  margin: 0 0 0.25em;
  font-family: verdana, arial, helvetica, sans-serif;
}
#quickPromoBucketContent ul li {
  color: var(--foreground) !important;
}
#productDescription {
  font-family: verdana, arial, helvetica, sans-serif;
  color: var(--foreground-3) !important;
  word-wrap: break-word;
  font-size: small;
  margin: 0.5em 0px 0em 25px;
}
#productDescription h3 {
  font-weight: normal;
  color: #3288c5 !important;
  font-size: 1.23em;
  clear: left;
  margin: 0.75em 0px 0.375em -15px;
}
.a-checkbox label,
.a-radio label {
  position: relative;
  font-weight: 400;
  color: var(--foreground-3) !important;
}
#addon {
  border-color: var(--background) !important;
  border-style: solid none;
  border-width: 1px;
  margin: 21px 0 14px;
  padding: 15px 0 10px;
  position: relative;
  width: 100%;
}
#prodDetails #SalesRank ul li span.zg_hrsr_ladder,
#prodDetails #SalesRank ul li span.zg_hrsr_rank,
#prodDetails .wrapper,
#prodDetails td {
  color: var(--foreground-3) !important;
}
#prodDetails .attrG {
  clear: both;
  border-top: 1px dotted var(--background) !important;
}
#merchant-help-links table table {
  border: 1px solid var(--background) !important;
  border-spacing: 5px;
  border-collapse: separate;
}
.askInlineWidget .vote {
  border-right: 1px solid var(--border-2) !important;
  text-align: center;
  color: #3288c5 !important;
  padding: 0;
  margin: 0;
  width: 65px;
}
#productDescription p {
  color: var(--foreground-3) !important;
}
div[id="merchant-help-links"] {
  display: none !important;
}
div[style="text-align:center;width:100%;margin:22px 0;height:1px;border-top:1px solid #DDDDDD"] {
  border-top: 1px solid var(--border-2) !important;
}
div[name="goKindleStaticPopDiv"] {
  display: none !important;
}
.dp-accordion .unselected .rbbHeader {
  display: none !important;
}
#detail-bullets ul,
#detail_bullets_id ul,
#feature-bullets-btf ul,
#technical-data ul {
  color: #888 !important;
  font-size: 13px;
  margin-bottom: 1px;
  font-family: verdana, arial, helvetica, sans-serif;
}
.a-carousel-row .a-carousel-photo {
  display: table;
  border: 5px solid #697184 !important;
  table-layout: fixed;
  width: 100%;
  margin-bottom: 6px;
}
.technicalData .h3color,
.technicalData font,
.technicalData ul {
  color: var(--foreground) !important;
}
.a-input-text,
input[type="text"],
input[type="number"],
input[type="tel"],
input[type="password"],
input[type="search"] {
  background: var(--foreground) !important;
  height: 31px;
  padding: 3px 7px;
  line-height: normal;
}
.a-search .a-icon-search {
  display: none !important;
}
.a-input-text,
input[type="text"],
input[type="number"],
input[type="tel"],
input[type="password"],
input[type="search"],
select.a-select-multiple,
textarea {
  border: 1px solid var(--border-2) !important;
  border-top-color: transparent;
  border-radius: 3px;
  box-shadow: none !important;
  outline: 0;
}
.sims-vtph-image {
  border: 5px solid #697184 !important;
  margin-left: auto;
  margin-right: auto;
  display: block;
}
.askTypicalExamples {
  color: #3288c5 !important;
  line-height: 19px;
  font-size: 13px;
  display: block;
}
#miniATFUDP {
  background: var(--border-2) !important;
  border-top: solid 1px var(--border-2) !important;
  border-bottom: solid 1px var(--border-2) !important;
}
.input:focus {
  outline: none !important;
  border: 1px solid red;
  box-shadow: 0 0 10px var(--border-2) !important;
}
.generic-subnav-flyout-item {
  border: 4px solid var(--border) !important;
}
.nav-tpl-discoveryPanelList .nav-link:focus .nav-text,
.nav-tpl-discoveryPanelList .nav-link:hover .nav-text,
.nav-tpl-discoveryPanelSummary .nav-link:focus .nav-text,
.nav-tpl-discoveryPanelSummary .nav-link:hover .nav-text,
.nav-tpl-itemList .nav-link:focus .nav-text,
.nav-tpl-itemList .nav-link:hover .nav-text {
  color: var(--main) !important;
}
#yourOrdersContent .a-color-offset-background {
  background: transparent !important;
  background-color: transparent !important;
}
.a-box-group > .a-box.a-first > .a-box-inner,
.a-box-group > .a-box:first-child > .a-box-inner {
  border-radius: 4px 4px 0 0;
  background: var(--background-2) !important;
}
#navbar.nav-bluebeacon #nav-programs .nav-a:hover,
#navbar.nav-bluebeacon #nav-shop .nav-a:hover,
#navbar.nav-bluebeacon #nav-tools .nav-a:hover,
#navbar.nav-bluebeacon #nav-xshop .nav-a:hover,
#navbar.nav-bluebeacon .nav-tools .nav-a:hover {
  border-color: var(--main) !important;
  background-color: transparent;
}
#navbar.nav-bluebeacon #nav-cart-count,
#navbar.nav-bluebeacon #nav-ewc-cart-count {
  color: var(--link) !important;
}
#nav-npm-header {
  color: var(--foreground);
}
.hud-white-dashboard .feed-carousel-control.feed-right.feed-control-disabled {
  opacity: 0.3;
  margin-top: 35px;
}
#ys-card #hud-dashboard {
  background-color: var(--background) !important;
}
hud-carousel-element a:active .value,
.hud-carousel-element a:focus .value,
.hud-carousel-element a:hover .value,
.hud-carousel-element,
.hud-carousel-element a:visited .value {
  color: var(--foreground) !important;
}
#ysh-cards-container li.recs-grid-item {
  border: 5px solid var(--background) !important;
  background: var(--background) !important;
}
.a-button.a-button-small .a-button-inner,
.a-button.a-button-small.a-button-disabled .a-button-inner,
.a-button.a-button-small.a-button-disabled.a-button-focus .a-button-inner,
.a-button.a-button-small.a-button-disabled:active .a-button-inner,
.a-button.a-button-small.a-button-disabled:focus .a-button-inner,
.a-button.a-button-small.a-button-disabled:hover .a-button-inner,
.a-button.a-button-small.a-button-focus .a-button-inner,
.a-button.a-button-small.a-button-focus:active .a-button-inner,
.a-button.a-button-small:active .a-button-inner,
.a-button.a-button-small:focus .a-button-inner,
.a-button.a-button-small:focus:active .a-button-inner,
.a-button.a-button-small:hover .a-button-inner {
  margin-left: 1px;
}
.a-button-group .a-button {
  border-color: var(--border);
}
.a-button .a-button-inner {
  background: var(--foreground-2) !important;
}
.a-dropdown-common .a-dropdown-link.a-active {
  background-color: var(--background-2);
  color: var(--foreground);
  border-color: var(--border);
  border-top-color: var(--border);
  border-left-color: var(--border) !important;
}
.hover-as-link:hover,
.hover-as-link:hover span {
  color: var(--link) !important;
}
.a-button-dropdown .a-button-text {
  margin-right: 1px;
}
#prodDetails .content {
  color: var(--foreground-3);
}
.h1 {
  color: var(--link);
}
.azv2-h1,
.azv2-h2,
.azv2-h3,
.azv2-h4,
.azv2-h5,
.azv2-h6 {
  color: var(--link);
}
.info-title {
  color: var(--foreground);
}
.a-fixed-left-grid .a-col-right {
  padding-left: 3.5% !important;
  width: 99%;
}
#formats .hr.unselected-row {
  border-top: 1px solid var(--border);
}
#MediaMatrix #twister #binding_row_landing,
#MediaMatrix #twister .top-level.selected-row {
  background: var(--background-2);
  border: 1px solid var(--link);
}
.a-box .a-divider.a-divider-break h5,
.a-color-base-background .a-divider.a-divider-break h5,
.a-divider.a-divider-break h5 {
  background-color: var(--background-2);
}
.acs-en-widget .acs-en-full .acs-en-middle-section a {
  background-color: var(--background-2);
}
.acs-en-widget .acs-en-full {
  border: 1px solid var(--border);
}
.acs-en-widget.acs-en-noTabs .acs-en-full .acs-en-main-section-container {
  border-left: 1px solid var(--border);
}
.acs-en-widget .acs-en-full .acs-en-main-section-container {
  border-bottom: 1px solid var(--border);
}
#a-page div.left_nav.browseBox h3 {
  color: var(--link);
}
#a-page {
  background-color: var(--background);
}
#nav-subnav .nav-a:hover {
  color: var(--foreground-3) !important;
  border-bottom: 2px solid var(--link) !important;
}
.a-color-alternate-background {
  background-color: var(--background-2) !important;
}
.nav-packard-glow #nav-global-location-slot .nav-a-2 .nav-line-2 {
  font-size: 12px;
}
#pageContent {
  background: var(--background) !important;
}
#gw-card-layout {
  display: none !important;
}
.adcenterRowWrapper,
.billboardRowWrapper,
.desktop-row {
  background: var(--background) !important;
  border: 1px solid var(--border);
  margin-top: none !important;
  border-radius: 0px;
  background-image: none !important;
  box-shadow: none;
}
#squished-desktop-row {
  background: transparent !important;
  padding-right: 0px !important;
}
#squished-desktop-row .desktop-row {
  border-right: 1px solid var(--border);
}
#gw-content-grid .fresh-shoveler .as-title-block .a-color-base {
  color: var(--foreground) !important;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 1);
  font-weight: 500 !important;
}
.a-popover-modal .a-popover-footer {
  background-color: var(--background);
  background: var(--background) !important;
  border-top: 1px solid var(--border);
}
#desktop-editorial,
.billboard,
#desktop-ad-btf {
  display: none !important;
}
.fresh-shoveler .as-title-block {
  margin-bottom: 20px !important;
  margin-left: -20px !important;
  margin-top: -10px !important;
  background: none;
  padding-left: 10px;
  padding-right: 10px;
  border: none;
  max-width: max-content;
  border-top-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom: none;
  border-right: none;
  border-left: none !important;
}
.uilm-section img {
  display: none;
}
.feed-carousel .feed-carousel-control {
  background-color: var(--main) !important;
  height: 45px;
  border: 5px solid var(--border) !important;
  border-radius: 100%;
}
#navFooter .navFooterBackToTop span {
  font-size: 20px;
  font-weight: 500;
}
#navFooter.navLeftFooter .navFooterColHead {
  font-weight: 700;
  color: var(--foreground-3);
  font-style: oblique;
}
.item-view-left-col-inner {
  border: 5px solid var(--border);
}
#nav-subnav {
  -webkit-box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);
}
a-box-group > .a-box.a-first > .a-box-inner,
.a-box-group > .a-box:first-child > .a-box-inner {
  -webkit-box-shadow: inset 0px 0px 2px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: inset 0px 0px 2px 0px rgba(0, 0, 0, 0.75);
  box-shadow: inset 0px 0px 2px 0px rgba(0, 0, 0, 0.75);
}
.fresh-shoveler .as-title-block-right a,
#navbar.nav-bluebeacon #nav-cart-count,
#navbar.nav-bluebeacon #nav-ewc-cart-count {
  color: var(--main) !important;
}
#errorPageContainer .widgetHeader,
#mapTracking-bottomSheet-container .widgetHeader,
#pageContainer .widgetHeader {
  font-style: oblique;
}
.wishlist-left-nav {
  background-color: transparent !important;
}
.wls-steps-image-row-unpinned {
  border: 5px solid var(--background);
  background: var(--foreground-3);
}
#bbopAndCartBox {
  background-color: var(--boreder-2) !important;
}
.hud-white-dashboard .feed-carousel-control.feed-right,
.hud-white-dashboard .feed-carousel-control.feed-left {
  background: var(--main) !important;
}
.hud-white-dashboard .hud-feed-carousel,
#gw-content-grid-bottom > div,
#gw-content-grid-top > div {
  border-radius: 5px;
}
#btfContent,
.btfContent {
  padding: 0px 0px 0px 0px;
}
.hud-white-dashboard .hud-feed-carousel .feed-carousel-card {
  border: 1px solid var(--border);
}
.a-button-dropdown .a-button-text {
  margin-right: 0px;
}
.a-button-dropdown.a-button-small .a-button-text {
  padding-right: 0px;
}
.avu-section-alt {
  background-color: var(--background);
  border: none;
  border-radius: 5px;
}
.dv-episode-container {
  background-color: var(--background-2);
}
.dv-episode-container.dv-episode-container {
  border: 1px solid var(--border);
}
.dv-episode-wrap {
  box-shadow: none !important;
}
.dv-el-attr-key {
  color: var(--foreground-3);
}
.avu-content .avu-section-alt .av-secondary {
  color: var(--main) !important;
}
.avu-content .av-button.av-button--purchase:link,
.avu-content .av-button.av-button--purchase:visited {
  color: var(--foreground-3) !important;
  background-color: var(--main) !important;
}
.avu-section-alt .dv-carousel-control {
  background: var(--main) !important;
}
table.a-bordered tr:first-child th {
  box-shadow: none !important;
}
table.a-bordered td,
table.a-bordered th {
  border-bottom: 1px solid var(--border);
}
#HLCXComparisonTable td,
#HLCXComparisonTable th {
  border: 1px solid var(--border) !important;
}
#nav-flyout-wl-alexa,
#nav-flyout-wl-items {
  border-bottom: 1px solid var(--border);
}
.nav-tpl-discoveryPanelList .nav-divider,
.nav-tpl-discoveryPanelSummary .nav-divider,
.nav-tpl-itemList .nav-divider {
  background: var(--border);
}
.nav-catFlyout .nav-subcats {
  border-left: 1px solid var(--border);
}
.cLFKpj li:nth-child(1),
.cLFKpj li:nth-child(2),
.cLFKpj li:nth-child(3),
.cLFKpj li:nth-child(4),
.cLFKpj li:nth-child(5) {
  border-top: solid 1px var(--border);
}
.cLFKpj {
  border-left: solid 1px var(--border);
}
.asin-container {
  border: 1px solid var(--border);
  background: var(--background-2);
}
.metadata-container-t1 .asin-title-t1 {
  color: var(--foreground-3);
}
.metadata-container-t1 .price-container-t1 .price-display {
  color: var(--red);
}
.hqnMhf,
.eRbYxk,
.eSgpKH,
.kSAXPt,
.eSgpKH {
  color: var(--foreground-3);
}
.ierAum {
  background-color: var(--background-2);
}
#wr-home .wr-layout-body {
  background: var(--background-2);
}
.wr-layout-wrapper {
  background-color: var(--background-2);
}
.aplus-v2 tr.apm-tablemodule-keyvalue td {
  border: 1px solid var(--border) !important;
}
.aplus-v2 table.apm-tablemodule-table th {
  border: 1px solid var(--border) !important;
}
.aplus-v2 .a-color-alternate-background {
  background-color: var(--background-2) !important;
}
.idcXpH {
  background-color: var(--background);
  padding: 21px 0 0;
}
.fdruLQ {
  color: var(--foreground-3);
}
.a-dropdown-common .a-dropdown-item:active .a-dropdown-link,
.a-dropdown-common .a-dropdown-item:hover .a-dropdown-link {
  border-color: var(--border);
  background-color: var(--background-2);
  color: var(--foreground) !important;
}
.a-dropdown-common .a-dropdown-item:focus .a-dropdown-link.a-active {
  background-color: var(--background-2);
  border-color: var(--border);
  color: var(--foreground) !important;
}
.a-dropdown-common .a-dropdown-link {
  color: var(--foreground) !important;
}
.ya-card__heading--rich {
  color: var(--foreground-3);
}
.a-color-state {
  color: var(--foreground-3) !important;
}
.custom-view-options li.selected {
  border-bottom-color: var(--main) !important;
}
#prodDetails h2,
#product-details-old b.h1 {
  color: var(--foreground-3) !important;
}
.a-color-success,
.askInlineWidget .vote,
a:link:hover {
  color: var(--main) !important;
}
#productDescription_feature_div > h2.default {
  color: var(--foreground-3) !important;
}
#productDescription h3 {
  color: var(--foreground-3) !important;
}
#productTitle {
  color: var(--foreground-3) !important;
}
.askTypicalExamples {
  color: var(--foreground-3) !important;
}
#nav-subnav .nav-a:hover {
  border-bottom: 2px solid var(--main) !important;
}
.cr-lighthouse-term {
  background-color: var(--background-2);
  border: solid 1px var(--border);
  color: var(--foreground-3);
}
.fdRgfz,
.a-color-link {
  color: var(--main) !important;
}
.fNcJqN {
  background: var(--background-2);
  border: 1px var(--border) solid;
}
.hTAcKK {
  border-bottom: 1px var(--border) solid;
  border-top: 1px var(--border) solid;
  background-color: var(--background);
}
.blgDBY {
  border-bottom: 1px var(--border) solid;
  background-color: var(--background-2);
}
.blgDBY:hover {
  background-color: var(--background);
}
.hTAcKK:hover {
  background-color: var(--background);
}
#cpsia-block ul,
#cpsia-product-safety-warning_feature_div ul {
  color: var(--foreground-3) !important;
}
.s-result-list-hgrid.s-col-1 li:nth-child(1n + 2) .s-item-container,
.s-result-list-hgrid.s-col-10 li:nth-child(1n + 11) .s-item-container,
.s-result-list-hgrid.s-col-11 li:nth-child(1n + 12) .s-item-container,
.s-result-list-hgrid.s-col-12 li:nth-child(1n + 13) .s-item-container,
.s-result-list-hgrid.s-col-2 li:nth-child(1n + 3) .s-item-container,
.s-result-list-hgrid.s-col-3 li:nth-child(1n + 4) .s-item-container,
.s-result-list-hgrid.s-col-4 li:nth-child(1n + 5) .s-item-container,
.s-result-list-hgrid.s-col-5 li:nth-child(1n + 6) .s-item-container,
.s-result-list-hgrid.s-col-6 li:nth-child(1n + 7) .s-item-container,
.s-result-list-hgrid.s-col-7 li:nth-child(1n + 8) .s-item-container,
.s-result-list-hgrid.s-col-8 li:nth-child(1n + 9) .s-item-container,
.s-result-list-hgrid.s-col-9 li:nth-child(1n + 10) .s-item-container {
  border-top: 1px solid var(--border);
}
#leftNav .s-pfsd-banner {
  background-color: var(--background-2);
  border: 1px solid var(--border);
}
#s-result-info-bar {
  box-shadow: none !important;
}
#leftNav #leftNavContainer {
  border-bottom: 1px solid var(--border);
}
#ask_lazy_load_div hr,
#customer_discussions_lazy_load_div hr {
  display: none;
}
.a-button-toggle.a-button-selected .a-button-text {
  font-weight: 700;
  background: #3a3f4a !important;
}
#MediaMatrix #twister #binding_row_landing,
#MediaMatrix #twister .top-level.selected-row {
  border: 1px solid var(--main) !important;
}
.a-button-toggle.a-button-selected,
.a-button-toggle.a-button-selected.a-button-unavailable {
  border-color: var(--main) !important;
}
.apl_message_tips {
  color: var(--foreground-3);
}
.cr-lighthouse-term:hover {
  background: #3a3f4a !important;
}
.a-button-toggle .a-button-inner {
  border: 1px solid #5e6677 !important;
}
.aplus-v2 .premium-aplus-module-5 table.a-bordered td.attribute,
.aplus-v2 .premium-aplus-module-5 table.a-bordered td.active-item {
  background-color: var(--background-2);
}
.aplus-v2
  .premium-aplus-module-5
  table.a-bordered
  tr:nth-child(even)
  td.attribute,
.aplus-v2
  .premium-aplus-module-5
  table.a-bordered
  tr:nth-child(even)
  td.active-item {
  background-color: var(--background-2);
}
.aplus-v2 .premium-aplus-module-5 .attribute,
.aplus-v2 .premium-aplus-module-5 .active-item,
.aplus-v2 .premium-aplus-module-5 .description {
  color: var(--foreground-3);
}
.aplus-v2 .premium-aplus-module-5 table.a-bordered td {
  border: 1px solid var(--border) !important;
}
.aplus-v2 .premium-aplus-module-11 {
  background: var(--background-2);
  border: 1px solid var(--border);
}
.aplus-v2 .premium-aplus-module-11 .faq-block {
  background: var(--background);
  border: 2px solid var(--border);
}
.aplus-v2 .premium-aplus-module-11 .faq-block::before {
  background: var(--main) !important;
}
.aplus-v2 .premium-aplus-module-11 .aplus-active .faq-arrow {
  border-bottom-color: var(--main) !important;
}
ul.a-pagination li.a-select a {
  background-color: var(--main) !important;
  color: var(--foreground-3) !important;
}
.kXKjvH li:nth-child(1),
.kXKjvH li:nth-child(2),
.kXKjvH li:nth-child(3),
.kXKjvH li:nth-child(4),
.kXKjvH li:nth-child(5) {
  border-top: solid 1px var(--border);
}
.kXKjvH {
  border-left: solid 1px var(--border);
}
.hud-white-dashboard .hud-feed-carousel .feed-carousel-card:hover {
  border: 1px solid #646c80;
}
.notouch ul.order-level-item-summary-list li div {
  color: var(--foreground-3);
}
.checkout:not(.aui-templatized) .a-radio {
  color: var(--foreground-3);
}
#primeComparisonTable {
  border: 2px solid var(--border);
}
#membershipInfoLeftPanelDiv {
  background-color: var(--background-2);
  border-color: var(--border);
}
#membershipDaysSpan,
.membershipInfoItemsHeaderSpan {
  color: var(--foreground-3);
}
.membershipSettingsInfoItemDiv {
  color: var(--foreground-3);
}
.currentBreadcrumbLink {
  color: var(--main) !important;
}
.sp-desktop .a-color-alternate-background.pageContent_footer {
  background-color: var(--background) !important;
}
.rptHeaderBreadcrumb-item_active,
.milestoneItem_active .milestoneItem-date,
.milestoneItem_complete .milestoneItem-date {
  color: var(--foreground-3);
}
.milestoneItem_active .milestoneItem-title,
.milestoneItem_complete .milestoneItem-title {
  color: var(--main) !important;
}
.milestoneItem_active .milestoneItem-marker:before,
.milestoneItem_complete .milestoneItem-marker:before {
  background-color: var(--main) !important;
  border: 2px solid #ea8c30 !important;
}
.milestoneItem-bar_foreground {
  background-color: var(--main) !important;
}
.displayAddressDiv .displayAddressUL li {
  color: var(--foreground-3) !important;
}
table.a-keyvalue td,
table.a-keyvalue th {
  border: 1px solid var(--border) !important;
}
.a-popover.a-arrow-bottom .a-arrow {
  border-bottom-color: var(--border);
}
.a-input-text,
input[type="text"],
input[type="number"],
input[type="tel"],
input[type="password"],
input[type="search"] {
  background: var(--background-2) !important;
}
#nav-search .nav-search-field .nav-input {
  color: var(--foreground-3) !important;
}
input,
select,
textarea {
  color: var(--foreground-3);
}
#nav-search .nav-search-dropdown {
  background: var(--background-2) !important;
}
#attach-desktop-sideSheet #attach-warranty-pane,
#attach-desktop-sideSheet div.attach-sidesheet-card,
#attach-desktop-sideSheet,
#attach-desktop-sideSheet .attach-primary-atc-confirm-box,
#huc-v2-order-row-items {
  background-color: var(--background-2);
}
#attach-desktop-sideSheet #attach-warranty #attachWarrantyButtonWrapper {
  border-color: var(--border);
}
#attach-desktop-sideSheet .added-to-cart-message-box {
  margin-bottom: 20px;
}
#huc-v2-order-row-messages {
  background-color: var(--background-2);
  border-right: 1px solid var(--border);
}
.a-button-text {
  background-color: var(--main) !important;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 1);
  background: var(--main) !important;
  border-radius: 2px;
  border-bottom: 4px solid #954e0a !important;
}
.a-button-text:hover {
  background-color: var(--main) !important;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 1);
  background: var(--main) !important;
  border-radius: 2px;
}
.a-color-success,
.askInlineWidget .vote,
a:link:hover {
  color: var(--foreground-3) !important;
}
.a-fixed-right-flipped-grid .a-col-left {
  background-color: transparent !important;
  border: 0px solid var(--border) !important;
}
#sc-delivery-slot-form input[type="submit"],
.sc-list .sc-action-links input[type="submit"],
.sc-list .sc-action-links input[type="button"],
.sc-update-all-quantity input {
  color: var(--main) !important;
}
.cr-lighthouse-terms {
  max-height: 128px;
}
.kCsidi {
  background-color: var(--background);
  border-bottom: none;
}
.knIkHH {
  background-color: var(--background);
}
.ewXnMQ {
  color: var(--foreground-3);
}
.kEqLgo {
  background-color: #444a5a;
}
* {
  outline: none !important;
}
.bnUXTj {
  grid-gap: 0px;
}
.fEDkRV {
  background-color: var(--background-2);
  border: solid 1px var(--border);
  color: var(--foreground-3);
}
.fEDkRV:hover {
  background: #3a3f4a !important;
}
.swa-widget-list-header {
  background-color: var(--background-2);
  border-bottom: 0px solid #ddd;
}
.swa-widget-list {
  border: 1px solid var(--border);
}
.a-global-nav-wrapper {
  background: var(--background-2);
  border-bottom: 1px solid var(--border);
}
.swa-sub-nav-links span {
  color: var(--foreground-3);
}
#customerNameWithGreetingSpan {
  color: var(--foreground-3);
}
.autoRenewWarningMessage {
  background-color: transparent;
}
.kdiiZP {
  background: var(--background);
  border: 1px var(--border) solid;
}
.cWBNnw {
  border-bottom: 1px var(--border) solid;
  background-color: var(--background);
}
.fGnUCj {
  border-bottom: 1px var(--border) solid;
  border-top: 1px var(--border) solid;
  background-color: var(--background-2);
}
.fGnUCj:hover {
  background-color: var(--background-2);
  color: var(--foreground-3);
}
.cWBNnw:hover {
  background-color: var(--background-2);
}
.jxKqUN {
  color: var(--foreground-3);
}
.Jchjh {
  color: var(--main) !important;
}
.acs-ln-widget .acs-ln-header {
  border-bottom: 1px solid var(--border);
  color: var(--foreground-3);
}
.acs-ln-widget .acs-ln-header:hover {
  background-color: var(--background-2);
}
.acs-ln-widget .acs-ln-expand-all {
  background-color: var(--background);
}
.gKWotC {
  color: var(--foreground-3);
}
.hfWugw {
  color: var(--main) !important;
}
.digital-dash-c-header {
  background: var(--background-2);
  padding-bottom: 5px;
  border-bottom: 1px solid var(--border);
}
.digital-dash-dashboard-content,
.digital-dash-sticky-content {
  background: var(--background);
}
.a-color-tertiary {
  color: #ddd !important;
}
.navHeader_alexa_myx {
  border-bottom: 1px solid var(--border);
  background: var(--background-2);
  box-shadow: none;
}
.myx-color-base {
  color: var(--foreground-3) !important;
}
#nav-subnav.spacious[data-category="dmusic"] {
  background-color: var(--background-2) !important;
  box-shadow: none !important;
}
a.a-link-section-expander {
  background-color: var(--background-2);
}
.a-section-expander-container {
  border: 1px solid var(--border);
}
.a-section-expander-inner {
  border-top: 1px solid var(--border);
}
.dm-expander-header {
  color: white;
}
a.a-link-section-expander:hover,
a.a-link-section-expander:focus {
  background-color: #3d4352;
}
.side-nav-wrapper,
.side-nav {
  background: var(--background-2);
  border-right: 1px solid var(--border);
}
#primary-header {
  border-bottom: 1px solid var(--border);
  background-image: none;
  background-color: var(--background-2);
}
.side-nav a.active {
  background: #353b48;
  border-left: 3px solid var(--main) !important;
}
.get-apps-promotion a {
  background: #373c4a;
}
.user-menu .toggle {
  color: var(--foreground-3) !important;
}
.file-list-item.header {
  border-bottom: 1px solid var(--border);
  background: #2d323e;
}
.file-list-item.header .detail.FileName,
.file-list-item.header .detail.DateModified,
.file-list-item.header .detail.DateCreated,
.file-list-item.header .detail.Extension,
.file-list-item.header .detail.Size {
  border-left: 1px solid var(--border);
}
.file-list-item.header .detail {
  border-bottom: 0px solid var(--border);
  border-top: 1px solid var(--border);
}
.file-list-item.header .detail .column-name {
  color: var(--foreground-3);
}
.file-list-item.header .detail.swappable {
  border-right: none;
}
.file-list-item {
  border-bottom: 1px solid var(--border);
  border-left: 1px solid var(--border);
  border-right: 1px solid var(--border);
  color: var(--foreground-3);
}
.file-list-item:hover {
  background: var(--background-2) !important;
}
.file-list-item .select-all,
.file-list-item .select-item {
  color: #eee;
}
.empty-state h1,
.empty-state h2 {
  color: var(--foreground-3);
}
.dsv-whiteBox {
  background: var(--background-2);
}
.dsv-whiteBoxTL,
.dsv-whiteBoxTR,
.dsv-whiteBoxBL,
.dsv-whiteBoxBR {
  display: none !important;
}
.breadcrumb-actions .visible-actions button {
  border: 1px solid var(--border);
  background: var(--main) !important;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 1);
  color: var(--foreground-3);
}
.upload-button .toggle {
  background: var(--main) !important;
  color: var(--foreground-3);
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 1);
}
.breadcrumb-actions .visible-actions button:not(:disabled):not(.disabled):hover,
.breadcrumb-actions .visible-actions button:not(:disabled):not(.disabled):focus,
.breadcrumb-actions
  .visible-actions
  button:not(:disabled):not(.disabled):active,
.breadcrumb-actions
  .visible-actions
  button:not(:disabled):not(.disabled).active {
  background: var(--main) !important;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 1);
  color: var(--foreground-3);
}
p:last-child {
  color: var(--foreground-3) !important;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 1);
}
.side-nav a.active:before {
  color: var(--main) !important;
}
a:active,
a:visited {
  color: #ddd;
}
.search-field button {
  background: var(--main) !important;
  color: var(--foreground-3);
}
.expandable-nav .expanded-nav {
  background: var(--background-2);
  border: 1px solid var(--border);
}
.user-menu .expanded-nav a,
.user-menu .expanded-nav button {
  color: var(--foreground-3);
}
.file-list-item .node-icon {
  color: var(--main) !important;
}
.file-list-item:not(.header) .FileName,
.file-list-item:not(.header) .FileName a {
  color: var(--foreground-3);
}
#kfs-container {
  display: none;
}
.GB-SUPPLE .filters {
  background-color: var(--background-2) !important;
  border-top: 1px solid var(--border);
}
.GB-SUPPLE .widgetBorder {
  border-top: 1px solid var(--border);
}
div.gbh1-bold {
  color: var(--foreground-3);
}
.GB-SUPPLE .firstRowDiv {
  border-bottom: 1px solid var(--border);
  background-image: linear-gradient(
    to bottom,
    var(--border) 0,
    var(--border) 100%
  );
}
.GB-SUPPLE .rightMostDiv {
  border-right: 1px solid var(--border);
}
div.gbox-section {
  display: none;
}
#asv-gclp-balance-widget-desktop {
  background-color: var(--background);
}
.as .color-squidink {
  color: #ddd;
}
.ss-gradient-bg {
  background: var(--background);
}
.csg-box {
  border: 1px solid var(--border);
}
.csg-hover-box .csg-hover-box-categories {
  background: none repeat scroll 0 0 var(--background-2);
  border-right: 1px solid var(--border);
}
.csg-hover-box .csg-hover-box-content {
  border-left: 1px solid var(--border);
}
.a-ordered-list.a-list-link a,
.a-unordered-list.a-list-link a,
ol.a-list-link a,
ul.a-list-link a {
  color: #ddd;
}
.csg-hover-box .csg-hover-box-categories .active {
  color: var(--main) !important;
}
.alertBrand {
  background-color: var(--background-2);
  border-color: var(--border);
  border: 1px var(--border) solid;
  box-shadow: none;
  margin-bottom: 15px;
}
#gw-asin-popover .imgblock {
  background: var(--background-2);
}
.sims-img-link.selected .sims-img-border,
.sims-img-link.selected:hover .sims-img-border {
  background: var(--main) !important;
}
#iv-tab-view-container .iv-box {
  background-color: transparent;
}
#ivThumbs {
  padding: 10px;
}
#iv-tab-view-container ul.iv-tab-views {
  border-bottom: 2px solid var(--border);
}
#iv-tab-view-container ul.iv-tab-views .iv-tab-heading.iv-active a,
#iv-tab-view-container ul.iv-tab-views li.iv-active a {
  border-color: var(--main) !important;
  background-color: transparent;
}
.djlz .adFeedback {
  display: none !important;
}
#contextualIngressPtPin {
  filter: invert(100%);
}
#twister .a-native-dropdown,
#buybox .a-native-dropdown {
  border: 1px solid var(--border);
  background: var(--background-2);
}
.digital-dash-button-button {
  background: var(--background);
  border: 5px solid var(--border);
  color: #ddd;
}
.digital-dash-button-outer-wrapper {
  border: solid var(--border) 2px;
  background: var(--background);
}
.digital-dash-button-button:hover {
  border-color: var(--main) !important;
  color: var(--main) !important;
}
.digital-dash-gateway-desktop.digital-dash-gateway-desktop--shoveler
  .digital-dash-learn-more-list-item__link
  .digital-dash-learn-more-list-item__wrapper {
  border-color: var(--border);
}
.a-alert-inline-success .a-alert-container {
  color: var(--main) !important;
}
#buybox_feature_div label.a-native-dropdown,
#buybox label.a-native-dropdown {
  padding-right: 5px;
  border: none !important;
  background: transparent;
}
.a-button-icon .a-icon-1click,
.a-button-icon .a-icon-buynow,
.a-button-icon .a-icon-cart,
.a-button-icon .a-icon-sns {
  z-index: 99;
}
.olpOfferList {
  border-left-color: var(--border);
}
.breadcrumbs > li {
  color: var(--main) !important;
}
.file-list-item .sort:hover span,
.file-list-item .sort:active span {
  color: var(--main) !important;
}
.gzeAD {
  color: var(--foreground-3);
}
div#pe-fallback-msgbox {
  border: 1px solid var(--main) !important;
}
#prodDetails table td.label {
  background-color: #323744;
}
#prodDetails .secHeader {
  border-bottom: 1px solid var(--main) !important;
}
#prodDetails .col1 td,
#prodDetails .col2 td {
  border-top: 1px dotted var(--border) !important;
}
.a-popover-wrapper {
  border: 10px solid var(--border-2) !important;
  border-radius: 8px !important;
}
.sims-header {
  padding-top: 3px;
}
.sims-img-border {
  height: 8px;
}
.desktop-row {
  margin-bottom: 0px;
}
table.a-bordered {
  border: 1px solid var(--border);
  border-top-color: var(--border);
}
table.a-bordered tr:last-child td {
  border-color: var(--border);
}
.a-box .a-divider.a-divider-break:after,
.a-color-base-background .a-divider.a-divider-break:after,
.a-divider.a-divider-break:after {
  border-top: 1px solid var(--border);
}
.a-box .a-divider.a-divider-break h5,
.a-color-base-background .a-divider.a-divider-break h5,
.a-divider.a-divider-break h5 {
  color: var(--foreground-3);
}
.a-button .a-button-inner {
  background: transparent !important;
}
.a-button-primary {
  background: none !important;
  color: var(--foreground-3) !important;
}
.a-button-dropdown .a-button-text {
  border: none;
}
.feed-carousel .feed-scrollbar-thumb:hover {
  background-color: var(--main) !important;
}
.ac-badge-rectangle {
  background-color: #3c516b;
  border-color: #3c516b;
}
.ac-badge-triangle {
  color: #3c516b;
}
.a-box {
  margin-left: 0px !important;
}
.bxc-grid__content--dark .a-button.bxc-button {
  background: transparent;
  border-color: transparent;
}
.bxc-grid__content--dark .a-button.bxc-button:hover,
.bxc-grid__content--dark
  .a-button.bxc-button:hover
  .a-button-inner.bxc-button-inner {
  background: transparent;
}
#a-page div.left_nav.browseBox h3 {
  color: var(--foreground-3);
}
.acs-private-brands-container-background .s-item-container {
  background-color: var(--background-2);
}
.acs-product-card-for-container {
  border: 1px solid var(--border);
  box-shadow: none;
  background-image: linear-gradient(
    to top,
    #383e4c 0,
    #383e4c 20%,
    #383e4c 60%
  );
  background-color: #383e4c;
}
.vpc_coupon_grid_more_coupons,
.vpc_coupon_grid_get_more_coupons {
  border: 1px solid var(--border);
  color: var(--foreground-3);
}
.vpc_coupon_grid_more_coupons:hover,
.vpc_coupon_grid_get_more_coupons:hover {
  cursor: pointer;
  background-color: var(--main) !important;
}
.vpc_coupon_category_grid_tile_selected {
  background-color: var(--background-2);
}
.vpc_coupon_category_grid_tile {
  border: solid var(--border) 1px;
}
.bxc-grid__content--light .a-button.bxc-button,
.bxc-grid__content--light
  .a-button.bxc-button
  .a-button-inner.bxc-button-inner {
  background: transparent;
}
#asNav .asSubhead,
#asNav .selected,
#asNav .asNavLink,
#asNav .asNavBottom {
  border-right: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}
#asNav .asNavLink a:hover {
  background: var(--background-2);
}
input,
select,
textarea {
  background: var(--background-2);
  border: 1px solid var(--border);
}
.cs-help-sidebar-module {
  border: 1px solid var(--border);
}
.cs-help-content p.lead {
  border-bottom: 1px solid var(--border);
}
#oneBAv2-header-container {
  background: var(--background-2);
  border-bottom: 1px solid var(--border);
}
.apl_m_font_message {
  color: #ddd;
}
.acs-wtfl-filtersort-wrap {
  border-bottom: 1px solid var(--border);
  background-color: var(--background);
}
.acs-wtfl-filtersort-sortby {
  border-left: 1px solid var(--border);
}
.acs-wtfl-filtersort-category-selected {
  border-color: var(--main) !important;
  color: var(--foreground-3);
}
.acs-wtfl-card {
  border: 1px solid var(--border);
  background-color: var(--background-2);
}
.acs-wtfl-filtersort-category:hover {
  color: #ddd;
  border-color: var(--main) !important;
}
.acs-wtfl-filtersort-sortby:hover {
  background-color: var(--background-2);
}
.acs-wtfl-card-details {
  background-color: #373c4a;
  border-top: 1px solid var(--border);
}
.acs-wtfl-quickview-btn:hover {
  background-color: var(--main) !important;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 1);
}
.acs-wtfl-quickview-btn {
  background-color: #3b4150;
  border: 1px solid var(--border);
}
#a-page div.unified_widget.rcmBody h2 {
  color: var(--main) !important;
}
div.left_nav.browseBox {
  border: 1px solid var(--border) !important;
  padding: 10px;
}
#vas-ppd-fake-twister .vas-ppd-swatches .vas-ppd-swatch-select,
#vas-ppd-fake-twister .vas-ppd-swatches .vas-ppd-swatchselect {
  border-color: var(--main) !important;
}
#ratings_id ul {
  color: #ddd;
}
#vas-ppd-fake-twister #vas-fake-twister-whatsincluded {
  border-bottom: 1px solid var(--border);
}
.w-box {
  border: 1px var(--border) solid;
  background-color: var(--background);
}
.w-divider {
  border-top: 1px solid var(--border);
}
.w-success-msg span {
  color: var(--foreground-3) !important;
}
.merchbarW .shoveler-title .span,
.merchbarW .shovHeader {
  color: var(--foreground-3) !important;
}
.w-uwl span {
  color: var(--foreground-3) !important;
}
.a-unordered-list.a-box-list li,
ul.a-box-list li {
  border-bottom: 1px solid var(--border);
}
.default-section {
  border-bottom: 1px solid var(--border);
}
#gc-vertical-tab-list .gc-vertical-tab-active {
  border-top: 1px solid var(--border);
  border-left: 1px solid var(--border);
  border-bottom: 2px solid var(--main) !important;
  border-right: 1px solid var(--border);
}
#gc-vertical-tab-list .gc-vertical-tab-normal {
  border-bottom: 1px solid var(--border);
  border-left: 1px solid var(--border);
}
#gc-vertical-tab-list {
  border-right: 1px solid var(--border);
}
table.a-bordered tr:first-child th {
  background: var(--background-2);
  border-color: var(--border);
  border-bottom: 1px solid var(--border);
}
.hrDiv {
  border-bottom: 1px solid;
  border-color: var(--border);
}
.pmts-link-button {
  color: var(--main) !important;
}
.a-switch-control {
  border: 1px solid var(--border);
  border-top-color: var(--border);
  border-bottom-color: var(--border);
  background: #f5f6f9;
  background: var(--background-2);
  box-shadow: none;
}
.a-switch {
  border: 1px solid var(--border);
  border-top-color: var(--border);
  background-color: #3a3f4e;
  box-shadow: none;
}
.a-active .a-switch {
  background-color: var(--main) !important;
  border-color: var(--main) !important;
}
.a-active .a-switch-control {
  border-color: var(--main) !important;
  left: 10px;
}
.bxc-grid__text ul li {
  color: var(--foreground);
}
.desktop #itemImages-container-forMapTracking a .itemImages-multiple-item,
.tablet #itemImages-container-forMapTracking a .itemImages-multiple-item {
  margin-bottom: 20px;
  border: 5px solid var(--main) !important;
}
a.a-link-section-expander {
  background-color: #404756 !important;
}
.message-center-nav-path span {
  color: var(--foreground-3);
}
.message-table-row {
  border-bottom: 1px solid var(--border);
}
.message-table-row:hover {
  background-color: var(--background-2);
}
.message-center-left-nav-selected {
  color: var(--main) !important;
  background-color: var(--background-2);
}
.message-center-left-nav:hover {
  background-color: var(--background-2);
}
.subscription-detail {
  border: 1px solid var(--border);
}
.storage-plans .plan {
  border: 1px solid var(--border);
}
.usage-chart .graph .available {
  background-color: var(--background-2);
}
header.breadcrumb {
  color: var(--foreground-3);
}
.avu-section-alt.avu-background-secondary {
  background-color: var(--background);
}
.avu-content .avu-section-alt {
  color: var(--foreground-3);
}
.avu-content .avu-section-alt .av-panel {
  background-color: var(--background-2);
  border-color: var(--border);
}
.DigitalVideoWebNodeSettings_Shared__dvui
  .avu-section-alt
  div.DigitalVideoWebNodeSettings_Shared__borderbottom {
  border-bottom: 1px solid var(--border);
}
.avu-section-alt .DigitalVideoUI_DVUI__base,
.DigitalVideoUI_DVUI__base .avu-section-alt {
  background-color: var(--background-2);
}
.avu-content .avu-section-alt .av-panel-section {
  border-bottom: 1px solid var(--border);
}
.avu-section-alt.avu-background-secondary .DigitalVideoUI_DVUI__base,
.DigitalVideoUI_DVUI__base .avu-section-alt.avu-background-secondary {
  background-color: var(--background-2);
}
.avu-content .avu-section-alt .av-swipable-heading-block-container:before {
  border-bottom: 1px solid var(--border);
}
.avu-section-alt.avu-section-alt.avu-section-alt .DigitalVideoUI_Button__button,
.avu-section-alt.avu-section-alt.avu-section-alt
  .DigitalVideoUI_Button__button:link,
.avu-section-alt.avu-section-alt.avu-section-alt
  .DigitalVideoUI_Button__button:visited {
  background-color: #414858;
}
.avu-section-alt.avu-section-alt.avu-section-alt
  .DigitalVideoUI_Button__default {
  box-shadow: none;
}
.avu-section-alt.avu-section-alt.avu-section-alt .DigitalVideoUI_Button__button,
.avu-section-alt.avu-section-alt.avu-section-alt
  .DigitalVideoUI_Button__button:link,
.avu-section-alt.avu-section-alt.avu-section-alt
  .DigitalVideoUI_Button__button:visited {
  background-color: #414858;
}
.a-switch-row:hover .a-switch-control {
  border-color: var(--main) !important;
}
.hh-hero-sub-icons-remove {
  border: 1px solid var(--border);
}
.hh-hero-sub-icons-remove .icons {
  border-right: 1px solid var(--border);
}
.cnWcve {
  background-color: var(--background);
}
.wl-invite-icon {
  border: 1px solid var(--main) !important;
}
.wl-collab-list-user-icon img {
  box-shadow: 0 0 0 1px var(--main) !important;
}
.a-button-toggle.a-button-selected {
  background-color: var(--background-2);
}
#navbar.nav-bluebeacon #nav-tools .nav-line-1,
#navbar.nav-bluebeacon #nav-xshop .nav-line-1,
#navbar.nav-bluebeacon .nav-a-2 .nav-line-1 {
  color: var(--main) !important;
}
.nav-packard-glow #nav-global-location-slot .nav-a:hover {
  border: 1px solid var(--main) !important;
}
#siteDirectory h2,
#siteDirectory h2 a {
  color: var(--main) !important;
}
#shopAllLinks .nav_cat_links a {
  border-bottom: 1px solid #777;
}
#shopAllLinks .nav_cat_links a:hover {
  border-bottom: 1px solid var(--main) !important;
}
.aplus-v2 .apm-rightthirdcol {
  border-left: 1px solid var(--border);
}
.nav-subnav #nav-subnav.spacious .nav-a:hover .nav-a-content {
  color: var(--foreground-3);
  border-bottom: none;
}
#shortcutLinks strong {
  color: var(--main) !important;
}
.lb-border-p {
  border: 1px solid var(--border);
}
.lb-txt-black,
.lb-txt-black a,
.lb-txt-black a.lb-active,
.lb-txt-black a:active,
.lb-txt-black a:hover,
.lb-txt-black a:visited,
a.lb-txt-black,
a.lb-txt-black.lb-active,
a.lb-txt-black:active,
a.lb-txt-black:hover,
a.lb-txt-black:visited {
  color: var(--foreground-3);
}
.lb-h1,
.lb-h1-large,
.lb-h1-xlarge,
.lb-h2,
.lb-h3,
.lb-h4,
.lb-h5,
.lb-h6 {
  color: var(--foreground);
}
.lb-item-expander-cortex .lb-trigger {
  color: var(--main) !important;
}
.lb-item-expander-cortex .lb-item-expander-accordion {
  border: 0 solid var(--background-2);
  background-color: var(--background-2);
}
.lb-item-expander-cortex .lb-item-expander-accordion:after {
  border-bottom: 1px solid var(--border);
}
.lb-item-expander-cortex .lb-content-item a {
  text-shadow: none;
}
.lb-item-expander-cortex .lb-content-item a:visited {
  color: var(--foreground-3);
}
.lb-item-expander-cortex .lb-triangle-inner {
  border-bottom-color: var(--background-2);
}
.lb-item-expander-cortex .lb-triangle-inner {
  top: 3px;
  left: -8px;
  border-bottom: 8px solid var(--background-2);
}
[class*=" lb-icon-ps-"]:before,
[class^="lb-icon-ps-"]:before {
  filter: invert(100%);
}
.aws-page-footer {
  border-top: 1px solid var(--border);
  background: var(--background-2);
}
.aws-page-footer:before {
  border-top: 1px solid #545b;
}
.aws-page-footer-main {
  border-top: 1px solid var(--border);
}
.aws-page-footer-main:before {
  border-top: 1px solid var(--border);
}
.aws-page-footer-nav {
  border-right: 1px solid var(--border);
}
.aws-page-footer-nav:before {
  border-right: 1px solid var(--border);
}
.aws-page-footer-nav:after {
  border-right: 1px solid var(--border);
}
.aws-page-footer .aws-language:before {
  border-top: 1px solid var(--border);
}
.aws-page-footer .aws-language {
  border-top: 1px solid var(--border);
}
.aws-page-footer .aws-meta {
  border-top: 1px solid var(--border);
}
.aws-page-footer .aws-meta:before {
  border-top: 1px solid var(--border);
}
.aws-page-footer .aws-page-footer-cta-button:visited {
  color: var(--foreground-3);
}
.aws-page-footer a:visited {
  color: var(--foreground-3);
}
.awsm a:visited {
  color: var(--foreground-3);
}
.aws-page-footer .aws-page-footer-cta-button {
  border-color: #e69242 !important;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 1);
  color: var(--foreground-3) !important;
  background: var(--main) !important;
  background-image: none;
  box-shadow: none;
}
.mo-sitePriv {
  border-top: 2px solid var(--main) !important;
  background-color: var(--background);
  color: var(--foreground) !important;
}
.m-nav-header {
  background-color: var(--background-2);
  color: var(--foreground-3);
  border-bottom: 1px solid var(--border);
}
.m-nav-panel-wrapper {
  background-color: var(--background-2);
  border-top: 1px solid var(--border);
  color: #ddd;
}
.m-nav-icon-group {
  background-color: var(--background-2);
}
.oct-dls-background {
  background-color: var(--background);
}
.oct-dls-container {
  background-color: var(--background);
}
.oct-acs-asin-item-container {
  border-left: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  border-right: 1px solid var(--border);
}
.oct-dls-asin-stream-container {
  border-top: 1px solid var(--border);
}
.oct-dls-asin-stream-container:after {
  border-right: none;
}
.deals-shoveler .dealPrice .dealPPU {
  color: var(--foreground);
}
.cbsieD {
  background-color: var(--background);
}
.gqLFqB,
.hMDWEd {
  background-color: var(--background);
}
.GB-M-COMMON.GB-PC-FACEOUT {
  border-bottom: 1px solid var(--border);
}
div[style$="background-color: white;"] {
  background: var(--background) !important;
}
.octopus-pc-category-card-v2 {
  background-color: var(--background);
}
.octopus-pc-category-card-v2-item {
  border-bottom: none;
  border-right: 1px solid var(--border);
}
.octopus-pc-category-card-v2-content {
  border: 1px solid var(--border);
}
.octopus-pc-card {
  background-color: var(--background);
}
.octopus-pc-item-block {
  background-color: var(--background-2);
}
.octopus-pc-item {
  background: var(--background-2);
}
.octopus-pc-card-content {
  background-color: var(--background-2);
  border: 1px solid var(--border);
}
.octopus-pc-category-card-v2-item-block {
  background-color: var(--background-2);
}
#promise-background-container.background-normal {
  background-color: var(--background);
}
.s-border-bottom {
  border-bottom: 2px solid var(--border);
}
#s-refinements {
  border-right: 2px solid var(--border);
}
.s-desktop-toolbar {
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  box-shadow: none;
}
.wl-has-overlay {
  background-color: var(--background-2);
}
.wl-grid-item {
  border-right: 3px solid var(--background);
  border-bottom: 3px solid var(--background);
  background-color: var(--background-2);
}
.gw-card-layout .desktop-row > div {
  background: var(--background) !important;
  background-image: none;
}
.gw-card-layout .a-cardui {
  background: var(--background-2) !important;
  background-image: none;
}
.gw-card-layout .a-cardui {
  border: none;
  margin-bottom: 0;
  margin-top: 5px;
  padding-top: 20px;
  border-radius: 5px;
}
.fresh-shoveler .as-title-block {
  border-bottom-left-radius: 5px;
  border-left: 1px solid var(--border);
  border-top-left-radius: 0px;
  margin-left: 0px !important;
}
.wl-grid-item .wl-has-overlay {
  background-color: var(--background-2);
}
.gw-card-layout .a-cardui .a-cardui-header {
  text-align: center;
}
.gw-card-layout .a-size-base {
  text-align: center;
}
.a-color-base-background {
  background-color: #2e3440 !important;
  border: 1px solid var(--border);
}
.view-switcher-active {
  border-bottom: 2px solid var(--main) !important;
}
ul.a-tabs .a-tab-heading.a-active a,
ul.a-tabs li.a-active a {
  background-color: #3b4151 !important;
  color: var(--foreground-3) !important;
  border-radius: 0px;
}
ul.a-tabs {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
ul.a-tabs {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.a-box {
  margin-left: 0px !important;
}
.wl-list.selected {
  border-radius: 10px;
}
.explore-top-nav,
.finds-top-nav,
.glimpse-fiona-top-nav {
  background-color: var(--background);
  color: var(--foreground-3);
}
.finds-top-nav {
  border-bottom: 1px solid var(--border);
}
.finds-top-nav .finds-top-nav-item.finds-top-nav-item-selected {
  color: var(--foreground-3);
}
.wl-has-overlay {
  background-color: transparent;
}
ul.a-tabs .a-tab-heading.a-active a,
ul.a-tabs li.a-active a {
  box-shadow: none;
}
.sosp-container {
  background-color: var(--background-2);
}
.pmts-selected {
  border-color: transparent;
  background-color: transparent;
}
#hmenu-container #hmenu-canvas {
  background-color: var(--background-2);
}
#hmenu-container #hmenu-canvas #hmenu-content ul.hmenu li a,
#hmenu-container #hmenu-canvas #hmenu-content ul.hmenu li a:hover,
#hmenu-container #hmenu-canvas #hmenu-content ul.hmenu li a:visited {
  color: var(--foreground-3) !important;
}
html:not(.a-touch)
  #hmenu-container
  #hmenu-canvas
  #hmenu-content
  ul.hmenu
  li
  a.hmenu-item:hover {
  background-color: var(--background);
}
#hmenu-container
  #hmenu-canvas
  #hmenu-content
  ul.hmenu
  li.hmenu-separator:not(:last-child) {
  border-bottom: 1px solid var(--background);
}
#hmenu-container #hmenu-canvas #hmenu-customer-profile {
  background-color: var(--background);
  border-bottom-right-radius: 0px;
}
#hmenu-container #hmenu-canvas #hmenu-content ul.hmenu li.hmenu-link-separator {
  border-bottom: 1px solid var(--background);
}
#hmenu-container
  #hmenu-canvas
  #hmenu-content
  ul.hmenu
  li
  a.hmenu-item.hmenu-back-button {
  border-bottom: 1px solid var(--background);
}
#hmenu-container
  #hmenu-canvas
  #hmenu-customer-profile
  #hmenu-customer-profile-right
  #hmenu-customer-name {
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 1);
}
#hmenu-container
  #hmenu-canvas
  #hmenu-content
  ul.hmenu
  li
  .hmenu-item.hmenu-title {
  color: var(--main) !important;
}
.a-popover.a-arrow-top .a-arrow {
  border-top-color: var(--background-2);
}
.avu-content-aui {
  background-color: var(--background);
}
.quotes-bubble-arrow {
  display: none;
}
#promise-container #secondaryStatus.black {
  color: var(--main) !important;
}
#cardsContainer .cardContainer {
  border-radius: 10px;
}
.desktop #itemImages-container .imageRow-oneBoxLayout img,
.tablet #itemImages-container .imageRow-oneBoxLayout img {
  border-radius: 10px;
}
.mcx-nav {
  background-color: var(--background-2);
  border-bottom: 1px solid var(--border);
}
.mcx-nav__title {
  background-color: var(--background-2);
}
.mcx-nav__title {
  border-color: var(--border);
}
.mcx-menu__list {
  background-color: var(--background-2);
}
.mcx-menu-item__heading {
  color: var(--foreground-3);
}
.mcx-menu__list-item {
  border-right: 1px solid var(--border);
}
.mcx-menu-item__title {
  color: #969696;
}
.mcx-widget {
  background-color: var(--background-2);
  border: 1px solid var(--border);
}
.mcx-widget__title:after,
.mcx-widget__title:before {
  background-color: var(--border);
}
.mcx-help__item .mcx-help__radio:checked ~ .mcx-help__question,
.mcx-help__question.is-active {
  background-color: var(--background) !important;
}
.mcx-help__question {
  border: 1px solid var(--border);
  background-color: var(--background-2);
}
.mcx-help__answerContainer {
  display: none;
  background-color: var(--background);
}
#primeCentralHomepagePromotionSlotContentImportedFromMS3 a img,
.widgetPrimeCentralHomePageCenterPromotionSlot a img {
  display: none;
}
#nav-flyout-accountList .nav-al-flyout-header {
  color: var(--foreground-3);
}
#mako-subnav {
  background-color: var(--background-2);
  border-bottom: 1px var(--border) solid;
}
.dFZMgz {
  color: var(--foreground-3);
}
#navbar[data-template="layoutSwapToolBar"].layout2
  #nav-pldn-msg-wrapper
  .nav-pldn-a:hover,
#navbar[data-template="layoutSwapToolBar"].layout2
  #nav-shop
  #nav-link-fresh:hover,
#navbar[data-template="layoutSwapToolBar"].layout2
  #nav-shop
  #nav-link-shopall:hover,
#navbar[data-template="layoutSwapToolBar"].layout2
  .nav-right
  #nav-tools
  .nav-a:hover,
#navbar[data-template="layoutSwapToolBar"].layout2 a#nav-hamburger-menu:hover {
  border-color: var(--border);
  background-color: var(--background3) !important;
}
#navbar[data-template="layoutSwapToolBar"].layout2
  #nav-xshop-container
  #nav-xshop
  .nav-a:hover {
  border-color: var(--border);
}
.swatchUnavailable .a-button-inner {
  text-decoration: line-through;
}
#navbar[data-template="layoutSwapToolBar"].layout2.nav-packard-glow
  #nav-global-location-slot
  .nav-a:hover {
  border-color: var(--border) !important;
}
.transparentTwisterDropdownBorder {
  border: 2px solid var(--border);
}
#twister .swatches li.swatchUnavailable,
#twister .swatches li.swatchUnavailableHover {
  border-style: solid;
  border-width: 1px;
  border-color: var(--red);
}
.background-gary-1 {
  background-color: var(--background) !important;
}
.background-white {
  background-color: var(--background) !important;
}
.color-black {
  color: var(--foreground-3) !important;
}
.s-desktop-toolbar {
  background-color: var(--background) !important;
}
.s-desktop-content {
  background-color: var(--background) !important;
}
ol.a-carousel {
  color: var(--foreground-3);
}
.s-include-content-margin.s-border-top-overlap {
  border-top: 2px solid var(--border);
}
.octopus-pc-asin-info-section {
  background-color: var(--background-2);
}
.octopus-pc-dotd-info-section {
  background-color: var(--background-2);
}
.octopus-pc-deal-block-section {
  background-color: var(--background-2);
}
[data-creative-type="MultiCardCreativeDesktop"] .sb_37u_8SFq {
  background-color: var(--background);
}
[data-creative-type="MultiCardCreativeDesktop"] .sb_27yAbx8Y {
  color: var(--foreground-3);
}
[data-creative-type="MultiCardCreativeDesktop"] .sb_25yic0YU {
  color: var(--foreground-3);
}
a:link:hover {
  color: #bbb !important;
}
.gw-card-layout .desktop-row > div {
  background: var(--background);
}
#gw-content-grid .fresh-shoveler .as-title-block .a-color-base {
  font-weight: 100 !important;
}
#ybh.desktop .asin-title,
#ybh.tablet .asin-title {
  color: var(--foreground-3) !important;
}
#gw-content-grid {
  max-width: 1600px;
}
.aplus-v2 .a-color-secondary {
  color: var(--foreground-3) !important;
}
.fresh-shoveler .feed-carousel .feed-carousel-card .product-image {
  opacity: 0.8;
}
.a-button-text {
  background-color: #17191f !important;
  background: none;
  border-bottom: 4px solid #111915 !important;
}
.a-button-text:hover {
  background-color: #21242d !important;
  background: none;
  border-bottom: 4px solid #1b2822 !important;
}
#productDescription .aplus table.data th {
  background: var(--background-2);
}
#vas-ppd-fake-twister .vas-ppd-swatches li {
  border: 1px solid var(--border);
}
div[class$="a-box-inner a-alert-container"],
div[class="a-box-inner a-alert-container"],
div[class$="ewc-scroll-area"],
div[class="ewc-scroll-area"],
.a-accordion .a-accordion-active .a-accordion-row,
.a-accordion .a-accordion-active .a-accordion-inner,
.a-accordion .a-accordion-row {
  background-color: var(--background-2) !important;
}
.a-box {
  background-color: var(--background-2) !important;
}
.a-popover-wrapper {
  border: 5px solid var(--border-2) !important;
  border-radius: 0px !important;
}
._25BG6L._25BG6L._25BG6L,
._25BG6L._25BG6L._25BG6L:link,
._25BG6L._25BG6L._25BG6L:visited {
  background-color: var(--background-2);
}
._25BG6L._25BG6L._25BG6L._2e7Rte,
._25BG6L._25BG6L._25BG6L:focus,
._25BG6L._25BG6L._25BG6L:hover {
  background-color: var(--border);
}
.adcenterRowWrapper,
.billboardRowWrapper,
.desktop-row {
  background: var(--background-2) !important;
  border: none;
  margin-top: none !important;
  border-radius: 10px;
}
#squished-desktop-row .desktop-row {
  border-right: none;
}
.gw-card-layout[data-flow-dir="h"] > .gw-col {
  padding-left: 0px;
  padding-right: 0px;
}
.fresh-shoveler {
  border-radius: 10px;
}
.gw-card-layout .desktop-row > div {
  background: var(--background-2);
  border: 10px solid var(--background) !important;
}
#gw-content-grid .fresh-shoveler .as-title-block .a-color-base {
  text-shadow: none;
}
.fresh-shoveler .as-title-block {
  margin-bottom: 20px !important;
  margin-left: -0px !important;
  margin-top: -0px !important;
  padding-left: 0px;
  padding-right: 0px;
}
#navbar.nav-bluebeacon #nav-main {
  background-color: var(--background-5) !important;
  border-bottom: none !important;
  box-shadow: none;
}
.fresh-shoveler .feed-carousel .feed-carousel-card .product-image {
  border: none !important;
  border-radius: 10px;
}
.a-box {
  margin-left: 10px;
  border-radius: 0px;
  border: none !important;
}
.a-box-group > .a-box.a-first,
.a-box-group > .a-box:first-child {
  border-radius: 0px 0px 0px 0px;
}
.a-box-group > .a-box.a-last,
.a-box-group > .a-box:last-child {
  border-radius: 0 0 0 0;
}
#desktop-ad-center-1 {
  display: none;
}
.fnneEu {
  background-color: var(--background-2);
  margin-top: 20px;
}
.hBzgZI {
  background-color: var(--background);
}
.jPBsvU {
  color: var(--foreground-3);
}
.fnneEu > h2,
.fnneEu h2.card-heading {
  margin: 0px 10px 25px;
}
.gRykup {
  color: var(--foreground-3);
}
#navFooter.navLeftFooter {
  background-color: var(--background) !important;
}
ul.a-tabs {
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  background-color: #484f5f !important;
}
.feed-carousel .feed-carousel-control {
  height: 45px;
  background-color: var(--main) !important;
}
#hmenu-container
  #hmenu-canvas
  #hmenu-content
  ul.hmenu
  li
  .hmenu-item.hmenu-title {
  color: var(--main) !important;
}
#ybh.desktop .asin_container:not(.right),
#ybh.tablet .asin_container:not(.right) {
  border-right: none;
}
#ybh.desktop .asin_container:not(.bottom),
#ybh.tablet .asin_container:not(.bottom) {
  border-bottom: 1px solid var(--border);
}
a#nav-hamburger-menu {
  border-color: transparent !important;
}
.a-popover-wrapper {
  border: 5px solid var(--border) !important;
  border-radius: 10px !important;
}
.a-popover-inner {
  background-color: var(--background-2) !important;
  border-radius: 10px !important;
}
#ivThumbs {
  border-radius: 10px !important;
  background: var(--backround-2);
}
#navFooter.navLeftFooter .navFooterLinkLine {
  background: transparent !important;
  max-width: unset;
}
#nav-subnav {
  background: var(--background) !important;
}
.expansion-container {
  border: 5px solid var(--background) !important;
  background-color: var(--background) !important;
  border-radius: 10px;
}
.carousel-faceout-container .title-container {
  color: var(--foreground-3);
}
.feed-carousel-control {
  width: 45px;
  background-color: var(--main) !important;
  height: 45px;
  border: 5px solid var(--border) !important;
  border-radius: 100%;
}
#ysh-cards-container li.recs-grid-item {
  border-radius: 10px;
}
#ys-card .welcome-msg {
  color: var(--main) !important;
}
.card-faceout-container .card-title {
  color: var(--foreground-3);
}
.card-faceout-container .card-item-count {
  color: var(--main);
}
.overlay:hover {
  box-shadow: 0 0 3px 2px var(--main);
}
#navbar.nav-bluebeacon #nav-search .nav-search-scope.nav-focus,
#navbar.nav-bluebeacon #nav-search .nav-search-scope:focus,
#navbar.nav-bluebeacon #nav-search .nav-search-scope:hover {
  background-color: var(--main) !important;
  border-left-color: var(--main) !important;
  border-top-color: var(--main) !important;
  border-bottom-color: var(--main) !important;
}
.s-desktop-toolbar {
  background-color: var(--background);
}
.s-desktop-toolbar {
  border-top: 0px solid var(--border);
  border-bottom: 0px solid var(--border);
}
#s-refinements {
  border-right: none !important;
  background: var(--background);
  padding: 10px;
  border-radius: 10px;
}
.s-border-bottom {
  border-bottom: 2px solid var(--background-2);
}
[data-creative-type="TetrisCreativeDesktop"] .sb_37u_8SFq {
  /*border-radius: 10px;
    padding-left: 20px;*/
  display: none;
}
ul.a-pagination li.a-disabled {
  color: var(--foreground-3);
  border: none;
}
ul.a-pagination li.a-selected a {
  background-color: var(--main) !important;
  border: 0 !important;
}
[data-a-badge-color="sx-gulfstream"] {
  background-color: #024d58 !important;
  color: #024d58 !important;
}
.s-image-fixed-height .s-image,
.s-image-square-aspect .s-image,
.s-image-tall-3-4-aspect .s-image,
.s-image-tall-aspect .s-image,
.s-image-wide-5-3-aspect .s-image {
  border-radius: 10px;
}
.HBiJOe {
  background-color: var(--background);
}
.ys-center {
  background: #21252d !important;
}
.av-retail-m-nav-container {
  background-color: var(--background);
  margin-bottom: 10px;
}
.rpt-grid .rpt-cell-wrapper {
  border-top: none;
  border-bottom: none;
  border-right: none;
  background: var(--background-2);
  border-radius: 10px;
}
.rpt-grid {
  border-left: none;
}
#leftNav {
  margin-bottom: 20px;
  margin-left: -10px;
  margin-top: 10px;
}
.s-border-right {
  border-right: none !important;
  background: var(--background-2);
  padding-left: 10px;
  border-radius: 10px;
}
div.left_nav.browseBox {
  border: none !important;
}
.ysh-carousel-arrow {
  filter: invert(90%);
}
.GB-SUPPLE .tallCellView {
  background: #0f1115;
}
.a-carousel-row-inner {
  background: var(--background-2);
  padding: 10px;
  border-radius: 10px;
}
.mcx-nav {
  background-color: #191c23;
  border-bottom: none;
}
.mcx-menu__list {
  background-color: #191c23;
  color: var(--foreground-3);
}
.mcx-nav__title {
  background-color: #191c23;
  border-color: transparent;
}
.mcx-menu__list-item {
  border-right: none;
}
.mcx-widget {
  border: none;
}
.acs-ln-widget .acs-ln-expand-all {
  padding: 5px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.a-icon-section-expand {
  filter: invert(1);
}
.octopus-pc-category-card-v2-content {
  border: none;
}
.octopus-pc-category-card-v2-item {
  border-bottom: none;
  border-right: none;
}
.octopus-pc-category-card-v2-item-block {
  background-color: var(--background-2);
  border-right: 1px solid var(--border);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.octopus-pc-category-card-v2-category-title {
  margin-top: 0px;
  background: var(--background);
}
.expansion-container {
  padding: 10px;
}
.nav-flyout {
  background: var(--background) !important;
  border: 5px solid #1e2128 !important;
  border-radius: 10px;
}
#nav-flyout-wl-alexa,
#nav-flyout-wl-items {
  border-bottom: 1px solid var(--background-2);
}
#nav-flyout-accountList #nav-al-your-account {
  border-left: 1px solid var(--background-2) !important;
}
.nav-tpl-discoveryPanelList .nav-divider,
.nav-tpl-discoveryPanelSummary .nav-divider,
.nav-tpl-itemList .nav-divider {
  background: var(--background-2);
}
hr {
  background-color: var(--background-2) !important;
}
#prodDetails .col1 td,
#prodDetails .col2 td {
  border-top: 1px solid var(--background-2) !important;
}
#HLCXComparisonTable td,
#HLCXComparisonTable th {
  border: 1px solid var(--background-2) !important;
}
.GB-M-COMMON.GB-PC-FACEOUT {
  border-bottom: 1px solid var(--background-2);
}
.GB-SUPPLE .widgetBorder {
  border-top: 1px solid var(--background-2);
}
.GB-SUPPLE .filters {
  border-top: 1px solid var(--background-2);
}
.GB-SUPPLE .tallCellView {
  border-color: var(--background-2) !important;
}
#vas-ppd-fake-twister #vas-fake-twister-whatsincluded {
  border-bottom: 1px solid var(--background-2);
}
.askInlineWidget .vote {
  border-right: 1px solid var(--main) !important;
}
#nav-prime-tooltip {
  background-color: var(--background);
}
.nav-npt-text-detail,
a.nav-npt-a {
  color: var(--foreground-3);
}
#nav-flyout-primeTooltip .nav-arrow .nav-arrow-inner {
  border-right: 9px solid #1e2128;
}
#nav-subnav.spacious[data-category="dmusic"] {
  background-color: #21242d !important;
}
.p-prod-tile {
  border: solid 1px var(--border);
}
.acswidget-category-tiles-softlines
  .acs_tile__links
  .acs_tile__links__link
  .acs_tile__links__link__text {
  color: var(--foreground-3) !important;
}
.acswidget-category-tiles-softlines
  .acs_tile__links
  .acs_tile__links__link
  div.a-box-inner {
  padding: 11px !important;
  border: 1px var(--border) solid;
}
.acswidget-category-tiles-softlines
  .acs_tile__links
  .acs_tile__links__link
  .acs_tile__links__link__arrow {
  filter: invert(1);
}
.acswidget-category-tiles-softlines .acs_tile__links {
  width: 100%;
}
.aplus-v2 table.apm-tablemodule-table th {
  border: 1px solid var(--background-2) !important;
}
.aplus-v2 tr.apm-tablemodule-keyvalue td {
  border: 1px solid var(--background-2) !important;
}
.aplus-v2 .apm-sidemodule,
.aplus-v2 .apm-tablemodule-image {
  background-color: #16171e;
}
.aplus-v2 th.apm-tablemodule-keyhead {
  background-color: #16171e;
}
.comparison_attribute_name_column {
  background-color: #16171e;
}
.comparison_baseitem_column {
  background-color: #16171e;
}
td.comparison_baseitem_column {
  background-color: var(--background-2);
}
.comparison_table tr:nth-child(2n) td.comparison_baseitem_column {
  background-color: #16171e;
}
#prodDetails table td.label {
  background-color: #16171e;
}
.a-popover-inner {
  background-color: var(--background) !important;
  border-radius: 0px !important;
}
.a-popover-wrapper {
  border: 5px solid #1e2128 !important;
  border-radius: 10px !important;
}
.jJqGOX {
  color: var(--red);
}
.bgtHJs {
  background: #16171e;
}
#nav-subnav.spacious {
  box-shadow: none;
}
#nav-subnav {
  border: none !important;
}
.a-section-expander-container:first-child {
  border-radius: 0px !important;
  margin-top: 0;
}
.a-section-expander-container:first-child a.a-link-section-expander {
  border-radius: 0px;
}
a.a-link-section-expander {
  background-color: var(--background) !important;
}
.a-section-expander-container {
  border: none;
}
a.a-link-section-expander .a-icon-section-collapse,
a.a-link-section-expander .a-icon-section-expand {
  filter: invert(1);
}
.aplus-v2 .apm-tablemodule-valuecell.selected {
  background-color: #16171e;
}
a-box-group > .a-box.a-first > .a-box-inner,
.a-box-group > .a-box:first-child > .a-box-inner {
  box-shadow: none;
}
.a-icon-extender-collapse,
.a-icon-extender-expand {
  filter: invert(1);
}
.a-unordered-list,
ul {
  color: var(--main);
}
.octopus-pc-category-card-v2-subcategory {
  border-top: 1px solid var(--border);
}
.a-icon-close {
  filter: invert(1);
}
.cerberus-asin-grid-column:not(:last-child) {
  border-right: 1px solid var(--border);
}
.ped_carousel_container {
  background: var(--background-2);
}
.ped_carousel_element.ped_carousel_separator {
  border-left: 1px solid var(--border);
}
.mcx-widget__title:after,
.mcx-widget__title:before {
  background-color: var(--main);
}
#sticky-nav-header {
  background: var(--background);
}
.s-carousel-button {
  background-color: var(--background);
  box-shadow: none;
}
#navbar.nav-bluebeacon .nav-logo-tagline {
  color: var(--foreground-3);
}
.sns-top-subnav-row {
  background-color: var(--background);
  border-bottom: none;
}
.no-subs-page .info-panels .info-panel {
  border-right: 1px solid var(--border);
}
.no-subs-page .info-panels {
  border-bottom: 1px solid var(--border);
}
.a-box-group > .a-box.a-first > .a-box-inner,
.a-box-group > .a-box:first-child > .a-box-inner {
  background: var(--background-2) !important;
}
.s-border-top-overlap {
  border-top: 2px solid var(--background-2);
}
.overlay:hover,
.recs-grid-item .selected {
  box-shadow: 0 0 3px 2px var(--main);
}
#navbar #nav-search .nav-searchbar:hover {
  box-shadow: none !important;
}
#nav-search .nav-search-submit {
  border-radius: 0 10px 10px 0;
}
#nav-search .nav-search-scope {
  border-radius: 10px 0 0 10px;
}
.s-back-arrow,
#wl-item-view .view-switcher,
.overflow-menu-icon-with-more-label,
.control-bar .a-icon.a-icon-dropdown {
  filter: invert(1);
}
.a-checkbox.a-checkbox-fancy .a-icon.a-icon-checkbox,
.a-checkbox.a-checkbox-fancy .a-icon.a-icon-checkbox:after {
  border-radius: 100%;
}
#wl-item-search {
  border-right: 1px solid var(--main);
}
.a-icon-text-separator,
.a-text-separator {
  background-color: var(--main);
}
.profile-top-bar {
  background-color: var(--background);
}
.landing-header-widget-row {
  background-color: var(--background);
}
.landing-page {
  background-color: var(--background);
}
.landing-header-welcome-header-subtext {
  color: var(--foreground-3);
}
.profile-menu-item-image {
  filter: invert(1);
}
.profile-widget-box {
  border-left: 1px solid var(--background-2);
}
.mirai-hamburger-button {
  background-color: var(--background);
}
.hamburger-menu-section {
  border-right: 1px solid var(--background-2);
}
.mirai-hamburger-button .line {
  background-color: var(--foreground-3);
}
.teaser-widget-row-inner .teaser-widget-category-list-column {
  background-color: var(--background-2);
}
.teaser-suggestion-box {
  background-color: #373c4a;
}
.teaser-widget-row-inner
  .teaser-widget-suggestion-items-section
  .teaser-widget-suggestion-items
  .teaser-category-page-link-container {
  background-color: var(--background-2);
}
.teaser-widget-row-inner
  .teaser-widget-suggestion-items-section
  .teaser-widget-suggestion-items
  .teaser-category-page-link-container
  .teaser-category-page-link
  .teaser-category-page-link-content
  .teaser-category-page-link-text {
  color: var(--foreground-3);
}
.teaser-widget-row-inner
  .teaser-widget-suggestion-items-section
  .teaser-widget-suggestion-items
  .teaser-category-page-link-container
  .teaser-category-page-link
  .teaser-category-page-link-content
  .teaser-arrow {
  filter: invert(1);
}
.teaser-suggestion-box-price {
  color: var(--foreground-3);
}
.shopbylook-btf-desktop-row {
  border: 1px solid var(--background-2);
}
.shopbylook-btf-desktop-left-section {
  border: 1px solid var(--background-2);
}
.shopbylook-btf-desktop-left-section-title {
  color: var(--foreground-3);
}
.shopbylook-btf-item-box {
  border: 1px solid var(--background-2);
}
.shopbylook-btf-desktop-right-top-row {
  border: 1px solid var(--background-2);
}
.sbl-refinement-item {
  border: 1px solid var(--background-2);
}
.sbl-refinement-button {
  color: var(--foreground-3);
}
.sbl-btf-desktop-top-v-line {
  border: 1px solid var(--main);
}
.collection-top-row-container {
  border-top: none;
}
.browsenode-menu-row li a {
  color: var(--foreground-3);
}
.collection-section {
  background-color: var(--background);
}
.category-title {
  background-color: var(--background-2);
  text-align: center;
  color: var(--foreground-3);
}
.browsenode-section-table td {
  border: 2px solid var(--background-2);
}
.browsenode-section {
  background-color: #242831;
}
.discovery-widget-row {
  background-color: var(--background);
}
.suggestion-section {
  background: var(--background);
}
.status-filtering-row-wrapper {
  background: var(--background-2);
}
.suggestion-box-expand {
  background: var(--background-2);
}
.status-filtering-row-fixed {
  background: var(--background);
}
.suggestion-box-price {
  color: var(--foreground-3);
}
.category-element {
  background-color: var(--background-2);
}
.discovery-widget-bar {
  margin-bottom: 6px !important;
}
.top-menu-profile-section-border-bottom {
  border-bottom: 1px solid var(--background-2);
}
.likes-tray-title-row {
  background: var(--background);
}
.suggestion-box {
  background-color: transparent;
}
.quick-view-details-button {
  background-color: var(--background-2);
  color: var(--foreground-3);
  border: 1px solid var(--background-2);
}
.quick-view-suggestion-section {
  background-color: var(--background);
}
.profile-header-row {
  background: var(--background);
}
.customer-likes-page {
  background: var(--background-2);
}
.customer-likes-filter-button {
  color: var(--foreground-3);
  background: var(--background-2);
}
.customer-likes-row {
  background: var(--background-2);
}
.like-box {
  background-color: var(--background);
}
.profile-menu-row li a:after {
  background: var(--main);
}
.saved-journey-section {
  background: var(--background);
}
.mirai-button-standard {
  background-color: var(--background-2);
  color: var(--foreground-3);
}
.profile-menu-row li a {
  color: var(--foreground-3) !important;
}
.saved-journey-box {
  background-color: var(--background-2);
  border-radius: 10px;
}
.saved-journey-session-name-text {
  color: var(--foreground-3);
}
.saved-journey-box .saved-journey-name-button-row .saved-journey-delete-button {
  filter: invert(1);
}
div#bottom-part {
  background-color: var(--background) !important;
}
.sitemap-widget-category-container {
  background-color: var(--background-2);
}
.like-box-delete {
  filter: invert(1);
}
.like-box-price {
  color: var(--foreground-3);
}
.stores-page {
  background: var(--background);
}
.stores-container {
  background: var(--background) !important;
}
.style__item__xGWxb {
  border-bottom: 1px solid var(--border);
}
.style__featureBullets__Yu9PZ {
  color: var(--foreground-3);
}
.style__allContributors__3Vx1w {
  color: var(--main);
}
.style__list__1mdZm .style__expander__1D0h9 .style__text__3_TMn {
  color: var(--foreground-3);
}
.style__buyPrice__26fGS {
  color: var(--red);
}
.style__left__cCjn1 .style__navArea__jlY6Q {
  border-bottom: none;
  background: var(--background-2);
}
.style__navBar__2NVns > .style__navList__Igck2 > .style__navItem__3rEc7 {
  background: var(--background-2);
}
.style__navBar__2NVns
  > .style__navList__Igck2
  > .style__navItem__3rEc7.style__isCurrent__1yLnN
  > a
  .style__linkText__OI_YN {
  -webkit-box-shadow: inset 0 -2px var(--main);
  box-shadow: inset 0 -2px var(--main);
  padding-bottom: 0;
}
.style__navigation__FMWJE .style__navItem__3rEc7 button {
  background: var(--background-2);
}
.style__navBar__2NVns > .style__navList__Igck2 > .style__navItem__3rEc7 > a,
.style__navBar__2NVns
  > .style__navList__Igck2
  > .style__navItem__3rEc7
  > button {
  color: var(--foreground-3);
}
.style__navBar__2NVns
  > .style__navList__Igck2
  > .style__navItem__3rEc7.style__hasChildren__okeZi
  > a::after,
.style__navBar__2NVns
  > .style__navList__Igck2
  > .style__navItem__3rEc7.style__more__33lpm
  > button::after {
  border-top: 4px solid var(--main);
}
.style__row__3wS8d {
  background: var(--background-2);
}
.style__v2__3Q3X4 .style__breadcrumb__3KWWY {
  color: var(--main);
}
.style__tagline__3aa7g {
  color: var(--foreground-3);
}
.style__title__WbEBX {
  color: var(--main);
}
.style__navMenu__3iZRP .style__navList__Igck2,
.style__navMenu__3iZRP .style__subnav__2KYpr .style__navList__Igck2 {
  background: var(--background) !important;
}
.style__navMenu__3iZRP .style__navItem__3rEc7 a,
.style__navMenu__3iZRP .style__navItem__3rEc7 button {
  background: var(--background-2);
  border-bottom: 1px solid var(--border);
}
.style__navMenu__3iZRP .style__navItem__3rEc7.style__isHeading__2UmI2 > a {
  background: var(--background);
}
.style__navMenu__3iZRP .style__navItem__3rEc7.style__isCurrent__1yLnN > a {
  border-left: 4px solid var(--background);
}
.style__navMenu__3iZRP .style__navItem__3rEc7.style__back__vECzM button {
  color: var(--foreground-3);
  background: var(--background);
}
.style__navMenu__3iZRP .style__navItem__3rEc7 a,
.style__navMenu__3iZRP .style__navItem__3rEc7 button {
  color: #8a8a8a;
}
.style__navMenu__3iZRP
  .style__navItem__3rEc7.style__back__vECzM
  button::before {
  filter: invert(1);
}
.style__navBar__2NVns > .style__navList__Igck2 .style__subnav__2KYpr {
  background: var(--background);
  border: 5px solid #313642;
}
#showroom-toolbar {
  background-color: var(--background);
  background: var(--background);
  box-shadow: none;
}
.desktop #showroom-toolbar .item,
.desktop #showroom-toolbar .item a {
  color: var(--foreground-3);
}
.desktop .ai-item {
  background-color: var(--background);
  border: 1px solid var(--background-2);
}
.desktop .ir-item {
  background-color: var(--background);
  border: 1px solid var(--background-2);
}
.a-form-actions {
  border-top: 1px solid var(--border);
  box-shadow: none;
}
.desktop .ai-item.selected {
  border-color: var(--main);
  box-shadow: inset 0 0 0 3px var(--main);
}
#octopus-quick-look-asin-popover {
  background: var(--background-2);
}
.octopus-sims-wrapper {
  background: var(--background);
}
#octopus-quick-look-asin-popover .octopus-quick-look-title {
  color: var(--foreground-3);
}
#octopus-quick-look-asin-popover
  .octopus-quick-look-pricing
  .octopus-quick-look-price,
#octopus-quick-look-asin-popover
  .octopus-quick-look-pricing
  .octopus-quick-look-price
  .a-color-price {
  color: var(--red) !important;
}
.menu-box-arrow-icon {
  filter: invert(1);
}
.desktop #showroom-toolbar {
  margin-top: 10px;
}
.desktop #showroom-toolbar .item.text.selected,
.desktop:not(.tablet) #showroom-toolbar .item.text:hover {
  background-color: var(--background-2) !important;
}
#navbar.nav-bluebeacon #nav-programs .nav-a:hover,
#navbar.nav-bluebeacon #nav-shop .nav-a:hover,
#navbar.nav-bluebeacon #nav-tools .nav-a:hover,
#navbar.nav-bluebeacon #nav-xshop .nav-a:hover,
#navbar.nav-bluebeacon .nav-tools .nav-a:hover {
  border-radius: 10px;
}
.g-item-sortable-drag-icon {
  filter: invert(0.7);
  border-radius: 10px;
}
#g-items > .g-item-sortable {
  border-top: none;
  border-bottom: none;
  background: var(--background-2);
  padding-right: 10px;
  padding-left: 10px;
  border-radius: 10px;
}
.a-button-text:hover {
  background-color: var(--background) !important;
  border-bottom: 1px solid var(--main) !important;
}
.consoles-accessories-redesign .superleaf #heroImage_feature_div {
  background: var(--background);
}
#superleafActionPanelWrapper {
  -webkit-box-shadow: none;
  background: var(--background-2);
}
#imageBlock.superleaf {
  background: var(--background);
}
.superleafParent #wayfinding-breadcrumbs_container {
  background: var(--background-2);
}
.superleafParent #ppd-top {
  background: var(--background-2);
}
#titleBar.superleaf {
  background-color: var(--background-2);
}
.gw-card-layout .a-cardui {
  background: var(--background-2) !important;
  border: 10px solid var(--background) !important;
  margin-top: 20px;
  border-radius: 0px !important;
}
.fresh-shoveler {
  border-radius: 0px !important;
}
.fluid-quad-image-label .quadrant-container {
  background: var(--background);
}
.fluid-quad-image-label .image-label {
  text-align: center;
}
#dp {
  background-color: var(--background) !important;
}
#risk-container {
  display: none !important;
}
.a-cardui {
  background-color: var(--background-2) !important;
}
.maple-banner--background {
  background-color: var(--background-2) !important;
}
.a-container.sc-background-dark {
  background-color: var(--background) !important;
}
.nav-bluebeacon #ewc #ewc-checkout.ewc-untabbed-checkout,
.ewc-item *,
ewc-item-info-right {
  background-color: var(--background-2) !important;
  color: var(--foreground) !important;
}
.a,
a:link {
  color: var(--link);
}
.aplus-v2 .aplus-standard .apm-tablemodule-valuecell.selected {
  background-color: var(--background-2) !important;
}
.reviews-highlight {
  color: #000000;
}
.nav-image {
  filter: invert(0.9);
}
#rhf .rhf-border {
  border: none !important;
}
.nav-categ-image {
  filter: invert(0.9);
}
.sw-card-container,
#rhf {
  background-color: var(--background) !important;
  border-radius: 2vh;
}
.sc-list-item {
  border: none !important;
}
.sc-list-caption {
  color: var(--foreground);
}
#nav-belt {
  background-color: var(--background-3) !important;
}
.s-suggestion:hover {
  background-color: var(--background-5) !important;
}
.GridContainer-module__gridMainContainer_24aSWvAi-VAzH5okoDOqpb {
  background-color: var(--background) !important;
}
.oct-dlp-atf-cards {
  background-color: var(--background) !important;
}
.a-spacing-base {
  background-color: var(--background) !important;
}
.card-flow-row-break {
  display: none !important;
}
.sf-filter-floatbox {
  background-color: var(--background-3) !important;
}
.sf-top-nav {
  background-color: var(--background) !important;
  border: none !important;
}
.a-color-base-background {
  border: none !important;
}
.swatch-title-text-container {
  background-color: var(--background-3) !important;
}
.a-span3 img[alt="Prime"] {
  filter: invert(87%) saturate(0%);
}
.amazonPayWalletWidgetRow,
.apx-wallet-widget-section,
.apx-wallet-payment-method-details-section {
  background-color: transparent !important;
}
.apx-wallet-desktop-payment-method-selectable-tab-inner-css,
.amazon-pay-wallet-menu-row,
.payWalletMenuTabHead {
  background-color: var(--background-3) !important;
  color: var(--foreground) !important;
}
.apx-wallet-payment-method-tab-selected,
.apx-wallet-payment-method-details {
  background-color: var(--background-5) !important;
}
.apx-wallet-payment-method-details {
  border-radius: 10px !important;
}
.amazon-pay-logo {
  filter: saturate(0%) brightness(400%) contrast(250%);
}
.breadcrumbLink {
  color: var(--foreground) !important;
}
.maple-banner a {
  color: var(--foreground) !important;
}
.maple-banner .maple-banner__col .maple-banner__image {
  min-width: unset !important;
}
`);
    style.appendChild(textNode);
    document.querySelector('html').appendChild(style);
  } catch (e) {
  }
}
injectAmazon();
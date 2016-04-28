/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(2)
	module.exports.template = __webpack_require__(3)

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	module.exports = {
	        props: ['package'],
	        settings: true,
	        methods: {
	            save: function () {
	                this.$http.post('admin/system/settings/config', {
	                    name: 'norrnext/social-share',
	                    config: this.package.config
	                }, function () {
	                    this.$notify('Settings saved.', '');
	                }).error(function (data) {
	                    this.$notify(data, 'danger');
	                }).always(function () {
	                    this.$parent.close();
	                });
	            }
	        },
	    ready: function() {
			(function() { var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true; po.src = 'https://apis.google.com/js/platform.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);})();
	        !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
	    },		
	    };
	    window.Extensions.components['settings-social-share'] = module.exports;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "<script src=\"https://apis.google.com/js/platform.js\" async defer></script>\r\n    <div class=\"uk-form uk-form-horizontal\">\r\n        <div class=\"uk-margin uk-flex uk-flex-space-between uk-flex-wrap\" data-uk-margin>\r\n            <div class=\"uk-width-medium-1-1 uk-container-center uk-margin-bottom\">\r\n                <div class=\"uk-panel\">\r\n                    <p class=\"uk-text-danger uk-text-center\">{{ 'You are using version with backlink to NorrNext website.' | trans }} <a class=\"uk-button uk-button-success uk-margin-top\" href=\"https://www.norrnext.com/pricing/backlink-removal/pkb-social-share\" target=\"_blank\">{{ 'Remove Backlink!' | trans }}</a></p>\r\n                </div>\r\n            </div>\t\t\r\n            <div data-uk-margin>\r\n                <h2 class=\"uk-margin-remove\">{{ 'PKB Social Share Settings' | trans }}</h2>\r\n            </div>\r\n            <div data-uk-margin>\r\n                <button class=\"uk-button uk-button-primary\" @click=\"save\">{{ 'Save' | trans }}</button>\r\n            </div>\r\n        </div>\r\n    <fieldset>\r\n        <legend>{{ 'Layout' | trans }}</legend>\r\n        <div class=\"uk-form-row\">\r\n          <label for=\"field-buttons-position\" class=\"uk-form-label\">{{ 'Position' | trans }}</label>\r\n          <div id=\"field-buttons-position\" class=\"uk-form-controls uk-form-controls-text\">\r\n              <select v-model=\"package.config.buttons.position\">\r\n                <option value=\"static\">{{ 'Static' | trans }}</option>\r\n                <option value=\"fixed-left\">{{ 'Fixed Left' | trans }}</option>\r\n                <option value=\"fixed-right\">{{ 'Fixed Right' | trans }}</option>\r\n              </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"uk-form-row\">\r\n          <label for=\"field-buttons-size\" class=\"uk-form-label\">{{ 'Button Size' | trans }}</label>\r\n          <div id=\"field-buttons-size\" class=\"uk-form-controls uk-form-controls-text\">\r\n              <select v-model=\"package.config.buttons.size\">\r\n                <option value=\"mini\">{{ 'Mini' | trans }}</option>\r\n                <option value=\"small\">{{ 'Small' | trans }}</option>\r\n                <option value=\"default\">{{ 'Default' | trans }}</option>\r\n                <option value=\"large\">{{ 'Large' | trans }}</option>\r\n              </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"uk-form-row\">\r\n          <label for=\"field-buttons-counters\" class=\"uk-form-label\">{{ 'Counters' | trans }}</label>\r\n          <div class=\"uk-form-controls uk-form-controls-text\">\r\n            <label><input id=\"field-buttons-counters\" type=\"checkbox\" value=\"buttons.counters\" v-model=\"package.config.buttons.counters\">\r\n              {{ 'Show Counters in Button' | trans }}</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"uk-form-row\">\r\n          <label for=\"field-buttons-text\" class=\"uk-form-label\">{{ 'Text' | trans }}</label>\r\n          <div class=\"uk-form-controls uk-form-controls-text\">\r\n            <label><input id=\"field-buttons-text\" type=\"checkbox\" value=\"buttons.text\" v-model=\"package.config.buttons.text\">\r\n              {{ 'Show Text in Button' | trans }}</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"uk-form-row\">\r\n          <label for=\"field-buttons-icons\" class=\"uk-form-label\">{{ 'Icons' | trans }}</label>\r\n          <div class=\"uk-form-controls uk-form-controls-text\">\r\n            <label><input id=\"field-buttons-icons\" type=\"checkbox\" value=\"buttons.icons\" v-model=\"package.config.buttons.icons\">\r\n              {{ 'Show Icon in Button' | trans }}</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"uk-form-row\">\r\n          <label for=\"field-buttons-responsive\" class=\"uk-form-label\">{{ 'Responsive Buttons' | trans }}</label>\r\n          <div class=\"uk-form-controls uk-form-controls-text\">\r\n            <label><input id=\"field-buttons-responsive\" type=\"checkbox\" value=\"buttons.icons\" v-model=\"package.config.buttons.responsive\">\r\n              {{ 'Responsive Size Buttons' | trans }}</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"uk-form-row\">\r\n          <label for=\"field-buttons-responsivetext\" class=\"uk-form-label\">{{ 'Responsive Text Remove' | trans }}</label>\r\n          <div class=\"uk-form-controls uk-form-controls-text\">\r\n            <label><input id=\"field-buttons-responsivetext\" type=\"checkbox\" value=\"buttons.icons\" v-model=\"package.config.buttons.responsivetext\">\r\n              {{ 'Responsive Text Remove' | trans }}</label>\r\n          </div>\r\n        </div>\r\n    </fieldset>\r\n    <fieldset class=\"uk-margin-top\">\r\n        <legend>{{ 'Share Buttons' | trans }}</legend>\r\n        <div class=\"uk-form-row\">\r\n          <label for=\"field-buttons-fb\" class=\"uk-form-label\">{{ 'Facebook' | trans }}</label>\r\n          <div class=\"uk-form-controls uk-form-controls-text\">\r\n            <label><input id=\"field-buttons-fb\" type=\"checkbox\" value=\"buttons.fb\" v-model=\"package.config.buttons.fb\">\r\n              {{ 'Show Facebook share button' | trans }}</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"uk-form-row\">\r\n          <label for=\"field-buttons-tw\" class=\"uk-form-label\">{{ 'Twitter' | trans }}</label>\r\n          <div class=\"uk-form-controls uk-form-controls-text\">\r\n            <label><input id=\"field-buttons-tw\" type=\"checkbox\" value=\"buttons.tw\" v-model=\"package.config.buttons.tw\">\r\n              {{ 'Show Twitter share button' | trans }}</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"uk-form-row\">\r\n          <label for=\"field-buttons-gp\" class=\"uk-form-label\">{{ 'Google Plus' | trans }}</label>\r\n          <div class=\"uk-form-controls uk-form-controls-text\">\r\n            <label><input id=\"field-buttons-gp\" type=\"checkbox\" value=\"buttons.gp\" v-model=\"package.config.buttons.gp\">\r\n              {{ 'Show Google Plus share button' | trans }}</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"uk-form-row\">\r\n          <label for=\"field-buttons-pt\" class=\"uk-form-label\">{{ 'Pinterest' | trans }}</label>\r\n          <div class=\"uk-form-controls uk-form-controls-text\">\r\n            <label><input id=\"field-buttons-pt\" type=\"checkbox\" value=\"buttons.pt\" v-model=\"package.config.buttons.pt\">\r\n              {{ 'Show Pinterest share button' | trans }}</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"uk-form-row\">\r\n          <label for=\"field-buttons-vk\" class=\"uk-form-label\">{{ 'Vk' | trans }}</label>\r\n          <div class=\"uk-form-controls uk-form-controls-text\">\r\n            <label><input id=\"field-buttons-vk\" type=\"checkbox\" value=\"buttons.vk\" v-model=\"package.config.buttons.vk\">\r\n              {{ 'Show Vk share button' | trans }}</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"uk-form-row\">\r\n          <label for=\"field-buttons-li\" class=\"uk-form-label\">{{ 'LinkedIn' | trans }}</label>\r\n          <div class=\"uk-form-controls uk-form-controls-text\">\r\n            <label><input id=\"field-buttons-li\" type=\"checkbox\" value=\"buttons.li\" v-model=\"package.config.buttons.li\">\r\n              {{ 'Show LinkedIn share button' | trans }}</label>\r\n          </div>\r\n        </div>\r\n    </fieldset>\r\n            <div class=\"uk-width-medium-1-1 uk-container-center uk-margin-top\">\r\n                <div class=\"uk-panel uk-panel-box uk-panel-box-primary\">\r\n                    <p class=\"uk-text-center\">{{ 'Extensions made with love by NorrNext.' | trans }}</p>\r\n                    <div class=\"uk-text-center\">\r\n                        <iframe\r\n                            src=\"//www.facebook.com/plugins/like.php?href=https%3A%2F%2Ffacebook.com%2Fnorrnext&amp;width&amp;layout=button_count&amp;action=like&amp;show_faces=false&amp;share=false&amp;height=21\"\r\n                            scrolling=\"no\"\r\n                            frameborder=\"0\"\r\n                            style=\"border:none; overflow:hidden; height:20px; width:120px\"\r\n                            allowTransparency=\"true\">\r\n                        </iframe>\t\t\t\r\n                        <div class=\"g-follow\" data-href=\"https://plus.google.com/108999239898392136664\" data-rel=\"author\"></div>\r\n                        <a href=\"https://twitter.com/norrnext\" class=\"twitter-follow-button\" data-show-count=\"true\">Follow @norrnext</a>\r\n                    </div>\r\n                    <p class=\"uk-text-center\">\r\n                        <a href=\"https://www.norrnext.com/pagekit-extensions/pkb-social-share\" target=\"_blank\">{{ 'Home page' | trans }}</a> |\r\n                        <a href=\"https://www.norrnext.com/downloads/free-pagekit/pkb-social-share\" target=\"_blank\">{{ 'Download' | trans }}</a> |\r\n                        <a href=\"https://www.norrnext.com/docs/pagekit-free-widgets/pkb-social-share\" target=\"_blank\">{{ 'Documentation' | trans }}</a> |\r\n                        <a href=\"https://www.norrnext.com/forums/categories/listings/pkb-social-share\" target=\"_blank\">{{ 'Support' | trans }}</a>\r\n                    </p>\r\n                </div>\r\n            </div>\t\r\n    </div>";

/***/ }
/******/ ]);
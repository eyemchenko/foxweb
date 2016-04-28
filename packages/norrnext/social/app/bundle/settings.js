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
	module.exports.template = __webpack_require__(7)


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    section: {
	        label: 'Settings'
	    },

	    replace: false,

	    partials: {
	        main: __webpack_require__(3),
	        fb: __webpack_require__(4),
	        gp: __webpack_require__(5),
	        vk: __webpack_require__(6)
	    },

	    created: function() {
	        this.widget.data = _.assign({layout: 'default', titles: 'full', order: '1,2,3'}, this.widget.data);
	        this.widget.data.fb = _.assign({
	            profile: 'norrnext',
	            colorscheme: 'light',
	            width: 250,
	            height: 500,
	            header: 0,
	            adapt: 1,
	            cover: 0,
	            facepile: 1,
	            posts: 0
	        }, this.widget.data.fb);
	        this.widget.data.gp = _.assign({
	            id: '108999239898392136664',
	            type: 'page',
	            layout: 'portrait',
	            theme: 'light',
	            width: 250,
	            showphoto: 1,
	            showtagline: 1
	        }, this.widget.data.gp);
	        this.widget.data.vk = _.assign({
	            groupid: '28699417',
	            mode: 0,
	            width: 'auto',
	            height: 400,
	            backgroundcolour: '#FFFFFF',
	            textcolour: '#2B587A',
	            buttonscolour: '#5B7FA6',
	            wide: 0
	        }, this.widget.data.vk);
	        this.$options.partials.settings = this.$root.$options.partials.settings;
	    },

	    ready: function() {
	        $('#field-layout').change(function () {
	            var titlesStyle = $('#titles-style');

	            if (this.value == 'tabs' || this.value == 'switcher'){
	                titlesStyle.show();
	            } else {
	                titlesStyle.hide();
	            }
	        }).change();

	        !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
	    },

	    props: ['widget', 'config', 'form']
	};

	window.Widgets.components['norrnext-widget-social:settings'] = module.exports;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "<li class=\"active\">\r\n    <div class=\"uk-width-1-1\">\r\n\r\n        <div class=\"uk-form-row\">\r\n            <label for=\"field-layout\" class=\"uk-form-label\">{{ 'Layout' | trans }}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <select id=\"field-layout\" class=\"uk-width-1-1\" v-model=\"widget.data.layout\">\r\n                    <option value=\"default\">{{ 'Default' | trans }}</option>\r\n                    <option value=\"tabs\">{{ 'Tabs' | trans }}</option>\r\n                    <option value=\"switcher\">{{ 'Switcher' | trans }}</option>\r\n                </select>\r\n                <p class=\"uk-form-help-block\">\r\n                    {{ 'Choose the layout of the widget: Default - social widgets will be displayed one by one. Tabs - social widgets will be displayed in tabs. Switcher - social widgets will be toggled.' | trans }}\r\n                </p>\r\n            </div>\r\n        </div>\r\n\r\n        <div id=\"titles-style\" class=\"uk-form-row\">\r\n            <label for=\"field-titles\" class=\"uk-form-label\">{{ 'Titles style' | trans }}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <select id=\"field-titles\" class=\"uk-width-1-1\" v-model=\"widget.data.titles\">\r\n                    <option value=\"full\">{{ 'Text + icons' | trans }}</option>\r\n                    <option value=\"text\">{{ 'Text only' | trans }}</option>\r\n                    <option value=\"icons\">{{ 'Icons only' | trans }}</option>\r\n                </select>\r\n                <p class=\"uk-form-help-block\">\r\n                    {{ 'Choose the titles style for tabs and switcher' | trans }}\r\n                </p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"uk-form-row\">\r\n            <label for=\"field-order\" class=\"uk-form-label\">{{ 'Display and order' | trans }}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <input id=\"field-order\" class=\"uk-form-width-large\" type=\"text\" v-model=\"widget.data.order\">\r\n                <p class=\"uk-form-help-block\">\r\n                    {{ 'Simply remove one of the numbers and the corresponding social widget will not be displayed. Control the order by swapping the numbers. Please note, that the numbers should be comma separated. 1 - Facebook; 2 - Google+; 3 - VK' | trans }}\r\n                </p>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</li>";

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = "<li class=\"active\">\r\n    <div class=\"uk-width-1-1\">\r\n\r\n        <div class=\"uk-form-row\">\r\n            <label for=\"field-fb-profile\" class=\"uk-form-label\">{{ 'Profile' | trans  }}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <input id=\"field-fb-profile\" class=\"uk-form-width-large\" type=\"text\" v-model=\"widget.data.fb.profile\" >\r\n                <p class=\"uk-form-help-block\">\r\n                    {{ 'The profile of the Facebook Page. For example: facebook.com/{profile}, where {profile} is your Facebook profile.' | trans }}\r\n                </p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"uk-form-row\">\r\n            <label for=\"field-fb-width\" class=\"uk-form-label\">{{ 'Width' | trans  }}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <input id=\"field-fb-width\" class=\"uk-form-width-small\" type=\"text\" v-model=\"widget.data.fb.width\">\r\n                <p class=\"uk-form-help-block\">{{ 'Set the width of widget. Minimum is %minwidth% and maximum is %maxwidth%' | trans {minwidth:292,maxwidth:500} }}</p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"uk-form-row\">\r\n            <label for=\"field-fb-height\" class=\"uk-form-label\">{{ 'Height' | trans  }}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <input id=\"field-fb-height\" class=\"uk-form-width-small\" type=\"text\" v-model=\"widget.data.fb.height\">\r\n                <p class=\"uk-form-help-block\">{{ 'Set the height of widget. Minimum is %height%' | trans {height:70} }}</p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"uk-form-row\">\r\n            <label for=\"field-fb-cover\" class=\"uk-form-label\">{{ 'Hide Cover' | trans  }}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <input id=\"field-fb-cover\" type=\"checkbox\" value=\"fb.cover\" v-model=\"widget.data.fb.cover\">\r\n                <p class=\"uk-form-help-block\">{{ 'Hide cover photo in the header.' | trans  }}</p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"uk-form-row\">\r\n            <label for=\"field-fb-faces\" class=\"uk-form-label\">{{ 'Show Faces' | trans  }}</label>\r\n            <div class=\"uk-form-controls uk-form-controls-text\">\r\n                <input id=\"field-fb-faces\" type=\"checkbox\" value=\"fb.facepile\" v-model=\"widget.data.fb.facepile\">\r\n                <p class=\"uk-form-help-block\">{{ 'Show profile photos when friends like this.' | trans  }}</p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"uk-form-row\">\r\n            <label for=\"field-fb-header\" class=\"uk-form-label\">{{ 'Small Header' | trans  }}</label>\r\n            <div class=\"uk-form-controls uk-form-controls-text\">\r\n                <input id=\"field-fb-header\" type=\"checkbox\" value=\"fb.height\" v-model=\"widget.data.fb.header\">\r\n                <p class=\"uk-form-help-block\">{{ 'Use the small header.' | trans  }}</p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"uk-form-row\">\r\n            <label for=\"field-fb-posts\" class=\"uk-form-label\">{{ 'Show Posts' | trans  }}</label>\r\n            <div class=\"uk-form-controls uk-form-controls-text\">\r\n                <input id=\"field-fb-posts\" type=\"checkbox\" value=\"fb.posts\" v-model=\"widget.data.fb.posts\">\r\n                <p class=\"uk-form-help-block\">{{ 'Show posts from the timeline.' | trans  }}</p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"uk-form-row\">\r\n            <label for=\"field-fb-adapt\" class=\"uk-form-label\">{{ 'Adapt' | trans  }}</label>\r\n            <div class=\"uk-form-controls uk-form-controls-text\">\r\n                <input id=\"field-fb-adapt\" type=\"checkbox\" value=\"fb.adapt\" v-model=\"widget.data.fb.adapt\">\r\n                <p class=\"uk-form-help-block\">{{ 'Try to fit inside the container width.' | trans  }}</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</li>";

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "<li>\r\n    <div class=\"uk-width-1-1\">\r\n\r\n        <div class=\"uk-form-row\">\r\n            <label for=\"field-gp-id\" class=\"uk-form-label\">{{ 'ID' | trans }}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <input id=\"field-gp-id\" class=\"uk-form-width-medium\" type=\"text\" v-model=\"widget.data.gp.id\" >\r\n                <p class=\"uk-form-help-block\">{{ 'Enter your Google+ ID' | trans }}</p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"uk-form-row\">\r\n            <label for=\"field-gp-type\" class=\"uk-form-label\">{{ 'Type' | trans }}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <select id=\"field-gp-type\" class=\"uk-width-1-1\" v-model=\"widget.data.gp.type\">\r\n                    <option value=\"person\">{{ 'Profile' | trans }}</option>\r\n                    <option value=\"page\">{{ 'Page' | trans }}</option>\r\n                    <option value=\"community\">{{ 'Community' | trans }}</option>\r\n                </select>\r\n                <p class=\"uk-form-help-block\">{{ 'Choose the type of the badge' | trans }}</p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"uk-form-row\">\r\n            <label for=\"field-gp-layout\" class=\"uk-form-label\">{{ 'Layout' | trans }}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <select id=\"field-gp-layout\" class=\"uk-width-1-1\" v-model=\"widget.data.gp.layout\">\r\n                    <option value=\"portrait\">{{ 'Portrait' | trans }}</option>\r\n                    <option value=\"landscape\">{{ 'Landscape' | trans }}</option>\r\n                </select>\r\n                <p class=\"uk-form-help-block\">{{ 'Sets the orientation of the badge' | trans }}</p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"uk-form-row\">\r\n            <label for=\"field-gp-theme\" class=\"uk-form-label\">{{ 'Theme' | trans }}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <select id=\"field-gp-theme\" class=\"uk-width-1-1\" v-model=\"widget.data.gp.theme\">\r\n                    <option value=\"light\">{{ 'Light' | trans }}</option>\r\n                    <option value=\"dark\">{{ 'Dark' | trans }}</option>\r\n                </select>\r\n                <p class=\"uk-form-help-block\">{{ 'The color theme of the badge. Use dark when placing the badge on a page with a dark background.' | trans }}</p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"uk-form-row\">\r\n            <span class=\"uk-form-label\">{{ 'Width' | trans }}</span>\r\n            <div class=\"uk-form-controls\">\r\n                <input id=\"field-gp-width\" class=\"uk-form-width-small\" type=\"text\" v-model=\"widget.data.gp.width\" >\r\n                <p class=\"uk-form-help-block\">\r\n                    {{ 'Set the width of badge. The following ranges are valid: Portrait layout - 180-450 px; Landscape layout - 273-450 px' | trans }}\r\n                </p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"uk-form-row\">\r\n            <label for=\"field-gp-cover\" class=\"uk-form-label\">{{ 'Show Cover Photo' | trans }}</label>\r\n            <div class=\"uk-form-controls uk-form-controls-text\">\r\n                <input id=\"field-gp-cover\" type=\"checkbox\" value=\"gp.showphoto\" v-model=\"widget.data.gp.showphoto\">\r\n                <p class=\"uk-form-help-block\">{{ 'Specifies whether to display the cover photo in the badge if set to yes and the photo exists.' | trans }}</p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"uk-form-row\">\r\n            <label for=\"field-gp-tagline\" class=\"uk-form-label\">{{ 'Show Tagline' | trans }}</label>\r\n            <div class=\"uk-form-controls uk-form-controls-text\">\r\n                <input id=\"field-gp-tagline\" type=\"checkbox\" value=\"gp.showtagline\" v-model=\"widget.data.gp.showtagline\">\r\n                <p class=\"uk-form-help-block\">{{ 'Specifies whether to display the tag line if set to yes.' | trans }}</p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"uk-form-row\">\r\n            <label for=\"field-gp-owners\" class=\"uk-form-label\">{{ 'Show owners' | trans }}</label>\r\n            <div class=\"uk-form-controls uk-form-controls-text\">\r\n                <input id=\"field-gp-owners\" type=\"checkbox\" value=\"gp.showowners\" v-model=\"widget.data.gp.showowners\">\r\n                <p class=\"uk-form-help-block\">{{ 'Specifies whether to display a list of community owners if set to yes. Works only for community.' | trans }}</p>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</li>";

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "<li>\r\n    <div class=\"uk-width-1-1\">\r\n\r\n        <div class=\"uk-form-row\">\r\n            <label for=\"field-vk-groupid\" class=\"uk-form-label\">{{ 'Community ID' | trans }}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <input id=\"field-vk-groupid\" type=\"text\" v-model=\"widget.data.vk.groupid\">\r\n                <p class=\"uk-form-help-block\">{{ 'Enter your VK community ID' | trans }}</p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"uk-form-row\">\r\n            <label for=\"field-vk-mode\" class=\"uk-form-label\">{{ 'Layout' | trans }}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <select id=\"field-vk-mode\" class=\"uk-width-1-1\" v-model=\"widget.data.vk.mode\">\r\n                    <option value=\"0\">{{ 'Members' | trans }}</option>\r\n                    <option value=\"1\">{{ 'Name only' | trans }}</option>\r\n                    <option value=\"2\">{{ 'News' | trans }}</option>\r\n                </select>\r\n                <p class=\"uk-form-help-block\">{{ 'Choose the layout' | trans }}</p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"uk-form-row\">\r\n            <label for=\"field-vk-width\" class=\"uk-form-label\">{{ 'Width' | trans }}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <input id=\"field-vk-width\" class=\"uk-form-width-small\" type=\"text\" v-model=\"widget.data.vk.width\">\r\n                <p class=\"uk-form-help-block\">\r\n                    {{ 'Set the width of widget. Minimum is %width%.' | trans {width:120} }}\r\n                    {{ 'Set to \"auto\" to fit the entire block.' | trans }}\r\n                </p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"uk-form-row\">\r\n            <label for=\"field-vk-height\" class=\"uk-form-label\">{{ 'Height' | trans }}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <input id=\"field-vk-height\" class=\"uk-form-width-small\" type=\"text\" v-model=\"widget.data.vk.height\">\r\n                <p class=\"uk-form-help-block\">{{ 'Set the height of widget. Minimum is %height%.' | trans {height:200} }}</p>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"uk-form-row\">\r\n            <label for=\"field-vk-backgroundcolour\" class=\"uk-form-label\">{{ 'Background colour' | trans }}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <input id=\"field-vk-backgroundcolour\" type=\"color\" v-model=\"widget.data.vk.backgroundcolour\" class=\"uk-form-width-small colour\" placeholder=\"Colour(hex)\">\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"uk-form-row\">\r\n            <label for=\"field-vk-textcolour\" class=\"uk-form-label\">{{ 'Text color' | trans }}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <input id=\"field-vk-textcolour\" type=\"color\" v-model=\"widget.data.vk.textcolour\" class=\"uk-form-width-small colour\" placeholder=\"Colour(hex)\">\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"uk-form-row\">\r\n            <label for=\"field-vk-buttonscolour\" class=\"uk-form-label\">{{ 'Buttons color' | trans }}</label>\r\n            <div class=\"uk-form-controls\">\r\n                <input id=\"field-vk-buttonscolour\" type=\"color\" v-model=\"widget.data.vk.buttonscolour\" class=\"uk-form-width-small colour\" placeholder=\"Colour(hex)\">\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"uk-form-row\">\r\n            <span class=\"uk-form-label\">{{ 'Extended mode' | trans }}</span>\r\n            <div class=\"uk-form-controls uk-form-controls-text\">\r\n                <input id=\"field-vk-wide\" type=\"checkbox\" value=\"vk.wide\" v-model=\"widget.data.vk.wide\">\r\n                <p class=\"uk-form-help-block\">{{ 'Extended mode will add likes and community image' | trans }}</p>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</li>";

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "<div class=\"uk-grid pk-grid-large\" data-uk-grid-margin>\r\n        <div class=\"uk-flex-item-1 uk-form-horizontal\">\r\n\r\n            <div class=\"uk-width-medium-1-1 uk-container-center uk-margin-bottom\">\r\n                <div class=\"uk-panel uk-panel-box uk-panel-box-primary\">\r\n                    <p class=\"uk-text-danger uk-text-center\">{{ 'You are using version with backlink to NorrNext website.' | trans }} <a class=\"uk-button uk-button-success\" href=\"https://www.norrnext.com/pricing/backlink-removal/pkb-social\" target=\"_blank\">{{ 'Remove Backlink!' | trans }}</a></p>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"uk-form-row\">\r\n                <label for=\"form-title\" class=\"uk-form-label\">{{ 'Title' | trans }}</label>\r\n                <div class=\"uk-form-controls\">\r\n                    <input id=\"form-title\" class=\"uk-form-width-large\" type=\"text\" name=\"title\" v-model=\"widget.title\" v-validate:required>\r\n                    <p class=\"uk-form-help-block uk-text-danger\" v-show=\"form.title.invalid\">{{ 'Title cannot be blank.' | trans }}</p>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"uk-grid uk-margin-top\">\r\n                <div class=\"uk-width-medium-2-5\">\r\n\r\n                    <ul data-uk-tab=\"{connect:'#tab-pkbsocial'}\" class=\"uk-tab uk-tab-left\">\r\n                        <li class=\"uk-active\"><a href=\"#\"><i class=\"uk-icon-button uk-icon-wrench\"></i> {{ 'Widget Settings' | trans }}</a></li>\r\n                        <li class=\"\"><a href=\"#\"><i class=\"uk-icon-button uk-icon-facebook\"></i> {{ 'Facebook Settings' | trans }}</a></li>\r\n                        <li class=\"\"><a href=\"#\"><i class=\"uk-icon-button uk-icon-google-plus\"></i> {{ 'Google+ Settings' | trans }}</a></li>\r\n                        <li class=\"\"><a href=\"#\"><i class=\"uk-icon-button uk-icon-vk\"></i> {{ 'VK Settings' | trans  }}</a></li>\r\n                    </ul>\r\n\r\n                </div>\r\n\r\n                <div class=\"uk-width-medium-3-5\">\r\n\r\n                    <ul class=\"uk-switcher\" id=\"tab-pkbsocial\">\r\n                        <partial name=\"main\"></partial>\r\n                        <partial name=\"fb\"></partial>\r\n                        <partial name=\"gp\"></partial>\r\n                        <partial name=\"vk\"></partial>\r\n                    </ul>\r\n\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"uk-width-medium-1-1 uk-container-center uk-margin-top\">\r\n                <div class=\"uk-panel uk-panel-box uk-panel-box-primary\">\r\n                    <p class=\"uk-text-center\">{{ 'Extensions made with love by NorrNext.' | trans }}</p>\r\n                    <div class=\"uk-text-center\">\r\n                        <iframe\r\n                            src=\"//www.facebook.com/plugins/like.php?href=https%3A%2F%2Ffacebook.com%2Fnorrnext&amp;width&amp;layout=button_count&amp;action=like&amp;show_faces=false&amp;share=false&amp;height=21\"\r\n                            scrolling=\"no\"\r\n                            frameborder=\"0\"\r\n                            style=\"border:none; overflow:hidden; height:20px; width:120px\"\r\n                            allowTransparency=\"true\">\r\n                        </iframe>\r\n                        <div class=\"g-follow\" data-href=\"https://plus.google.com/108999239898392136664\" data-rel=\"author\"></div>\r\n                        <a href=\"https://twitter.com/norrnext\" class=\"twitter-follow-button\" data-show-count=\"true\">Follow @norrnext</a>\r\n                    </div>\r\n                    <p class=\"uk-text-center\">\r\n                        <a href=\"https://www.norrnext.com/pagekit-extensions/pkb-social\" target=\"_blank\">{{ 'Home page' | trans }}</a> |\r\n                        <a href=\"https://www.norrnext.com/downloads/free-pagekit/pkb-social\" target=\"_blank\">{{ 'Download' | trans }}</a> |\r\n                        <a href=\"https://www.norrnext.com/docs/pagekit-free-widgets/pkb-social\" target=\"_blank\">{{ 'Documentation' | trans }}</a> |\r\n                        <a href=\"https://www.norrnext.com/forums/categories/listings/pkb-social\" target=\"_blank\">{{ 'Support' | trans }}</a>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"pk-width-sidebar pk-width-sidebar-large\">\r\n            <partial name=\"settings\"></partial>\r\n        </div>\r\n    </div>";

/***/ }
/******/ ]);
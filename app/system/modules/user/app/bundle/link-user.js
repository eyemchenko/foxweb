!function(o){function e(r){if(s[r])return s[r].exports;var t=s[r]={exports:{},id:r,loaded:!1};return o[r].call(t.exports,t,t.exports,e),t.loaded=!0,t.exports}var s={};return e.m=o,e.c=s,e.p="",e(0)}([function(o,e,s){var r,t;r=s(2),t=s(7),o.exports=r||{},o.exports.__esModule&&(o.exports=o.exports["default"]),t&&(("function"==typeof o.exports?o.exports.options||(o.exports.options={}):o.exports).template=t)},,function(o,e){"use strict";o.exports={link:{label:"User"},props:["link"],ready:function(){this.$set("link","@user/login")}},window.Links.components["link-user"]=o.exports},,,,,function(o,e){o.exports="<div class=uk-form-row> <label for=form-link-user class=uk-form-label>{{ 'View' | trans }}</label> <div class=uk-form-controls> <select id=form-link-user class=uk-width-1-1 v-model=link> <option value=@user/login>{{ 'User Login' | trans }}</option> <option value=@user/logout>{{ 'User Logout' | trans }}</option> <option value=@user/registration>{{ 'User Registration' | trans }}</option> <option value=@user/profile>{{ 'User Profile' | trans }}</option> <option value=@user/resetpassword>{{ 'User Password Reset' | trans }}</option> </select> </div> </div>"}]);
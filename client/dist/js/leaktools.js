webpackJsonp([0],{0:function(e,n){e.exports=jQuery},8:function(e,n,o){"use strict";var t=o(0),l=function(e){return e&&e.__esModule?e:{default:e}}(t),c=function(e){var n=e.cloneNode(!0),o=(0,l.default)("<div></div>");return o.append(n),o.html()};l.default.leaktools={logDuplicateElements:function(){var e=(0,l.default)("*"),n=!1;e.each(function(o,t){e.not(t).each(function(e,o){c(t)==c(o)&&(n=!0,console.log(t,o))})}),n||console.log("No duplicates found")},logUncleanedElements:function(e){l.default.each(l.default.cache,function(){var n=this.handle&&this.handle.elem;if(n){for(var o=n;o&&1==o.nodeType;)o=o.parentNode;o?o!==document&&console.log("Attached, but to",o,"not our document",n):(console.log("Unattached",n),console.log(this.events),e&&(0,l.default)(n).unbind().remove())}})}}}},[8]);
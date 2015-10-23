(function(window , angular, undefined) {
    'use strict';
    /**
      * @module mergetext
      */    
    angular.module('mergetext', [])
        .service('mergetext', mergetext);

    function mergetext() {
        this.diff = function(oldText, newText) {
        	return JsDiff.diffWords(oldText, newText);
        };

        this.diffToHtml = function(diff) {
        	var result = '';

        	for(var i = 0;i < diff.length; i++) {
				result += exportElementToHtml(diff[i]);
        	}
        	
        return result;
        };

        var exportElementToHtml = function(element) {
        	var result = '';
        	if(element.added) {
				result += '<ins>';
    		} else if(element.removed) {
    			result += '<del>';
    		}
    		result += element.value;

    		if(element.added) {
    			result += '</ins>';
    		} else if(element.removed) {
    			result += '</del>';
    		}
    		return result;
        };
    }
})(window, window.angular); 

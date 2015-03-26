(function(window , angular, undefined) {
    'use strict';
    /**
      * @module mergetext
      */    
    angular.module('mergetext', [])
        .service('mergetext', mergetext);

    function mergetext() {
        this.test = function() {
        	return true;
        }
    }
})(window, window.angular); 
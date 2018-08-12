/****************************************************************************************
*************************   Waw Form -- Simple Contact Form   ***************************
*******  Module for manging and creating contact form component with Angular Js *********
******************  Copyright for Wafaa Hamdy Full Stack  Web developer  ****************
*************************  mail : eng.wafaa.hamdy@gmail.com   ***************************/


(function() {
"use strict";

/**  the module */
angular.module('wawFormModule', [])
.constant('DeveloperMail', 'eng.wafaa.hamdy@gmail.com')
.service('feedbackSevice' ,feedbackSevice )
.controller('feedbackController', feedbackController)   /// controller that will handle the 


/**  the component  */
.component('wawForm', {
  templateUrl: 'src/waw-form/wawform.template.html',
  controller : "feedbackController as $ctrl"
 
});

////////////////////// component Service ////////////////////
 feedbackSevice.$inject = ['$http'];
   function feedbackSevice($http) {
   	var service = this;
   	var ApiPath = "http://localhost:3000"

   	service.mailForm = function (mail)    	{
   		console.log ("i will send this" , mail) ;
 return $http.post(ApiPath + '/wawForm/mailform/', mail) ;
   	}
  
   } // end service 



/////////////////////// component controller ////////////////////////////////////
feedbackController.$inject = ['feedbackSevice'];
function feedbackController(feedbackSevice) {
  var ctrl = this;
    ctrl.wawfeedback={from : "" , Email : "", Phone : "" , Message : "" , subject: ""   } ;
    ctrl.succmsg = false;
    ctrl.errormsg = false;

  ctrl.wawSend = function(){
	  
	  /// function to send the feedback to server or send it by mail
	 //console.log (ctrl.wawfeedback) ;
	 feedbackSevice.mailForm(ctrl.wawfeedback).then(function() {
     ctrl.succmsg = true ;
     ctrl.wawfeedback={from : "" , Email : "", Phone : "" , Message : "" , subject: ""   } ;                      
    }, function(response) {
      // sign failed
	  console.log ("-------------------------")
      console.log (response ) ;
     ctrl.errormsg = true ;
    
      });

	
	  
	  }
  
} // end controller


/////////
})();
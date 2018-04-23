sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("LoginPageLoginPage.controller.Login", {
		onClick: function(){
		
    	if(this.getView().byId("username").getValue() === "" || this.getView().byId("password").getValue() === "") {
    	    alert("Please enter a value for every field.");
    	}
    	else
    	{
    		alert("Login successful! Redirecting to Maintenance Cockpit.");
    		var router = sap.ui.core.UIComponent.getRouterFor(this); 
			router.navTo("test");
    	}
		}
	});
});
sap.ui.define([
	'sap/ui/core/mvc/Controller'
	],function(Controller){
		"use strict";
		return Controller.extend("com.vaibhavmojidra.simpleroutingandnavigationdemo.controller.InvoiceList",{
			onPress:function(){
				var oRouter = this.getOwnerComponent().getRouter();
				oRouter.navTo("detail");
			}
	});
});
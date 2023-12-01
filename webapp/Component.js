sap.ui.define([
	"sap/ui/core/UIComponent"
	],function(UIComponent){
	"use strict";	
		return UIComponent.extend("com.vaibhavmojidra.simpleroutingandnavigationdemo.Component",{
			metadata:{
				interfaces: ["sap.ui.core.IAsyncContentCreation"],
				manifest: "json"
			},
			init:function(){
				UIComponent.prototype.init.apply(this, arguments);
				this.getRouter().initialize();
			}
		});
	}
);
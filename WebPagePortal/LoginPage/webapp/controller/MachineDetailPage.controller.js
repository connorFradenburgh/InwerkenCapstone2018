sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("LoginPageLoginPage.controller.MachineDetailPage", {
		//handleRouteMatched: function(oEvent) {

		//	var oParams = {};

		//	if (oEvent.mParameters.data.context) {
		//		this.sContext = oEvent.mParameters.data.context;
		//		var oPath;
		//		if (this.sContext) {
		//			oPath = {
		//				path: "/" + this.sContext,
		//				parameters: oParams
		//			};
		//			this.getView().bindObject(oPath);
		//		}
		//	}

		//},
		_onObjectMatched: function (oEvent){
			
			this.getView().bindElement({
				path: "/d/results/" + oEvent.getParameter("arguments").MachinePath,
				model: "machineView"
			});
		},
		onInit: function() {
			//var model1 = new sap.ui.model.json.JSONModel();
			//model1.loadData("../webapp/localService/mockdata/MachineSet.json");
			//sap.ui.getCore().setModel(model1);
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("MachineDetailPage").attachPatternMatched(this._onObjectMatched, this);
			
			//this.oRouter.getTarget("MachineDetailPage").attachDisplay(jQuery.proxy(this.handleRouteMatched, this));
			//var oView = this.getView();
			//oView.addEventDelegate({
			//	onBeforeShow: function() {
			//		if (sap.ui.Device.system.phone) {
			//			var oPage = oView.getContent()[0];
			//			if (oPage.getShowNavButton && !oPage.getShowNavButton()) {
			//				oPage.setShowNavButton(true);
			//				oPage.attachNavButtonPress(function() {
			//					this.oRouter.navTo("ListOfMachines", {}, true);
			//				}.bind(this));
			//			}
			//		}
			//	}.bind(this)
			//});

		}
		
	});
}, /* bExport= */ true);
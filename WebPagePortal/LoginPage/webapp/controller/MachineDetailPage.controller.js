sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("LoginPageLoginPage.controller.MachineDetailPage", {
		
		_onObjectMatched: function (oEvent){
			
			this.getView().bindElement({
				path: "/d/results/" + oEvent.getParameter("arguments").MachinePath,
				model: "machineView"
			});
		},
		onInit: function() {
			var model1 = new sap.ui.model.json.JSONModel();
			model1.loadData("../webapp/localService/mockdata/OrderSet.json");
			sap.ui.getCore().setModel(model1);
			this.getView().setModel(model1, "orderView");                        
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("MachineDetailPage").attachPatternMatched(this._onObjectMatched, this);
			
			

		}
		
	});
}, /* bExport= */ true);
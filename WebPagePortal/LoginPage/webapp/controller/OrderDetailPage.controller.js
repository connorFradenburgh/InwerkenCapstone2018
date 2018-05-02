sap.ui.define(["sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"./utilities",
	"sap/ui/core/routing/History"
], function(BaseController, MessageBox, Utilities, History) {
	"use strict";

	return BaseController.extend("LoginPageLoginPage.controller.OrderDetailPage", {
		
		onInit: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			
			oRouter.getRoute("OrderDetailPage").attachPatternMatched(this._onObjectMatched, this);
			//set model1 to maintenanceset.json
			var model1 = new sap.ui.model.json.JSONModel();
			model1.loadData("../webapp/localService/mockdata/MaintenanceSet.json");
			sap.ui.getCore().setModel(model1);
			this.getView().setModel(model1, "maintenanceView");

		},
		_onObjectMatched: function (oEvent){
			
			//get order view data from list of orders
			this.getView().bindElement({
				path: "/d/results/" + oEvent.getParameter("arguments").OrderPath,
				model: "orderView"
			});
		}
	});
}, /* bExport= */ true);
sap.ui.define(["sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"./utilities",
	"sap/ui/core/routing/History"
], function(BaseController, MessageBox, Utilities, History) {
	"use strict";

	return BaseController.extend("LoginPageLoginPage.controller.OrderDetailPage", {
		handleRouteMatched: function(oEvent) {

			var oParams = {};

			if (oEvent.mParameters.data.context) {
				this.sContext = oEvent.mParameters.data.context;
				var oPath;
				if (this.sContext) {
					oPath = {
						path: "/" + this.sContext,
						parameters: oParams
					};
					this.getView().bindObject(oPath);
				}
			}

		},
		onInit: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			
			oRouter.getRoute("MachineDetailPage").attachPatternMatched(this._onObjectMatched, this);
			//this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			//this.oRouter.getTarget("OrderDetailPage").attachDisplay(jQuery.proxy(this.handleRouteMatched, this));
			//var oView = this.getView();
			//oView.addEventDelegate({
			//	onBeforeShow: function() {
			//		if (sap.ui.Device.system.phone) {
			//			var oPage = oView.getContent()[0];
			//			if (oPage.getShowNavButton && !oPage.getShowNavButton()) {
			//				oPage.setShowNavButton(true);
			//				oPage.attachNavButtonPress(function() {
			//					this.oRouter.navTo("ListOfOrders", {}, true);
			//				}.bind(this));
			//			}
			//		}
			//	}.bind(this)
		//	});

		},
		_obObjectMatched: function (oEvent){
			this.getView().bindElement({
				path: "/" + oEvent.getParameter("arguments").MachinePath,
				model: "machineView"
			});
		}
	});
}, /* bExport= */ true);
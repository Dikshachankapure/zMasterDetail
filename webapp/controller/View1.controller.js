sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'sap/base/Log',
	"sap/m/MessageBox",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller, Log, MessageBox, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("ZmasterDetailed.ZmasterDetailed.controller.View1", {
		onInit: function () {
			var oModel = this.getOwnerComponent().getModel("MaintanaceData");
			this.getView().setModel(oModel);

		/*	this.getSplitAppObj().setHomeIcon({
				"phone": "phone-icon.png",
				"tablet": "tablet-icon.png",
				"icon": "desktop.ico"
			});*/
		},

		handleSOSearch: function (oEvent) {

			var oList = oEvent.getSource().getValue();
			if (oList && oList.length > 0) {

				var oFilter1 = new sap.ui.model.Filter("RequestNo", sap.ui.model.FilterOperator.Contains, oList);
				var oFilter2 = new sap.ui.model.Filter("Workcenter", sap.ui.model.FilterOperator.Contains, oList);

				var allFilter = new sap.ui.model.Filter([oFilter1, oFilter2], false);
			}
			var obinding = this.getView().byId("list123").getBinding("items");
			obinding.filter(allFilter);
		},

		onPress: function () {

			var textArea = new sap.m.Text({
				text: "success"

			});

			var oText = textArea.getText();
			this.getView().byId("text1").setText(oText);

		},

		Onfilter: function (oEvent) {

			var oList = oEvent.getSource().getValue();

			var oFilter = new Filter("Priority", FilterOperator.Contains, oList);

			var oBinding = this.byId("list123").getBinding("items");

			oBinding.filter([
				oFilter
			]);

		},

			getRouter: function () {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},

		onListItemPress: function (oEvent) {
			var sToPageId = oEvent.getSource().getBindingContext().getObject();
			this.getSplitAppObj().toDetail(this.createId(sToPageId));
		},

	/*	getSplitAppObj: function () {
			var result = this.byId("SplitAppDemo");
			if (!result) {
				Log.info("SplitApp object can't be found");
			}
			return result;
		},*/

		/*	onEditMatched: function (oEvent) {
				var oParameters = oEvent.getParameters(); // get parameter 
				var oModelData = this.getOwnerComponent().getModel("MaintanaceData"); //get the data from model 
				this.getView().setModel(oModelData); //set the data to model
				var oModel = this.getView().getModel();

				var RequestNoI = this.getView().byId("Reqno");
				var PlantName = this.getView().byId("plantname");
				var Workcenter = this.getView().byId("wrkcntr1");
				var Priority = this.getView().byId("priority1");
				var Date = this.getView().byId("date1");
				var MachineName1 = this.getView().byId("machinename1");

				if (oParameters.arguments.RequestNo !== "" || oParameters.arguments.RequestNo !== null) {
					this.RequestNo = oParameters.arguments.RequestNo;
					if (oModel.getData().Maintanance.length > 0) {
						for (var i = 0; i < oModel.getData().Maintanance.length; i++) {
							if (oModel.getData().Maintanance[i].RequestNo.toString() === this.RequestNo) {
								RequestNoI.setValue(this.RequestNo);
								PlantName.setValue(oModel.getData().Maintanance[i].PlantName);
								Workcenter.setValue(oModel.getData().Maintanance[i].Workcenter);
								Priority.setValue(oModel.getData().Maintanance[i].Priority);
								Date.setValue(oModel.getData().Maintanance[i].Date);
								MachineName1.setValue(oModel.getData().Maintanance[i].MachineName);

								return false;
							}
						}
					}

				} else {
					MessageBox.error("Data Not available");
				}
			} */

	});
});
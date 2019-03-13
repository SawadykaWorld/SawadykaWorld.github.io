sap.ui.define(["sap/ui/core/mvc/Controller","ListDemoApp/model/util"],function(Controller, util){
	return Controller.extend("ListDemoApp.controller.HelloWorld", {
		onInit:function(){
			var jsonModel = new sap.ui.model.json.JSONModel()
			var feedModel = new sap.ui.model.json.JSONModel()
			jsonModel.loadData("mockData/mock.json");
			feedModel.loadData("mockData/feed.json");
			this.getView().setModel(jsonModel);
			this.getView().setModel(feedModel, "feedModel");
		},
		testChange: function(oEvent){
			alert(util.generateRandom());
		}
	});
});
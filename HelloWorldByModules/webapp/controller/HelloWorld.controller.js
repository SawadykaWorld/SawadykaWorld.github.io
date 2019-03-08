sap.ui.define(["sap/ui/core/mvc/Controller","sap/m/MessageToast","HelloWorldByModules/model/util"], function (Controller,MessageToast,util) {
	return Controller.extend("HelloWorldByModules.controller.HelloWorld", {
		init: function () {

		},
		sayHello: function (oEvent) {
			MessageToast.show(util.generateRandom());
		}
	});
});
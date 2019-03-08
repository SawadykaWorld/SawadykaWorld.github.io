sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
	return Controller.extend("HelloWorldDemoAppByController.controller.HelloWorld", {
		init: function () {

		},
		sayHello: function (oEvent) {
			alert("say hello");
		}
	});
});
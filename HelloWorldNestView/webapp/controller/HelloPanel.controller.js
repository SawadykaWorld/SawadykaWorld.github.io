sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
	return Controller.extend("HelloWorldNestView.controller.HelloPanel", {
		init: function () {

		},
		sayNestHello: function (oEvent) {
			alert("sayNestHello");
		}
	});
});
sap.ui.define(["sap/ui/core/UIComponent"], function (UIComponent) {
	return UIComponent.extend("HelloWorldDemoAppByController", {
		metadata: {
			"rootView": "HelloWorldDemoAppByController.view.HelloWorld"
		},
		init: function () {
			// init 
			UIComponent.prototype.init.apply(this, arguments);
		}

	});
});
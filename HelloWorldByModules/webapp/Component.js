sap.ui.define(["sap/ui/core/UIComponent"], function (UIComponent) {
	return UIComponent.extend("HelloWorldByModules", {
		metadata: {
			"rootView": "HelloWorldByModules.view.HelloWorld"
		},
		init: function () {
			// init 
			UIComponent.prototype.init.apply(this, arguments);
		}

	});
});
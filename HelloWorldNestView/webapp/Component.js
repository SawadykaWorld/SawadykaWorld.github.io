sap.ui.define(["sap/ui/core/UIComponent"], function (UIComponent) {
	return UIComponent.extend("HelloWorldNestView", {
		metadata: {
			"rootView": "HelloWorldNestView.view.HelloWorld"
		},
		init: function () {
			// init 
			UIComponent.prototype.init.apply(this, arguments);
		}

	});
});
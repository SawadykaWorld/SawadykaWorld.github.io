sap.ui.define(["sap/ui/core/UIComponent"], function (UIComponent) {
	return UIComponent.extend("Test.Component", {
		metadata: {
			"rootView": "Test.view.Page"
		},
		init: function () {
			//init
			UIComponent.prototype.init.apply(this, arguments);
		}
	});
});
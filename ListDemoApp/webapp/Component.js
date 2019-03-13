sap.ui.define(["sap/ui/core/UIComponent"], function(UIComponent) {
	return UIComponent.extend("ListDemoApp.Component", {
		metadata:{
			"rootView": "ListDemoApp.view.HelloWorld"
		},
		init: function(){
			//init
			UIComponent.prototype.init.apply(this, arguments);
		}
	});
});
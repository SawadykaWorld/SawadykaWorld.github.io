sap.ui.define(["sap/ui/core/UIComponent"], function (UIComponent) {
	return UIComponent.extend("HelloWorldByComponent", {
		matadata:{
			
		},
		init: function () {
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);
		},
		createContent: function(){
			var page = new sap.m.Page('page1',{
				title:'hello world by conponent',
				content:new sap.m.Button({
					text:'this is first page'
				})
			});
			return page;
		}
	});
});
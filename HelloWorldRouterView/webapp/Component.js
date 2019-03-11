sap.ui.define(["sap/ui/core/UIComponent"], function (UIComponent) {
	return UIComponent.extend("HelloWorldRouterView.Component", {
		metadata: {
			"rootView": "HelloWorldRouterView.view.App",
			"routing": {
				"config": {
					"routerClass": "sap.m.routing.Router",
					"viewType": "XML",
					"viewPath": "HelloWorldRouterView.view",
					"controlId": "myApp",
					"controlAggregation": "pages",
					"transition": "slide", //flip, show
					"bypassed": {
						"target": "notFound"
					}
				},
				"routes": [{
					"pattern": "",
					"name": "FirstView",
					"target": "First"
				}, {
					"pattern": "Second/{name}/{sex}/resume:?query:",
					"name": "SecondView",
					"target": "Second"
				}],
				"targets": {
					"First": {
						"viewName": "First",
						"viewLevel": 1
					},
					"Second": {
						"viewName": "Second",
						"viewLevel": 2
					},
					"notFound": {
						"viewName": "NotFound",
						"transition": "show"
					}
				}
			}
		},
		init: function () {
			//init
			jQuery.sap.require("sap.m.routing.RouteMatchedHandler");
			UIComponent.prototype.init.apply(this, arguments);
			var router = this.getRouter();
			this.routeHandler = new sap.m.routing.RouteMatchedHandler(router);
			router.initialize();
		},
		createContent: function () {
			var view = sap.ui.view({
				id: "app",
				viewName: "HelloWorldRouterView.view.App",
				type: "XML",
				viewData: {
					component: this
				}
			});
			return view;
		}
	});
});
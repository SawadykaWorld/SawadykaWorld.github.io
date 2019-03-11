sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
	return Controller.extend("HelloWorldRouterView.controller.First", {
		onInit: function () {
			this.router = sap.ui.core.UIComponent.getRouterFor(this); //先取到router
		},
		goToNextPage: function (oEvent) {
			this.router.navTo("SecondView", {
				name: 'wangduxiu',
				sex: 'male',
				query: {
					pageName: "second page"
				}
			}); //如果第二个参数设置为true则跳转页面后不可以跳回去
		}
	});
});
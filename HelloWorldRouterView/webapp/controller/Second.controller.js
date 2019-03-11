sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/core/routing/History", "sap/m/MessageToast"], function (Controller, History,
	MessageToast) {
	return Controller.extend("HelloWorldRouterView.controller.Second", {
		onInit: function () {
			this.router = sap.ui.core.UIComponent.getRouterFor(this);
			this.router.getRoute("SecondView").attachMatched(this._onRouteMatched, this); //监听到SecondView跳转的信息
		},
		//返回按钮的事件 引入sap/ui/core/routing/History
		onNavBack: function (oEvent) {
			var oHistory, sPreviousHash;
			oHistory = History.getInstance();
			sPreviousHash = oHistory.getPreviousHash();
			if (sPreviousHash !== undefined) {
				history.go(-1);
			}
		},
		//点击按钮跳转notFound页面
		navByDisplayTarget: function () {
			this.router.getTargets().display("notFound");
		},
		//获取跳转传递的参数
		_onRouteMatched: function (oEvent) {
			var para = oEvent.getParameter("arguments");
			var bookMarkPara = para["?query"];
			// alert('receive Para Name:'+para.name);
			// alert('receive Para sex:'+para.sex);
			// alert(bookMarkPara.pageName);
		}
	});
});
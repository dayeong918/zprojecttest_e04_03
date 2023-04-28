sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("zprojectteste0403.controller.HelloPanel", {
            onInit: function () {
                
            },
            onHelloPress: function () {
                // Dialog 호출
                // sap.ui.core.Fragment.load({
                //   cl  name : "zprojectteste0403.view.fragment.HelloDialog", //경로 
                //     type : "XML", //타입
                //     controller : this // 현재 컨트롤러
                // }.then(function(oDialog){
                //     oDialog.open();
                // }));
                // var oDialog = sap.ui.getCore().byId("helloDialog");
                var oDialog = this.byId("helloDialog"); 

                if (oDialog) {
                    oDialog.open();
                    return; // 아래 로직을 무시하고 중지함.
                }

                this.loadFragment({
                    name : "zprojectteste0403.view.fragment.HelloDialog", //경로 
                }).then(function(oDialog){
                    oDialog.open();
                }, this); // controller 넘길 수 있음. fragment의 이벤트 함수는 컨드롤러에 구현함.
            },
            onClose: function(oEvent){
                var oDialog = oEvent.getSource().getParent(); //Dialog 객체
                oDialog.close();
            } 
        });
    });

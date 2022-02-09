sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast) {
        "use strict";

        return Controller.extend("project1.controller.View1", {
            onShowHello : function (){
                MessageToast.show("Hello World");
            }
            // onInit: function () {

            // }
        });
    });

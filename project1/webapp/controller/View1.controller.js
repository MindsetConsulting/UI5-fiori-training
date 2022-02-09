sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast, JSONModel) {
        "use strict";

        return Controller.extend("project1.controller.View1", {
            onInit: function () {
                var oData = {
                    recipient: {
                        name: "World"
                    }
                };
                var oModel = new JSONModel(oData);
                this.getView().setModel(oModel);
            },
            onShowHello: function () {
                MessageToast.show("Hello World");
            }
        });
    });

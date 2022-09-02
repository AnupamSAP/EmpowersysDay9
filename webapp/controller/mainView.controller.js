sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.emp.empproject9.controller.mainView", {
            onInit: function () {

            },
            onTypeChar: function(oEvt){
                // we have to get the control
                var oControl = oEvt.getSource();
                oControl.addStyleClass("mycustomRed");
            }
        });
    });

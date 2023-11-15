sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        var ListController = Controller.extend("ejerfiori.certificaciones1.controller.listaCertificados", {
            onInit: function () {
				this.bDescending = false;
            },
			downloadFile: function () {
                window.open('../documents/Certificacion1.pdf', '_blank');
            },

            //===== Funciones: onSearch, onSelectionChange. Para Filtrar la data en el buscador =================
            onSearch : function (oEvent) {
                var aFilters = [];
                var sQuery = oEvent.getSource().getValue();
                if (sQuery && sQuery.length > 0) {
                    var filter = new Filter("NombCert", FilterOperator.Contains, sQuery);
                    aFilters.push(filter);
                }

                // actualizar lista vinculante
                var oList = this.byId("List1");
                var oBinding = oList.getBinding("items");
                oBinding.filter(aFilters, "Application");
            },

            onSelectionChange: function (oEvent) {
                var oList = oEvent.getSource();
                var oInfoToolbar = this.byId("OverflowToolbar1");
    
                // Con la función 'getSelectedContexts' puedes acceder a las rutas de contexto
                // de todos los elementos de la lista que se han seleccionado, independientemente de cualquier filtro
                var aContexts = oList.getSelectedContexts(true);
    
                // actualizar la interfaz de usuario
                var bSelected = (aContexts && aContexts.length > 0);
                oInfoToolbar.setVisible(bSelected);
            },

            //===== Funciones: onSort,fnApplyFiltersAndOrdering. Para ordenar la data por fecha ================
            onSort : function (oEvent) {
                this.bDescending = !this.bDescending;
			    this.fnApplyFiltersAndOrdering();
            },

            fnApplyFiltersAndOrdering: function (oEvent){
                var aFilters = [],
                    aSorters = [];

                aSorters.push(new Sorter("NombCert", this.bDescending));

                if (this.sSearchQuery) {
                    var oFilter = new Filter("NombCert", FilterOperator.Contains, this.sSearchQuery);
                    aFilters.push(oFilter);
                }

                this.byId("List1").getBinding("items").filter(aFilters).sort(aSorters);
            }
        });

        return ListController;
        
    });

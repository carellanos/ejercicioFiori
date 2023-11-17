# Agregar componentes de SAPUI5 SDK 

<br>

### Paso 1: Abra la vista de su aplicacion y agregue los componentes de sapui5

1. En la izquierda *Explorer panel*, despliegue la carpeta *webapp* despues la carpeta *view*, haga click al archivo **listaCertificados.view.xml** 

   ![Open view](img/n01-open-view.png)
   

2. Agregue los componentes para la lista. Entre los mas relevantes tenemos: **OverflowToolbar**, **SearchField**, **List**, **CustomListItem** y **MenuButton**.

   ![Add components](img/n02-add-components-sapui5.png)

   Puede consultar y explorar toda la informacion de los componentes en esta [documentacion de SAPUI5 Demo Kid](https://sapui5.hana.ondemand.com/).

### Paso 2: Agregue la configuracion para consumir datos del mock server

1.  En la izquierda *Explorer panel*, haga click en **manifest.json**. Ubicar la seccion *sap.ui5*, agregue un modelo con la configuracion que se muestra en la imegen. En este caso el modelo se llama *certifications*, la URI corresponde a la URL copiada y guardada en el punto 2.1, se le concatena */mock/certification* del metodo get.

   ![Add config mock server](img/n03-config-model.png)

6. Seleccione los campos que se van mostrar en su UI, tomelos de su JSON data.  

   ![Json data](img/n04-app-json-fields.png) 

7. Regrese a su vista **listaCertificados.view.xml**, agregue el modelo y los campos seleccionados en el paso anterior. Obseve la imagen se agrego el modelo a la propiedad *items* de la lista y en las propiedades de *texto* los campos que se van a mostrar. 

    ![Add data value](img/n05-add-value-data.png)

8.  En la lista de colecciones ubique y seleccione su mock server. En la parte superior derecha de su workspace despliegue la lista de environments y seleccione
    el que corresponde a su mock server (Debe tener el mismo nombre). Nota: en mi caso use un environment que ya estaba creado.

    ![Copy url](img3/n06-select-environment.png)

9. Despliegue la coleccion *Mock Server Test*, la *Get mock/certifications* y abra el ejemplo *Default*.

   ![Open ejercicio](img3/n07-open-request1.png)

10. En la parte superior del ejemplo cambie el nombre *Default* a 200 OK. Cambie el *Status Code* y seleccione *200 OK*. Agregue el JSON con los paramertros a usar en la aplicacion y finalmente guarde los cambios.

11. Finalmente ejecute una prueba, haga click en el boton **Try**. Si todo esta bien se va abrir una pestaña en la que se puede observar el request - status 200 ok. 

    ![Result test](img3/n08-request-200-ok.png)










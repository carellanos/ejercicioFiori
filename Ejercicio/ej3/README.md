# Pasos para crear un mock server usando postman

<br>

### Paso 1: Abra postman y cree un mock server

1. En la izquierda del workspace seleccione *Mock servers*, luego click en el boton *Create mock server*.

   ![Create mock server](img3/n01-create-mock-server.png)
   

2. Agregue una URL y seleccione el boton *Next*. 

   ![Add url](img3/n02-name-request.png)

3. Asigne el nombre de su mock server y active el check *Save the mock server URL as an new environment variable*, esto permite crear un nuevo Environment. Seleccione el boton *Create Mock Server*

   ![Add name mock server](img3/n03-name-mock-server.png)

4. 




### Paso 2: Abra el archivo ui5.yaml y agregar la configuracion de proxi

1. En la izquierda *Explorer panel*, haga clic en **ui5.yaml**.
   
   ![Open yaml ui5](img/n04-open-ui5-yaml-file.png)

2. Agregue la siguiente configuracion de proxi debajo de la ultima linea *ui5Theme: sap_horizon*.
   
   ![Add proxi configuration 2 ](img/n05-proxy-config-cod.png)
     
   ![Add proxi configuration ](img/n05-proxy-configuration.png)

### Paso 3: Agregue configuracion de fuente de datos y modelo dentro del manifest.json.
   
1.  En la izquierda *Explorer panel*, despliegue la carpeta **webapp** seleccione el archivo **manifest.json**. Ubicar la seccion de *sap.app* y agregue la siguiente configuración de fuente de datos.
   
   ![Data Source](img/n08-data-source.png)

   ![Data Source](img/n06-data-source-configuration.png)

2. Ubicar la seccion *sapui5* y en *models* agregar el modelo con referencia a la fuente de datos.

   ![Data Source](img/n07-add-a-model.png)

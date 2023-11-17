# Pasos para crear un mock server usando postman


<br>

### Paso 1: Abra postman y cree un mock server

1. En la izquierda del workspace seleccione *Mock servers*, luego click en boton *Create mock server*.

   ![Create mock server](img3/n01-create-mock-server.png)
   

2. Agregue una URL y seleccione el boton *Next*. 

   ![Add url](img3/n02-name-request.png)

3. Asigne el nombre de su mock server y active el check *Save the mock server URL as an new environment variable*, esto permite crear un nuevo Environment. Seleccione el boton *Create Mock Server*.

   ![Add name mock server](img3/n03-name-mock-server.png)

4. Copie la URL de su mock server y guardela, sera usada mas adelante. Cierre la pestaña.

   ![Copy url](img3/n04-url-environment.png) 

5. En la izquierda del workspace click en *Collections*, podra visualizar la lista de todas sus colecciones.

    ![Copy url](img3/n05-select-collection.png)

6.  En la lista de colecciones ubique y seleccione su mock server. En la parte superior derecha de su workspace despliegue la lista de environments y seleccione
    el que corresponde a su mock server (Debe tener el mismo nombre). Nota: en mi caso use un environment que ya estaba creado.

    ![Copy url](img3/n06-select-environment.png)

7. Despliegue la coleccion *Mock Server Test*, la *Get mock/certifications* y abra el ejemplo *Default*.

   ![Open ejercicio](img3/n07-open-request1.png)

8. En la parte superior del ejemplo cambie el nombre *Default* a 200 OK. Cambie el *Status Code* y seleccione *200 OK*. Agregue el JSON con los paramertros a usar en la aplicacion y finalmente guarde los cambios.

9. Ejecute una prueba, haga click en el boton **Try**. Si todo esta bien se va abrir una pestaña en la que se puede observar el request status 200 ok.

    ![Result test](img3/n08-request-200-ok.png)










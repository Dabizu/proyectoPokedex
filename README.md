# proyectoPokedex
Representación web de un pokedex

Instrucciones 
el proyecto que bajara desde github en un archivo zip hay que descargarlo y descomprimir
abre el terminal cmd y redireccionarse a la carpeta de documentos de esta forma: cd c:\users\"su suaurio de windows"\documents 
y entramos a la carpeta del proyecto así: cd proyectopokedex

nota:
(si está en linux hay que ser extremadamente exacto al escribir el nombre, pero en windows no, ya que las direcciones las genera de forma canónica, no importando mucho el cómo se escribe al no usar mayúsculas)

ya que estamos en la carpeta ejecutamos el proyecto nodejs con "node app" o "nodemon app" o "npm start" solo es el proyecto de nodejs que se ejecutara

ahora hay que ejecutar el proyecto react abrimos otra terminal y hacemos el mismo procedimiento de la redirección direccionándonos a la carpeta "pokedex-cliente" dentro de la carpeta del proyecto y ejecutamos el siguiente comando: "npm start"
se ejecutará el proyecto y abrirá la página en su navegador

nota:
(los proyectos están hechos para ejecutarse en los puertos 3001 y 3000. Nodejs usa el 3001 y react 3000.)

al ver la página tenemos el primer cuadro, ahí se mostrarán los pokemones solo su imagen y está su botón de descargar del pdf si da click saldrá un mensaje que dice que no puede descargar pdf.
 
Abajo de esto están los input de límite y página ahí, si no mueve y da click en "mostrar lista" saldrán todos los pokemones si escribe en límite y da click en "mostrar lista" otra vez saldrán todos los pokemones que dijo como límite y si escribe el apartado de página saldrán los pokemones de esa página.
También están los botones de "anterior" y "siguiente" que hacen la misma acción de la paginación solo aumenta uno y ejecuta un método que le da la lista de los pokemones

por último está el último cuadro que muestra la lista de los pokemones que en este caso son botones con los nombres de los pokemones

FUNCIONAMIENTO:
1-Dar click en "mostrar lista" y se desplegará la lista de pokemon de forma ordenada alfabéticamente.
2-limita la vista o agrega los que quieras ver en esa lista con límite, escribe el número de pokemones que quieres y saldrá.
3-La paginación muestra la siguiente tanda o lote de pokemones que hay en la lista y te mostrara si dice que solo quieres ver en límite 10 la paginación solo te dejara ver de 10 en 10 
(al igual los botones de anterior y siguiente funcionan para lo mismo).
4-Dar click en uno de los nombres de la lista y saldrá un pokemon en la imagen.
5-Dar click en generar pdf y descargarás un pdf con la información básica
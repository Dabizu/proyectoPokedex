# proyectoPokedex
Representación web de un pokedex

Instrucciones 
el proyecto que bajara desde github en un archivo zip hay que descargarlo y descomprimir
abre el terminal cmd y redireccionarse a la carpeta de documentos de esta forma: cd c:\users\"su suaurio de windows"\documents 
y entramos a la carpeta del proyecto asi: cd proyectopokedex

nota:
(si esta en linux hay que ser estremadamente exacto al escribir el nombre pero en windows no ya que las direcciones las genera de forma canonica no importando mucho el como se escribe al no usar mayusculas)

ya que estamos en la carpeta ejecutamos el proyecto nodejs con "node app" o "nodemon app" o "npm start" solo es el proyecto de nodejs que se ejecutara

ahora hay que ejecutar el proyecto react abrimos otra terminal y hacemos el mismo procedimiento de la redireccion direccionandonos a la carpeta "pokedex-cliente" dentro de la carpeta del proyecto y ejecutamos el siguiente comando: "npm start"
se ejecutara el proyecto y abrira la pagina en su navegador

nota:
(los proyectos estan hechos para ejecutarse en los puertos 3001 y 3000. Nodejs usa el 3001 y react 3000.)

al ver la pagina tenemos el primer cuadro ahi se mostraran los pokemones solo su imagen y esta su boton de descargar del pdf si da click saldra un mensaje que dice que no puede descargar pdf.
 
Abajo de esto estan los input de limite y pagina ahi si no mueve y da click en "mostrar lista" saldran todos los pokemones si escribe en limite y da click en "mostrar lista" otra vez saldran todos los pokemones que dijo como limite y si escribe el apartado de pagina saldran los pokemones de esa pagina.
tambien estan los botones de "anterios" y "siguiente" que hacen la misma accion de la paginacion solo aumenta uno y ejecuta un metodo que le da la lista de los pokemones

por ultimo esta el ultimo cuadro que muestra la lista de los pokemones que en este caso son botones con los nombres de los pokemones

FUNCIONAMIENTO:
1-Dar click en "mostrar lista" y se desplegara la lista de pokemon de forma ordenada alfabeticamente.
2-limita la vista o agrega los que quieras ver en esa lista con limite escribe el numero de pokemones que quieres y saldra.
3-La paginacion muestra la siguiente tanda o lote de pokemones que hay en la lista y te mostrara si dice que solo quieres ver en limite 10 la paginacion solo te dejara ver de 10 en 10 
(al igual los botones de anterior y siguiente funcionan para lo mismo).
4-Dar click en uno de los nombres de la lista y saldra un pokemon en la imagen.
5-Dar click en generar pdf y descargaras un pdf con la informacion basica.
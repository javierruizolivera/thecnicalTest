# thecnicalTest

## Author
Javier Ruiz Olivera

## Repositorio
Rama (develop) 

https://github.com/javierruizolivera/thecnicalTest/tree/develop 

## Proyecto
* Proyecto generado con Angular CLI version 12.0.3.

## Instalación y ejecución de la aplicación
* Clonar respositorio
* npm i
* npm start

## Componentes


## Vista Welcome

* Se ha creado una vista inicial welome para poder poner en práctica la carga de módulos cuando se necesitan (Lazy Loading), en este caso la vista home se cargará cuando se acceda a dicha vista y no desde el inicio de la aplicación.

## Vista Home 
* Accesible desde el botón de la vista Welcome, o desde la url localhost:4200/home.
* Es el contenedor de los tabs.

### tabs
* El contenido de cada tab también se carga de forma dinámica cuando se seleccionan, de esta manera evitamos la sobrecarga incial de componentes.

### Regimes
* Es el componente que se carga cuando pulsamos el tab 1.
* Contiene una lista con regimeCard.
* Carga los datos de los régimenes desde un mock de datos  (src/assets/mocks/regimes.json).
* Controla la selección de régimen.
* Utiliza un servicio store para mantener almacenado en el localstorage el régimen seleccinado en caso de que cambiemos de pestaña.
  
### Regime-Card
* contiene la información de cada régimen y el botón para poder seleccionarlo.

### Drinks
* Es el componente que se carga cuando pulsamos el tab2.
* Se ha creado un servicio que hace la llamada al api rest para obtener 10 resultados.
* Se ha creado un spinner para mostrar mientras se cargan los datos de la api rest, para informar al usuario que se está realizando una carga asíncrona.
* se ha ordenado la lista por la graduación alcoholica (abv).
* Se han creado tres categorías (low-amarillo [0-5], medium-naranja[5-10], high-rojo[>10]) para el valor de abv.
* Se ha añadido un botón (ver más/menos que aparece cuando la descripción se desborde para poder verla completa).

## Otras consideraciones
* Se han utilizado interfaces para los items de los tabs y para la información de cada régimen.
* Se han utilizado constantes que contienen el path a los mocks y su extensión, así como para nombrar a la variable que se guardará en el locastore para evitar error a la hora de llamarlos.
* Se ha utilizado utilizado un archivo que contienen los mixin para generar los puntos de ruptura para el diseño responsive (src/assets/styles/at-break).
* Cualquier comentario de mejora de esta aplicación serán bienvenidos.
  

  





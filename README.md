# WeatherCheck

Esta aplicación creada con React permite consultar el tiempo en una ubicación introducida por el usuario.
La aplicación web muestra un buscador en el que el usuario puede introducir el nombre de la ciudad que quiere consultar.
Al pulsar sobre el botón del buscador, la aplicación recibe la información del tiempo desde [OpenWeather](https://openweathermap.org/).
Mientras el contenido está cargando, el botón muestra un indicador de progreso.

Si la aplicación no puede acceder a [OpenWeather](https://openweathermap.org/) o si la ciudad introducida no se encuentra, se muestran mensajes de error al usuario.
En caso contrario, la aplicación muestra al usuario la temperatura en grados centrígrados, el porcentaje de humedad y la velocidad del viento en km/h en la localidad introducida.

En la parte inferior de la pantalla se muestran al usuario las cinco últimas búsquedas realizadas, en caso de existir.
Esta información se almacena en formato JSON en local storage.

Al hacer click sobre el logo de la aplicación, ésta vuelve a mostrar la pantalla principal con el mensaje de bienvenida.

Se ha adaptado la aplicación para que, cuando se ve en escritorio, la información aparezca distribuida en dos columnas.

## Comandos disponibles

En la carpeta raíz del proyecto, ejecutar:

### `npm start`

Ejecuta la aplicación en modo desarrollo.\
Abre [http://localhost:3000](http://localhost:3000) para poder visualizarla.

La aplicación vuelve a cargar tras realizar cambios.

### `npm run build`

Construye la aplicación para producción en la carpeta `build`.

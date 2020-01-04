# api-hotels
Esta API fue creada con el fin de implementarla en una aplicacion movil

# Inicio
# clon repo <br />
https://github.com/iamalanadriana/api-hotels/tree/final

# install the dependencies with npm <br />
npm install

# start dev server (npm run dev) <br />
npm start

Ir a [http://localhost:8000](http://localhost:8000) en su navegador.


# Contenido

* [Dependencias](#dependencias)
* [Desarrollo](#desarollo)
* [Finalizando Servicios](#finalizando-servicios)
* [Hotels](#hotels)
* [Despliegue](#despliegue)

## Dependencias

Debera ejecutar estan dependencias:
 * `node` and `npm`
 * Verciones del proyecto - Node (`v10.15.3`+) and NPM (`6.4.1`+)


 ## Desarrollo

 Despues de haber instalado las dependencias, podemos empesar a desarrollar con:

 * `npm start`
 * `npm run dev`

Nota: con `npm run dev` se iniciará un servidor local mediante la herramienta nodemon la cual compilará (en memoria) y se recargará por usted. La aplicación se puede consultar en http://localhost:8000.


## Finalizando Servicios

Esta API esta compuesta por los siguientes endpoints:

+ getHotels

GET: /api/hotels

+ getHotelId

GET: /api/hotels/{id}}


## Hotels

El modelo para nuestros objetos de hotel se define de la siguiente manera:

```json
{
    "data": {
        "_id": "5e08e31b1c813200173320af",
        "title": "Palace de Madrid",
        "name": "Hotel Palace de Madrid",
        "city": "España",
        "image": "https://www.spain.info/export/sites/spaininfo/comun/galeria_imagenes/hoteles/p2_palace_hotel.jpg_369272544.jpg",
        "description": "¿Vas a pasar unos días en España y buscas alojamiento? Sean cuales sean tus preferencias, encontrarás un espacio que se adapte a tus necesidades. Y es que España es uno de los países del mundo que más turistas recibe cada año, por lo que cuenta con una amplia oferta de alojamientos de todas las clases: lujosos hoteles, castillos y palacios, campings, casas rurales típicas de caza zona… Asegúrate una estancia ideal.",
        "image-description": [
            {
                "title": "Alcoba",
                "image": "https://www.munters.com/Temp/hotel-room1500434525.jpg"
            },
            {
                "title": "Detalle",
                "image": "https://www.mujerde10.com/wp-content/uploads/2016/09/page12-1024x465.jpg"
            }
        ],
        "price": 250000,
        "stars": "5"
    },
    "message": "hotels retrieved"
}
```

## Despliegue

Aqui encontraremos una demostracion del servicion en Heroku:

> [https://morning-hollows-96494.herokuapp.com](https://morning-hollows-96494.herokuapp.com/hotels)
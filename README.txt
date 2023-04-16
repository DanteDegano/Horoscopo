
Instrucciones 

Trabajo dentro de Horoscopo-tom / src, cada vez que guardo los datos se generan los cambios en la carpeta  Horoscopo-tom / dist / Horoscopo.js, el otro archivo solamente es el minificado. 

Horoscopo-tom / src / datasources / xml-file-datasource.js = Es el encargado de agarrar un Xml local y traerme los datos del mismo --------- (La direccion del xml  se encuentra en Horoscopo.js)

Horoscopo-tom / src / datasources / data-factory-datasource.js = Es el encargado de agarrar un xml de datafactory online y traerme los datos del mismo --------- (No se encuentra implementado porque hay que ver como funciona la Api de DF)

Horoscopo-tom / package.json 		= Aca agrego librerias externas y guardo la config de parcel

Horoscopo-tom / package-lock.json 	=  fija las versiones de las dependencias q te bajas cn npm (No modificar)

Horoscopo-tom / node_modules 		= es una carpeta que te instala npm cuando descargas dependencias (No modificar)

La variable que modifica el signo se encuentra en el index.html con singo:"   ";


...............................................................................................................................................................................................................................................................
Ejecucion en tiempo real


npm run build:dev -> buildea la app para desarrollo y se queda escuchando los cambios.
npm run build -> buildea la app para produccion y la minifica.

...............................................................................................................................................................................................................................................................

Implementacion

1) cargar div -

<div id="Ejemplo"></div>

2) cargar el script -     

<script type="module">

        import Horoscopo from './resources/js/horoscopo.js';

        async function initHoroscopo() {
            const horoscopo = await Horoscopo.getInstance(
                '#Ejemplo',
                {
                    datasource: 'xmlfile',
                    datasourcePath: './horoscopo-zodiacal.xml',
                    context: {
                        fechaHoy: (new Date()).toDateString(),
                        imgPath: 'https://image.shutterstock.com/image-vector/aries-sign-zodiac-background-beautiful-600w-1443585467.jpg'
                    },
                    template: `
                        <h2>Hola</h2>
                    `,
                }
            );
        }

        initHoroscopo();

</script>

...............................................................................................................................................................................................................................................................


Entrega

Solamente necesito entregar el Horoscopo.js y utilizarlo en cualquier Html que necesite

...............................................................................................................................................................................................................................................................

export default class Signo {

    static CATEGORIA_AMOR = 'Amor';
    static CATEGORIA_RIQUEZA = 'Riqueza';
    static CATEGORIA_BIENESTAR = 'Bienestar';

    id;
    inicioMesSigno;
    finMesSigno;
    nombre;
    amor;
    bienestar;
    riqueza;
    hoy;

    constructor(
        id,
        nombre,
        hoy,
        inicioMesSigno,
        finMesSigno,
        amor,
        bienestar,
        riqueza
    ) {
        if ( id instanceof Object) {
            this.id = id.id;
            this.nombre = id.nombre;
            this.hoy = id.hoy;
            this.inicioMesSigno = id.inicioMesSigno;
            this.finMesSigno = id.finMesSigno;
            this.amor = id.amor;
            this.bienestar = id.bienestar;
            this.riqueza = id.riqueza;
        } else {
            this.id = id;
            this.nombre = nombre;
            this.hoy = hoy;
            this.inicioMesSigno = inicioMesSigno;
            this.finMesSigno = finMesSigno;
            this.amor = amor;
            this.bienestar = bienestar;
            this.riqueza = riqueza;
        }
    }
}
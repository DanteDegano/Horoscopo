import DataFactoryDatasource from "../datasources/data-factory-datasource";
import XMLFileDatasource from "../datasources/xml-file-datasource";
import Signo from "../models/signo.model";

export default class SignoRepository {

    datasource;

    constructor(datasource) {
        this.datasource = datasource;
    }

    // Aca los datos que deseas traer, Si se desea traer datos de de algo que no sea un Xml local de DF u online de DF deberiamos cargar una datasource espeficio 
    async getSignos() {
        if (this.datasource.type === XMLFileDatasource.TYPE) {
            const data = await this.datasource.fetchData();
            const signos = Array.from(data.children[0].children);
            signos.shift();
            return signos;
        } else if (this.datasource.type === DataFactoryDatasource.TYPE) {
            // TODO: haces llamada a datos de datafactory
        }
    }

    async getSignoById(id) {
        const signoFetched = ( await this.getSignos() ).find(signo => signo.id === id.toString());
        const signoData = Array.from(signoFetched.children);
        const signo = new Signo();
        for (let i = 0; i < signoData.length; i++) {
            const attribute = signoData[i].attributes.nombre.value.toLowerCase();
            const value = signoData[i].firstElementChild.innerHTML
            signo[attribute] = value;
        }
        signo.inicioMesSigno = signoFetched.attributes.fechaDesde.value;
        signo.finMesSigno = signoFetched.attributes.fechaHasta.value;
        signo.nombre = signoFetched.attributes.nombre.value;
        signo.id = signoFetched.attributes.id.value;
        return signo;
    }
}
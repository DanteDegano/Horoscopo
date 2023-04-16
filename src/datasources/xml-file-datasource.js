export default class XMLFileDatasource {
    
    static TYPE = 'xmlfile';
    static FECHA_VALIDEZ_TAG = 'fechaValidez';
    static instance;
    data;
    path;

    static async getInstance(path) {
        if (!XMLFileDatasource.instance) {        
            XMLFileDatasource.instance = new XMLFileDatasource(
                path, 
                await XMLFileDatasource.fetchData(path)
            );   
        }
        return XMLFileDatasource.instance;
    }

    constructor(path, data) {
        this.path = path;
        this.data = data;
        this.type = XMLFileDatasource.TYPE;
    }

    static async fetchData(path) {
        const resp = await fetch(path);
        const text = await resp.text();
        return new window.DOMParser().parseFromString(text, "text/xml");
    }

    async fetchData() {
        const resp = await fetch(this.path);
        const text = await resp.text();
        this.data = new window.DOMParser().parseFromString(text, "text/xml");
        return this.data;
    }

    getFechaValidezDesde() {
        const horoscopo = Array.from(this.data.children[0].children);
        return horoscopo.find( element => element.tagName === XMLFileDatasource.FECHA_VALIDEZ_TAG)
    }
}
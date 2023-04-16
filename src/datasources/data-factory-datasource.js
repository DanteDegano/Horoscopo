export default class DataFactoryDatasource {
    
    static TYPE = 'datafactory';
    static instance;
    data;
    path;

    static async getInstance(path) {
        if (!DataFactoryDatasource.instance) {        
            DataFactoryDatasource.instance = new DataFactoryDatasource(
                path, 
                DataFactoryDatasource.fetchData()
            );   
        }
        return DataFactoryDatasource.instance;
    }

    constructor(path, data) {
        this.path = path;
        this.data = data;
    }

    static async fetchData() {
        const resp = await fetch(path);
        const text = await resp.text();
        return new window.DOMParser().parseFromString(text, "text/xml");
    }

    async fetchData() {
        const resp = await fetch(path);
        const text = await resp.text();
        this.data = new window.DOMParser().parseFromString(text, "text/xml");
    }
}
import DataFactoryDatasource from "./datasources/data-factory-datasource";
import XMLFileDatasource from "./datasources/xml-file-datasource";
import Handlebars from "../node_modules/handlebars/dist/handlebars";
import HTMLRendererService from "./service/HtmlRenderer.service";
import SignoRepository from "./repos/signo.repo";

export default class Horoscopo {

    static SIGNOS = [
        {id: 1, name: 'aries'},
        {id: 2, name: 'tauro'},
        {id: 3, name: 'geminis'},
        {id: 4, name: 'cancer'},
        {id: 5, name: 'leo'},
        {id: 6, name: 'virgo'},
        {id: 7, name: 'libra'},
        {id: 8, name: 'escorpio'},
        {id: 9, name: 'sagitario'},
        {id: 10, name: 'capricornio'},
        {id: 11, name: 'acuario'},
        {id: 12, name: 'piscis'},
    ];

    htmlContainer;
    datasource;
    htmlRendererService;
    signoRepository;
    signoId;

    static async getInstance(htmlContainerSelector, config) {
        const horoscopo = new Horoscopo(htmlContainerSelector, config);

        if (config.datasource && config.datasourcePath) {
            horoscopo.datasource = await Horoscopo.setDatasource[config.datasource](config.datasourcePath);
        }
        horoscopo.htmlContainer = document.querySelector(htmlContainerSelector)
        horoscopo.htmlRendererService = new HTMLRendererService(Handlebars, horoscopo.htmlContainer, config.template, config.context);
        horoscopo.signoRepository = new SignoRepository(horoscopo.datasource);   
        
        
        if (typeof config.signo === 'number') {
            horoscopo.signoId = config.signo;
        } else {
            horoscopo.signoId = (Horoscopo.SIGNOS.find( signo => signo.name === config.signo)).id;
        }

        horoscopo.render()
    }

    static setDatasource = {
        [XMLFileDatasource.TYPE]: async (path) => {
            return XMLFileDatasource.getInstance(path)
        },
        [DataFactoryDatasource.TYPE]: async (path) => {
            return DataFactoryDatasource.getInstance(path)
        }
    }

    async render() {
        this.htmlRendererService.renderSigno(await this.signoRepository.getSignoById(this.signoId))
    }

}
              
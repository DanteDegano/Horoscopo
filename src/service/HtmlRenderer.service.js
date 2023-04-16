export default class HTMLRendererService {

    hb;
    htmlContainer;
    templateString;
    context;
    template;

    constructor(hb, htmlContainer, templateString, context) {
        this.hb = hb;
        this.htmlContainer = htmlContainer;
        this.templateString = templateString;
        this.context = context;
    }

    renderSigno(signo) {
        this.template = this.hb.compile(this.templateString);
        this.context.signo = {...signo};
        this.htmlContainer.innerHTML = this.template(this.context);
    }

}
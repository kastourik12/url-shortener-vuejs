import {ref} from "vue";

export class Link{
    constructor({name, href, icon,visible}){
        this.name = name;
        this.href = href;
        this.icon = icon;
        this.visible = visible;
    }
}

import { options } from "./options.model";

export class quiz {
    constructor(public question:string, public options:Array<options>){}
}